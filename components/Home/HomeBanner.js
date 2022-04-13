import Image from "next/image";

function HomeBanner() {
  return (
    <div className="relative">
      <div className="relative h-[350px] lg:h-[450px] w-full border-t-2 border-l-2 border-orange-500">
        <Image
          src="/images/banners/home.jpg"
          alt="home banner"
          layout="fill"
          objectFit="cover"
          priority
          className="object-contain w-screen relative"
        />
      </div>
      <div className="absolute text-right top-20 right-5 lg:right-36">
        <p className="text-banner">INDUSTRY SERVICES CO INC</p>
        <h1 className="mt-3 heading-banner">
          Leader in Refractory Construction and Mechanical Services
        </h1>
      </div>
    </div>
  );
}

export default HomeBanner;
