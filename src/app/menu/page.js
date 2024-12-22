"use client";
import MenuSection from "@/components/MenuSection";

export default function Menu() {
  return (
    <div
      className="min-h-screen relative blur-0"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/fd/6c/12/fd6c12dab0055e548eb8250f0c8db3ce.jpg')",
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
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-white mb-4">Our Menu</h1>
          <div className="w-24 h-1 bg-[#8b7355] mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Experience our carefully crafted dishes, made with locally sourced
            ingredients
          </p>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Each dish celebrates the season's harvest, crafted with care using
            traditional methods and locally sourced ingredients
          </p>
        </div>

        {/* Menu section with adjusted background */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8">
          <MenuSection />
        </div>
      </div>
    </div>
  );
}
