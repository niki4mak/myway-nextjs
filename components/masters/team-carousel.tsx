"use client";

import { useState } from "react";
import { Master, Work } from "@prisma/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "@/lib/hooks/use-media-query";

const categories = ["Стрижки", "Окрашивания", "Химия"];

interface TeamCarouselProps {
  masters: (Master & { works: Work[] })[]; // Мастера с их работами
}

export default function TeamCarousel({ masters }: TeamCarouselProps) {
  const [index, setIndex] = useState(0); // Индекс активного мастера
  const [category, setCategory] = useState(categories[0]); // Категория работ
  const [workIndex, setWorkIndex] = useState(0); // Индекс текущего набора работ

  const { isMobile } = useMediaQuery();
  const visibleMastersCount = isMobile ? 2 : 3; // для мастеров
  const visibleWorksCount = isMobile ? 2 : 3;   // для работ

  const activeMaster = masters[index];
  const nextIndex = (index + 1) % masters.length;
  const prevIndex = (index - 1 + masters.length) % masters.length;

  // Фильтруем работы активного мастера по выбранной категории
  const filteredWorks = activeMaster.works.filter((work: Work) => {
    return work.categoryId === categories.indexOf(category) + 1;
  });

  // Переключение мастеров в карусели
  const nextMaster = () => setIndex(nextIndex);
  const prevMaster = () => setIndex(prevIndex);

  // Переключение работ активного мастера (бесконечная карусель)
  const nextWork = () => {
    setWorkIndex((prev) => (prev + 1) % filteredWorks.length);
  };

  const prevWork = () => {
    setWorkIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length);
  };

  // Отображаем только visibleWorksCount работ
  const visibleWorks = filteredWorks.slice(workIndex, workIndex + visibleWorksCount);
  if (filteredWorks.length < visibleWorksCount) {
    visibleWorks.push(...filteredWorks.slice(0, visibleWorksCount - filteredWorks.length));
  }

  // Отображаем только visibleMastersCount мастеров
  const visibleMasters = masters.slice(index, index + visibleMastersCount);
  if (masters.slice(index, index + visibleMastersCount).length < visibleMastersCount) {
    visibleMasters.push(...masters.slice(0, visibleMastersCount - masters.slice(index, index + visibleMastersCount).length));
  }

  return (
    <div className="w-screen h-[1685px] flex flex-col bg-gradient-to-b from-[#F5F5F5] to-[#FFFFFF] rounded-80">
      {/* Карусель мастеров */}
      <motion.section
        className="w-screen py-16 px-6 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <div className="w-full md:w-1/3 text-left">
          <h2 className="text-6xl font-bold uppercase">КОМАНДА</h2>
          <p className="text-gray-700 mt-4 max-w-lg">
            Мы верим, что ключ к успеху — это постоянное развитие и стремление к совершенству, и именно это мы внедряем в нашу работу.
          </p>
          <div className="flex space-x-4 mt-6">
            <button
              onClick={prevMaster}
              className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={nextMaster}
              className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Контейнер с мастерами */}
        <div className="w-full md:w-2/3 flex items-center justify-start h-[500px] overflow-hidden relative gap-4">
          <AnimatePresence>
            {visibleMasters.map((master, i) => {
              const isActive = i === 0; // Активный мастер всегда слева
              const cardOpacity = isActive ? 1 : 0.5;
              const cardScale = isActive ? 1.0 : 0.9;
              const blurEffect = isActive ? "blur(0px)" : "blur(3px)";
              const translateX = isActive ? 0 : i === 1 ? "translate-x-[100%]" : "-translate-x-[100%]";

              return (
                <motion.div
                  key={`${master.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: cardOpacity,
                    scale: cardScale,
                    filter: blurEffect,
                    x: translateX,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-[260px] h-[400px] md:w-[300px] md:h-[500px] rounded-xl shadow-lg overflow-hidden border-2"
                >
                  <div className="flex flex-col h-full">
                    {/* Верхняя часть: изображение занимает 70% */}
                    <div className="w-full h-[70%]">
                      <Image
                        src={master.photoUrl}
                        alt={master.name}
                        width={300}
                        height={400}
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    {/* Нижняя часть: блок с информацией занимает 30% */}
                    <div className="w-full h-[30%] p-4 bg-white rounded-b-xl shadow-md flex flex-col justify-center">
                      <h3 className="text-xl font-semibold">
                        {master.name} {master.surname}
                      </h3>
                      <p className="text-sm text-gray-600">{master.description}</p>
                      <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                        Записаться
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Отображение работ активного мастера */}
      <motion.section
        className="w-screen py-16 px-6 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        {/* Левая часть: категории и кнопки для работ */}
        <div className="w-full md:w-1/3 text-left mb-6">
          <h2 className="text-6xl font-bold uppercase">Работы мастера</h2>
          {/* Категории */}
          <div className="flex space-x-4 mt-6 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 border rounded-full ${
                  category === cat ? "bg-black text-white" : "hover:bg-gray-200"
                } transition`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Кнопки для переключения работ */}
          <div className="flex space-x-4">
            <button
              onClick={prevWork}
              className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={nextWork}
              className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Правая часть: карусель работ мастера */}
        <div className="w-full md:w-2/3 flex flex-row items-center h-[500px] overflow-hidden relative">
          <AnimatePresence>
            {visibleWorks.map((work: Work, i: number) => {
              const isActive = i === 0;
              const workOpacity = isActive ? 1 : 0.5;
              const workScale = isActive ? 1 : 0.85;
              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: workOpacity,
                    scale: workScale,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-[260px] h-[400px] md:w-[300px] md:h-[500px] rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={work.photoUrl}
                    alt={work.description}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}
