
import { motion } from "framer-motion";

export default function WeddingGamesInvite() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-6 space-y-8 font-sans bg-gradient-to-br from-yellow-50 to-pink-100 min-h-screen"
    >
      <h1 className="text-5xl font-extrabold text-rose-600 drop-shadow text-center">🌞 The Wedding Games</h1>
      <p className="text-center text-lg">Celebrating our Solstice Wedding</p>
      <p className="text-center">Sunday, 22nd June 2025</p>
      <p className="text-center">Monikie Country Park, Angus</p>
      <p className="text-center">10:00am - 10:00pm</p>
    </motion.div>
  );
}
