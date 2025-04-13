import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full text-white pt-5">
      {/* Section 1: Hero */}
      <section className="h-screen w-full relative overflow-hidden bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center flex-col px-6 text-center">

        {/* Glowing Background Blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500 opacity-20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 opacity-20 rounded-full blur-[150px] animate-pulse delay-500" />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 drop-shadow-lg"
        >
          Build Bold Interfaces
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-xl"
        >
          Motion-driven, beautiful UI components for modern apps.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>

      {/* Section 2: Features */}
      <section className="w-full bg-white text-gray-900 py-20 px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Why Developers Love Our UI Library
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Fast & Lightweight</h3>
            <p className="text-gray-600">
              Designed for performance with zero bloat. Get lightning-fast UI rendering.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Stunning Design</h3>
            <p className="text-gray-600">
              Clean, modern components with beautiful animations and minimal styles.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-xl font-bold mb-2">Modular Components</h3>
            <p className="text-gray-600">
              Easily plug into any project. Each part is reusable, flexible, and customizable.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
