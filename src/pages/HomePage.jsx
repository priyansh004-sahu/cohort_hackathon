import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Star, Flame, Instagram, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import "./InstagramFeed.css";

const HomePage = () => {
  // Hero section

  const HeroSection = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }, []);

    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://overlaysnow.com/cdn/shop/files/Group_1_e8823afb-7cf1-4791-8f0b-4f37ab038fcf.png?v=1752477400')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          {showContent && (
            <div className="animate-fadeIn transition-opacity duration-1000">
              {/* Badge */}
              <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
                NEXT-GEN STREETWEAR
              </span>

              {/* Heading */}
              <h1 className="text-6xl font-black text-white mb-8">
                REDEFINE <span className="text-yellow-400">YOUR</span> STYLE
              </h1>

              {/* Paragraph */}
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                Explore our exclusive collection of cutting-edge designs and
                premium apparel.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8 py-6 text-lg transition-colors">
                  SHOP NEW ARRIVALS
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-6 text-lg bg-transparent transition-colors">
                  EXPLORE BESTSELLERS
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  // Featured Drops Section
  const FeaturedDrops = () => {
    const drops = [
      {
        id: 1,
        name: "Glory Arc Relaxed Fit T-Shirt - 100% Cotton",
        description: "Glow-in-the-dark streetwear",
        price: 134,
        image:
          "https://overlaysnow.com/cdn/shop/files/overlay_04.jpg?v=1745246338&width=1946",
        badge: "LIMITED",
        rating: 5,
      },
      {
        id: 2,
        name: "CYBER ",
        description: "Tech-inspired comfort",
        price: 149,
        image:
          "https://overlaysnow.com/cdn/shop/files/acid_wash_-_chase_05.jpg?v=1727075023&width=1946",
        badge: "NEW",
        rating: 4,
      },
      {
        id: 3,
        name: "MATRIX ",
        description: "Future-ready streetwear",
        price: 119,
        image:
          "https://overlaysnow.com/cdn/shop/files/1_9182080b-2af1-4f9f-98c0-4fc97d00453a.jpg?v=1745242987&width=1946",
        badge: "HOT",
        rating: 5,
      },
      {
        id: 4,
        name: "MATRIX ",
        description: "Future-ready streetwear",
        price: 119,
        image:
          "https://overlaysnow.com/cdn/shop/files/OV5359.jpg?v=1741691967&width=1946",
        badge: "HOT",
        rating: 5,
      },
      {
        id: 4,
        name: "MATRIX ",
        description: "Future-ready streetwear",
        price: 119,
        image:
          "https://overlaysnow.com/cdn/shop/files/BD0A0171.jpg?v=1746015192&width=1946",
        badge: "HOT",
        rating: 5,
      },
      {
        id: 4,
        name: "SHARK ",
        description: "Future-ready streetwear",
        price: 119,
        image:
          "https://overlaysnow.com/cdn/shop/files/BlueSharkPhoto_6.jpg?v=1720972088&width=1946",
        badge: "HOT",
        rating: 5,
      },
    ];

    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-blue-500 text-white font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
              <Flame className="w-4 h-4 mr-2 inline" />
              FEATURED DROPS
            </span>
            <h2 className="text-5xl font-black text-white mb-4">
              LATEST <span className="text-yellow-400">RELEASES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our newest drops featuring cutting-edge designs and
              premium materials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drops.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold px-12 py-6 hover:scale-105 transition-transform">
              VIEW ALL DROPS
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Bestsellers Section
  const Bestsellers = () => {
    const bestsellers = [
      {
        id: 1,
        name: "URBAN LEGEND TEE",
        description: "Classic streetwear essential",
        price: 69,
        image:
          "https://overlaysnow.com/cdn/shop/files/BeigeFlowersPhoto_7.jpg?v=1720969483&width=1946",
        rating: 5,
      },
      {
        id: 2,
        name: "STREET KING HOODIE",
        description: "Premium comfort meets style",
        price: 129,
        image:
          "https://overlaysnow.com/cdn/shop/files/Red_Embossed_Hoodie_01_d906ee17-88d2-4cdb-bad3-2b6c214b6077.jpg?v=1733228773&width=1946",
        rating: 5,
      },
      {
        id: 3,
        name: "REBEL JACKET",
        description: "Statement outerwear piece",
        price: 199,
        image:
          "https://overlaysnow.com/cdn/shop/files/OV4648.jpg?v=1734681415&width=1946",
        rating: 4,
      },
      {
        id: 4,
        name: "Urban Fade Cargo",
        description: "Next-gen streetwear",
        price: 99,
        image:
          "https://overlaysnow.com/cdn/shop/files/OV5209.jpg?v=1741610090&width=1946",
        rating: 5,
      },
    ];

    return (
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-yellow-400 text-black font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
              <Star className="w-4 h-4 mr-2 inline" />
              BESTSELLERS
            </span>
            <h2 className="text-5xl font-black text-white mb-4">
              CROWD <span className="text-blue-400">FAVORITES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The pieces everyone's talking about - proven hits that define the
              culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Influencer Collabs Section
  const InfluencerCollabs = () => {
    const collabs = [
      {
        id: 1,
        influencer: "SHLOK SRIVASTAVA",
        collection: "FOUNDER'S EDITION",
        image:
          "https://overlaysnow.com/cdn/shop/files/BD0A4713.jpg?v=1736578660&width=1946",
        description: "Exclusive pieces from the mind behind Overlays",
      },
      {
        id: 2,
        influencer: "TECH GURU",
        collection: "DIGITAL DREAMS",
        image:
          "https://overlaysnow.com/cdn/shop/files/11_e205ac9f-d81f-43fc-b27e-8d706e24d100.png?v=1751453554&width=1946",
        description: "Where technology meets fashion",
      },
      {
        id: 3,
        influencer: "STREET ARTIST",
        collection: "URBAN CANVAS",
        image:
          "https://overlaysnow.com/cdn/shop/files/1L9A2527.jpg?v=1749035012&width=1946",
        description: "Art-inspired streetwear collection",
      },
    ];

    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
              COLLABORATIONS
            </span>
            <h2 className="text-5xl font-black text-white mb-4">
              CREATOR <span className="text-yellow-400">COLLABS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Exclusive collections created with top influencers and creators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collabs.map((collab) => (
              <div
                key={collab.id}
                className="bg-gray-900 border border-gray-800 overflow-hidden group hover:border-yellow-400 transition-colors rounded-lg"
              >
                <div className="relative">
                  <img
                    src={collab.image || "/placeholder.svg"}
                    alt={collab.collection}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-yellow-400 font-bold text-sm">
                      {collab.influencer}
                    </h3>
                    <h4 className="text-white font-black text-xl">
                      {collab.collection}
                    </h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{collab.description}</p>
                  <button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold py-3 transition-colors">
                    EXPLORE COLLAB
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const InstagramFeed = () => {
    // ==================================================================
    // ==> PASTE YOUR IMAGE LINKS HERE <==
    // Replace these placeholder links with the direct links to your images.
    // You can add as many links as you want.
    const yourImageLinks = [
      "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-16_at_4.29.02_PM.jpg?v=1752665166&width=400",
      "https://overlaysnow.com/cdn/shop/files/Screenshot_2024-09-26_at_3.51.32_PM_87564f2d-068b-4a9d-ad67-12aa60191d76.jpg?v=1748110771&width=400",
      "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-16_at_4.29.16_PM.jpg?v=1752665166&width=400",
      "https://overlaysnow.com/cdn/shop/files/WhatsApp_Image_2025-07-16_at_4.29.14_PM.jpg?v=1752665166&width=400",
      "https://overlaysnow.com/cdn/shop/files/Frame_45.png?v=1748079666&width=400",
    ];
    // ==================================================================

    // The code now uses your list of links to create the posts.
    const posts = yourImageLinks.map((link, i) => ({
      id: i + 1,
      image: link,
      likes: Math.floor(Math.random() * 10000) + 1000,
    }));

    return (
      <div className="instagram-feed-container">
        <h2 className="feed-title">
          Follow Us on Instagram{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @YourHandle
          </a>
        </h2>
        <div className="instagram-scroll-container">
          {posts.map((post) => (
            <div key={post.id} className="instagram-post">
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="post-image"
              />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="post-overlay"
              >
                <div className="post-stats">
                  <span>❤️ {post.likes.toLocaleString()}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Newsletter Section
  const Newsletter = () => (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-blue-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-black text-black mb-4">
          STAY IN THE LOOP
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
          Get exclusive access to new drops, behind-the-scenes content, and
          special offers
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white border-0 text-black placeholder:text-gray-500 flex-1 px-4 py-3 focus:outline-none"
          />
          <button className="bg-black text-white hover:bg-gray-800 font-bold px-8 py-3 transition-colors">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <FeaturedDrops />
      <Bestsellers />
      <InfluencerCollabs />
      <InstagramFeed />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;

("use client");