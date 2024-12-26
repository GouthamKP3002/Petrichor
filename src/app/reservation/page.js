"use client";
import ReservationForm from "@/components/ReservationForm";
import React from "react";

export default function Reservation() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('home.webp')", // Using same background as menu for consistency
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Semi-transparent overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        style={{ backdropFilter: "blur(2px)" }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif mb-4 text-white">
            Make a Reservation
          </h1>
          <div className="w-24 h-1 bg-[#8b7355] mx-auto mb-4"></div>
          <p className="text-gray-200 text-lg">
            Book your table online and we'll confirm your reservation within 30
            minutes
          </p>
        </div>

        {/* Form container with semi-transparent backdrop */}
        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
