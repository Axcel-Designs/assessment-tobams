import { assetImg } from "@/assets/imgs";
import Image from "next/image";
import { BsLightningChargeFill } from "react-icons/bs";

const MDPList = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organizational Culture",
  "Sustainable Growth",
]

export default function MDP() {
  return (
    <section className='py-10 xl:p-16'>
      <div className="bg-[#2C0922] xl:h-179.75 p-10 rounded-[5px] flex flex-col xl:flex-row justify-between gap-5 xl:gap-14 text-[#F5F5F5]">
        <h2 className='text-xl xl:hidden block'>Management Development Program</h2>
        <div className="relative w-81.27 h-81.75 xl:w-auto xl:h-full aspect-square shrink-0">
          <Image src={assetImg.managementProgram}
            alt="Management Development Program"
            placeholder="blur"
            fill
            className="object-cover"
          />
        </div>
        <article className='xl:p-6 rounded-lg flex flex-col justify-between gap-6'>
          <h2 className='text-[40px] hidden xl:block font-semibold'>Management Development Program</h2>
          <p>Tobams Group offers a comprehensive Management
            Development Program designed to equip corporate
            organisations with the high
            - performing leaders they need to
            thrive.</p>
          <p>Our program includes workshops, seminars, coaching
            sessions, online courses, and experiential learning
            opportunities designed to improve leadership, strategic
            thinking, communication, and other essential managerial
            competencies for corporate organisations.</p>
          <div className='grid'>
            <ul className='gap-[25px] flex flex-wrap'>
              {MDPList.map((benefit, i) => <li key={i} className='flex items-center gap-3 bg-[#8F6182] px-2 py-1 rounded-lg w-full'>
                <BsLightningChargeFill />
                {benefit}
              </li>)}
            </ul>
          </div>
        </article>

      </div>
    </section>);
}


