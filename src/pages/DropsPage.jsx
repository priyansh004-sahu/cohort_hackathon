"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Filter, Grid, List } from "lucide-react";

const DropsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [filterBy, setFilterBy] = useState("all");

  const drops = [
    {
      id: 1,
      name: "NEON NIGHTS TEE",
      description: "Glow-in-the-dark streetwear",
      price: 89,
      image:
        "https://overlaysnow.com/cdn/shop/collections/Jackets_472d4fb8-dd3c-4ee1-ba3b-2be239499d05.jpg?v=1748339725&width=3840",
      badge: "LIMITED",
      rating: 5,
      category: "tees",
      dropDate: "2024-01-15",
    },
    {
      id: 2,
      name: "CYBER HOODIE",
      description: "Tech-inspired comfort",
      price: 149,
      image:
        "https://overlaysnow.com/cdn/shop/files/2J7A5298.jpg?v=1752665682&width=1946",
      badge: "NEW",
      rating: 4,
      category: "hoodies",
      dropDate: "2024-01-10",
    },
    {
      id: 3,
      name: "MATRIX JOGGERS",
      description: "Future-ready streetwear",
      price: 119,
      image:
        "https://overlaysnow.com/cdn/shop/files/2J7A7388.jpg?v=1752670842&width=1946",
      badge: "HOT",
      rating: 5,
      category: "bottoms",
      dropDate: "2024-01-08",
    },
    {
      id: 4,
      name: "DIGITAL DREAMS JACKET",
      description: "Premium tech-wear outerwear",
      price: 299,
      image:
        "https://overlaysnow.com/cdn/shop/files/acid_wash_-_chase_02_0a6f0838-a63d-4e08-82fa-0439d720fe47.jpg?v=1727370041&width=750",
      badge: "EXCLUSIVE",
      rating: 5,
      category: "jackets",
      dropDate: "2024-01-05",
    },
    {
      id: 5,
      name: "URBAN PULSE TEE",
      description: "City-inspired streetwear",
      price: 79,
      image:
        "https://overlaysnow.com/cdn/shop/files/1_9182080b-2af1-4f9f-98c0-4fc97d00453a.jpg?v=1745242987&width=750",
      rating: 4,
      category: "tees",
      dropDate: "2024-01-03",
    },
    {
      id: 6,
      name: "FUTURE SHOCK HOODIE",
      description: "Next-gen comfort",
      price: 159,
      image:
        "https://overlaysnow.com/cdn/shop/files/single_color_print-_eagle_04_bacbee61-7c6f-45e2-84d1-b2ae3584b78c.jpg?v=1727369722&width=750",
      badge: "TRENDING",
      rating: 5,
      category: "hoodies",
      dropDate: "2024-01-01",
    },
  ];

  const filteredDrops = drops.filter((drop) => {
    if (filterBy === "all") return true;
    return drop.category === filterBy;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
            LATEST DROPS
          </span>
          <h1 className="text-6xl font-black text-white mb-4">
            NEW <span className="text-yellow-400">RELEASES</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our latest streetwear drops featuring cutting-edge designs
            and premium materials
          </p>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="bg-black border border-gray-700 text-white px-3 py-2 focus:outline-none focus:border-yellow-400"
                >
                  <option value="all">All Items</option>
                  <option value="tees">T-Shirts</option>
                  <option value="hoodies">Hoodies</option>
                  <option value="bottoms">Bottoms</option>
                  <option value="jackets">Jackets</option>
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-black border border-gray-700 text-white px-3 py-2 focus:outline-none focus:border-yellow-400"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                {filteredDrops.length} items
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-yellow-400 text-black"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-yellow-400 text-black"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {filteredDrops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DropsPage;
