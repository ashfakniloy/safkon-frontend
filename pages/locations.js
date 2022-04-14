import Layout from "../components/Layout";
import { locations } from "../data/locations";

const pageDetails = {
  title: "Locations",
  description: "description",
  keywords: "keywords",
  text: "locations",
  heading: "Five locations to serve you.",
  img: "/images/banners/locations.jpg",
};

function LocationsPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {locations.map((location) => {
            return (
              <div key={location.id}>
                <p className="text-custom-red text-base lg:text-lg font-semibold pb-8 mb-10 border-b border-slate-400">
                  {location.state}
                </p>

                {location.address.map((address, i) => (
                  <div
                    key={i}
                    className="text-[13px] lg:text-sm leading-loose mb-6 lg:w-[400px]"
                  >
                    <p>{address.road}</p>
                    <p>{address.city}</p>
                    <p className="text-custom-red">{address.phone}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default LocationsPage;
