import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
<section id="contact">
      <div className="min-h-screen bg-saas-black text-white py-4">
      <div className="section-container">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-gray-400">
            Get in touch with our fire safety experts for audits, inspections, and compliance support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-saas-orange w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400">+91 7697770437</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-saas-orange w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">rkfireconsultant@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-saas-orange w-6 h-6 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-400">
                  174, Maharana Pratap Nagar,<br />
                  Indore (M.P.)
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-saas-darkGray p-8 rounded-xl border border-gray-800">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-saas-black border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-saas-black border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded bg-saas-black border border-gray-700 focus:outline-none"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded bg-saas-black border border-gray-700 focus:outline-none"
              ></textarea>

              <Button className="w-full bg-saas-orange hover:bg-orange-600">
                Submit Enquiry
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
</section>
  );
};

export default Contact;
