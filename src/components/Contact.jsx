import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";


const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wgyflf7",
        "template_2o5ohih",
        formData,
        "9CIR92aYfkYr8wlIj"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          toast.error("❌ Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-12">
      <motion.h2
       className="text-4xl font-bold text-center mb-16 text-primary"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} 
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="backdrop-blur-lg bg-base-100/80 border border-base-300 rounded-xl shadow-xl max-w-md w-full mx-auto p-8 space-y-6"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} 
        >
          <h3 className="text-3xl font-bold text-center text-primary">
            Get in Touch
          </h3>

          <div className="space-y-2 text-center">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:nazmulrahat786.13@gmail.com"
                className="hover:underline"
              >
                nazmulrahat786.13@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <span className="text-base-content">+8801746627513</span>
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              <span className="text-base-content">Sherpur, Bangladesh</span>
            </p>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/nazmulrahat786"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-circle bg-base-200 hover:bg-black hover:text-white transition"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://linkedin.com/in/nazmul-rahat-2654262a7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-circle bg-base-200 hover:bg-blue-600 hover:text-white transition"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://wa.me/+8801746627513"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-circle bg-base-200 hover:bg-green-500 hover:text-white transition"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-base-100 rounded-lg shadow-lg p-8"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} 
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
