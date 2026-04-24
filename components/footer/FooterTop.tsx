import Button from "../ui/button";

export default function FooterTop() {
  return (
    <section className="flex flex-wrap p-6 xl:py-10 xl:px-16 items gap-6 xl:gap-2.5 items-center border-b-2 border-b-[#C4C4C4] bg-[#1D0617] text-white">
      <div className="grow grid">
        <p>Ready to be a part of something extraordinary?</p>
        <b>Let’s work together to create a difference</b>
      </div>
      <div>
        <Button title="Get In Touch"/>
      </div>
    </section>
  )
}
