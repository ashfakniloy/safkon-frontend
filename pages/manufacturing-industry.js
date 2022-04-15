import Layout from "../components/Layout";

const pageDetails = {
  title: "Manufacturing Industry",
  description: "description",
  keywords: "keywords",
  text: "Manufacturing Industry",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function ManufacturingPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">
        Manufacturing Industry Page
      </div>
    </Layout>
  );
}

export default ManufacturingPage;
