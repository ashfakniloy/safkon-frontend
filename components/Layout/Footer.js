import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-custom-gray5">
      <div className="container px-4 py-10">
        <h1 className="text-xl lg:text-3xl">
          Safety Standards &amp; Certifications
        </h1>
        <div className="mt-2 lg:mt-8 relative h-[50px] lg:h-[110px]">
          <Image
            src="/images/safety-logos.png"
            alt="safety logos"
            layout="fill"
            // objectFit="cover"
            priority
            className="object-contain lg:object-cover"
          />
        </div>

        <p className="mt-5 lg:mt-10 pb-10 border-b border-gray-400 text-center text-[14px] text-custom-red">
          TWIC Homeland Security, OSHA, MSHA, Avetta, Mid Atlantic Safety
          Council, ISN, Browz
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-2 text-[13px] text-custom-red ">
          <Link href="/">Home</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Refactory</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Union Refactory</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Mechanical</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Steel Fabrication</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Field Tank</Link>
        </div>

        <div className="mt-7 lg:mt-10 flex flex-wrap justify-center gap-2 text-[13px] text-custom-red ">
          <Link href="#">Our History</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Industries We Serve</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Safety</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Contact</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Locations</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Job opportunities</Link>
        </div>

        <p className="mt-7 lg:mt-10 mb-5 text-[13px] lg:text-[15px]">
          Copyright 2022. | Safkon Industries Limited Bangladesh
        </p>
      </div>
    </div>
  );
}

export default Footer;
