"use client";

import {Dispatch, SetStateAction} from "react";
import {cn} from "@/lib/utils";
import {Drawer} from "vaul";
import * as Dialog from "@radix-ui/react-dialog";
import useMediaQuery from "@/lib/hooks/use-media-query";

export default function Modal({
                                children,
                                className,
                                showModal,
                                setShowModal,
                              }: {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const {isMobile} = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={showModal} onOpenChange={setShowModal}>
        <Drawer.Overlay className="fixed inset-0 z-10 bg-c-bg-dark bg-opacity-10 backdrop-blur"/>
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              "bg-c-bg-1 full-outer-shadow fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] max-h-[calc(90dvh)]",
              className,
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300"/>
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay/>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
      <Dialog.Portal>
        <Dialog.Overlay
          // for detecting when there's an active opened modal
          id="modal-backdrop"
          className="bg-c-bg-dark animate-fade-in fixed inset-0 z-40 bg-opacity-50 backdrop-blur-md"
        />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className={cn(
            "bg-c-bg-1 full-outer-shadow animate-scale-in fixed inset-0 z-40 m-auto max-h-fit w-full max-w-[calc(80dvw)] overflow-hidden p-0 shadow-xl md:rounded-2xl",
            className,
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
