import FooterFinalEnd from "./FooterFinalEnd";
import FooterFinalMid from "./FooterFinalMid";
import FooterFinalStart from "./FooterFinalStart";

export default function FooterFinal() {
  return (
    <section className="grid p-6 xl:py-8 xl:px-16 items gap-6 xl:gap-5 items-center bg-[#11040E] text-white">
      <FooterFinalStart />
      <FooterFinalMid />
      <hr className="text-[#DDD0DA]"/>
      <FooterFinalEnd />
    </section>
  )
}
