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

        <p className="mt-5 lg:mt-10 pb-12 border-b border-slate-400 text-center text-sm text-custom-red">
          TWIC Homeland Security, OSHA, MSHA, Avetta, Mid Atlantic Safety
          Council, ISN, Browz
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-2 text-sm text-custom-red capitalize">
          <Link href="/">Home</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Transport Industry</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Construction Industry</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Food Industry</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Energy Industry</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">News media Industry</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Manufacturing Industry</Link>
          <span className="text-slate-500">|</span>
          <Link href="#">Mining Industry</Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 text-sm text-custom-red capitalize">
          <Link href="/about-us">Our History</Link>
          <span className="text-slate-500">|</span>
          <Link href="/industries-we-serve">Industries We Serve</Link>
          <span className="text-slate-500">|</span>
          <Link href="/safety-quality">Safety</Link>
          <span className="text-slate-500">|</span>
          <Link href="/contact-us">Contact</Link>
          <span className="text-slate-500">|</span>
          <Link href="/locations">Locations</Link>
          <span className="text-slate-500">|</span>
          <Link href="/job-opportunities">Job opportunities</Link>
        </div>

        <p className="mt-7 lg:mt-10 mb-5 text-[13px] lg:text-[15px]">
          Copyright 2022. | Safkon Industries Limited Bangladesh
        </p>
      </div>
    </div>
  );
}

export default Footer;
