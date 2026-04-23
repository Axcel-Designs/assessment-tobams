import Link from "next/link";

const navData = [
  { title: "About", link: "", sub: true },
  { title: "What We Do", link: "", sub: true },
  { title: "Jobs", link: "", sub: true },
  { title: "Projects", link: "" },
  { title: "TG Academy", link: "" },
  { title: "Strategic Partnership", link: "" },
  { title: "Pricing", link: "" },
  { title: "Book A Consultation", link: "" },
];

export default function NavLinks() {
  return navData.map((item, i) => (
    <Link
      href={item.link}
      key={i}
      replace
      className="hover:text-[#571244] text-black border-2 border-transparent transition-all duration-300 hover:border-b-[#571244] py-1 flex self-center"
    >
      <div className="text-lg">{item.title}</div>
    </Link>
  ));
}