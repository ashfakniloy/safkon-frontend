import Link from "next/link";

function AboutDropdown() {
  return (
    <div className="absolute px-4 py-5 flex flex-col gap-3 bg-custom-gray z-20">
      <Link href="/" passHref>
        <a className="hover:text-custom-red transition duration-200">
          Who we are
        </a>
      </Link>
      <Link href="/" passHref>
        <a className="hover:text-custom-red transition duration-200">
          Industries we serve
        </a>
      </Link>
      <Link href="/" passHref>
        <a className="hover:text-custom-red transition duration-200">
          Locations
        </a>
      </Link>
    </div>
  );
}

export default AboutDropdown;
