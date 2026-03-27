"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

const LeadCaptureForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required";
    if (!form.get("phone")) errs.phone = "Phone number is required";
    if (!form.get("service")) errs.service = "Please select a service";
    if (!form.get("message")) errs.message = "Please describe your project";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setServerError("");
    setLoading(true);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          email: form.get("email"),
          service: form.get("service"),
          message: form.get("message"),
          website: form.get("website"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
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
      {serverError && (
        <p className="text-destructive text-sm mb-4 p-3 bg-destructive/10 rounded-md">{serverError}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input name="website" type="text" autoComplete="off" tabIndex={-1} aria-hidden="true" className="absolute opacity-0 h-0 w-0 pointer-events-none" />
        <div>
          <input name="name" placeholder="Full Name" maxLength={100} className="input-underline" />
          {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="phone" type="tel" placeholder="Phone Number" maxLength={20} className="input-underline" />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input name="email" type="email" placeholder="Email (optional)" maxLength={254} className="input-underline" />
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
          <textarea name="message" placeholder="Tell us about your project" rows={3} maxLength={1000} className="input-underline resize-none" />
          {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" disabled={loading} className="btn-cta w-full text-center disabled:opacity-60">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </span>
          ) : (
            "Request Free Estimate"
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
