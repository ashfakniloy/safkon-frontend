import Head from "next/head";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children, pageDetails }) {
  const { title, description, keywords, text, heading, img } = pageDetails;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>
        <Header />
        <Banner text={text} heading={heading} img={img} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Safkon industries ltd",
  description: "safkon",
  keywords: "safkon",
};

export default Layout;
