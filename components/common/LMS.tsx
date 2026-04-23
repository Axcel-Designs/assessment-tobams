import React from 'react'
import Button from '../ui/button'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { assetImg } from '@/assets/imgs'

const courses = ['Business Analysis', 'Design Thinking', 'Entrepreneurship', 'Career Development', 'Business Model']

export default function LMS() {
  return (
    <section className="py-10">
      <div className="bg-[#571244]/10 flex flex-col lg:flex-row lg:h-166 p-6 lg:gap-20 lg:px-12 lg:py-16 rounded-lg items-center justify-center">
        <div className="relative w-81.27 h-81.75 lg:w-auto lg:h-full aspect-square rounded-full overflow-hidden shrink-0">
          <Image
            src={assetImg.lms}
            alt="Learning Management System image"
            placeholder="blur"
            fill
            className="object-cover"
          />
        </div>
        <article className='p-6 rounded-lg flex flex-col gap-6'>
          <h2 className='text-[#571244] text-2xl'>Learning Management System</h2>
          <div className='bg-[#571244]/10 p-6 rounded-lg gap-5 grid'>
            <p>TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.</p>
            <div className='gap-3 grid'>
              <h3 className='text-[#571244] text-xl'>Some of our courses include:</h3>
              <ul className='list-disc list-outside gap-3 flex flex-wrap'>
                {courses.map((course, i) => <li key={i} className='ml-6'>{course}</li>)}
              </ul>
            </div>
          </div>
          <div>
            <Button title='Learn More' point={<FiArrowUpRight />} />
          </div>
        </article>
      </div>
    </section>
  )
}
