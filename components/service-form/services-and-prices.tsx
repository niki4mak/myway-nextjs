"use client";

import Image from "next/image";
import useMediaQuery from "@/lib/hooks/use-media-query";
import { motion } from "framer-motion";

interface Service {
  title: string;
  priceMin: number;
  priceMax: number;
}

const servicesData: Service[] = [
  { title: "Мужская стрижка", priceMin: 30, priceMax: 45 },
  { title: "Женская стрижка", priceMin: 35, priceMax: 60 },
  { title: "Окрашивание", priceMin: 70, priceMax: 350 },
  { title: "Маникюр", priceMin: 25, priceMax: 65 },
  { title: "Перманентный макияж", priceMin: 150, priceMax: 150 },
  { title: "Наращивание ресниц", priceMin: 50, priceMax: 65 },
  { title: "Ревитализация", priceMin: 70, priceMax: 100 },
  { title: "Стрижка бороды и усов", priceMin: 20, priceMax: 35 },
  { title: "Камуфлирование контуров бороды", priceMin: 5, priceMax: 28 },
  { title: "Мужская стрижка+борода/усы", priceMin: 65, priceMax: 65 },
  { title: "Мужская стрижка+SPA-процедуры", priceMin: 40, priceMax: 60 },
];

const ServicesAndPrices = () => {
  const { isMobile } = useMediaQuery();

  return (
    <section className="w-full pt-14 flex flex-col justify-center bg-white relative md:pt-10">
      {/* Фоновые водяные знаки */}
      <div className="absolute top-0 left-0 z-0 opacity-100">
        <Image
          src="/services/style-icon.png"
          alt="Style Logo"
          width={650}
          height={650}
          className="opacity-100"
        />
      </div>

      {/* Контейнер с максимальной шириной: для мобильных устройств – меньшие отступы */}
      <div className="relative z-10 px-4 md:px-12 max-w-[1480px] mx-auto">
        {/* Заголовок: на мобильных – меньший размер шрифта */}
        <motion.h2
          className="text-3xl pb-4 md:text-[115px] font-bold text-left uppercase md:pb-14"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          УСЛУГИ И ЦЕНЫ
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-2 md:gap-10 uppercase">
          {/* Левый блок с текстом */}
          <div className="flex flex-col justify-end md:w-1/3">
            <motion.p
              className="text-[14px] md:text-base text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Откройте для себя новый уровень стиля с услугами нашего БарберШОПА
            </motion.p>
          </div>

          {/* Правый блок с таблицей услуг и цен */}
          <div className="md:w-2/3 overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-2">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-[14px] md:text-lg font-semibold py-2 border-b-2 border-black opacity-60">
                    Услуги
                  </th>
                  <th className="text-[14px] md:text-lg font-semibold py-2 opacity-60 border-b-2 border-black">
                    ЦЕНА (BYN)
                  </th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td className="py-2 text-[14px] md:text-base">{service.title}</td>
                    <td className="py-2 text-[14px] md:text-base">
                      {service.priceMin === service.priceMax
                        ? service.priceMin
                        : `${service.priceMin} - ${service.priceMax}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndPrices;
