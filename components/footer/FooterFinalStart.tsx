import { companyData, solutionsData, WhatWeDoData } from '@/libs/footerData'
import Image from 'next/image'
import logo from "../../public/favicon.png";
import { FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

const socialLinks = [
  { icon: <FaLinkedinIn />, id: 'linkedin' },
  { icon: <AiFillInstagram />, id: 'instagram' },
  { icon: <FaXTwitter />, id: 'twitter' },
];

export default function FooterFinalStart() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:py-5 gap-10'>
      <div className='grid gap-2.5'>
        <div>
          <Image src={logo} alt="logo" placeholder="blur" width={165.71} />
        </div>
        <div>
          <p>Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.</p>
        </div>
        <ul className='flex gap-6'>
          {socialLinks.map((social) => (
            <li
              key={social.id}
              className="w-8 h-8 bg-white text-[#151515] rounded-full flex items-center justify-center"
            >
              <span className="text-sm">
                {social.icon}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-4'>
        <h3 className='font-bold'>What We Do</h3>
        <ul className='grid gap-4'>
          {WhatWeDoData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-4'>
        <h3 className='font-bold'>Company</h3>
        <ul className='grid gap-4'>
          {companyData.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col gap-4'>
        <h3 className='font-bold'>Solutions</h3>
        <ul className='grid gap-4'>
          {solutionsData.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}
