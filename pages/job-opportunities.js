import Applicant from "../components/Form/Applicant";
import Layout from "../components/Layout";

const pageDetails = {
  title: "Job opportunities",
  description: "description",
  keywords: "keywords",
  text: "Job opportunities",
  heading: "Work With Us",
  img: "/images/banners/job.jpg",
};

function JobPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 lg:px-[350px] py-20">
        <p className="tracking-widest font-semibold text-custom-red uppercase">
          INTERESTED IN OUR JOB OPENINGS AND POSITIONS? PLEASE COMPLETE THE
          APPLICATION BELOW, AND OUR REPRESENTATIVE WILL BE IN TOUCH.
        </p>

        <div className="mt-24">
          <p className="text-xs">
            Fields marked with an asterisk * are required to be completed.
          </p>
          <Applicant />
        </div>
      </div>
    </Layout>
  );
}

export default JobPage;
