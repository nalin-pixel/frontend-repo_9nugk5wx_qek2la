import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-rose-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-sky-700 ring-1 ring-sky-200">
              <Heart className="h-4 w-4 text-rose-500" />
              Together, we can change the story
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Give homeless children a safe night and a brighter tomorrow
            </h1>
            <p className="max-w-xl text-lg text-gray-600">
              Your donation provides shelter, warm meals, and compassionate care to
              children experiencing homelessness. Even a small gift makes a
              real, immediate difference.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#donate"
                className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                Donate now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-50"
              >
                See impact
              </a>
            </div>
            <p className="text-sm text-gray-500">
              100% of your gift goes directly to programs for children in need.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
              <img
                src="https://images.unsplash.com/photo-1551829142-5e96e4c84440?q=80&w=1200&auto=format&fit=crop"
                alt="Child holding a warm cup, wrapped in a blanket"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/80 p-4 backdrop-blur ring-1 ring-white/60">
                <p className="text-sm text-gray-700">
                  “I felt safe for the first time.” — Mia, age 8
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
