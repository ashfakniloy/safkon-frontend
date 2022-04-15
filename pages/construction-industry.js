import Layout from "../components/Layout";

const pageDetails = {
  title: "Construction Industry",
  description: "description",
  keywords: "keywords",
  text: "Construction Industry",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function ConstructionPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">
        Construction Industry Page
      </div>
    </Layout>
  );
}

export default ConstructionPage;
