import { MenuSection } from '@/components/menu-section'
import { Hero } from '@/components/hero'
import { Reviews } from '@/components/reviews'
import { Location } from '@/components/location'
import { About } from '@/components/about'
import { SocialLinks } from '@/components/social-links'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <About />
        <MenuSection 
          title="Wraps" 
          items={[
            {
              name: "Chicken Shawarma Wraps",
              price: 4.99,
              description: "Tender marinated chicken with fresh vegetables",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Pork Shawarma Wraps",
              price: 4.99,
              description: "Pizza Sauce, Pepperoni slices, Mozzarella Cheese",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Roast Pork Wraps",
              price: 4.99,
              description: "Pizza Sauce, pepperoni slices, salami, chicken, sausages, Beef, ham",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Falafel Wrap",
              price: 3.99,
              description: "BBQ sauce, bacon, roasted chicken, onion, green peppers",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Cheese and Chips Wrap",
              price: 3.99,
              description: "Fresh chips with melted cheese blend",
              image: "/menu-placeholder.jpg"
            },
          ]}
        />
        
        <MenuSection 
          title="Roast Chicken Meals" 
          items={[
            {
              name: "Whole Roast Chicken",
              price: 12.99,
              description: "Fresh whole roasted chicken",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Half Roast Chicken",
              price: 7.99,
              description: "Half portion of roasted chicken",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Quarter Chicken",
              price: 5.99,
              description: "Quarter portion of roasted chicken",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Chicken Wings BBQ",
              price: 6.99,
              description: "BBQ flavored chicken wings",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Chicken Wings Regular",
              price: 6.99,
              description: "Classic seasoned chicken wings",
              image: "/menu-placeholder.jpg"
            },
          ]}
        />

        <MenuSection 
          title="Burgers Meals" 
          items={[
            {
              name: "Chicken Fillet Burger",
              price: 5.99,
              description: "With roast potato or chips",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Chicken Burger",
              price: 4.99,
              description: "Classic chicken burger with fresh toppings",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Roast Pork Burger",
              price: 5.99,
              description: "Roasted pork with special sauce",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Mexican Burger",
              price: 5.99,
              description: "Spicy Mexican-style burger",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Hawaiian Burger",
              price: 5.99,
              description: "Tropical Hawaiian-style burger",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Cheese Burger",
              price: 4.99,
              description: "Classic cheese burger",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Kidsburger Meal",
              price: 3.99,
              description: "Kid-sized burger with chips",
              image: "/menu-placeholder.jpg"
            },
          ]}
        />

        <MenuSection 
          title="Meals" 
          items={[
            {
              name: "2 Lamb Tikka Skewers",
              price: 11.99,
              description: "With fresh naan, soup, drinks & salad",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "2 Chicken Kebab Skewers",
              price: 9.99,
              description: "With fresh naan, soup, drinks & salad",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "1 Chicken Tikka 1 Lamb Kebab",
              price: 10.99,
              description: "Mixed kebab with fresh naan and sides",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "2 Grilled Pork Skewers",
              price: 8.99,
              description: "With fresh naan, soup, drinks & salad",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "1 Lamb 1 Chicken 1 Pork Skewers",
              price: 9.99,
              description: "Mixed skewers with sides",
              image: "/menu-placeholder.jpg"
            },
          ]}
        />

        <MenuSection 
          title="Pork Roast Meals" 
          items={[
            {
              name: "Roast Pork with Crackling Skin",
              price: 9.99,
              description: "Crispy roasted pork with perfect crackling",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Roast Pork Adobo (Garlic)",
              price: 9.99,
              description: "Filipino-style garlic pork adobo",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Roast Pork Ribs BBQ",
              price: 10.99,
              description: "Sauce sweet and spicy",
              image: "/menu-placeholder.jpg"
            },
            {
              name: "Roast Pork Ribs",
              price: 10.99,
              description: "Classic roasted pork ribs",
              image: "/menu-placeholder.jpg"
            },
          ]}
        />

        <Reviews />
        <Location />
    </div>
      <SocialLinks />
    </main>
  )
}
