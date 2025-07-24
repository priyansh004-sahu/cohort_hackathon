import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Calendar, Users, Zap } from "lucide-react";

const CollabsPage = () => {
  const collabs = [
    {
      id: 1,
      influencer: "SHLOK SRIVASTAVA",
      handle: "@shloksrivastava",
      collection: "FOUNDER'S EDITION",
      description:
        "Exclusive pieces from the mind behind Overlays, featuring signature designs and premium materials.",
      image:
        "https://overlaysnow.com/cdn/shop/files/T-shirts_3_2.png?v=1751453554&width=1946",
      status: "LIVE",
      launchDate: "Jan 15, 2024",
      followers: "2.3M",
      pieces: 8,
    },
    {
      id: 2,
      influencer: "TECH GURU",
      handle: "@techguru",
      collection: "DIGITAL DREAMS",
      description:
        "Where technology meets fashion - featuring LED-integrated designs and smart fabric technology.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1740123239_1754404.jpg?w=480&dpr=1.5",
      status: "COMING SOON",
      launchDate: "Feb 1, 2024",
      followers: "1.8M",
      pieces: 12,
    },
    {
      id: 3,
      influencer: "STREET ARTIST",
      handle: "@streetartist",
      collection: "URBAN CANVAS",
      description:
        "Art-inspired streetwear collection featuring hand-painted designs and graffiti aesthetics.",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGm7ANopyuN0Jp61OzF2FGmSaZM7JUYVsoaH32ZO17NfXUQfvyxVrZN4t4zbfj-T_F3WOKIp7WTXr1Z-bymI6whP-RkELnSmYOBUHoZ-TSVuxir50O3xD5",
      status: "SOLD OUT",
      launchDate: "Dec 20, 2023",
      followers: "950K",
      pieces: 15,
    },
    {
      id: 4,
      influencer: "CYBER PUNK",
      handle: "@cyberpunk",
      collection: "NEON NIGHTS",
      description:
        "Futuristic designs with glow-in-the-dark elements and cyberpunk-inspired graphics.",
      image:
        "https://cyber-techwear.com/cdn/shop/files/autodrive-cyberpunk-jacket_6.jpg?v=1707777848&width=600",
      status: "LIVE",
      launchDate: "Jan 10, 2024",
      followers: "1.2M",
      pieces: 10,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "LIVE":
        return "bg-green-500";
      case "COMING SOON":
        return "bg-blue-500";
      case "SOLD OUT":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
            CREATOR COLLABORATIONS
          </span>
          <h1 className="text-6xl font-black text-white mb-4">
            EXCLUSIVE <span className="text-yellow-400">COLLABS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unique collections created in partnership with top influencers and
            creators
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-yellow-400 mb-2">
                50+
              </div>
              <div className="text-gray-400">Creator Partners</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">200+</div>
              <div className="text-gray-400">Exclusive Pieces</div>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-400 mb-2">10M+</div>
              <div className="text-gray-400">Combined Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {collabs.map((collab) => (
              <div
                key={collab.id}
                className="bg-gray-900 border border-gray-800 overflow-hidden group hover:border-yellow-400 transition-all duration-300 rounded-lg"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={collab.image || "/placeholder.svg"}
                      alt={collab.collection}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <span
                      className={`absolute top-4 left-4 ${getStatusColor(
                        collab.status
                      )} text-white font-bold px-2 py-1 text-xs rounded`}
                    >
                      {collab.status}
                    </span>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-yellow-400 font-bold text-sm mb-1">
                        {collab.influencer}
                      </h3>
                      <h4 className="text-white font-black text-xl">
                        {collab.collection}
                      </h4>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{collab.followers}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{collab.launchDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Zap className="w-4 h-4" />
                          <span>{collab.pieces} pieces</span>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-6">{collab.description}</p>
                    </div>

                    <div className="space-y-3">
                      <button
                        className={`w-full font-bold py-3 transition-colors ${
                          collab.status === "LIVE"
                            ? "bg-yellow-400 text-black hover:bg-yellow-300"
                            : collab.status === "COMING SOON"
                            ? "bg-blue-500 text-white hover:bg-blue-400"
                            : "bg-gray-600 text-gray-300 cursor-not-allowed"
                        }`}
                        disabled={collab.status === "SOLD OUT"}
                      >
                        {collab.status === "LIVE" && "SHOP NOW"}
                        {collab.status === "COMING SOON" && "NOTIFY ME"}
                        {collab.status === "SOLD OUT" && "SOLD OUT"}
                      </button>

                      <button className="w-full border border-gray-600 text-gray-400 hover:border-yellow-400 hover:text-yellow-400 bg-transparent py-3 transition-colors">
                        VIEW CREATOR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-4">
            BECOME A PARTNER
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Are you a creator looking to collaborate? Join our exclusive partner
            program and create your own collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-12 py-6 text-lg transition-colors">
              APPLY NOW
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold px-12 py-6 text-lg bg-transparent transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollabsPage;
