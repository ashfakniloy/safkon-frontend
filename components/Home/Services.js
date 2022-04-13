import Image from "next/image";

const services = [
  {
    id: 0,
    name: "Refactory",
    img: "/images/services/refactory.jpg",
  },
  {
    id: 1,
    name: "Steel Fabrication",
    img: "/images/services/steel.jpg",
  },
  {
    id: 2,
    name: "Mechanical",
    img: "/images/services/mechanical.jpg",
  },
];

function Services() {
  return (
    <div className="container border-t border-gray-400 px-4 py-10">
      <h1 className="pl-5 heading-section uppercase">OUR SERVICES</h1>
      <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-8 overflow-hidden">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="w-auto lg:w-[570px] h-[341px] lg:h-[550px] relative overflow-hidden text-center bg-black"
            >
              <Image
                src={service.img}
                alt={service.name}
                width={570}
                height={570}
                className="object-cover opacity-50 z-30"
              />
              <div className="absolute inset-0 z-30 flex flex-col justify-center items-center gap-6">
                <h2 className="text-5xl text-white">{service.name}</h2>
                <button className="button">Learn more</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end mt-8">
        <button className="border-2 border-black px-8 lg:px-11 py-5 lg:py-6  hover:bg-black hover:text-white transition duration-300 text-[14px] lg:text-[18px] uppercase">
          All services
        </button>
      </div>
    </div>
  );
}

export default Services;
