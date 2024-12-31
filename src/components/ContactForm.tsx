import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const Validate = () => {
    const errors = {} as any;

    if (!contactData.name) errors.name = "Name is required ";
    if (!contactData.email) errors.email = "Email is required ";
    if (!contactData.subject) errors.subject = "Subject is required";
    if (!contactData.message) errors.message = "Message is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Validate()) return;

    try {
      if (form.current) {
        emailjs.sendForm(
          "service_g3j76qr",
          "template_232zty2",
          form.current,
          "ep3XQ79vKjCRzZeto"
        );
      }
      toast.success("Message sent successfully");
    } catch (e) {
      toast.error("Failed to send message");
    }
  };
  return (
    <div>
      <form className="space-y-7" onSubmit={sendEmail} ref={form}>
        <div className="flex flex-col space-y-2">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="rounded-md border border-gray-300  p-3 text-sm text-black focus:border-primary focus:ring-primary focus:outline-customGreen"
            id="name"
            placeholder="Mohamed "
            type="text"
            name="name"
            onChange={handleChange}
          />
          <p className="text-red-500 text-sm">{errors.name}</p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-2">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="rounded-md border border-gray-300  p-3 text-sm text-black focus:border-primary focus:ring-primary focus:outline-customGreen"
              id="email"
              placeholder="email (example@gmail.com)"
              type="email"
              name="email"
              onChange={handleChange}
            />
            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>

          <div className="flex flex-col space-y-2">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="rounded-md border border-gray-300  p-3 text-sm text-black focus:border-primary focus:ring-primary focus:outline-customGreen"
              id="subject"
              placeholder="E.g (I want to work with you)"
              type="text"
              name="subject"
              onChange={handleChange}
            />
            <p className="text-red-500 text-sm">{errors.subject}</p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="rounded-md border border-gray-300  p-3 text-sm text-black focus:border-primary focus:ring-primary resize-none focus:outline-customGreen"
            id="message"
            placeholder="eg (I want to work with you for my project)"
            name="message"
            rows={6}
            onChange={handleChange}
          ></textarea>
          <p className="text-red-500 text-sm">{errors.message}</p>
        </div>

        <button
          className="w-full rounded-md bg-black px-4 text-sm font-medium text-white py-3"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
