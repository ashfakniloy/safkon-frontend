import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CheckboxField from "./CheckboxField";
import TextField from "./TextField";

function Applicant() {
  return (
    <div className="mt-8">
      <div className=" p-4 bg-custom-gray5 ">
        <h1 className="text-white text-xl uppercase">APPLICANT DATA</h1>
      </div>
      <div className="mt-5">
        <Formik
          initialValues={{
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
            services: false,
            when: "",
            superviser: "",
            documentation: false,
            employmentType: [],
            convicted: false,
            conviction: "",
            skills: "",
          }}
          onSubmit={(values) => {
            console.log("Submitted values are", values);
          }}
        >
          {(formik) => (
            <div className="">
              {console.log(formik.values)}

              <Form>
                <div className="grid grid-cols-2 gap-5 text-sm">
                  <div className="col-span-2">
                    <TextField
                      label="Position you are applying for:"
                      name="position"
                      type="text"
                    />
                  </div>

                  <div className="mt-4 text-sm col-span-2">
                    <p className="text-sm">Location(s) applying for:</p>
                    <CheckboxField
                      name="location"
                      label="Theodore, AL (Mobile)"
                      value="Theodore, AL (Mobile)"
                    />
                    <CheckboxField
                      name="location"
                      label="Ruston, LA"
                      value="Ruston, LA"
                    />
                    <CheckboxField
                      name="location"
                      label="Birmingham, AL"
                      value="Birmingham, AL"
                    />
                    <CheckboxField
                      name="location"
                      label="Six Mile, SC"
                      value="Six Mile, SC"
                    />
                    <CheckboxField
                      name="location"
                      label="Summerville, SC"
                      value="Summerville, SC"
                    />
                    <CheckboxField
                      name="location"
                      label="Lake City, FL"
                      value="Lake City, FL"
                    />
                    <CheckboxField
                      name="location"
                      label="Peculiar, MO"
                      value="Peculiar, MO"
                    />
                    <CheckboxField
                      name="location"
                      label=" Pocatello, ID"
                      value=" Pocatello, ID"
                    />
                    <CheckboxField
                      name="location"
                      label="Stoney Creek, ON (Canada)"
                      value="Stoney Creek, ON (Canada)"
                    />
                    <CheckboxField
                      name="location"
                      label="Pittsburg, PA"
                      value="Pittsburg, PA"
                    />
                  </div>

                  <div className="">
                    <TextField
                      label="First Name:"
                      name="firstName"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <TextField label="Last name" name="lastName" type="text" />
                  </div>
                  <div className="col-span-2">
                    <TextField label="Address 1" name="address1" type="text" />
                  </div>
                  <div className="col-span-2">
                    <TextField label="Address 2" name="address2" type="text" />
                  </div>
                  <div className="">
                    <TextField label="City" name="city" type="text" />
                  </div>
                  <div className="">
                    <TextField
                      label="State/Province"
                      name="state"
                      type="text"
                    />
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
                    <TextField label="Phone" name="phone" type="text" />
                  </div>
                  <div className="">
                    <TextField label="Email" name="email" type="email" />
                  </div>
                  <div className="col-span-2 w-1/4">
                    <TextField
                      label="Date Available to Start"
                      name="startingDate"
                      type="date"
                    />
                  </div>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="bg-custom-red text-white px-4 py-2"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Applicant;
