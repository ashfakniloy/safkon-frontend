import * as Yup from "yup";
import { useFormik, Formik, Form } from "formik";
import TextField from "../Form/TextField";

function Contact() {
  const initialvalues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    text: "",
  };

  const validate = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    phone: Yup.string().required("Phone No is required"),
    text: Yup.string().required("Message is required"),
  });

  return (
    <div className="container w-full lg:w-[65%]  px-4 py-10 overflow-hidden">
      <div className="border-t pt-10 border-slate-300">
        <h1 className="pl-5 heading-section text-center uppercase">
          Contact Us
        </h1>
        <p className="mt-3 lg:mt-6 text-[13px] lg:text-base leading-relaxed">
          Use the form below to contact us regarding our services or other
          inquiries. Someone will contact you within 1-2 business days.
        </p>

        <div className="mt-6">
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
                <div className="grid grid-cols-2 text-sm gap-x-7 gap-y-5 md:gap-y-7">
                  <div className="col-span-2 sm:col-span-1">
                    <TextField
                      label="First Name *"
                      name="firstname"
                      type="text"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <TextField
                      label="Last Name *"
                      name="lastname"
                      type="text"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <TextField
                      label="Email Address *"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <TextField label="Phone No *" name="phone" type="text" />
                  </div>
                  <div className="col-span-2">
                    <TextField
                      label="How Can We Help? *"
                      name="text"
                      type="text"
                      textarea="true"
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-start">
                  <button
                    type="submit"
                    className="px-9 py-4 border-2 border-custom-blue text-custom-blue text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-blue hover:text-white transition duration-300 uppercase"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
