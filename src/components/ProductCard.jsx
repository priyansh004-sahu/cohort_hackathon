"use client";

import { useState } from "react";
import { Heart, Eye, Star } from "lucide-react";
import QuickViewModal from "./QuickViewModal";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <>
      <div
        className="bg-gray-900 border border-gray-800 overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 rounded-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={
              product.image ||
              "https://via.placeholder.com/400x400?text=Product"
            }
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center space-x-4">
              <button
                className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-4 py-2 text-sm rounded transition-colors"
                onClick={() => setShowQuickView(true)}
              >
                <Eye className="w-4 h-4 mr-2 inline" />
                Quick View 3D
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black bg-transparent px-3 py-2 rounded transition-colors">
                <Heart className="w-4 h-4" />
              </button>
            </div>
          )}

          {product.badge && (
            <span className="absolute top-4 left-4 bg-red-500 text-white font-bold px-2 py-1 text-xs rounded">
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-yellow-400 font-bold text-xl">
              ${product.price}
            </span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <QuickViewModal
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
        product={product}
      />
    </>
  );
};
//
export default ProductCard;

// "use client"

// import { useState, useRef } from "react"
// import { Heart, Eye, Star } from "lucide-react"
// import QuickViewModal from "./QuickViewModal"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { Environment } from "@react-three/drei"

// const QuickView3DTShirt = ({ productId, productName }) => {
//   const meshRef = useRef()

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
//       meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
//     }
//   })

//   const getProductDesign = (id) => {
//     const designs = {
//       1: { color: "#00ff88", emissive: "#001122", text: "NEON", textColor: "#ffff00" },
//       2: { color: "#0088ff", emissive: "#000022", text: "CYBER", textColor: "#00ffff" },
//       3: { color: "#ff0088", emissive: "#220011", text: "MATRIX", textColor: "#ff00ff" },
//       4: { color: "#ffaa00", emissive: "#221100", text: "URBAN", textColor: "#ffffff" },
//       5: { color: "#aa00ff", emissive: "#110022", text: "STREET", textColor: "#ffff00" },
//       6: { color: "#ff4400", emissive: "#220000", text: "REBEL", textColor: "#00ffff" },
//       7: { color: "#00aaff", emissive: "#001122", text: "FUTURE", textColor: "#ffaa00" },
//     }
//     return designs[id] || designs[1]
//   }

//   const design = getProductDesign(productId)

//   return (
//     <group>
//       <mesh ref={meshRef} position={[0, 0, 0]}>
//         <boxGeometry args={[2.5, 3, 0.15]} />
//         <meshStandardMaterial color={design.color} emissive={design.emissive} metalness={0.2} roughness={0.3} />

//         {/* Front Design with better positioning */}
//         <mesh position={[0, 0.5, 0.08]}>
//           <boxGeometry args={[1.5, 0.8, 0.02]} />
//           <meshStandardMaterial color={design.textColor} emissive={design.emissive} />
//         </mesh>

//         {/* Brand Logo */}
//         <mesh position={[0, -0.5, 0.08]}>
//           <boxGeometry args={[1.2, 0.3, 0.02]} />
//           <meshStandardMaterial color="#ffffff" />
//         </mesh>

//         {/* Sleeve details */}
//         <mesh position={[-1.5, 0.8, 0]}>
//           <cylinderGeometry args={[0.3, 0.35, 1.2, 8]} />
//           <meshStandardMaterial color={design.color} emissive={design.emissive} metalness={0.2} roughness={0.3} />
//         </mesh>
//         <mesh position={[1.5, 0.8, 0]}>
//           <cylinderGeometry args={[0.3, 0.35, 1.2, 8]} />
//           <meshStandardMaterial color={design.color} emissive={design.emissive} metalness={0.2} roughness={0.3} />
//         </mesh>

//         {/* Collar */}
//         <mesh position={[0, 1.4, 0]}>
//           <torusGeometry args={[0.4, 0.1, 8, 16]} />
//           <meshStandardMaterial color={design.color} emissive={design.emissive} />
//         </mesh>
//       </mesh>
//     </group>
//   )
// }

// const ProductCard = ({ product }) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [showQuickView, setShowQuickView] = useState(false)
//    if (!product || !product.image) {
//     return null; // or render a skeleton loader
//   }

//   return (
//     <>
//       <div
//         className="bg-gray-900 border border-gray-800 overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 rounded-lg"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="relative overflow-hidden">
//           <img
//             src={product.image || "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D"}
//             alt={product.name}
//             className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//           {isHovered && (
//             <div className="absolute inset-0 flex items-center justify-center space-x-4">
//               <button
//                 className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-4 py-2 text-sm rounded transition-colors"
//                 onClick={() => setShowQuickView(true)}
//               >
//                 <Eye className="w-4 h-4 mr-2 inline" />
//                 Quick View 3D
//               </button>
//               <button className="border border-white text-white hover:bg-white hover:text-black bg-transparent px-3 py-2 rounded transition-colors">
//                 <Heart className="w-4 h-4" />
//               </button>
//             </div>
//           )}

//           {product.badge && (
//             <span className="absolute top-4 left-4 bg-red-500 text-white font-bold px-2 py-1 text-xs rounded">
//               {product.badge}
//             </span>
//           )}
//         </div>

//         <div className="p-6">
//           <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
//           <p className="text-gray-400 text-sm mb-4">{product.description}</p>
//           <div className="flex items-center justify-between">
//             <span className="text-yellow-400 font-bold text-xl">${product.price}</span>
//             <div className="flex items-center space-x-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`w-4 h-4 ${i < product.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <QuickViewModal isOpen={showQuickView} onClose={() => setShowQuickView(false)} product={product}>
//         <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 5] }}>
//           <ambientLight intensity={0.7} />
//           <spotLight position={[5, 5, 5]} angle={0.3} penumbra={0.5} intensity={0.5} castShadow />
//           <QuickView3DTShirt productId={product.id} productName={product.name} />
//           <Environment preset="city" />
//         </Canvas>
//       </QuickViewModal>
//     </>
//   )
// }

// export default ProductCard
