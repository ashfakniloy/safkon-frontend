import Link from "next/link";

function AboutDropdown({ showAbout }) {
  return (
    <div className={`absolute z-20  transition duration-500`}>
      <div className="bg-custom-gray px-4 py-5 flex flex-col gap-3">
        <Link href="/about-us" passHref>
          <a className="hover:text-custom-red transition duration-200">
            Who we are
          </a>
        </Link>
        <Link href="/industries-we-serve" passHref>
          <a className="hover:text-custom-red transition duration-200">
            Industries we serve
          </a>
        </Link>
        <Link href="/locations" passHref>
          <a className="hover:text-custom-red transition duration-200">
            Locations
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AboutDropdown;
