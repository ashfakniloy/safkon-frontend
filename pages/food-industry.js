import Layout from "../components/Layout";

const pageDetails = {
  title: "Food Industry",
  description: "description",
  keywords: "keywords",
  text: "Food Industry",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function FoodPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 my-10 lg:my-20">Food Industry Page</div>
    </Layout>
  );
}

export default FoodPage;
