"use client";

import useMediaQuery from "@/lib/hooks/use-media-query";
import Link from "next/link";
import {navConfig} from "@/components/layout/navbar"; 
import cn from "classnames";

export default function Footer() {
  const {isMobile} = useMediaQuery();

  if (isMobile) {
    
    return (
      <footer className="w-full bg-gray-100 text-black flex flex-col items-center justify-center p-5">
        <h2 className="text-2xl font-bold uppercase mb-2">MYWAY</h2>
        <div className="text-sm mb-1">Пн - Вс | 09:00-22:00</div>
        <div className="text-sm mb-1">Могилев, ул. Пионерская 54</div>
        <div className="text-sm mb-4">+375 29 934-16-19</div>

        <hr className="w-full border-t-2 border-black my-4" />

        <div className="text-xs mb-1 text-center">Политика конфиденциальности</div>
        <div className="text-xs text-center">Политика обработки персональных данных</div>
      </footer>
    );
  }

  
  return (
    <footer className="w-full bg-gray-100 text-black">
      
      <div
        className={cn(
          "max-w-7xl mx-auto px-6 py-8",
          "flex flex-row items-start justify-between gap-8"
        )}
      >
        {/* Левая колонка: логотип + контакты */}
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-3xl font-bold uppercase">MYWAY</h2>
          <div className="text-sm">Могилев, ул. Пионерская 54</div>
          <div className="text-sm">+375 29 934-16-19</div>
        </div>

        {/* Центральная колонка: время работы */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-base font-semibold uppercase">Время работы</h3>
          <div className="text-sm">Пн - Вс 09:00 – 21:00</div>
        </div>

        {/* Правая колонка: навигация */}
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-base font-semibold uppercase">Навигация</h3>
          <nav className="flex flex-col items-start gap-1">
            {navConfig.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                className="text-sm hover:underline"
              >
                {navItem.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Нижняя полоса с политиками */}
      <div className="border-t border-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
          Политика конфиденциальности | Политика обработки персональных данных
        </div>
      </div>
    </footer>
  );
}
