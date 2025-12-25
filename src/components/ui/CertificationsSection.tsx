import React from "react";
import { Award, ShieldCheck, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section className="py-4 bg-saas-black">
      <div className="section-container">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400">
            Our credentials reflect our commitment to compliance, safety
            excellence, and professional standards.
          </p>
        </div>

        {/* Certificates List */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          <div className="flex items-start gap-4 bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/40 transition">
            <ShieldCheck className="text-saas-orange w-7 h-7 mt-1" />
            <p className="text-gray-300">
              Govt. Registered Consultant for Fire Safety
            </p>
          </div>

          <div className="flex items-start gap-4 bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/40 transition">
            <Award className="text-saas-orange w-7 h-7 mt-1" />
            <p className="text-gray-300">
              ISO 45001 – OHSMS Lead Auditor
            </p>
          </div>

          <div className="flex items-start gap-4 bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/40 transition">
            <CheckCircle className="text-saas-orange w-7 h-7 mt-1" />
            <p className="text-gray-300">
              Certified NSC – NSAT Examination
            </p>
          </div>

          <div className="flex items-start gap-4 bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/40 transition">
            <ShieldCheck className="text-saas-orange w-7 h-7 mt-1" />
            <p className="text-gray-300">
              DTI Certificate to Drive HMV Fire Tender
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
