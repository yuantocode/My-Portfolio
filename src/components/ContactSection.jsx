"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import Saturn from "./Saturn"; // ← Import the spinning Saturn

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    emailjs
      .sendForm(
        "service_2xu8izc",        // Replace with your EmailJS service ID
        "template_5fatv7i",       // Replace with your template ID
        form,
        "lti1NJ2rjBJ8_Gmb5"       // Replace with your public key
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          form.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Something went wrong.",
            description: "Please try again later or email me directly.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-transparent backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

            <div className="space-y-6">
              <InfoItem
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Email"
                content="UanJimenez0408@gmail.com"
                href="mailto:UanJimenez0408@gmail.com"
              />
              <InfoItem
                icon={<Phone className="h-6 w-6 text-primary" />}
                title="Phone"
                content="09952744950"
                href="tel:+639952744950"
              />
              <InfoItem
                icon={<MapPin className="h-6 w-6 text-primary" />}
                title="Location"
                content="Sta Rosa, Philippines"
              />
            </div>

            {/* Spinning Saturn Below Contact Info */}
            <div className="w-full h-40 md:h-48">
              <Saturn />
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-lg shadow-md">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <InputField
                  id="name"
                  name="name"
                  label="Your Name"
                  placeholder="Uan Jimenez..."
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  label="Your Email"
                  placeholder="email@example.com"
                />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable input field
const InputField = ({ id, name, label, type = "text", placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background text-white focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={placeholder}
    />
  </div>
);

// Reusable info item
const InfoItem = ({ icon, title, content, href }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {content}
        </a>
      ) : (
        <span className="text-muted-foreground">{content}</span>
      )}
    </div>
  </div>
);
