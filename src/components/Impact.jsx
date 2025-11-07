import { motion } from 'framer-motion'
import { Shield, Utensils, Home, GraduationCap } from 'lucide-react'

const stats = [
  { icon: Home, label: 'Safe Nights', value: '12,480', detail: 'provided last year' },
  { icon: Utensils, label: 'Warm Meals', value: '38,200', detail: 'served to children' },
  { icon: Shield, label: 'Health Visits', value: '2,140', detail: 'checks and treatments' },
  { icon: GraduationCap, label: 'School Support', value: '890', detail: 'tutoring sessions' },
]

export default function Impact() {
  return (
    <section id="impact" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Your kindness creates measurable impact
          </h2>
          <p className="mt-3 text-gray-600">
            Every contribution is tracked and reported transparently so you know exactly
            how your gift helps children.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-rose-600" />
                <span className="text-sm font-medium text-gray-700">{s.label}</span>
              </div>
              <p className="mt-3 text-3xl font-semibold text-gray-900">{s.value}</p>
              <p className="text-sm text-gray-500">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
