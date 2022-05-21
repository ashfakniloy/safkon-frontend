import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "../components/Form/TextField";

const API_URL = "https://safkon-backend.vercel.app";

function AdminPage() {
  const router = useRouter();

  const initialvalues = {
    email: "",
    password: "",
  };

  const validate = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;

    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.text === "success") {
      // toast.success("Success!");
      router.push("/dashboard");
      localStorage.setItem("token-safkon", data.token);
    } else if (data.text === "not found") {
      toast.error("Email not found");
    } else if (data.text === "failure") {
      toast.error("Wrong Password");
    } else {
      toast.error("Something went wrong!");
      console.log(res);
    }
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center pt-32 lg:pt-44">
        <div className="bg-custom-gray3 flex flex-col p-10 shadow-lg">
          <h1 className="text-custom-gray4 text-3xl font-bold text-center ">
            Log In
          </h1>

          <div className="mt-6">
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <ToastContainer />
                  <div className="text-sm gap-y-5 md:gap-y-7">
                    <div className="w-[320px] md:w-[400px]">
                      <TextField label="Email *" name="email" type="email" />
                    </div>

                    <div className="mt-8 w-[320px] md:w-[400px]">
                      <TextField
                        label="Password *"
                        name="password"
                        type="password"
                        autoComplete="on"
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex justify-start">
                    <button
                      type="submit"
                      className="px-9 py-3 w-full border-2 border-custom-blue text-custom-blue text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-blue hover:text-white transition duration-300 uppercase"
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
    </div>
  );
}

export default AdminPage;
