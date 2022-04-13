import Link from "next/link";

function ServicesDropdown() {
  return (
    <div className="absolute px-4 py-5 flex flex-col gap-3 bg-custom-gray z-20">
      <Link href="/">
        <a className="hover:text-custom-red transition duration-200">
          Transport industry
        </a>
      </Link>
      <Link href="/">
        <a className="hover:text-custom-red transition duration-200">
          Construction industry
        </a>
      </Link>
      <Link href="/">
        <a className="hover:text-custom-red transition duration-200">
          Food industry
        </a>
      </Link>
      <Link href="/">
        <a className="hover:text-custom-red transition duration-200">
          Energy industry
        </a>
      </Link>
      <Link href="/">
        <a className="hover:text-custom-red transition duration-200">
          News media industry
        </a>
      </Link>
      <Link href="/">
        <a className="hover:text-custom-red transition duration-200">
          Manufacturing industry
        </a>
      </Link>
      <Link href="/">
        <a className="hover:text-custom-red transition duration-200">
          Mining industry
        </a>
      </Link>
    </div>
  );
}

export default ServicesDropdown;
