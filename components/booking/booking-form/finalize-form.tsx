import React, {ChangeEvent, Dispatch, memo, SetStateAction, useMemo, useState} from "react";
import {Input} from "@/components/shared/input";
import {IYAppointment, IYBasicData, IYCreateBookRecordBody} from "../../../data/model/yclients/model";
import ButtonSolid from "@/components/shared/button/button-solid";
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";
import {checkBookRecord} from "../../../data/queries/yclients/service";
import {SuccessModal} from "@/components/booking/booking-form/success-modal";
import {ConfirmCodeModal} from "@/components/booking/booking-form/confirm-code-modal";

interface IFinalizeFormProps {
  data: IYBasicData;
  selectedMaster: number | null;
  selectedServices: number[];
  dateTime: Date | null;
  setFinalize: Dispatch<SetStateAction<boolean>>;
}

const isValidMobileNumber = (number: string) => {
  // Regular expression to match the format +375xxxxxxxxx
  const regex = /^\+375\d{9}$/;
  return regex.test(number);
};

const FinalizeForm = memo<IFinalizeFormProps>(({
                                                 data,
                                                 selectedMaster,
                                                 selectedServices,
                                                 dateTime,
                                                 setFinalize
                                               }) => {
  const {isMobile} = useMediaQuery();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const appointments: IYAppointment[] | null = useMemo(() => {
    if (!selectedMaster || !selectedServices.length || !dateTime) return null;

    return selectedServices.map((it, index) => ({
      id: index,
      services: [it],
      staff_id: selectedMaster,
      datetime: dateTime,
    }))
  }, [selectedServices, selectedMaster, dateTime])

  const requestBody: IYCreateBookRecordBody | null = useMemo(() => {
    if (!appointments || !phone || !name) return null;

    return ({
      phone: phone,
      fullname: name,
      email: email,
      comment: comment,
      appointments: appointments,
    })
  }, [appointments, phone, name, email, comment])

  const checkBookRecordHandler = () => {
      if (!phone) {
          setErrorMessage("Введите номер телефона!");
          return;
      }
      if (!name) {
          setErrorMessage("Введите ваше имя!");
          return;
      }
    if (!requestBody) return;

    checkBookRecord({
      appointments: requestBody.appointments,
    }).then((res) => {
        if (!res?.success) {
          throw Error(res?.meta?.message)
        } else {
          return res;
        }
      }
    ).then((res) => {
        if (!isValidMobileNumber(phone)) {
          throw Error("Номер телефона введен неправильно. Формат: +375xxxxxxxxx")
        } else {
          setShowConfirmationModal(true);
        }
      }
    ).catch((error: Error) => {
      setErrorMessage(error.message);
    })
  }

  return (
    <div className={"h-full flex flex-col gap-4 px-4 pb-4"}>
      <SuccessModal
        showModal={showSuccessModal}
        setShowModal={setShowSuccessModal}
      />
      {requestBody ? <ConfirmCodeModal
        showModal={showConfirmationModal}
        setShowModal={setShowConfirmationModal}
        requestBody={requestBody}
        setShowSuccessModal={setShowSuccessModal}
      /> : null}
      <ButtonSolid text={"Назад"} clickHandler={() => setFinalize(false)} className={"w-1/2"}/>
      <div className={isMobile ? "flex flex-col gap-4 overflow-y-auto" : "grid grid-cols-2 gap-16"}>
        <div className={"flex flex-col gap-4"}>
          <BookingDetails
            data={data}
            selectedMaster={selectedMaster}
            selectedServices={selectedServices}
            dateTime={dateTime}
          />
          <div className={"flex flex-col gap-2"}>
            <label htmlFor="finalize_comment">Пожелания</label>
            <textarea
              id={"finalize_comment"}
              value={comment}
              className={"bg-transparent border border-c-text-light rounded-[10px] text-c-text-light h-[150px] px-4"}
              onInput={(event: ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}
              placeholder={"Введите комментарий..."}
            />
          </div>
        </div>
        <PersonalData
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      </div>
      {errorMessage !== "Created"
        ? (
          <div className={"w-1/2 self-end text-red-500 text-center"}>
            {errorMessage}
          </div>
        )
        : null}
      <ButtonSolid text={"Записаться"} className={"w-1/2 self-end"} clickHandler={checkBookRecordHandler}/>
    </div>
  );
})
FinalizeForm.displayName = "FinalizeForm";

interface PersonalDataProps {
  name: string;
  phone: string;
  email: string;
  setName: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
}

const PersonalData = memo<PersonalDataProps>(({
                                                name,
                                                setName,
                                                phone,
                                                setPhone,
                                                email,
                                                setEmail
                                              }) => {
  const changeHandle = (setter: Dispatch<SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>) =>
    setter(event.target.value);

  return (
    <div>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex flex-col gap-2"}>
          <label htmlFor="finalize_name">
            Имя <span className={"text-xxl text-red-500"}>*</span>
          </label>
          <Input
            id={"finalize_name"}
            value={name}
            onInput={changeHandle(setName)}
            placeholder={"Введите имя"}
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <label htmlFor="finalize_name">
            Телефон <span className={"text-xxl text-red-500"}>*</span>
          </label>
          <Input
            id={"finalize_phone"}
            type={"tel"}
            pattern={"+375[0-9]{9}"}
            value={phone}
            onInput={changeHandle(setPhone)}
            placeholder={"Введите номер телефона"}
          />
        </div>
        <div className={"flex flex-col gap-2"}>
          <label htmlFor="finalize_name">Почта</label>
          <Input
            id={"finalize_email"}
            value={email}
            onInput={changeHandle(setEmail)}
            placeholder={"Введите email"}
          />
        </div>
      </div>
    </div>
  );
})
PersonalData.displayName = "PersonalData";

interface IBookingDetailsProps {
  data: IYBasicData;
  selectedMaster: number | null;
  selectedServices: number[];
  dateTime: Date | null;
}

const BookingDetails = memo<IBookingDetailsProps>(({
                                                     data,
                                                     selectedMaster,
                                                     selectedServices,
                                                     dateTime,
                                                   }) => {
  const master = data.masters.find(it => it.id === selectedMaster);
  const services = selectedServices.map(s1 =>
    data.services.services.find(it => it.id === s1)
  );

  const overallPrice = services.reduce((sum, it) => sum + (it?.price_max ?? 0), 0);

  return (
    <div className={"flex flex-col"}>
      <div className={"text-2xl"}>Детали записи</div>
      <div className={"flex justify-between items-center"}>
        <div className={"flex flex-col"}>
          <div className={""}>{dateTime?.toLocaleDateString()}</div>
          <div className={""}>{dateTime?.toTimeString().slice(0, 5)}</div>
          <div className={""}>{`Мастер: ${master?.name}`}</div>
        </div>
        <Image
          className={""}
          src={master?.avatar || "/person-card.png"}
          width={100}
          height={100}
          alt={"Person"}
        />
      </div>
      <div className={"flex flex-col gap-1"}>
        <div className={""}>Услуги</div>
        <div className={""}>
          {services.map((it) => <div key={it?.id} className={"flex justify-between"}>
            <div className={""}>{it?.title}</div>
            <div className={""}>{it?.price_max} BYN</div>
          </div>)}
        </div>
        <div className={"flex justify-between border-t-2 border-c-text-light"}>
          <div className={""}>Итого:</div>
          <div className={""}>{overallPrice} BYN</div>
        </div>
      </div>
    </div>
  );
})
BookingDetails.displayName = "BookingDetails"

export {FinalizeForm};