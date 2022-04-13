import Contact from "../components/Home/Contact";
import Description from "../components/Home/Description";
import HomeBanner from "../components/Home/HomeBanner";
import Locations from "../components/Home/Locations";
import Services from "../components/Home/Services";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <HomeBanner />
      <Description />
      <Services />
      <Locations />
      <Contact />
    </Layout>
  );
}
