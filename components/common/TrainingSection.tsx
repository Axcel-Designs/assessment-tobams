import { trainingData } from "@/libs/data";
import Image from "next/image";
import { BsLightningChargeFill } from "react-icons/bs";

export default function TrainingSection() {
  return (
    <section className='grid gap-12 xl:gap-30 xl:p-16'>
      {trainingData.map((training, i) => (
        <div key={i} className={`flex flex-col xl:flex-row xl:max-h-101.25 p-6 xl:p-0 gap-6 xl:gap-20 rounded-lg items-center justify-center ${i % 2 === 1 ? 'xl:flex-row-reverse ' : ''}`}>
          <h2 className='text-[#151515] text-[40px] block xl:hidden'>{training.title}</h2>
          <div className="order-3 xl:gap-5.25 xl:order-0 grid xl:max-h-101.25">
            <h2 className='text-[#151515] text-[40px] xl:block hidden'>{training.title}</h2>
            <p className='text-lg text-[#696969]'>{training.desc}</p>
            <div className='grid'>
              <ul className='xl:gap-1.5 flex flex-wrap'>
                {training.lists.map((benefit, i) => <li key={i} className='flex items-center gap-3 w-full'>
                  <BsLightningChargeFill />
                  <span className='text-[#696969]'>{benefit}</span>
                </li>)}
              </ul>
            </div>
          </div>
          <div className="relative w-full aspect-square xl:h-full xl:w-full xl:max-w-150 order-2 xl:order-0 rounded-lg overflow-hidden rounded-tl-[33px] xl:aspect-auto">
            <Image src={training.img} alt={training.title} className='w-full h-full object-cover' fill placeholder="blur" />
          </div>
        </div>
      ))}
    </section>);
}
