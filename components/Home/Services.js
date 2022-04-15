import Image from "next/image";
import { services } from "../../data/services";

function Services() {
  return (
    <div className="container px-4">
      <div className="border-t pt-8 border-slate-300">
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
                  height={600}
                  className="object-cover opacity-50 z-30"
                />
                <div className="absolute inset-0 z-30 flex flex-col justify-center items-center gap-4 lg:gap-6">
                  <h2 className="text-4xl lg:text-5xl text-white">
                    {service.name}
                  </h2>
                  <button className="px-6 py-2 text-white hover:text-gray-300 text-[11px] tracking-widest font-bold bg-transparent border-2 border-white hover:border-gray-300 uppercase">
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end mt-8">
          <button className="border-2 border-custom-blue px-8 lg:px-11 py-5 lg:py-6 hover:bg-custom-blue hover:text-white transition duration-300 text-[14px] lg:text-[18px] uppercase">
            All services
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
