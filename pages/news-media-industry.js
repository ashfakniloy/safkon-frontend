import Layout from "../components/Layout";

const pageDetails = {
  title: "News Media Industry",
  description: "description",
  keywords: "keywords",
  text: "News Media Industry",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function NewsMediaPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">
        News Media Industry Page
      </div>
    </Layout>
  );
}

export default NewsMediaPage;
