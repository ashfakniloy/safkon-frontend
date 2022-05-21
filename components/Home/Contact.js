import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "../Form/TextField";

const API_URL = "https://safkon-backend.vercel.app";

function Contact() {
  const initialvalues = {
    // firstname: "",
    // lastname: "",
    name: "",
    email: "",
    number: "",
    help: "",
  };

  const validate = Yup.object({
    // firstname: Yup.string().required("First Name is required"),
    // lastname: Yup.string().required("Last Name is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    number: Yup.string().required("Phone No is required"),
    help: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, formik) => {
    const { name, email, number, help } = values;

    const res = await fetch(`${API_URL}/saveinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, number, help }),
    });

    if (res.ok) {
      toast.success("Message sent successfully!");
      console.log(res);
      formik.resetForm();
    } else {
      console.log("status", res.status);
      toast.error("Something went wrong!");
    }
  };

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
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <ToastContainer />
                <div className="grid grid-cols-2 text-sm gap-x-7 gap-y-5 md:gap-y-7">
                  {/* <div className="col-span-2 sm:col-span-1">
                    <TextField label="First Name *" name="name" type="text" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <TextField label="Last Name *" name="name" type="text" />
                  </div> */}
                  <div className="col-span-2 sm:col-span-1">
                    <TextField label="Name *" name="name" type="text" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <TextField
                      label="Email Address *"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <TextField label="Phone No *" name="number" type="tel" />
                  </div>
                  <div className="col-span-2">
                    <TextField
                      label="How Can We Help? *"
                      name="help"
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
