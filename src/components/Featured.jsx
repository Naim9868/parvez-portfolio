"use client";
import React from "react";

const Featured = () => {
  return (
    <section id="featured" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-gray-400 text-sm font-bold tracking-widest uppercase scroll-animate">
          Featured In
        </h3>

        <div className="scroller mt-8 scroll-animate delay-100">
          <div className="scroller-inner">
            {[
              "CompanyA",
              "CompanyB",
              "CompanyC",
              "CompanyD",
              "CompanyE",
              "CompanyF",
              "CompanyA",
              "CompanyB",
              "CompanyC",
              "CompanyD",
              "CompanyE",
              "CompanyF",
            ].map((company, idx) => (
              <img
                key={idx}
                src={`https://placehold.co/150x40/111/FFFFFF?text=${company}`}
                alt={`${company} Logo`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
