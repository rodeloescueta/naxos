"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Geist } from "next/font/google"
import { motion } from 'framer-motion'

const geist = Geist({
  subsets: ["latin"],
})

interface MenuItem {
  name: string
  price: number
  description: string
  image: string
}

interface MenuSectionProps {
  title: string
  items: MenuItem[]
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className={`overflow-hidden bg-zinc-800 text-white ${geist.className}`}>
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                    <p className="text-zinc-400 text-sm">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center bg-red-600 text-white rounded-full w-14 h-14 font-bold">
                      £{item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 