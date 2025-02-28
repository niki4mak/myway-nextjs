import { Master } from "@prisma/client";
import Image from "next/image";

interface MasterCardProps {
  master: Master;
  isActive: boolean;
}

export default function MasterCard({ master, isActive }: MasterCardProps) {
  return (
    <div className="relative w-full h-full rounded-xl shadow-lg overflow-hidden">
      {/* Фото мастера */}
      <Image src={master.photoUrl} alt={master.name} layout="fill" objectFit="cover" />

      {/* Градиент и информация (только у активной карточки) */}
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
          <h3 className="text-xl font-bold uppercase">{master.name} {master.surname}</h3>
          <p className="text-gray-300">{master.rank}</p>

          {/* Количество стрижек */}
          <p className="text-sm text-gray-400 mt-1">✂️ {master.cutsAmount} стрижек</p>

          {/* Кнопка "Запись" */}
          <button className="mt-4 border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
            Запись
          </button>
        </div>
      )}
    </div>
  );
}
