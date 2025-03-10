import React, {Dispatch, memo, SetStateAction} from 'react';
import {PersonCard} from "@/components/shared/person-card/person-card";
import ButtonSolid from "@/components/shared/button/button-solid";
import {IYBasicData} from "../../../data/model/yclients/model";

interface CurrentSelectedDesktopProps {
  data: IYBasicData;
  selectedMaster: number | null;
  selectedServices: number[];
  dateTime: Date | null;
  handleNextStep: VoidFunction;
  setFinalize: Dispatch<SetStateAction<boolean>>;
}

const CurrentSelectedDesktop = memo<CurrentSelectedDesktopProps>(({
                                                                    data,
                                                                    selectedMaster,
                                                                    selectedServices,
                                                                    dateTime,
                                                                    handleNextStep,
                                                                    setFinalize
                                                                  }) => {
  const finalStepAvailable = !!(selectedMaster && selectedServices.length && dateTime);

  return (
    <div className={"flex flex-col gap-4"}>
      {selectedMaster ? <PersonCard master={data.masters.find(m => m.id === selectedMaster)}/> : null}
      {selectedServices.length
        ? <div className={""}>
          <div className={"font-semibold mb-2"}>Выбранные услуги:</div>
          <div className={"flex flex-col gap-2 text-c-primary border-c-bg-dark bg-c-bg-1 rounded-2xl px-5 py-2"}>
            {selectedServices.map(s1 => {
                const s = data.services.services.find(it => it.id === s1);

                return (<div key={`SelectedService-${s?.id}`}>
                  <div>{s?.title}</div>
                  <div>{`${s?.price_min === s?.price_max ? s?.price_min : `${s?.price_min} - ${s?.price_max}`} BYN`}</div>
                </div>)
              }
            )
            }
          </div>
        </div>
        : null
      }
      {dateTime
        ? (
          <div>
            <div className={"font-semibold mb-2"}>Выбранный сеанс:</div>
            <div className={"text-c-primary border-c-bg-dark bg-c-bg-1 rounded-2xl px-5 py-2"}>
              <div className={""}>
                {dateTime?.toLocaleDateString("ru-RU")}
              </div>
              <div className={""}>
                {dateTime?.toTimeString().slice(0, 5)}
              </div>
            </div>
          </div>
        )
        : null
      }
      {
        finalStepAvailable
          ? <ButtonSolid clickHandler={() => setFinalize(true)} text={"Перейти к оформлению"}/>
          : <ButtonSolid clickHandler={handleNextStep} text={"Перейти к следующему шагу"}/>
      }
    </div>
  );
});
CurrentSelectedDesktop.displayName = "CurrentSelectedDesktop";


export default CurrentSelectedDesktop;