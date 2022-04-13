import Image from "next/image";

function Locations() {
  return (
    <div className="container border-t border-gray-400 lg:mb-24 px-4 py-10">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className=" relative h-[112px] lg:h-[410px] w-full overflow-hidden text-center bg-black">
          <Image
            src="/images/locations.jpg"
            alt="locations"
            // width={200}
            // height={200}
            layout="fill"
            objectFit="cover"
            priority
            className="object-contain w-screen relative opacity-50 z-30"
          />
          <div className="absolute inset-0 z-30 flex flex-col justify-center items-center gap-3 lg:gap-16">
            <h2 className="text-3xl lg:text-[80px] text-white">Locations</h2>
            <button className="px-6 lg:px-11 py-2 lg:py-4 text-white text-[11px] lg:text-[21px] tracking-widest font-bold bg-transparent hover:text-gray-300 border-2 border-white hover:border-gray-300 uppercase">
              Contact us
            </button>
          </div>
        </div>

        <div className="lg:ml-[300px] mt-8 flex flex-col items-end gap-4 lg:gap-10 text-[20px] lg:text-3xl">
          <p className="">Theodore, AL</p>
          <p className="">Six Mile, SC</p>
          <p className="">Summerville,SC</p>
          <p className="">Lake City, FL</p>
          <p className="">Ruston, LA</p>
        </div>
      </div>
    </div>
  );
}

export default Locations;
