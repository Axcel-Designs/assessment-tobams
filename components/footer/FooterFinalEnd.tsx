
const footerLinks = ["Terms and conditions", "Privacy policy", "Cookies Policy"];

export default function FooterFinalEnd() {
  return (
    <div className='flex flex-wrap justify-between text-sm'>
      <div>
        <p>Copyright ⓒ Tobams Group, {new Date().getFullYear()}. All rights reserved.</p>
      </div>
      <div className='order-first xl:order-0 flex flex-wrap xl:gap-10 gap-6 justify-around'>
        {footerLinks.map((link, i) => (
          <p key={i} className="underline">
            {link}
          </p>
        ))}
      </div>
    </div>
  )
}
