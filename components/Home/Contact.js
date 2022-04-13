import * as Yup from "yup";
import { useFormik } from "formik";

function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().required("Email is required"),
      phone: Yup.string().required("Phone No is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container w-full lg:w-[65%] border-t border-gray-400 px-4 py-10 overflow-hidden">
      <h1 className="pl-5 heading-section text-center uppercase">Contact Us</h1>
      <p className="mt-3 lg:mt-6 text-[13px] lg:text-base leading-relaxed">
        Use the form below to contact us regarding our services or other
        inquiries. Someone will contact you within 1-2 business days.
      </p>

      <div className="mt-6">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-[14px]">
            <div className="relative mt-3 col-span-2 lg:col-span-1 flex flex-col">
              <label htmlFor="name" className="cursor-pointer">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                className="mt-1 p-2 outline-none border-2 border-gray-200 focus:border-custom-red"
              />
              {formik.errors.firstName ? (
                <p className="absolute left-0 -bottom-5 text-custom-red text-[12px]">
                  {formik.errors.firstName}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative mt-3 col-span-2 lg:col-span-1 flex flex-col">
              <label htmlFor="name" className="text-[14px] cursor-pointer">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                className="mt-1 p-2 outline-none border-2 border-gray-200 focus:border-custom-red"
              />
              {formik.errors.lastName ? (
                <p className="absolute left-0 -bottom-5 text-custom-red text-[12px]">
                  {formik.errors.lastName}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative mt-3 col-span-2 lg:col-span-1 flex flex-col">
              <label htmlFor="email" className="text-[14px] cursor-pointer">
                Email Adress
              </label>
              <input
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="mt-1 p-2 outline-none border-2 border-gray-200 focus:border-custom-red"
              />
              {formik.errors.email ? (
                <p className="absolute left-0 -bottom-5 text-custom-red text-[12px]">
                  {formik.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative mt-3 col-span-2 lg:col-span-1 flex flex-col">
              <label htmlFor="phone" className="text-[14px] cursor-pointer">
                Phone No
              </label>
              <input
                type="text"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="mt-1 p-2 outline-none border-2 border-gray-200 focus:border-custom-red"
              />
              {formik.errors.phone ? (
                <p className="absolute left-0 -bottom-5 text-custom-red text-[12px]">
                  {formik.errors.phone}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="relative mt-3 col-span-2 flex flex-col">
              <label htmlFor="message" className="text-[14px] cursor-pointer">
                How Can We Help?
              </label>
              <textarea
                id="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                rows="5"
                className="mt-1 p-2 outline-none border-2 border-white focus:border-custom-red"
              />
              {formik.errors.message ? (
                <p className="absolute left-0 -bottom-5 text-custom-red text-[12px]">
                  {formik.errors.message}
                </p>
              ) : (
                ""
              )}
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
        </form>
      </div>
    </div>
  );
}

export default Contact;
