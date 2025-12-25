import React from 'react';
import { ShieldCheck, Target } from 'lucide-react';

const About = () => {
  return (
    <section id='about' className="py-8 md:py-8 bg-saas-black">
      <div className="section-container">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Us – <span className="gradient-text">Our Vision & Mission</span>
          </h2>
          <p className="text-gray-400">
            Narayan Fire Safety Consultancy is dedicated to delivering
            comprehensive fire and safety solutions that protect lives,
            property, and the environment.
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-gray-400 mb-4">
            Narayan Fire Safety Consultancy specializes in fire and safety
            solutions with a strong commitment to excellence. We offer a wide
            range of services including fire and safety audits, HSE audits,
            fire load calculations, sustainability assessments, risk
            evaluations, and customized training programs.
          </p>

          <p className="text-gray-400">
            With over eight years of experience in the fire and safety sector,
            our qualified fire safety engineers and trained professionals
            deliver integrated solutions that meet regulatory requirements
            while aligning with industry best practices. We believe safety is
            a continuous journey driven by ongoing improvement.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Vision */}
          <div className="bg-saas-darkGray p-8 rounded-xl border border-gray-800 hover:border-saas-orange/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-8 w-8 text-saas-orange" />
              <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-400">
              To be a leading authority in fire and safety solutions,
              recognized for excellence and innovation. We aspire to set
              industry standards and become the trusted partner for
              organizations seeking not just compliance, but true safety
              leadership and resilient workplaces.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-saas-darkGray p-8 rounded-xl border border-gray-800 hover:border-saas-orange/40 transition">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-saas-orange" />
              <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-400">
              Our mission is to empower organizations with comprehensive fire
              and safety services that protect lives, property, and the
              environment. We work closely with clients to understand their
              challenges and deliver customized solutions that strengthen
              safety culture, compliance, and sustainable risk management.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
