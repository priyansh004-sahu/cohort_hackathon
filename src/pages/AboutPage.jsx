import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Target, Zap, Users, Globe } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "INNOVATION",
      description:
        "Pushing the boundaries of streetwear with cutting-edge designs and technology integration.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "COMMUNITY",
      description:
        "Building a global community of creators, influencers, and fashion enthusiasts.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AUTHENTICITY",
      description:
        "Staying true to our roots while constantly evolving with the culture.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SUSTAINABILITY",
      description:
        "Committed to ethical production and sustainable fashion practices.",
    },
  ];

  const team = [
    {
      name: "SHLOK SRIVASTAVA",
      role: "FOUNDER & CEO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz1pHR8pT1I00XRkHbq5IUa6im8BEKiT4W66zf4jqBVIJ7Qza-kROXY3btJaK4XIpPEdU&usqp=CAU",
      bio: "Visionary behind Overlays, combining tech expertise with streetwear passion.",
    },
    {
      name: "Rajorshi Das",
      role: "CREATIVE DIRECTOR",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGyFBfXcGSkwQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714583428989?e=1756339200&v=beta&t=oAL2Wc2YAPDSDoa1THEoozXr7106Ont8jsfok3LCxpw",
      bio: "Leading design innovation and brand aesthetic across all collections.",
    },
    {
      name: "Neel Gogia",
      role: "HEAD OF PARTNERSHIPS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcHgM3_o96G4DTlwJjpUjK9WZJgdNQb8LQ7KAL91jiN9xEFiDD6EPQW7xm3fwVqbbTOfT_y9ZGxFq6Lqc-YrNHOsS3QFGLkCZQ2gNhjH-",
      bio: "Building relationships with creators and managing collaboration projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-black font-bold px-4 py-2 mb-4 inline-block text-sm rounded">
                OUR STORY
              </span>
              <h1 className="text-6xl font-black text-white mb-6">
                REDEFINING <span className="text-yellow-400">STREETWEAR</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Founded in 2021, Overlays emerged from a vision to bridge the
                gap between technology and fashion. We're not just a clothing
                brand – we're a movement that celebrates digital culture,
                creativity, and the future of self-expression.
              </p>
              <button className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-8 py-6 text-lg transition-colors">
                JOIN OUR MISSION
              </button>
            </div>
            <div className="relative">
              <iframe
                className="w-full aspect-video rounded-lg" // Recommended for responsive sizing
                src="https://www.youtube.com/embed/owSTHdu4mSc" // <-- CORRECTED URL
                title="What Is Overlays?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent rounded-lg pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-white mb-8">
            OUR <span className="text-blue-400">MISSION</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            To create streetwear that doesn't just follow trends – but sets
            them. We're building a brand that speaks to the digital generation,
            combining innovative design with authentic street culture.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              OUR <span className="text-yellow-400">VALUES</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 text-center group hover:border-yellow-400 transition-colors p-8 rounded-lg"
              >
                <div className="text-yellow-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-white font-black text-xl mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              MEET THE <span className="text-blue-400">TEAM</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The creative minds behind Overlays
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 p-1">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 overflow-hidden group hover:border-yellow-400 transition-colors rounded-lg"
              >
                <div className="relative overflow-hidden ">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-black text-xl mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-bold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-yellow-400 mb-2">
                100K+
              </div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-400 mb-2">50+</div>
              <div className="text-gray-400">Unique Designs</div>
            </div>
            <div>
              <div className="text-5xl font-black text-pink-400 mb-2">25+</div>
              <div className="text-gray-400">Countries Shipped</div>
            </div>
            <div>
              <div className="text-5xl font-black text-green-400 mb-2">1M+</div>
              <div className="text-gray-400">Social Followers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-black text-black mb-4">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Be part of the future of streetwear. Follow our journey and stay
            updated with the latest drops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white hover:bg-gray-800 font-bold px-12 py-6 text-lg transition-colors">
              SHOP NOW
            </button>
            <button className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-12 py-6 text-lg bg-transparent transition-colors">
              FOLLOW US
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
