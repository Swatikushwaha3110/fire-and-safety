import React from "react";
import ApolloLogo from "../assets/img.jpg";
import C21Logo from "../assets/img2.png";
import NextMallLogo from "../assets/img3.jpg";

const testimonials = [
  {
    text: "Narayan Fire Safety Consultancy conducted a detailed fire safety audit and helped us achieve full statutory compliance with ease.",
    author: "Facility Management Team",
    position: "Apollo Hospital, Indore",
    logo: ApolloLogo,
  },
  {
    text: "Their professional fire safety inspection and clear recommendations significantly enhanced safety standards across the mall.",
    author: "Operations Manager",
    position: "C21 Mall, Indore",
    logo: C21Logo,
  },
  {
    text: "Highly reliable service with excellent technical knowledge. Their team ensured all fire safety norms were met efficiently.",
    author: "Administration Department",
    position: "Next Mall",
    logo: NextMallLogo,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-saas-black py-4 md:py-4">
      <div className="section-container">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Leading Hospitals & Malls</span>
          </h2>
          <p className="text-gray-400">
            Our clients trust us for reliable fire safety audits, compliance, and professional consultancy services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-saas-darkGray to-saas-black border border-gray-800 rounded-xl p-6 card-shadow hover:scale-105 transition duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-saas-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 italic mb-6">
                "{testimonial.text}"
              </p>

              {/* Logo + Details */}
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-md">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.position}
                    className="h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
