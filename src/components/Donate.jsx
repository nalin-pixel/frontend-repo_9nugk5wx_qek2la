import { motion } from 'framer-motion'
import { Lock, ShieldCheck } from 'lucide-react'

export default function Donate() {
  return (
    <section id="donate" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Make a secure donation
            </h2>
            <p className="mt-3 max-w-xl text-gray-600">
              Your gift funds shelter, meals, counseling, and education support. Choose a
              suggested amount or enter your own.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>100% of your donation supports children directly</span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
              <Lock className="h-4 w-4 text-gray-600" />
              <span>Secure payment processing</span>
            </div>
          </div>
          <div>
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="text-sm font-medium text-gray-700">Donation amount</label>
              <div className="mt-2 grid grid-cols-4 gap-2">
                {[25, 50, 100, 250].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className="rounded-xl bg-white px-3 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 transition hover:bg-gray-50"
                    onClick={() => {
                      const input = document.getElementById('amount-input')
                      if (input) input.value = String(amt)
                    }}
                  >
                    ${'{'}amt{'}'}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <input
                  id="amount-input"
                  type="number"
                  min="1"
                  step="1"
                  defaultValue={50}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  placeholder="Enter amount"
                />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-rose-600 px-4 py-3 font-medium text-white shadow-sm transition hover:bg-rose-700"
              >
                Donate securely
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">
                This is a demo form. No payment will be processed.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
