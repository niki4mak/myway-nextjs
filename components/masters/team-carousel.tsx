"use client";

import { useState, useEffect } from "react";
import { Master, Work, Category } from "@prisma/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "@/lib/hooks/use-media-query";

interface TeamCarouselProps {
  masters: (Master & { works: (Work & { category: Category })[] })[]; // мастера с работами, у каждой работы есть категория
}

export default function TeamCarousel({ masters }: TeamCarouselProps) {
  const { isMobile } = useMediaQuery();
  const [index, setIndex] = useState(0); // индекс активного мастера
  const [workIndex, setWorkIndex] = useState(0); // индекс текущего набора работ

  const activeMaster = masters[index];

  // Вычисляем уникальные категории для активного мастера
  const availableCategories = Array.from(
    new Map(
      activeMaster.works.map((work) => [work.category.id, work.category])
    ).values()
  ).sort((a, b) => a.id - b.id);

  // Если у мастера есть категории, выбираем автоматически ту, у которой наименьший id
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  useEffect(() => {
    if (availableCategories.length > 0) {
      // Выбираем минимальный id из доступных категорий
      const minCategoryId = availableCategories.reduce(
        (min, cat) => (cat.id < min ? cat.id : min),
        availableCategories[0].id
      );
      setSelectedCategoryId(minCategoryId);
      setWorkIndex(0);
    } else {
      setSelectedCategoryId(null);
    }
  }, [activeMaster]); // при смене мастера вычисляем заново

  // Фильтруем работы активного мастера по выбранной категории
  const filteredWorks = activeMaster.works.filter(
    (work) => work.category.id === selectedCategoryId
  );

  // Настройка количества видимых элементов
  const visibleMastersCount = isMobile ? 2 : 3;
  const visibleWorksCount = isMobile ? 2 : 3;

  // Логика переключения мастеров (бесконечная карусель)
  const nextIndex = (index + 1) % masters.length;
  const prevIndex = (index - 1 + masters.length) % masters.length;
  const nextMaster = () => setIndex(nextIndex);
  const prevMaster = () => setIndex(prevIndex);

  // Переключение работ (НЕ бесконечная карусель):
  const nextWork = () => {
    if (workIndex < filteredWorks.length - 1) {
      setWorkIndex(prev => prev + 1);
    }
  };
  const prevWork = () => {
    if (workIndex > 0) {
      setWorkIndex(prev => prev - 1);
    }
  };

  const visibleWorks = filteredWorks.slice(workIndex, workIndex + visibleWorksCount);

  // Для мастеров оставляем ту же бесконечную карусель
  const visibleMasters = masters.slice(index, index + visibleMastersCount);
  if (masters.slice(index, index + visibleMastersCount).length < visibleMastersCount) {
    visibleMasters.push(
      ...masters.slice(0, visibleMastersCount - masters.slice(index, index + visibleMastersCount).length)
    );
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
            <button onClick={prevMaster} className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
              ←
            </button>
            <button onClick={nextMaster} className="w-32 border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
              →
            </button>
          </div>
        </div>

        {/* Контейнер с мастерами */}
        <div className="w-full md:w-2/3 flex items-center justify-start h-[500px] overflow-hidden relative gap-4">
          <AnimatePresence>
            {visibleMasters.map((master, i) => {
              const isActive = i === 0;
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
                    <div className="w-full h-[70%]">
                      <Image
                        src={master.photoUrl}
                        alt={master.name}
                        width={300}
                        height={400}
                        className="object-cover rounded-t-lg"
                      />
                    </div>
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
        {/* Левая часть: Категории и переключатели работ */}
        <div className="w-full md:w-1/3 text-left mb-6">
          <h2 className="text-6xl font-bold uppercase">Работы мастера</h2>
          {/* Вывод категорий - если мастеру есть хоть одна работа в категории, выбирается автоматически минимальный id */}
          <div className="flex space-x-4 mt-6 mb-6">
            {availableCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategoryId(cat.id);
                  setWorkIndex(0);
                }}
                className={`px-4 py-2 border rounded-full ${
                  selectedCategoryId === cat.id ? "bg-black text-white" : "hover:bg-gray-200"
                } transition`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={prevWork}
              disabled={workIndex === 0}
              className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={nextWork}
              disabled={workIndex >= filteredWorks.length - 1}
              className="border w-32 border-black p-3 rounded-full hover:bg-black hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>
        {/* Правая часть: Карусель работ */}
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
