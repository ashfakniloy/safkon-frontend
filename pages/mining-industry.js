import Layout from "../components/Layout";

const pageDetails = {
  title: "Mining Industry",
  description: "description",
  keywords: "keywords",
  text: "Mining Industry",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function MiningPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">Mining Industry Page</div>
    </Layout>
  );
}

export default MiningPage;
