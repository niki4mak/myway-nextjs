"use client";

import { useState } from "react";
import { Master, Work } from "@prisma/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Стрижки", "Окрашивания", "Химия"];

interface TeamCarouselProps {
  masters: (Master & { works: Work[] })[]; // Мастера с их работами
}

export default function TeamCarousel({ masters }: TeamCarouselProps) {
  const [index, setIndex] = useState(0); // Индекс активного мастера
  const [category, setCategory] = useState(categories[0]); // Категория работ
  const [workIndex, setWorkIndex] = useState(0); // Индекс текущего набора работ

  const activeMaster = masters[index];
  const nextIndex = (index + 1) % masters.length;
  const prevIndex = (index - 1 + masters.length) % masters.length;

  // Фильтруем работы активного мастера по выбранной категории
  const filteredWorks = activeMaster.works.filter((work: Work) => {
    return work.categoryId === categories.indexOf(category) + 1; // Сопоставляем с индексом категории
  });

  // Переключение мастеров в карусели
  const nextMaster = () => setIndex(nextIndex);
  const prevMaster = () => setIndex(prevIndex);

  // Переключение работ активного мастера (бесконечная карусель)
  const nextWork = () => {
    setWorkIndex((prev) => (prev + 1) % filteredWorks.length); // Переход к следующей работе с цикличностью
  };
  
  const prevWork = () => {
    setWorkIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length); // Переход к предыдущей работе с цикличностью
  };

  // Отображаем только 3 работы
  const visibleWorks = filteredWorks.slice(workIndex, workIndex + 3);
  // Если работ меньше 3, добавим работы с начала, чтобы всегда показывалось 3 работы
  if (filteredWorks.length < 3) {
    visibleWorks.push(...filteredWorks.slice(0, 3 - filteredWorks.length));
  }

  return (
    <div className="w-screen h-[1685px] flex flex-col bg-gradient-to-b from-[#B7B5B5] to-[#F5F5F5] rounded-80">
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
            <button onClick={prevMaster} className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
              ←
            </button>
            <button onClick={nextMaster} className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
              →
            </button>
          </div>
        </div>

        {/* Контейнер с 3 мастерами */}
        <div className="w-full md:w-2/3 flex items-center justify-start h-[500px] overflow-hidden relative gap-4">
          <AnimatePresence>
            {masters.slice(index, index + 3).map((master, i) => {
              const isActive = i === 0; // Активный мастер всегда слева
              const opacity = isActive ? 1 : 0.5;
              const scale = isActive ? 1.0 : 0.9;
              const blurEffect = isActive ? "blur(0px)" : "blur(3px)";
              const translateX = isActive ? 0 : i === 1 ? "translate-x-[100%]" : "-translate-x-[100%]";

              return (
                <motion.div
                  key={`${master.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity,
                    scale,
                    filter: blurEffect,
                    x: translateX,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`relative w-[260px] h-[400px] md:w-[300px] md:h-[500px] rounded-xl shadow-lg overflow-hidden`}
                >
                  <div className="w-full h-full">
                    <Image
                      src={master.photoUrl}
                      alt={master.name}
                      width={300}
                      height={400}
                      className="object-cover rounded-lg"
                    />
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
        {/* Левая часть (категории и кнопки) */}
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
            <button onClick={prevWork} className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
              ←
            </button>
            <button onClick={nextWork} className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
              →
            </button>
          </div>
        </div>

        {/* Правая часть (карусель работ мастера) */}
        <div className="w-full md:w-2/3 flex flex-row items-center h-[500px] overflow-hidden relative">
          {/* Работы активного мастера */}
          <AnimatePresence>
            {visibleWorks.map((work: Work, i: number) => {
              const isActive = i === 0;
              const opacity = isActive ? 1 : 0.5;
              const scale = isActive ? 1 : 0.85;

              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity,
                    scale,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={`relative w-[260px] h-[400px] md:w-[300px] md:h-[500px] rounded-xl shadow-lg overflow-hidden`}
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
