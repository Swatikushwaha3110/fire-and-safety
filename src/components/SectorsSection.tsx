import React from "react";
import {
  Zap,
  Landmark,
  Hotel,
  Settings,
  Cpu,
  Building2,
  Pill,
  Truck,
  Car,
  ShoppingBag,
  HeartPulse,
  Warehouse
} from "lucide-react";

const SectorsSection = () => {
  const sectors = [
    { name: "Energy", icon: Zap },
    { name: "Banking", icon: Landmark },
    { name: "Hospitality", icon: Hotel },
    { name: "Engineering", icon: Settings },
    { name: "Technology", icon: Cpu },
    { name: "Construction", icon: Building2 },
    { name: "Pharmaceutical", icon: Pill },
    { name: "Logistics", icon: Truck },
    { name: "Automobile", icon: Car },
    { name: "Retail", icon: ShoppingBag },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Warehouse", icon: Warehouse },
  ];

  return (
    <section className="bg-gradient-to-b from-saas-darkGray to-saas-black py-4 md:py-4">
      <div className="section-container">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sectors <span className="gradient-text">We Deal In</span>
          </h2>
          <p className="text-gray-400">
            Delivering fire & safety solutions across diverse industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="group bg-saas-darkGray border border-gray-800 rounded-xl py-8 px-4 text-center transition hover:border-saas-orange/40 hover:-translate-y-1"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-saas-orange group-hover:scale-110 transition" />
                <p className="text-gray-300 font-medium group-hover:text-white">
                  {sector.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SectorsSection;
