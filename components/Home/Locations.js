import Image from "next/image";
import Link from "next/link";

function Locations() {
  return (
    <div className="container  lg:mb-24 px-4 py-10">
      <div className="border-t pt-10 border-slate-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex-row lg:gap-10">
          <div className="col-span-2 relative h-[112px] lg:h-[410px] w-full overflow-hidden text-center bg-black">
            <Image
              src="/images/locations.jpg"
              alt="locations"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
            <div className="absolute inset-0 z-30 flex flex-col justify-center items-center gap-3 lg:gap-16">
              <h2 className="text-3xl lg:text-[80px] text-white">Locations</h2>
              <Link href="/locations" passHref>
                <button className="px-6 lg:px-11 py-2 lg:py-4 text-white text-[11px] lg:text-[21px] tracking-widest font-bold bg-transparent hover:text-gray-300 border-2 border-white hover:border-gray-300 uppercase">
                  Contact us
                </button>
              </Link>
            </div>
          </div>

          <div className="col-span-1  mt-10 lg:mt-28 ml-3 flex flex-col items-start lg:items-end text-[20px] lg:text-3xl">
            <p>
              Level # 11,
              <br />
              House # 53/55,
              <br />
              Road # 03,
              <br />
              Block # B,
              <br />
              Niketon, Gulshan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
