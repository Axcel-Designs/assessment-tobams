import Button from "../ui/button";

export default function Hero() {
  return (
    <section
      className="relative bg-fixed bg-[url('../assets/banner.png')] bg-cover bg-no-repeat bg-center w-full m-auto bg-gray-500 text-white flex items-center justify-center h-[511px] max-md:h-[317px]"
    >
      <div className=" bg-black/50 inset-0 w-full h-full flex flex-col justify-around items-centerz">
        <div className="relative z-10 flex flex-col justify-around items-center w-full text-center px-6 py-10 lg:px-16 lg:py-28 gap-10 max-md:gap-4 ">
          <button className="bg-black/50 text-white py-2 px-4 flex items-center gap-2 rounded-2xl cursor-pointer">            
            <div>WHAT WE DO</div>
          </button>
          <h1 className="text-xl lg:text-[56px] font-bold">Training and Development</h1>
          <p>
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today`s ever-evolving landscape.
          </p>
          <Button title={"Book consultation"} />
        </div>
      </div>
    </section>
  );
}
