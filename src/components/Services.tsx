import React from 'react';
import { ShieldCheck, ShieldAlert, GraduationCap, Flame, FileText, Briefcase } from 'lucide-react';

const servicesData = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
    title: 'Fire And Safety Audits',
    description: 'We execute thorough fire and safety audits that assess compliance with regulatory standards. Our meticulous inspections identify potential hazards and vulnerabilities, offering actionable recommendations for effective risk mitigation. By ensuring adherence to safety regulations, we help organizations create a safer operational environment that protects both employees and assets.'
  },
  {
    icon: <ShieldAlert className="h-6 w-6 text-saas-orange" />,
    title: 'COMPREHENSIVE RISK ASSESSMENT ',
    description: 'Our experienced team conducts in-depth risk assessments to analyze potential threats and prioritize hazards. This strategic approach allows organizations to implement targeted safety measures tailored to their specific risks. By understanding the unique challenges faced, we enhance overall risk management and empower our clients to make informed safety decisions.'
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-saas-orange" />,
    title: 'TRAINING AND DEVELOPMENT',
    description: 'We deliver bespoke training programs designed to elevate employee expertise in fire prevention, emergency response, and safety protocols. Our training initiatives are interactive and engaging, fostering a proactive safety culture within organizations. By equipping staff with the knowledge and skills necessary to respond effectively in critical situations, we promote a safer workplace for everyone.'
  },
  {
    icon: <Flame className="h-6 w-6 text-saas-orange" />,
    title: 'FIRE LOAD CALCULATION',
    description: 'Our specialized services include precise fire load calculations and comprehensive fire safety assessments. We evaluate the fire load of facilities to ensure compliance with industry standards and regulations. By tailoring our assessments to the unique requirements of various sectors, we help enhance overall fire safety measures and reduce risks associated with fire incidents.'
  },
  {
    icon: <FileText className="h-6 w-6 text-saas-orange" />,
    title: 'SAFETY MANAGEMENT SYSTEM FORMAT',
    description: 'We provide vital safety tools and documentation, including safety checklists, reporting formats, and incident response plans. These resources are designed to streamline safety management processes, facilitate training, and ensure adherence to regulatory compliance. By equipping organizations with the right tools, we enable them to effectively monitor and improve their safety practices.'
  },
  {
   icon: <Briefcase className="h-6 w-6 text-saas-orange" />,
    title: 'FIRE AND SAFETY CONSULTANCY SERVICE',
    description: 'We work closely with businesses and institutions to ensure full compliance with fire safety regulations while creating a safer environment for people and property. Our consultancy services include detailed fire risk assessments, fire safety audits, emergency evacuation planning, and guidance on the design and implementation of fire protection systems.'
  }
];

const Services = () => {
  return (
    <div className="bg-saas-black py-8 md:py-8">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Fire & Safety Services</span> You Can Trust
          </h2>
          <p className="text-gray-400">
            We offer end-to-end fire and safety solutions designed to protect lives, property, 
            and operations. From fire safety audits and risk assessments to training, 
            documentation, and expert consultancy, our services ensure regulatory compliance, 
            risk reduction, and a safer working environment for all.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-saas-darkGray p-6 rounded-xl border border-gray-800 hover:border-saas-orange/50 transition-all duration-300 card-shadow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-saas-orange/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
