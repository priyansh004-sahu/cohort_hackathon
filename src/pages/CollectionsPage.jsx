import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ArrowRight, Heart } from "lucide-react";

const CollectionsPage = () => {
  const collections = [
    {
      id: 1,
      name: "Cargo",
      description: "",
      itemCount: 12,
      image:
        "https://overlaysnow.com/cdn/shop/files/OV5648.jpg?v=1741610013&width=1946",
      badge: "LIMITED EDITION",
      color: "from-yellow-400 to-green-400",
    },
    {
      id: 2,
      name: "Shirts ",
      description: "",
      itemCount: 18,
      image:
        "https://overlaysnow.com/cdn/shop/files/T-shirts_3_2.png?v=1751453554&width=1946",
      badge: "NEW",
      color: "from-blue-400 to-purple-400",
    },
    {
      id: 3,
      name: "Realxed ",
      description: "  ",
      itemCount: 24,
      image:
        "https://overlaysnow.com/cdn/shop/files/BD0A0240_fdccdf9d-7be7-4b89-9347-cad788bc2390.jpg?v=1750059500&width=1946",
      badge: "BESTSELLER",
      color: "from-red-400 to-pink-400",
    },
    {
      id: 4,
      name: "Sleeveless",
      description: "",
      itemCount: 15,
      image:
        "https://overlaysnow.com/cdn/shop/files/BeigeSleeveless_OVRLYS_2.jpg?v=1720522969&width=1946",
      badge: "EXCLUSIVE",
      color: "from-purple-400 to-blue-400",
    },
    {
      id: 5,
      name: "Winter Arrival",
      description: "",
      itemCount: 20,
      image:
        "https://overlaysnow.com/cdn/shop/files/1L9A8424.jpg?v=1729761186&width=1946",
      color: "from-orange-400 to-red-400",
    },
    {
      id: 6,
      name: "Super Essential",
      description: "",
      itemCount: 16,
      image:
        "https://overlaysnow.com/cdn/shop/files/Edit_9.3.jpg?v=1740986491&width=1946",
      badge: "TRENDING",
      color: "from-green-400 to-teal-400",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
            CURATED COLLECTIONS
          </span>
          <h1 className="text-6xl font-black text-white mb-4">
            EXPLORE <span className="text-yellow-400">COLLECTIONS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our carefully curated collections, each telling a unique
            story through fashion
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-gray-900 border border-gray-800 overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 rounded-lg"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {collection.badge && (
                    <span className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-2 py-1 text-xs rounded">
                      {collection.badge}
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-black text-2xl mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {collection.itemCount} items
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-white hover:text-yellow-400 bg-black/50 p-2 rounded">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 mb-4">{collection.description}</p>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-blue-500 text-black hover:opacity-90 font-bold py-3 group transition-opacity">
                    EXPLORE COLLECTION
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-black mb-4">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join our community and be the first to know about new collections
            and exclusive drops
          </p>
          <button className="bg-black text-white hover:bg-gray-800 font-bold px-12 py-6 text-lg transition-colors">
            JOIN THE COMMUNITY
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollectionsPage;
