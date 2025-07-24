"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { X, RotateCcw, ZoomIn, Heart, Star } from "lucide-react";

// 3D T-Shirt Component
const QuickView3DTShirt = ({ productId, productName }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  const getProductDesign = (id) => {
    const designs = {
      1: {
        color: "#00ff88",
        emissive: "#001122",
        text: "NEON",
        textColor: "#ffff00",
      },
      2: {
        color: "#0088ff",
        emissive: "#000022",
        text: "CYBER",
        textColor: "#00ffff",
      },
      3: {
        color: "#ff0088",
        emissive: "#220011",
        text: "MATRIX",
        textColor: "#ff00ff",
      },
      4: {
        color: "#ffaa00",
        emissive: "#221100",
        text: "URBAN",
        textColor: "#ffffff",
      },
      5: {
        color: "#aa00ff",
        emissive: "#110022",
        text: "STREET",
        textColor: "#ffff00",
      },
      6: {
        color: "#ff4400",
        emissive: "#220000",
        text: "REBEL",
        textColor: "#00ffff",
      },
      7: {
        color: "#00aaff",
        emissive: "#001122",
        text: "FUTURE",
        textColor: "#ffaa00",
      },
    };
    return designs[id] || designs[1];
  };

  const design = getProductDesign(productId);

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 3, 0.15]} />
        <meshStandardMaterial color={design.color} emissive={design.emissive} />

        {/* Sleeve details */}
        <mesh position={[-1.5, 0.8, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 1.2, 8]} />
          <meshStandardMaterial
            color={design.color}
            emissive={design.emissive}
          />
        </mesh>
        <mesh position={[1.5, 0.8, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 1.2, 8]} />
          <meshStandardMaterial
            color={design.color}
            emissive={design.emissive}
          />
        </mesh>
      </mesh>
    </group>
  );
};

const QuickViewModal = ({ isOpen, onClose, product }) => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-black border-2 border-yellow-400 w-full max-w-6xl h-[80vh] mx-4 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0 h-full">
          {/* 3D Viewer Side */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white hover:text-yellow-400 bg-black/50 hover:bg-black/70 p-2 rounded"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="h-full">
              <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.6} />
                  <pointLight
                    position={[10, 10, 10]}
                    intensity={1.2}
                    color="#ffff00"
                  />
                  <pointLight
                    position={[-10, -10, -10]}
                    intensity={0.8}
                    color="#0088ff"
                  />
                  <pointLight
                    position={[0, 10, 5]}
                    intensity={0.6}
                    color="#ff00ff"
                  />
                  <QuickView3DTShirt
                    productId={product.id}
                    productName={product.name}
                  />
                  <Environment preset="night" />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    minDistance={4}
                    maxDistance={10}
                    autoRotate={true}
                    autoRotateSpeed={1}
                  />
                </Suspense>
              </Canvas>
            </div>

            {/* 3D Controls */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <span className="bg-yellow-400 text-black font-bold px-3 py-1 text-sm rounded">
                <RotateCcw className="w-4 h-4 mr-1 inline" />
                360° VIEW
              </span>
              <span className="bg-blue-500 text-white font-bold px-3 py-1 text-sm rounded">
                <ZoomIn className="w-4 h-4 mr-1 inline" />
                INTERACTIVE
              </span>
            </div>
          </div>

          {/* Product Details Side */}
          <div className="p-8 bg-gray-900 overflow-y-auto">
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {product.badge && (
                    <span className="bg-red-500 text-white font-bold px-2 py-1 text-xs rounded">
                      {product.badge}
                    </span>
                  )}
                  <span className="bg-green-500 text-white font-bold px-2 py-1 text-xs rounded">
                    IN STOCK
                  </span>
                </div>
                <h2 className="text-3xl font-black text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-400 text-lg mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-yellow-400">
                    ${product.price}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-gray-400 ml-2">(127 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-white font-bold mb-3">SIZE</h3>
                <div className="grid grid-cols-6 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`font-bold py-2 px-3 border transition-colors ${
                        selectedSize === size
                          ? "bg-yellow-400 text-black border-yellow-400"
                          : "border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400 bg-transparent"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-white font-bold mb-3">QUANTITY</h3>
                <div className="flex items-center space-x-4">
                  <button
                    className="border border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400 bg-transparent w-10 h-10 flex items-center justify-center"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="text-white font-bold text-xl w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    className="border border-gray-600 text-white hover:border-yellow-400 hover:text-yellow-400 bg-transparent w-10 h-10 flex items-center justify-center"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Product Features */}
              <div>
                <h3 className="text-white font-bold mb-3">FEATURES</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Premium cotton blend fabric</li>
                  <li>• Glow-in-the-dark print technology</li>
                  <li>• Oversized streetwear fit</li>
                  <li>• Limited edition design</li>
                  <li>• Machine washable</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 pt-4">
                <button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg py-6 transition-colors">
                  ADD TO CART - ${(product.price * quantity).toFixed(2)}
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black font-bold py-3 bg-transparent transition-colors">
                    <Heart className="w-5 h-5 mr-2 inline" />
                    WISHLIST
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 bg-transparent transition-colors">
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
