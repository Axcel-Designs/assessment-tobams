import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function FooterFinalMid() {
  return (
    <div className='py-5'>
      <div className='bg-[#FFFFFF]/6 flex flex-col xl:flex xl:flex-row gap-6 p-6 rounded-lg'>
        <div>
          <h3 className='font-bold'>Registerd Offices</h3>
          <p className="text-[#EF4353]">United Kingdom</p>
          <p>07451196 (Registered by Company House) Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
        </div>
        <div>
          <h3 className='font-bold invisible'>What We Do</h3>
          <p className="text-[#EF4353]">Nigeria</p>
          <p>
            RC 1048722 (Registered by the Corporate Affairs Commission) 4, Muaz Close, Angwar-Rimi</p>
        </div>
        <div>
          <h3 className='font-bold'>Contact Informatiion</h3>
          <p className="text-[#EF4353] invisible">Nigeria</p>
          <ul>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#EF4353]" />
              <p>theteam@tobamsgroup.com</p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#EF4353]" />
              <p>+447886600748</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}