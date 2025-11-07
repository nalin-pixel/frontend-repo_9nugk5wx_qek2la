import { motion } from 'framer-motion'

const stories = [
  {
    name: 'Aiden, age 7',
    text:
      'When Aiden arrived, he was quiet and tired. After a week of warm meals and playtime, he began to laugh again. Today, he loves drawing and says he wants to be an astronaut.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Zara, age 9',
    text:
      'Zara struggled to sleep in the shelter. Our counselors helped her feel safe. Now she attends school every day and proudly reads to younger kids.',
    image:
      'https://images.unsplash.com/photo-1548607086-e7ef42d18084?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Leo, age 6',
    text:
      'Leo arrived with only a small backpack. He chose a blue coat from our closet and smiled. He says the hot chocolate is his favorite part of the morning.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
]

export default function Stories() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Real stories of hope
          </h2>
          <p className="mt-3 text-gray-600">
            Names and details are changed to protect privacy, but the impact is real and immediate.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img src={s.image} alt="Child portrait" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-lg font-medium text-gray-900">{s.name}</h3>
                <p className="text-gray-600">{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
