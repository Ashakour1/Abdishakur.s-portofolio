import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="mt-10 space-y-4">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Contact</p>
        <h2 className="text-lg font-semibold text-gray-900">Let&apos;s work together</h2>
        <p className="text-sm text-gray-600">
          Tell me about your project or question—I'll get back to you soon.
        </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
