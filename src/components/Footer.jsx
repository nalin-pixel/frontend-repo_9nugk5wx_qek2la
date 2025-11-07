import { Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {year} Shelter for Children. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500">
            Made with <Heart className="h-4 w-4 text-rose-600" /> to protect childhood
          </p>
        </div>
      </div>
    </footer>
  )
}
