"use client"

import useMediaQuery from "@/lib/hooks/use-media-query";
import Image from "next/image";
import { memo } from "react"

const HomePageConcept = memo(() => {
    const {isMobile} = useMediaQuery();
  
    return (
        <section className="relative w-full bg-white py-20">
        {/* Камни (фоновые) */}
        <Image
          src="/main/bg-right-rock.png"
          alt="Камень"
          width={670}
          height={850}
          className="absolute top-0 right-0 w-[250px] md:w-[670px] h-[850px] z-0"
        />
        <Image
          src="/main/bg-left-rock.png"
          alt="Камень"
          width={800}
          height={1200}
          className="absolute bottom-[35%] left-0 w-[450px] md:w-[800px] h-[1200px] z-0"
        />
  
        {/* Контент */}
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="flex flex-col mb-20 h-[700px] px-10">
            <h2 className={isMobile ? "text-5xl font-medium uppercase" : "text-9xl font-medium uppercase"}>КОНЦЕПТ</h2>
            <div className="ml-2">
                
                <Image
                src="/main/arrow.svg" 
                alt="Стрелка"
                width={10}
                height={300}
                className="h-[300px]"
                />
            </div>
            <p className="text-black max-w-2xl first-line:pl-10">
              Салон My Way сочетает в себе элементы природы и современного дизайна, создавая уникальную атмосферу для
              стрижки и ухода за волосами. <span className="text-gray-500">Главная концепция</span> – это гармония между природой и современными технологиями.
            </p>

          </div>
  
          <div className="flex w-full flex-col gap-10 px-10">
            <div className="flex flex-col items-end text-right">
                <h2 className={isMobile ? "text-5xl font-medium uppercase" : "text-9xl font-medium uppercase"}>ИНТЕРЬЕР</h2>
                <p className="text-gray-700  max-w-lg mt-4">
                Интерьер выполнен в минималистичном стиле с чистыми линиями и нейтральными цветами, создавая атмосферу
                спокойствия и уюта.
                </p>
            </div>
  
            <div className="flex w-full h-[345px] gap-5 justify-between">
              <Image src="/main/interior-1.png" alt="Интерьер 1" width={230} height={345} className="rounded-lg" />
              <Image src="/main/interior-2.png" alt="Интерьер 2" width={230} height={345} className=" rounded-lg" />
              <Image src="/main/interior-3.png" alt="Интерьер 3" width={572} height={345} className="rounded-lg hidden md:block" />
            </div>
  
            <p className="text-gray-700 mt-6 max-w-lg">
              Использование дерева и камня в отделке придаёт пространству тёплое и органичное ощущение, напоминая о природе.
            </p>
          </div>

            <div className="w-full h-[600px] relative overflow-hidden rounded-80 my-10">
                <Image
                    src="/main/interior-4.jpg" 
                    alt="Интерьер"
                    layout="fill" 
                    objectFit="cover" // Обрезает изображение, не сжимая
                    objectPosition="center" // Центрирует изображение
                />
            </div>

            <div className="flex w-full flex-col gap-10 px-10">
            <div className="flex flex-col items-end text-right">
                
                <p className="text-gray-700  max-w-lg mt-4">
                Использование дерева и камня в отделке придаёт пространству теплое и органичное ощущение, напоминая о природе.
                </p>
            </div>
  
            <div className="flex w-full h-[345px] gap-5 justify-between">
              <Image src="/main/interior-1.png" alt="Интерьер 1" width={230} height={345} className="rounded-lg" />
              <Image src="/main/interior-2.png" alt="Интерьер 2" width={230} height={345} className=" rounded-lg" />
              <Image src="/main/interior-3.png" alt="Интерьер 3" width={572} height={345} className="rounded-lg hidden md:block" />
            </div>
          </div>

        </div>


      </section>
    )
      ;
  });
  HomePageConcept.displayName = "HomePageConcept";
  
  export default HomePageConcept;