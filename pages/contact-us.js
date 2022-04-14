import Layout from "../components/Layout";
import { contactData } from "../data/contactData";

const pageDetails = {
  title: "Contact us",
  description: "description",
  keywords: "keywords",
  text: "Contact us",
  heading: "DIRECTORY",
  img: "/images/banners/contact.jpg",
};

function ContactPage() {
  return (
    <Layout pageDetails={pageDetails}>
      <div className="container px-4 lg:px-20 pt-5 pb-20">
        {contactData.map((service) => (
          <div key={service.id} className="mt-10 lg:mt-28">
            <div className="p-5 lg:p-6 text-xl lg:text-3xl bg-custom-gray2 border-l-4 border-custom-red uppercase">
              <h1>{service.name}</h1>
            </div>
            <div className="mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-3 text-center gap-12">
              {service.contacts.map((contact) => (
                <div key={contact.id}>
                  <p className="font-semibold text-sm pb-6 uppercase">
                    {contact.agent}
                  </p>
                  <p className="text-xs pb-2">{contact.road}</p>
                  <p className="text-xs pb-2">{contact.city}</p>
                  <p className="text-sm text-custom-red font-semibold pb-2">
                    {contact.phone}
                  </p>
                  <p className="text-xs text-custom-red font-medium">
                    {contact.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default ContactPage;
