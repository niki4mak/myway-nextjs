"use client"

import {memo, useState} from "react";
import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";
import Modal from "@/components/shared/modal";
import {Master} from "@prisma/client";
import {MastersModalContent} from "@/components/masters/masters-modal-content";

interface IImagesSlideProps {
  master: Master;
}

interface IImagesSliderProps {
  masters: Master[];
}

const Slide = memo<IImagesSlideProps>(({
                                         master
                                       }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={"relative box-border bg-black opacity-60 hover:opacity-100 hover:border hover:border-c-primary"}
        onClick={() => setShowModal(true)}
      >
        <Image
          width={392}
          height={1118}
          src={master.photoUrl}
          alt={`Мастер ${master.name}`}
        />
        <div className={"absolute top-0 vertical-inner-shadow w-full h-full"}/>
      </button>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <MastersModalContent master={master}/>
      </Modal>
    </>
  )
})
Slide.displayName = "Slide";

const ImagesSlider = memo<IImagesSliderProps>(({
                                                 masters
                                               }) => {
  const {isMobile} = useMediaQuery();

  const mobileClassName = "grid grid-cols-3 grid-rows-3";
  const desktopClassName = "grid grid-cols-9";

  return (
    <div className={isMobile ? mobileClassName : desktopClassName}>
      {masters.map(it => <Slide master={it} key={`Slide-${it.id}`}/>)}
    </div>
  );
});
ImagesSlider.displayName = "ImagesSlider";

export default ImagesSlider;