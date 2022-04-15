import Layout from "../components/Layout";
import { safetyData } from "../data/safetyData";

const pageDetails = {
  title: "Safety & quality check",
  description: "description",
  keywords: "keywords",
  text: "Safety & quality check",
  heading: "Providing the Safest Possible Work Environment",
  img: "/images/banners/safety.jpg",
};

function SafetyQualityPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 py-10 lg:py-20">
        <div className="text-sm">
          <p className="mb-7">
            Industry Services places top priority on safety. We take pride in
            our history of high safety ratings. Our program is designed to
            provide a safe working environment for our employees, for plant
            personnel, and for other contractors working on-site. A company
            safety manager is responsible from start to finish for ensuring that
            employees are properly trained, fully educated, and adhering to the
            policies and procedures outlined in our safety manual.
          </p>
          <p>
            At Industry Services, we maintain our own equipment and strive to
            prevent damages in order to prevent injuries and project downtime.
            We continuously look for ways to improve our standards and provide
            the safest possible working environment for employees and customers
            alike.
          </p>
        </div>

        <div className="mt-10 lg:mt-24">
          <table className="scale-75 sm:scale-100 origin-top-left table-auto border-collapse border border-custom-gray-3 text-center text-sm">
            <thead className="bg-custom-gray4 text-white">
              <tr>
                <th className="p-3 border-collapse border border-custom-gray3">
                  Year
                </th>
                <th className="p-3 border-collapse border border-custom-gray3">
                  Man Hours
                </th>
                <th className="p-3 border-collapse border border-custom-gray3">
                  # of Loss Workday Cases
                </th>
                <th className="p-3 border-collapse border border-custom-gray3">
                  # of Recordable Cases
                </th>
                <th className="p-3 border-collapse border border-custom-gray3">
                  TIR
                </th>
                <th className="p-3 border-collapse border border-custom-gray3">
                  LWDIR
                </th>
                <th className="p-3 border-collapse border border-custom-gray3">
                  EMR
                </th>
              </tr>
            </thead>

            <tbody>
              {safetyData.map((data) => (
                <tr key={data.id} className="even:bg-custom-gray5">
                  <td className="p-2 border-collapse border border-custom-gray3">
                    {data.year}
                  </td>
                  <td className="p-2 border-collapse border border-custom-gray3">
                    {data.man_hours}
                  </td>
                  <td className="p-2 border-collapse border border-custom-gray3">
                    {data.loss_owrkday_cases}
                  </td>
                  <td className="p-2 border-collapse border border-custom-gray3">
                    {data.recordable_cases}
                  </td>
                  <td className="p-2 border-collapse border border-custom-gray3">
                    {data.tir}
                  </td>
                  <td className="p-2 border-collapse border border-custom-gray3">
                    {data.lwdir}
                  </td>
                  <td className="p-2 border-collapse border border-custom-gray3">
                    {data.emr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default SafetyQualityPage;
