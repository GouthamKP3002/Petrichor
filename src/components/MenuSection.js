"use client";
import React, { useState } from "react";
import { Leaf } from "lucide-react";
import Image from "next/image";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Global Comforts");

  const categories = [
    "Global Comforts",
    "Farm Fresh Salads",
    "Heritage Grains",
    "Wild Catch",
  ];

  const menuItems = {
    "Global Comforts": [
      {
        name: "Traditional Butter Chicken",
        price: "$22",
        description:
          "Free-range chicken in a rich, aromatic tomato-cream sauce with hand-ground spices",
        image:
          "https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg",
        // Add actual image URL: "/images/butter-chicken.jpg"
        dietary: ["GF"],
      },
      {
        name: "Paneer Tikka Masala",
        price: "$20",
        description:
          "Char-grilled cottage cheese in a creamy, spiced tomato gravy",
        image:
          "https://www.thespruceeats.com/thmb/0mapLbrjEH8-iMB4RBMTYbV-Urc=/3863x2578/filters:fill(auto,1)/paneer-butter-masala-or-cheese-cottage-curry--popular-indian-lunch-dinner-menu-in-weddings-or-parties--selective-focus-669329084-5acac5acc67335003764a3bc.jpg",
        // Add actual image URL: "/images/paneer-tikka.jpg"
        dietary: ["V", "GF"],
      },
      {
        name: "Hyderabadi Biryani",
        price: "$24",
        description:
          "Long-grain basmati rice, tender chicken, saffron, and aromatic spices",
        image:
          "https://leyaana.com/wp-content/uploads/2022/04/thjrkjh-scaled.jpeg",
        // Add actual image URL: "/images/biryani.jpg"
        dietary: ["GF"],
      },
      {
        name: "Wild Mushroom Pappardelle",
        price: "$20",
        description:
          "House-made pasta with locally foraged mushrooms and fresh herbs",
        image: "https://live.staticflickr.com/2411/2273387844_252b91a956_b.jpg",
        // Add actual image URL: "/images/mushroom-pasta.jpg"
        dietary: ["V"],
      },
      {
        name: "Mexican Street Tacos",
        price: "$18",
        description:
          "Organic corn tortillas, grass-fed beef, fresh salsa verde",
        image:
          "https://4.bp.blogspot.com/-FVzRbBOC93o/WyTBop5XwbI/AAAAAAAAE1Y/jju-7aEIfPo_amMfRXsQ8MrZG6CXxhHDgCLcBGAs/s1600/cropped-11960570_10200648513051128_1436061844_o.jpg",
        // Add actual image URL: "/images/tacos.jpg"
        dietary: ["GF"],
      },
      {
        name: "Vegetable Korma",
        price: "$18",
        description:
          "Seasonal vegetables in a rich, mildly spiced cashew and coconut curry",
        image:
          "https://www.ihearteating.com/wp-content/uploads/2016/04/vegetable-korma-1200-1.jpg",
        // Add actual image URL: "/images/vegetable-korma.jpg"
        dietary: ["VG", "GF"],
      },
    ],
    "Farm Fresh Salads": [
      {
        name: "Heritage Tomato & Burrata",
        price: "$16",
        description: "Heirloom tomatoes, creamy burrata, basil, aged balsamic",
        image:
          "https://www.justalittlebitofbacon.com/wp-content/uploads/2018/08/tomato-burrata-salad-2.jpg",
        // Add actual image URL: "/images/tomato-burrata.jpg"
        dietary: ["V", "GF"],
      },
      {
        name: "Harvest Garden Salad",
        price: "$14",
        description:
          "Seasonal greens, roasted vegetables, toasted seeds, herb vinaigrette",
        image:
          "http://minimalistbaker.com/wp-content/uploads/2017/06/AMAZING-Roasted-Vegetable-Salad-Chimichurri-30-minutes-healthy-SO-delicious-vegan-plantbased-glutenfree-salad-recipe-minimalistbaker.jpg",
        // Add actual image URL: "/images/garden-salad.jpg"
        dietary: ["VG", "GF"],
      },
      {
        name: "Chickpea Chaat Salad",
        price: "$15",
        description:
          "Spiced chickpeas, onions, tomatoes, tangy tamarind dressing",
        image:
          "https://i.pinimg.com/originals/40/67/1d/40671d2288d2fbbf46edc93b97f5144a.png",
        // Add actual image URL: "/images/chaat-salad.jpg"
        dietary: ["VG", "GF"],
      },
      {
        name: "Quinoa Tabbouleh",
        price: "$15",
        description: "Quinoa, parsley, mint, tomatoes, lemon dressing",
        image:
          "https://www.nutritiouseats.com/wp-content/uploads/2012/06/Tabouli-4.jpg",
        // Add actual image URL: "/images/quinoa-tabbouleh.jpg"
        dietary: ["VG", "GF"],
      },
      {
        name: "Spicy Mango Salad",
        price: "$16",
        description: "Fresh mango slices, chili flakes, lime dressing",
        image:
          "https://thewanderlustkitchen.com/wp-content/uploads/2021/05/Mango-Salad-090-1024x683.jpg",
        // Add actual image URL: "/images/mango-salad.jpg"
        dietary: ["VG", "GF"],
      },
      {
        name: "Cucumber Raita Salad",
        price: "$12",
        description: "Cucumber, yogurt, roasted cumin, fresh mint",
        image: "https://toriavey.com/images/2014/03/IMG_7455-2.jpeg",
        // Add actual image URL: "/images/raita-salad.jpg"
        dietary: ["V", "GF"],
      },
    ],
    "Heritage Grains": [
      {
        name: "Ancient Grain Bowl",
        price: "$19",
        description: "Quinoa, farro, roasted vegetables, tahini dressing",
        image:
          "https://i.pinimg.com/originals/04/77/bf/0477bfaa8277c7ae30aae5a82e27bf04.jpg",
        // Add actual image URL: "/images/grain-bowl.jpg"
        dietary: ["VG"],
      },
      {
        name: "Vegetable Pulao",
        price: "$17",
        description:
          "Fragrant basmati rice cooked with seasonal vegetables and spices",
        image:
          "https://thespicemess.com/wp-content/uploads/2021/01/Vegetable-Pulao-21-feature-1280x904.jpg",
        // Add actual image URL: "/images/vegetable-pulao.jpg"
        dietary: ["VG", "GF"],
      },
      {
        name: "Khichdi with Ghee",
        price: "$16",
        description:
          "Lentil and rice porridge seasoned with turmeric and clarified butter",
        image:
          "https://img.freepik.com/premium-photo/dal-khichdi-fry-with-ghee-bowl-hindu_1279574-5016.jpg",
        // Add actual image URL: "/images/khichdi.jpg"
        dietary: ["VG", "GF"],
      },
      {
        name: "Barley Risotto",
        price: "$18",
        description: "Creamy barley with roasted butternut squash and sage",
        image:
          "http://images.media-allrecipes.com/userphotos/960x960/3756518.jpg",
        // Add actual image URL: "/images/barley-risotto.jpg"
        dietary: ["V"],
      },
      {
        name: "Coconut Rice Pilaf",
        price: "$16",
        description: "Basmati rice infused with coconut milk and curry leaves",
        image:
          "https://img.apmcdn.org/4b31515e9810edcca35c9451391fa02d7d5ea799/uncropped/0922c5-splendid-table-coconut-milk-rice-pilaf.jpg",
        // Add actual image URL: "/images/coconut-rice.jpg"
        dietary: ["VG", "GF"],
      },
      {
        name: "Dalia Upma",
        price: "$15",
        description:
          "Cracked wheat with vegetables, mustard seeds, and curry leaves",
        image:
          "https://www.whiskaffair.com/wp-content/uploads/2020/08/Dalia-Upma-1.jpg",
        // Add actual image URL: "/images/dalia-upma.jpg"
        dietary: ["VG", "GF"],
      },
    ],
    "Wild Catch": [
      {
        name: "Grilled Sea Bass",
        price: "$32",
        description: "Line-caught sea bass, herb butter, seasonal vegetables",
        image:
          "https://kayakguru.com/wp-content/uploads/2019/04/Grilled-sea-bass-served-on-a-plate.jpg",
        // Add actual image URL: "/images/sea-bass.jpg"
        dietary: ["GF"],
      },
      {
        name: "Tandoori Salmon",
        price: "$30",
        description:
          "Salmon marinated in yogurt and spices, roasted in a clay oven",
        image:
          "https://greatcurryrecipes.net/wp-content/uploads/2012/03/tans4-1152x1536.jpg",
        // Add actual image URL: "/images/tandoori-salmon.jpg"
        dietary: ["GF"],
      },
      {
        name: "Kerala Fish Curry",
        price: "$28",
        description:
          "Fresh fish cooked in a coconut-based curry with curry leaves",
        image:
          "https://www.licious.in/blog/wp-content/uploads/2020/12/Kerala-Fish-Curry.jpg",
        // Add actual image URL: "/images/kerala-fish-curry.jpg"
        dietary: ["GF"],
      },
      {
        name: "Spicy Crab Masala",
        price: "$35",
        description: "Blue crab cooked in a spicy tomato and onion gravy",
        image:
          "http://www.archanaskitchen.com/images/archanaskitchen/1-Author/FlavorFlameFusion/shutterstock_444716848.jpg",
        // Add actual image URL: "/images/crab-masala.jpg"
        dietary: ["GF"],
      },
      {
        name: "Shrimp Moilee",
        price: "$29",
        description: "Prawns simmered in a delicate coconut milk curry",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.HNIq5o81vYXcOz-Lmz10KwHaHa&pid=Api&P=0&h=180",
        // Add actual image URL: "/images/shrimp-moilee.jpg"
        dietary: ["GF"],
      },
      {
        name: "Mahi-Mahi Tikka",
        price: "$31",
        description:
          "Chunks of mahi-mahi marinated in Indian spices and grilled to perfection",
        image:
          "https://lh3.googleusercontent.com/vSv77jt7rJnTvkX_M_WU-0mOGbDKeD39sLsHv000ERJy7j5PR1mlYwZF4d4mZtKHJ0-c_WQsnZvSR6kSFfX5OZjHICe_eqSM53O6bFUVq0QlKOrEmCZI",
        // Add actual image URL: "/images/mahi-tikka.jpg"
        dietary: ["GF"],
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
