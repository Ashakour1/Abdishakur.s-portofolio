import { HiOutlineMail } from "react-icons/hi";

import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
  return (
    <div className="max-w-[1020px] mx-auto px-5 py-10">
      <div className="flex flex-col space-y-2 pb-5 ">
        <div className="flex items-center text-center gap-1 text-gray-600">
          <HiOutlineMail className="text-xl" />
          <h1 className="font-bold text-sm">Contact Me</h1>
        </div>
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
