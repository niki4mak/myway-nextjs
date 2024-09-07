import {Dispatch, memo, SetStateAction, useEffect, useRef, useState} from "react";
import Modal from "@/components/shared/modal";
import ButtonSolid from "@/components/shared/button/button-solid";
import {ConfirmationCodeInput} from "@/components/shared/confirmation-code-input";
import {authByCode, sendCode} from "../../../data/queries/yclients/auth";
import {COMPANY_ID} from "../../../data/model/yclients/constants";
import {createBookRecord} from "../../../data/queries/yclients/service";
import {IYCreateBookRecordBody} from "../../../data/model/yclients/model";

interface IConfirmCodeModalProps {
  requestBody: IYCreateBookRecordBody;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setShowSuccessModal: Dispatch<SetStateAction<boolean>>;
}

const ConfirmCodeModal = memo<IConfirmCodeModalProps>(({
                                                         requestBody,
                                                         showModal,
                                                         setShowModal,
                                                         setShowSuccessModal,
                                                       }) => {
  const [timer, setTimer] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const resendCodeHandler = () => {
    setTimer(60); // Start 60 seconds timer
    setIsButtonDisabled(true);
    sendCode({
      fullname: requestBody.fullname,
      phone: requestBody.phone.slice(1),
    }).then((res) => {
      if (!res?.success) {
        setTimer(0);
        setErrorMessage(res?.meta?.message);
        throw Error(res?.meta?.message)
      }
    }).catch((error: Error) => {
      console.log(error.message)
    });
  }

  // We need to code only when modal renders
  useEffect(() => {
    if (!showModal || timer > 0) return;
    resendCodeHandler();
  }, [showModal]);

  useEffect(() => {
    if (timer > 0) {
      intervalRef.current = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsButtonDisabled(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [timer]);

  const authByCodeHandler = (code: string) => {
    authByCode({
      phone: requestBody.phone.slice(1),
      code,
      company_id: COMPANY_ID,
    }).then((res) => {
      if (!res?.success) {
        setErrorMessage(res?.meta?.message);
        throw Error(res?.meta?.message)
      } else {
        localStorage.setItem('userToken', res.data.user_token);
        return res;
      }
    }).then((res) => {
      return createBookRecord(requestBody)
    }).then((res) => {
      if (!res?.success) {
        throw Error(res?.meta?.message)
      } else {
        setShowModal(false);
        setTimeout(() => setShowSuccessModal(true), 100);
      }
    }).catch((error: Error) => {
      console.log(error.message)
    })
  }

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div className={"flex flex-col w-full items-center gap-4"}>
        <div className={"text-c-primary text-3xl text-center"}>
          Введите код из СМС:
        </div>
        <div>
          <ConfirmationCodeInput onComplete={authByCodeHandler}/>
        </div>
        {
          errorMessage
            ? (
              <div className={"text-red-500"}>
                {errorMessage}
              </div>
            )
            : null
        }
        <ButtonSolid
          text={isButtonDisabled ? `Переотправить код через ${timer}c` : "Переотправить код"}
          clickHandler={resendCodeHandler}
          disabled={isButtonDisabled}
          className={"w-1/2"}
        />
      </div>
    </Modal>
  );
})
ConfirmCodeModal.displayName = "SuccessModal"

export {ConfirmCodeModal};