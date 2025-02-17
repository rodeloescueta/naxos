export function Location() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Find Us</h2>
      <div className="aspect-video w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2889612073266!2d-0.14012638422930277!3d51.51424097963622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda2164b934c67c1a!2sOxford%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1647433339452!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-6 text-white">
        <h3 className="text-xl font-semibold mb-2">Naxos Restaurant</h3>
        <p className="text-zinc-400">123 Oxford Street</p>
        <p className="text-zinc-400">London, W1D 2JA</p>
        <p className="text-zinc-400">United Kingdom</p>
        <p className="mt-2">
          <a href="tel:+44123456789" className="text-red-500 hover:text-red-400">
            +44 123 456 789
          </a>
        </p>
      </div>
    </section>
  )
} 