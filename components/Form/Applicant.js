import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import OptionField from "./OptionField";
import TextField from "./TextField";

function Applicant() {
  const initialvalues = {
    position: "",
    location: [],
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
    email: "",
    startingDate: "",
    services: "",
    when: "",
    supervisor: "",
    documentation: "",
    employmentType: [],
    convicted: "",
    conviction: "",
    skills: "",
  };

  const validate = Yup.object({
    location: Yup.array().min(1, "Atleast one location is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    address1: Yup.string().required("Address 1 is required"),
    address2: Yup.string().required("Address 2 is required"),
    phone: Yup.string().required("Phone No is required"),
    email: Yup.string().required("Email is required"),
    startingDate: Yup.string().required("Date is required"),
    services: Yup.string().required("One option is required"),
    documentation: Yup.string().required("One option is required"),
    employmentType: Yup.array().min(1, "Atleast one option is required"),
    convicted: Yup.string().required("One option is required"),
    skills: Yup.string().required(
      "Any special skill or qualification is required"
    ),
  });

  return (
    <div className="mt-8">
      <div className=" p-4 bg-custom-gray5 ">
        <h1 className="text-white text-xl uppercase">APPLICANT DATA</h1>
      </div>
      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            console.log("Submitted values", values);
            resetForm();
          }}
        >
          {(formik) => (
            <Form>
              <div className="grid grid-cols-2 gap-x-3 lg:gap-x-7 gap-y-5 lg:gap-y-7 text-sm">
                <div className="col-span-2">
                  <TextField
                    label="Position you are applying for:"
                    name="position"
                    type="text"
                  />
                </div>

                <div className="col-span-2 relative">
                  <p>Location(s) applying for: *</p>
                  <OptionField
                    name="location"
                    label="Theodore, AL (Mobile)"
                    type="checkbox"
                    value="Theodore, AL (Mobile)"
                  />
                  <OptionField
                    name="location"
                    label="Ruston, LA"
                    type="checkbox"
                    value="Ruston, LA"
                  />
                  <OptionField
                    name="location"
                    label="Birmingham, AL"
                    type="checkbox"
                    value="Birmingham, AL"
                  />
                  <OptionField
                    name="location"
                    label="Six Mile, SC"
                    type="checkbox"
                    value="Six Mile, SC"
                  />
                  <OptionField
                    name="location"
                    label="Summerville, SC"
                    type="checkbox"
                    value="Summerville, SC"
                  />
                  <OptionField
                    name="location"
                    label="Lake City, FL"
                    type="checkbox"
                    value="Lake City, FL"
                  />
                  <OptionField
                    name="location"
                    label="Peculiar, MO"
                    type="checkbox"
                    value="Peculiar, MO"
                  />
                  <OptionField
                    name="location"
                    label="Pocatello, ID"
                    type="checkbox"
                    value="Pocatello, ID"
                  />
                  <OptionField
                    name="location"
                    label="Stoney Creek, ON (Canada)"
                    type="checkbox"
                    value="Stoney Creek, ON (Canada)"
                  />
                  <OptionField
                    name="location"
                    label="Pittsburg, PA"
                    type="checkbox"
                    value="Pittsburg, PA"
                  />
                  <p className="absolute -bottom-3 text-custom-red text-xs">
                    <ErrorMessage name="location" />
                  </p>
                </div>

                <div className="">
                  <TextField
                    label="First Name *"
                    name="firstName"
                    type="text"
                  />
                </div>
                <div className="">
                  <TextField label="Last Name *" name="lastName" type="text" />
                </div>
                <div className="col-span-2">
                  <TextField label="Address 1 *" name="address1" type="text" />
                </div>
                <div className="col-span-2">
                  <TextField label="Address 2 *" name="address2" type="text" />
                </div>
                <div className="">
                  <TextField label="City" name="city" type="text" />
                </div>
                <div className="">
                  <TextField label="State/Province" name="state" type="text" />
                </div>
                <div className="">
                  <TextField
                    label="Zip/Postal Code"
                    name="zipCode"
                    type="text"
                  />
                </div>
                <div className="">
                  <TextField label="Country" name="country" type="text" />
                </div>
                <div className="">
                  <TextField label="Phone No *" name="phone" type="text" />
                </div>
                <div className="">
                  <TextField label="Email *" name="email" type="email" />
                </div>
                <div className="col-span-2 w-[48%] lg:w-1/4">
                  <TextField
                    label="Date Available to Start *"
                    name="startingDate"
                    type="date"
                  />
                </div>

                <div className="col-span-2 relative">
                  <p className="text-sm">
                    Have you ever worked for Industry Services? *
                  </p>
                  <OptionField
                    name="services"
                    label="Yes"
                    type="radio"
                    value="yes"
                  />
                  <OptionField
                    name="services"
                    label="No"
                    type="radio"
                    value="no"
                  />
                  <p className="absolute -bottom-3 text-custom-red text-xs">
                    <ErrorMessage name="services" />
                  </p>
                </div>

                <div className="">
                  <TextField label="If yes, when?" name="when" type="text" />
                </div>
                <div className="">
                  <TextField
                    label="Name of supervisor:"
                    name="supervisor"
                    type="text"
                  />
                </div>

                <div className="col-span-2 relative">
                  <p className="text-sm">
                    Can you provide documentation that states you are eligible
                    to work in the United States? *
                  </p>
                  <OptionField
                    name="documentation"
                    label="Yes"
                    value="yes"
                    type="radio"
                  />
                  <OptionField
                    name="documentation"
                    label="No"
                    value="no"
                    type="radio"
                  />
                  <p className="absolute -bottom-3 text-custom-red text-xs">
                    <ErrorMessage name="documentation" />
                  </p>
                </div>

                <div className="col-span-2 relative">
                  <p>Type of employment desired: *</p>
                  <OptionField
                    name="employmentType"
                    label="Full-Time"
                    value="full-time"
                    type="checkbox"
                  />
                  <OptionField
                    name="employmentType"
                    label="Part-Time"
                    value="part-time"
                    type="checkbox"
                  />
                  <OptionField
                    name="employmentType"
                    label="Temporary"
                    value="temporary"
                    type="checkbox"
                  />
                  <OptionField
                    name="employmentType"
                    label="Seasonal"
                    value="seasonal"
                    type="checkbox"
                  />
                  <p className="absolute -bottom-3 text-custom-red text-xs">
                    <ErrorMessage name="employmentType" />
                  </p>
                </div>

                <div className="col-span-2 relative">
                  <p>
                    Have you ever pleaded guilty, no contest or been convicted
                    of a crime? *
                  </p>
                  <OptionField
                    name="convicted"
                    label="Yes"
                    value="yes"
                    type="radio"
                  />
                  <OptionField
                    name="convicted"
                    label="No"
                    value="no"
                    type="radio"
                  />
                  <p className="absolute -bottom-3 text-custom-red text-xs">
                    <ErrorMessage name="convicted" />
                  </p>
                </div>

                <div className="col-span-2">
                  <TextField
                    label="If yes, give dates and details:"
                    name="conviction"
                    type="text"
                  />
                </div>
                <div className="col-span-2">
                  <TextField
                    label="Summarize your special skills or qualifications: *"
                    name="skills"
                    type="text"
                    textarea="true"
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-3 bg-transparent hover:bg-custom-blue transition duration-300 border border-custom-blue text-custom-blue hover:text-white text-xs tracking-widest font-semibold uppercase"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Applicant;
