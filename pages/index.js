import Contact from "../components/Home/Contact";
import Description from "../components/Home/Description";
import Locations from "../components/Home/Locations";
import Services from "../components/Home/Services";
import Layout from "../components/Layout";

const pageDetails = {
  title: "Safkon industries ltd",
  description: "description",
  keywords: "keywords",
  text: "INDUSTRY SERVICES CO INC",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/home.jpg",
};

export default function Home() {
  return (
    <Layout pageDetails={pageDetails}>
      <Description />
      <Services />
      <Locations />
      <Contact />
    </Layout>
  );
}
