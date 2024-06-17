import {Dispatch, memo, SetStateAction} from "react";
import Modal from "@/components/shared/modal";
import {useRouter} from "next/navigation";
import ButtonSolid from "@/components/shared/button/button-solid";

interface ISuccessModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const SuccessModal = memo<ISuccessModalProps>(({
                                                 showModal,
                                                 setShowModal,
                                               }) => {
  const router = useRouter();

  return (
    <Modal showModal={showModal} setShowModal={setShowModal} onCloseHandler={() => router.push("/home")}>
      <div className={"flex flex-col w-full items-center gap-4"}>
        <div className={"text-c-primary text-3xl text-center"}>
          Вы успешно записались!
        </div>
        <ButtonSolid text={"На главную"} clickHandler={() => router.push("/home")}/>
      </div>
    </Modal>
  );
})
SuccessModal.displayName = "SuccessModal"

export {SuccessModal};