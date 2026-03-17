"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const LeadCaptureForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required";
    if (!form.get("phone")) errs.phone = "Phone number is required";
    if (!form.get("service")) errs.service = "Please select a service";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-elevated rounded-2xl p-10 text-center"
      >
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="text-display text-2xl mb-2">Thank You!</h3>
        <p className="text-muted-foreground">We'll be in touch within one business day to schedule your free estimate.</p>
      </motion.div>
    );
  }

  return (
    <div id="quote" className="card-elevated rounded-2xl p-8 md:p-10">
      <h3 className="text-display text-2xl mb-2">Get Your Free Estimate</h3>
      <p className="text-muted-foreground mb-8">No obligation. We'll respond within one business day.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input name="name" placeholder="Full Name" className="input-underline" />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="phone" type="tel" placeholder="Phone Number" className="input-underline" />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input name="email" type="email" placeholder="Email (optional)" className="input-underline" />
        </div>
        <div>
          <select name="service" className="input-underline" defaultValue="">
            <option value="" disabled>Select a Service</option>
            <option>Exterior Painting</option>
            <option>Interior Painting</option>
            <option>Cabinet Painting</option>
            <option>Drywall Repair</option>
            <option>Wallpaper Hanging</option>
            <option>Wallpaper Removal</option>
            <option>Wood Staining</option>
            <option>Pressure Washing</option>
          </select>
          {errors.service && <p className="text-destructive text-sm mt-1">{errors.service}</p>}
        </div>
        <div>
          <textarea name="message" placeholder="Tell us about your project (optional)" rows={3} className="input-underline resize-none" />
        </div>
        <button type="submit" className="btn-cta w-full text-center">
          Request Free Estimate
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
