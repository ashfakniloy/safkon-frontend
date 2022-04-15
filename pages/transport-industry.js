import Layout from "../components/Layout";

const pageDetails = {
  title: "Transport Industry",
  description: "description",
  keywords: "keywords",
  text: "Transport Industry",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function TransportPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">
        Transport Industry Page
      </div>
    </Layout>
  );
}

export default TransportPage;
