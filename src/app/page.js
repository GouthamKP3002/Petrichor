"use client";
import React from "react";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://static.dezeen.com/uploads/2021/11/noma-big-architecture-interiors-restaurant-copenhagen-denmark_dezeen_2364_hero50.jpg"
          // Replace with: "path/to/hero-restaurant-image.jpg"
          alt="Restaurant ambiance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-6xl font-serif mb-4">petrichor</h1>
          <div className="w-24 h-1 bg-[#8b7355] mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Where tradition meets earth's bounty, celebrating the essence of
            natural flavors
          </p>
          <button className="mt-8 px-8 py-3 bg-[#8b7355] text-white rounded-full hover:bg-[#6d5a43] transition-colors">
            <a href="menu">Look out menu!</a>
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-[#2c2420] mb-6">
              Our Story
            </h2>
            <p className="text-[#5c5147] leading-relaxed mb-6">
              Petrichor was born from a deep connection to the earth and its
              seasons. Our farm-to-table approach celebrates traditional cuisine
              made with fresh, locally sourced ingredients. Every dish tells a
              story of the land, the farmers, and time-honored cooking methods.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <span className="block text-3xl font-serif text-[#8b7355]">
                  100%
                </span>
                <span className="text-sm text-[#5c5147]">Organic</span>
              </div>
              <div className="h-8 w-px bg-[#8b7355]"></div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-[#8b7355]">
                  Local
                </span>
                <span className="text-sm text-[#5c5147]">Sourcing</span>
              </div>
              <div className="h-8 w-px bg-[#8b7355]"></div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-[#8b7355]">
                  Zero
                </span>
                <span className="text-sm text-[#5c5147]">Waste</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://npr.brightspotcdn.com/dims4/default/7726551/2147483647/strip/true/crop/1640x924+0+0/resize/880x496!/quality/90/?url=http:%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fe5%2Fed%2Ff5692650470eb274bd5ce23b7ad8%2Funtitled-design-7.png"
              // Replace with: "path/to/farm-image.jpg"
              alt="Local farm"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://img.freepik.com/premium-photo/grains-tradition-essence-sustenance-grains-tradition-from-earth-hearth_949162-3586.jpg"
              // Replace with: "path/to/ingredients-image.jpg"
              alt="Fresh ingredients"
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#2c2420] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-16">
            Experience Petrichor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Farmers' Market",
                description:
                  "Every weekend, connect with local farmers and artisans in our market.",
              },
              {
                title: "Cooking Classes",
                description:
                  "Learn traditional techniques in our hands-on cooking workshops.",
              },
              {
                title: "Community Events",
                description:
                  "Join us for wine tastings, live music, and cultural celebrations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 border border-[#8b7355] rounded-lg"
              >
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-[#2c2420] mb-6">
            @petrichor
          </h2>
          <p className="text-[#5c5147] mb-12">
            Follow us for daily inspiration
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.AVa2T6WHkHchv-BobhM9tgAAAA&pid=Api&P=0&h=180"
                // Replace with: "path/to/instagram-image-${index}.jpg"
                alt="Instagram post"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <img
                src="https://wallpapercave.com/wp/wp8522334.jpg"
                // Replace with: "path/to/instagram-image-${index}.jpg"
                alt="Instagram post"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_700/MTc2MjkxMjk4NzY3NDE0NDYy/wiccan-wheel-of-the-year-mabon-correspondences.jpg"
                // Replace with: "path/to/instagram-image-${index}.jpg"
                alt="Instagram post"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-square">
              <img
                src="https://earthbounty-eg.com/wp-content/uploads/2023/10/Tomatoes-7.jpg"
                // Replace with: "path/to/instagram-image-${index}.jpg"
                alt="Instagram post"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
