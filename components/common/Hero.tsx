import Button from "../ui/button";

export default function Hero() {
  return (
    <section
    className="bg-[url('../assets/banner.png')] bg-cover bg-no-repeat bg-center w-full m-auto h-50 bg-gray-500 text-white flex items-center justify-center h-[511px]"
    >
      <div className="flex flex-col justify-around items-center w-full">
        <h1 className="text-4xl">Training and Development</h1>
        <p>
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today`s ever-evolving landscape.
        </p>
        <Button title={"Book consultation"} />
      </div>
    </section>
  );
}
