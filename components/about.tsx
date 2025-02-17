// import { Dancing_Script, Geist } from 'next/font/google'

export function About() {
  return (
    <section className="py-12">
      <h2 className={`text-3xl font-bold mb-6`}>About Naxos</h2>
      <div className={`bg-zinc-800 rounded-lg p-8 text-zinc-400 space-y-6`}>
        <p className="text-lg leading-relaxed">
          Welcome to Naxos, where traditional flavors meet modern cuisine. Since 2015, we&apos;ve been serving the finest Mediterranean and Middle Eastern dishes, specializing in succulent shawarmas, perfectly roasted meats, and handcrafted burgers.
        </p>
        <p className="text-lg leading-relaxed">
          Our chefs combine years of culinary expertise with locally sourced ingredients to create memorable dining experiences. Every dish is prepared fresh daily, from our signature roast chicken to our tender lamb skewers.
        </p>
        <p className="text-lg leading-relaxed italic">
          We take pride in offering a warm, family-friendly atmosphere where every guest feels at home. Join us for a taste of authentic cuisine that brings people together.
        </p>
      </div>
    </section>
  )
} 