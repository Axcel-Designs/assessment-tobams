
interface ButtonProps {
  icon?: React.ReactNode;
  title: string;
  point?: React.ReactNode;
}

export default function Button({ icon, title, point }: ButtonProps) {
  return (
    <button className="bg-[#571244] text-white py-2 px-4 flex items-center gap-2 rounded-sm cursor-pointer">
      <div>{icon}</div>
      <div>{title}</div>
      <div>{point}</div>
    </button>
  );
}
export  function AltButton({ icon, title, point }: ButtonProps) {
  return (
    <button className="bg-[#EF4353] text-white py-2 px-4 flex items-center gap-2 rounded-sm cursor-pointer">
      <div>{icon}</div>
      <div>{title}</div>
      <div>{point}</div>
    </button>
  );
}
