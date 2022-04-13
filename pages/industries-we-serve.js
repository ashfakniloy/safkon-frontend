import Layout from "../components/Layout";
import { experiences } from "../data/experiences";

const pageDetails = {
  title: "Industries we serve",
  description: "description",
  keywords: "keywords",
  text: "Industries we serve",
  heading: "Our Experience",
  img: "/images/banners/industries.jpg",
};

function IndustriesPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container w-full lg:w-[62%] my-12 lg:my-28 flex flex-col">
        {experiences.map((experience) => {
          return (
            <p
              key={experience.id}
              className="mb-5 text-[13px] lg:text-[14px] mx-4"
            >
              <span className="text-custom-red text-base lg:text-lg font-semibold tracking-widest mr-6 uppercase">
                {experience.category}
              </span>
              {experience.products}
            </p>
          );
        })}
      </div>
    </Layout>
  );
}

export default IndustriesPage;
