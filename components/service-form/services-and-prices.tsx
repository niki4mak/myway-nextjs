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
  { title: "Мужская стрижка", priceMin: 25, priceMax: 25 },
  { title: "Удаление волос воском", priceMin: 3, priceMax: 5 },
  { title: "Камуфлирование контуров головы", priceMin: 5, priceMax: 20 },
  { title: "Укладка (без стрижки)", priceMin: 5, priceMax: 5 },
  { title: "Стрижка друг+друг", priceMin: 40, priceMax: 40 },
  { title: "Стрижка отец+сын", priceMin: 40, priceMax: 40 },
  { title: "Стрижка три друга", priceMin: 63, priceMax: 63 },
  { title: "Стрижка бороды и усов", priceMin: 18, priceMax: 18 },
  { title: "Камуфлирование контуров бороды", priceMin: 5, priceMax: 20 },
  { title: "Мужская стрижка+борода/усы", priceMin: 35, priceMax: 35 },
  { title: "Мужская стрижка+SPA-процедуры", priceMin: 35, priceMax: 35 },
  { title: "SPA-процедуры", priceMin: 12, priceMax: 12 },
];

const ServicesAndPrices = () => {
  const { isMobile } = useMediaQuery();

  return (
    <section className="w-full flex flex-col justify-center bg-white relative">
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

      {/* Контейнер с максимальной шириной */}
      <div className="relative z-10 px-6 md:px-12 max-w-[1480px] mx-auto">
        {/* Заголовок */}
        <motion.h2
          className="text-[115px] font-bold text-left  uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          УСЛУГИ И ЦЕНЫ
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 uppercase">
          {/* Левый блок с текстом */}
          <div className="flex flex-col justify-end md:w-1/3">
            <motion.p
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Откройте для себя новый уровень стиля с услугами нашего БарберШОПА
            </motion.p>
          </div>

          {/* Правый блок с таблицей услуг и цен */}
          <div className="md:w-2/3">
            <table className="w-full text-left border-separate border-spacing-2">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="text-lg font-semibold py-2 border-b-2 border-black opacity-60">Услуги</th>
                  <th className="text-lg font-semibold py-2 opacity-60 border-b-2 border-black">ЦЕНА (BYN)</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td className="py-2">{service.title}</td>
                    <td className="py-2">
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
