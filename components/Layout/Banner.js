import Image from "next/image";

function Banner({ text, heading, img }) {
  return (
    <div className="relative">
      <div className="relative h-[350px] lg:h-[450px] w-full border-t-2 border-l-2 border-orange-500">
        <Image src={img} alt={text} layout="fill" objectFit="cover" priority />
      </div>
      <div className="absolute text-right inset-y-0 flex flex-col justify-center items-end right-5 lg:right-36">
        <p
          className="text-[14px] lg:text-[16px] text-custom-red font-bold tracking-widest uppercase"
          style={{ textShadow: "1px 1px 5px black" }}
        >
          {text}
        </p>
        <h1
          className="mt-3 xl:ml-[400px] font-Montserrat font-medium text-white text-[38px] lg:text-[70px] leading-none lg:leading-tight"
          style={{ textShadow: "1px 1px 10px black" }}
        >
          {heading}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
