import React, {memo} from 'react';
import ButtonSolid from "@/components/shared/button/button-solid";
import {IYBasicData} from "../../../data/model/yclients/model";

interface CurrentSelectedDesktopProps {
    data: IYBasicData;
    selectedMaster: number | null;
    selectedServices: number[];
    dateTime: Date | null;
    handleNextStep: VoidFunction;
}

const CurrentSelectedMobile = memo<CurrentSelectedDesktopProps>(({
                                                                      data,
                                                                      selectedMaster,
                                                                      selectedServices,
                                                                      dateTime,
                                                                      handleNextStep
                                                                  }) => {
    const masterName = data.masters.find(m => m.id === selectedMaster)?.name;

    return (
        <div className={"flex flex-col gap-4 px-4"}>
            {selectedMaster ? <div className={"flex justify-between"}>
                <div className={""}>Мастер: </div>
                <div className={"text-c-primary"}>{masterName}</div>
            </div> : null}
            {selectedServices.length
                ? <div className={"flex justify-between"}>
                    <div className={""}>Услуги:</div>
                    <div className={"flex flex-col gap-2 text-c-primary"}>
                        {selectedServices.map(s1 => {
                                const s = data.services.services.find(it => it.id === s1);

                                return (<div key={`SelectedService-${s}`}>
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
                    <div className={"flex justify-between"}>
                        <div className={""}>Выбранный сеанс:</div>
                        <div className={"text-c-primary"}>
                            <div className={"text-xl"}>
                                {dateTime?.toLocaleDateString()}
                            </div>
                            <div className={"text-2xl"}>
                                {dateTime?.toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                )
                : null
            }
            <ButtonSolid clickHandler={handleNextStep} text={"Перейти к следующему шагу"}/>
        </div>
    );
});
CurrentSelectedMobile.displayName = "CurrentSelectedDesktop";


export default CurrentSelectedMobile;