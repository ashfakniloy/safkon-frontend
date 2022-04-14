import Layout from "../components/Layout";
import Image from "next/image";

const pageDetails = {
  title: "About us",
  description: "description",
  keywords: "keywords",
  text: "Who we are",
  heading: "Leader in Refractory Construction and Mechanical Services",
  img: "/images/banners/about.jpg",
};

function AboutPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 mb-16 ">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[340px] py-8 lg:py-16 border-slate-300 border-b">
          <div className="flex-1">
            <div className="pb-10 border-slate-300 border-b">
              <h1 className="heading-section uppercase">OUR HISTORY</h1>
              <p className="mt-5 text-[14px]">
                In 1995, the Hunter family acquired D.A. Collins Refractories, a
                business begun in 1964. Industry Services Co., Inc. was bought
                by D.A. Collins Refractories in 2000, retaining the ISCI name
                and Mobile, AL becoming our headquarters.
              </p>
            </div>

            <div className="pt-10">
              <h1 className="heading-section uppercase">OUR FUTURE</h1>
              <p className="mt-5 text-[14px]">
                Industry Services has worked diligently in recent years to
                broaden its capabilities, acquiring multiple companies with
                expansive capabilities to best serve customers.
                <br />
                <br />
                Here at Industry Services, we have built a solid reputation with
                a consistently high safety record all while providing
                top-quality products and services. Our personnel are the key to
                guaranteeing our customers satisfaction. Skills, technology and
                support teams continue to deliver and maintain company
                integrity. &nbsp;
                <span className="font-bold italic">
                  Quality and craftsmanship has made Industry Services a leader
                  in the refractory industry for over 50 years.
                </span>
              </p>
            </div>
          </div>

          <div className="mx-auto lg:mr-20">
            <Image
              src="/images/about.jpg"
              alt="about"
              width={346}
              height={347}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
