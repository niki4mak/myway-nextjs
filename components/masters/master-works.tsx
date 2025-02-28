import { useState } from "react";
import { Master, Work } from "@prisma/client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MasterWorksProps {
  master: Master & { works: Work[] }; // Убедитесь, что мастер включает работы
}

const categories = ["Стрижки", "Окрашивания", "Химия"];

export default function MasterWorks({ master }: MasterWorksProps) {
  const [category, setCategory] = useState(categories[0]);
  const [index, setIndex] = useState(0);

  // Фильтруем работы по выбранной категории
  const filteredWorks = master.works.filter((work) => {
    return work.categoryId === categories.indexOf(category) + 1; // Сопоставляем с индексом категории
  });

  // Переключение работ
  const nextWork = () => setIndex((prev) => (prev + 1) % filteredWorks.length);
  const prevWork = () => setIndex((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length);

  return (
    <motion.section
      className="w-screen py-16 px-6 flex flex-col md:flex-row items-center justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
    >
      {/* Левая часть (заголовок и категории) */}
      <div className="w-full md:w-1/3 text-left">
        <h2 className="text-6xl font-bold uppercase">Работы мастера</h2>

        {/* Категории */}
        <div className="flex space-x-4 mt-6">
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

        {/* Кнопки навигации */}
        <div className="flex space-x-4 mt-6">
          <button onClick={prevWork} className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
            ←
          </button>
          <button onClick={nextWork} className="border border-black p-3 rounded-full hover:bg-black hover:text-white transition">
            →
          </button>
        </div>
      </div>

      {/* Правая часть (карусель работ) */}
      <div className="w-full md:w-2/3 flex items-center h-[500px] overflow-hidden relative">
        <AnimatePresence>
          {filteredWorks.map((work, i) => {
            const isActive = i === index;
            const translateX = isActive ? 0 : (i - index) * 50;
            const opacity = isActive ? 1 : 0.5;
            const scale = isActive ? 1 : 0.85;

            return (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity,
                  scale,
                  x: translateX,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute left-0 w-[260px] h-[400px] md:w-[300px] md:h-[500px] rounded-xl shadow-lg overflow-hidden`}
              >
                <Image src={work.photoUrl} alt="Работа мастера" width={400} height={500} className="w-full h-full object-cover rounded-xl" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
