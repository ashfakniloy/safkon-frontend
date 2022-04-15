import Link from "next/link";

function ServicesDropdown() {
  return (
    <div className="absolute px-4 py-5 flex flex-col gap-3 bg-custom-gray z-20">
      <Link href="/transport-industry">
        <a className="hover:text-custom-red transition duration-200">
          Transport industry
        </a>
      </Link>
      <Link href="/construction-industry">
        <a className="hover:text-custom-red transition duration-200">
          Construction industry
        </a>
      </Link>
      <Link href="/food-industry">
        <a className="hover:text-custom-red transition duration-200">
          Food industry
        </a>
      </Link>
      <Link href="/energy-industry">
        <a className="hover:text-custom-red transition duration-200">
          Energy industry
        </a>
      </Link>
      <Link href="/news-media-industry">
        <a className="hover:text-custom-red transition duration-200">
          News media industry
        </a>
      </Link>
      <Link href="/manufacturing-industry">
        <a className="hover:text-custom-red transition duration-200">
          Manufacturing industry
        </a>
      </Link>
      <Link href="/mining-industry">
        <a className="hover:text-custom-red transition duration-200">
          Mining industry
        </a>
      </Link>
    </div>
  );
}

export default ServicesDropdown;
