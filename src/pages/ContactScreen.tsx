import ContactForm from "../components/ContactForm";
import { useEffect } from "react";

const ContactScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className="max-w-[1020px] mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-5 ">
        <h1 className="font-bold text-sm text-gray-700">Contact Me</h1>
        <p>
          If you have any questions or want to work with me, feel free to send
          me a message
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactScreen;
