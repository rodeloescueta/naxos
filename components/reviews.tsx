import { Card } from "@/components/ui/card"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const reviews = [
  {
    name: "Sarah Thompson",
    rating: 5,
    comment: "The shawarma here is absolutely incredible! The meat is always tender and perfectly seasoned. Great portion sizes too!",
    image: "/menu-placeholder.jpg"
  },
  {
    name: "David Chen",
    rating: 5,
    comment: "Best roast chicken in town! My family loves coming here for weekend dinners. The staff is always friendly and welcoming.",
    image: "/menu-placeholder.jpg"
  },
  {
    name: "Emma Wilson",
    rating: 5,
    comment: "Their lamb tikka skewers are to die for! Fresh naan bread and the sauce selection is amazing. Highly recommend!",
    image: "/menu-placeholder.jpg"
  },
  {
    name: "James Rodriguez",
    rating: 5,
    comment: "Finally found authentic Mediterranean food in the area. The pork roast with crackling skin is exceptional!",
    image: "/menu-placeholder.jpg"
  },
  {
    name: "Sophia Lee",
    rating: 4,
    comment: "Great place for family gatherings. We tried various dishes and everything was delicious. The burger selection is impressive!",
    image: "/menu-placeholder.jpg"
  }
]

export function Reviews() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className={`overflow-hidden bg-zinc-800 text-white h-full`}>
                <div className="relative h-48">
                  <Image
                    src={review.image}
                    alt={`Review by ${review.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-zinc-400 mb-2">{review.comment}</p>
                  <p className="text-sm font-semibold">- {review.name}</p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
} 