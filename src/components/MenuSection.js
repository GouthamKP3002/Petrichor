"use client";
import React, { useState } from "react";
import { Leaf } from "lucide-react";
import Image from "next/image";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Global Comforts");

  const categories = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const menuItems = {
    Monday: [
      {
        name: "Udupi Sambar",
        price: "₹150",
        description:
          "A tangy and flavorful lentil-based curry prepared with freshly ground spices and vegetables.",
        image: "/udapisam.jpg",
        dietary: ["V", "GF"],
      },
      {
        name: "Goli Baje",
        price: "₹80",
        description:
          "Soft and fluffy fritters made with yogurt, flour, and spices, deep-fried to perfection.",
        image: "/goli.jpg",
        dietary: ["V"],
      },
      {
        name: "Neer Dosa",
        price: "₹120",
        description:
          "Thin, soft rice crepes served with coconut chutney and jaggery syrup.",
        image: "/doseU.jpg",
        dietary: ["GF", "V"],
      },
      {
        name: "Tuppa Dosa",
        price: "₹140",
        description:
          "Crispy dosa made with clarified butter, served with sambar and chutney.",
        image: "/tuppaU.jpg",
        dietary: ["V"],
      },
      {
        name: "Pineapple Gojju",
        price: "₹130",
        description:
          "A tangy and spicy pineapple curry with mustard and jaggery flavors.",
        image: "/pinaple.jpg",
        dietary: ["V", "GF"],
      },
      {
        name: "Udupi Rasayana",
        price: "₹60",
        description:
          "A dessert made with ripe bananas, jaggery, and coconut milk.",
        image: "/bananaU.jpg",
        dietary: ["VG", "GF"],
      },
    ],
    Tuesday: [
      {
        name: "Coorgi Pandi Curry",
        price: "₹220",
        description:
          "A spicy pork curry prepared with Coorg’s special black vinegar and spices.",
        image: "/porkU.jpg",
        dietary: ["GF"],
      },
      {
        name: "Kadambuttu",
        price: "₹120",
        description:
          "Soft steamed rice balls traditionally served with Coorg-style curries.",
        image: "/kadbuK.jpg",
        dietary: ["GF", "V"],
      },
      {
        name: "Baimbale Curry (Bamboo Shoot Curry)",
        price: "₹140",
        description:
          "Tender bamboo shoots cooked in coconut and spices, a Coorg specialty.",
        image: "/kalle.jpg",
        dietary: ["VG", "GF"],
      },
      {
        name: "Akki Roti",
        price: "₹100",
        description:
          "Rice flour flatbread flavored with coconut and green chilies.",
        image: "/akkirotioK.jpg",
        dietary: ["GF", "V"],
      },
      {
        name: "Noolputtu (String Hoppers)",
        price: "₹130",
        description: "Rice noodles served with spicy coconut-based curries.",
        image: "/savgeK.jpg",
        dietary: ["GF", "V"],
      },
      {
        name: "Kachampuli Rasayana",
        price: "₹80",
        description:
          "A Coorg dessert with ripe bananas and jaggery infused with Kachampuli vinegar.",
        image: "/rasamK.jpg",
        dietary: ["VG", "GF"],
      },
    ],
    Wednesday: [
      {
        name: "Ragi Mudde",
        price: "₹100",
        description:
          "Finger millet balls served with a hearty greens-based curry.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Bassaru",
        price: "₹120",
        description:
          "Lentil and greens-based curry served as a comforting broth.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Kharabath",
        price: "₹80",
        description: "Spicy semolina dish cooked with vegetables and spices.",
        image: "",
        dietary: ["V"],
      },
      {
        name: "Chutney Pudi",
        price: "₹50",
        description:
          "A flavorful powder made of roasted lentils, chili, and tamarind.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Gurellu Chutney",
        price: "₹70",
        description:
          "Chutney made with sesame seeds and spices, unique to North Karnataka.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Holige (Obbattu)",
        price: "₹100",
        description: "Sweet flatbread stuffed with lentil and jaggery filling.",
        image: "",
        dietary: ["V"],
      },
    ],
    Thursday: [
      {
        name: "Bisi Bele Bath",
        price: "₹150",
        description:
          "A traditional rice and lentil dish flavored with tamarind and spices.",
        image: "",
        dietary: ["V"],
      },
      {
        name: "Kosambari",
        price: "₹60",
        description:
          "Refreshing lentil and cucumber salad seasoned with coconut and lime.",
        image: "",
        dietary: ["V", "GF"],
      },
      {
        name: "Masala Dosa",
        price: "₹140",
        description: "Crispy dosa filled with spicy potato masala.",
        image: "",
        dietary: ["V"],
      },
      {
        name: "Puliogare",
        price: "₹130",
        description: "Tangy tamarind rice with roasted peanuts and spices.",
        image: "",
        dietary: ["V", "GF"],
      },
      {
        name: "Kesari Bath",
        price: "₹100",
        description: "Sweet semolina dessert infused with saffron and ghee.",
        image: "",
        dietary: ["V"],
      },
      {
        name: "Mosaru Bajji",
        price: "₹80",
        description: "Chilled yogurt-based dish with cucumber and spices.",
        image: "",
        dietary: ["V", "GF"],
      },
    ],
    Friday: [
      {
        name: "Mangalorean Neer Dosa",
        price: "₹120",
        description:
          "Soft, lacy rice crepes served with chutney and fish curry.",
        image: "",
        dietary: ["GF"],
      },
      {
        name: "Chicken Ghee Roast",
        price: "₹250",
        description: "Spicy, tangy chicken roast cooked in clarified butter.",
        image: "",
        dietary: ["GF"],
      },
      {
        name: "Mangalorean Fish Curry",
        price: "₹220",
        description:
          "Coconut-based fish curry infused with tamarind and local spices.",
        image: "",
        dietary: ["GF"],
      },
      {
        name: "Kori Roti",
        price: "₹160",
        description: "Crispy rice wafers served with spicy chicken curry.",
        image: "",
        dietary: ["GF"],
      },
      {
        name: "Patrode",
        price: "₹120",
        description:
          "Colocasia leaves stuffed with spiced rice flour batter and steamed.",
        image: "",
        dietary: ["V", "GF"],
      },
      {
        name: "Mangalore Buns",
        price: "₹80",
        description: "Sweet, fluffy fried bread made with banana and flour.",
        image: "",
        dietary: ["V"],
      },
    ],
    Saturday: [
      {
        name: "Jolad Roti",
        price: "₹80",
        description: "Sorghum flatbread served with brinjal curry.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Ennegai",
        price: "₹120",
        description: "Spiced stuffed brinjals cooked in a rich gravy.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Shenga Chutney",
        price: "₹50",
        description:
          "Groundnut-based spicy chutney, a North Karnataka classic.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Hurali Saaru",
        price: "₹130",
        description: "Horse gram curry rich in spices and flavor.",
        image: "",
        dietary: ["VG", "GF"],
      },
      {
        name: "Khar Kadubu",
        price: "₹100",
        description: "Savory rice dumplings served with coconut chutney.",
        image: "",
        dietary: ["V", "GF"],
      },
      {
        name: "Sajjige",
        price: "₹80",
        description: "Semolina dessert flavored with cardamom and ghee.",
        image: "",
        dietary: ["V"],
      },
    ],
    Sunday: [
      {
        name: "Beegruta Pulav",
        price: "₹150",
        description:
          "A signature Mandya dish of fragrant rice cooked with spices and vegetables.",
        image: "",
        dietary: ["V", "GF"],
      },
      {
        name: "Beegruta Mutton Curry",
        price: "₹250",
        description:
          "Slow-cooked mutton curry infused with spices and coconut.",
        image: "",
        dietary: ["GF"],
      },
      {
        name: "Beegruta Kosambari",
        price: "₹80",
        description: "Fresh lentil salad with cucumber, lime, and coconut.",
        image: "",
        dietary: ["V", "GF"],
      },
      {
        name: "Beegruta Curd Rice",
        price: "₹120",
        description:
          "Creamy curd rice seasoned with mustard, curry leaves, and ginger.",
        image: "",
        dietary: ["V", "GF"],
      },
      {
        name: "Mandya Holige",
        price: "₹100",
        description:
          "Sweet flatbread filled with jaggery and lentils, a Mandya classic.",
        image: "",
        dietary: ["V"],
      },
      {
        name: "Beegruta Mysore Pak",
        price: "₹80",
        description: "Rich, buttery sweet made from gram flour and ghee.",
        image: "",
        dietary: ["V"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}

        {/* Category Navigation */}
        <div className="overflow-x-auto">
          <div className="flex justify-center space-x-4 mb-12 min-w-max mx-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#8b7355] text-white"
                    : "bg-white text-[#2c2420] hover:bg-[#8b7355] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex gap-6">
                <div className="relative w-32 h-32">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-[#2c2420]">
                      {item.name}
                    </h3>
                    <span className="text-[#8b7355] font-serif">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#5c5147] mb-3">{item.description}</p>
                  <div className="flex gap-2">
                    {item.dietary?.map((diet) => (
                      <span
                        key={diet}
                        className="text-xs px-2 py-1 bg-[#f8f5f0] rounded-full text-[#5c5147]"
                      >
                        {diet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-[#8b7355]">
            <Leaf size={20} />
            <span className="font-serif italic">
              Menu changes seasonally to showcase the best local ingredients
            </span>
          </div>
        </div>

        {/* Dietary Legend */}
        <div className="mt-8 text-center space-x-4 text-[#5c5147] text-sm">
          <span>V - Vegetarian</span>
          <span>•</span>
          <span>VG - Vegan</span>
          <span>•</span>
          <span>GF - Gluten Free</span>
        </div>
      </div>
    </div>
  );
}
