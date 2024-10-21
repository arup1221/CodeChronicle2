import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateMailtoLink = () => {
    const { subject, body } = formData;
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(`${body}\n`);
    return `mailto:gopea999@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = generateMailtoLink();
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {" "}
      <div className="min-h-screen py-12 pt-36 relative">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-8 text-gray-800">
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="rounded-lg border border-neutral-800 focus:ring-2 bg-gray-200  w-full p-4 "
            />
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              required
              placeholder="Message"
              className="rounded-lg border border-neutral-800 focus:ring-2 bg-gray-200 w-full p-4"
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
