import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, CheckCircle2, Send } from "lucide-react";
import Reveal from "./Reveal";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a bit about the project.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleBlur(e) {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-canvasSoft">
      <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14">
        <Reveal direction="left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt mb-4">Get In Touch</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-6">
            Let's build something distinct.
          </h2>
          <p className="font-body text-inkSoft leading-relaxed mb-10 max-w-md">
            Tell us where the project stands and what you're hoping to get
            out of it. We reply personally, usually within a day.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-lg bg-ink text-canvas flex items-center justify-center shrink-0">
                <Mail size={16} />
              </span>
              <div>
                <p className="font-body font-semibold text-sm">Email</p>
                <p className="font-body text-sm text-inkSoft">hello@studioforma.example</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-lg bg-ink text-canvas flex items-center justify-center shrink-0">
                <MapPin size={16} />
              </span>
              <div>
                <p className="font-body font-semibold text-sm">Studio</p>
                <p className="font-body text-sm text-inkSoft">118 Harrow Street, Chicago, IL</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="bg-canvas border border-line rounded-2xl p-7 md:p-8">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <CheckCircle2 size={40} className="mx-auto text-cobalt mb-4" />
                  <h3 className="font-display font-bold text-xl mb-2">Message sent</h3>
                  <p className="font-body text-sm text-inkSoft">
                    Thanks, {values.name.split(" ")[0]}. We'll be in touch at {values.email}.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <div>
                    <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-inkSoft">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1.5 w-full bg-transparent border rounded-lg px-3 py-2.5 text-sm outline-none transition-colors ${
                        touched.name && errors.name ? "border-red-400" : "border-line focus:border-cobalt"
                      }`}
                      placeholder="Jordan Lee"
                    />
                    {touched.name && errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider text-inkSoft">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1.5 w-full bg-transparent border rounded-lg px-3 py-2.5 text-sm outline-none transition-colors ${
                        touched.email && errors.email ? "border-red-400" : "border-line focus:border-cobalt"
                      }`}
                      placeholder="jordan@company.com"
                    />
                    {touched.email && errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-inkSoft">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`mt-1.5 w-full bg-transparent border rounded-lg px-3 py-2.5 text-sm outline-none resize-none transition-colors ${
                        touched.message && errors.message ? "border-red-400" : "border-line focus:border-cobalt"
                      }`}
                      placeholder="What are you looking to build?"
                    />
                    {touched.message && errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 bg-ink text-canvas font-body text-sm font-semibold py-3 rounded-full hover:bg-cobalt transition-colors disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending..." : <>Send Message <Send size={15} /></>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
