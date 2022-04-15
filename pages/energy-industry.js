import Layout from "../components/Layout";

const pageDetails = {
  title: "Energy Industry",
  description: "description",
  keywords: "keywords",
  text: "Energy Industry",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function EnergyPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">Energy Industry Page</div>
    </Layout>
  );
}

export default EnergyPage;
