"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/data";
import { SectionHeader } from "@/components/shared/SectionHeader";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  budget: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "WhatsApp", value: siteConfig.phone, href: siteConfig.whatsapp },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: "#" },
];

const budgetOptions = [
  "< $500", "$500 - $1k", "$1k - $3k", "$3k - $5k", "$5k+", "Let's Discuss"
];

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: `Budget: ${data.budget || "Not specified"}\n\n${data.message}`,
        }),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Message sent! I'll get back to you within 24 hours.");
        reset();
      } else {
        toast.error("Failed to send. Please try WhatsApp instead.");
      }
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="bg-blob-purple w-[600px] h-[600px] top-[-15%] left-[-20%] opacity-20" />
      <div className="bg-blob-blue w-[400px] h-[400px] bottom-[-10%] right-[-10%] opacity-20" />

      <div className="max-w-6xl mx-auto space-y-14">
        <SectionHeader
          label="Get In Touch"
          title="Let's Build"
          highlight="Something Great"
          description="Have a project in mind? I'd love to discuss how I can help you achieve your goals."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:border-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                    <Icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white/30 text-xs">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick CTA buttons */}
            <div className="space-y-3">
              <a
                href={`https://api.whatsapp.com/send?phone=923100122738&text=Hi%20Shah%20Faisal!%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-white transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 0 20px rgba(34,197,94,0.3)" }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center justify-center gap-2 w-full py-3"
              >
                <Calendar size={16} />
                Book a Discovery Call
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: siteConfig.github },
                { icon: Linkedin, href: siteConfig.linkedin },
                { icon: Twitter, href: siteConfig.twitter },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-strong rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-white/50 text-xs">Your Name *</label>
                  <input
                    {...register("name")}
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-white/50 text-xs">Email Address *</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-white/50 text-xs">Subject *</label>
                <input
                  {...register("subject")}
                  placeholder="AI Agent Development / Shopify Store..."
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                {errors.subject && <p className="text-red-400 text-xs">{errors.subject.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-white/50 text-xs">Budget Range</label>
                <div className="flex flex-wrap gap-2">
                  {budgetOptions.map((b) => (
                    <label key={b} className="cursor-pointer">
                      <input type="radio" {...register("budget")} value={b} className="sr-only peer" />
                      <span className="inline-block px-3 py-1.5 rounded-lg text-xs text-white/40 border border-white/8 bg-white/3 peer-checked:border-purple-500/50 peer-checked:text-purple-400 peer-checked:bg-purple-500/10 transition-all cursor-pointer">
                        {b}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-white/50 text-xs">Message *</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-white/25 text-xs text-center">
                I typically respond within 4-8 hours. Let&apos;s build something exceptional.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
