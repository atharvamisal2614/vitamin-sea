import Image from "next/image";

const CardsSection = () => {
  const cards = [
    { id: 1, title: "Turtle Nesting Site", description: "Murud Beach is a prime nesting ground for Olive Ridley turtles. Every year, visitors witness these endangered turtles lay their eggs—a beautiful natural spectacle.", image: "/Beach.jpg" },
    { id: 2, title: "Water Sports & Adventure", description: "Jet skiing, banana boat rides, and parasailing are just a few of the thrilling activities that await you at Murud Beach.", image: "/Beach.jpg" },
    { id: 3, title: "Dolphin Safaris", description: "Set sail into the Arabian Sea and witness playful dolphins in their natural habitat—a truly magical experience.", image: "/Beach.jpg" },
    { id: 4, title: "Relax & Unwind", description: "Escape the hustle and bustle of everyday life. Enjoy a beach picnic, lounge under the sun, or witness breathtaking sunsets.", image: "/Beach.jpg" },
    { id: 5, title: "Keshavraj Temple", description: "A 2000-year-old temple in Aasud, known for its natural spring and tranquil ambiance, offering spiritual solace amidst lush greenery.", image: "/Beach.jpg" },
    { id: 6, title: "Suvarnadurg Fort", description: "An ancient sea fort near Harnai, accessible by boat. Experience stunning Arabian Sea views and the regions rich maritime history.", image: "/Beach.jpg" },
    { id: 7, title: "Ladghar Beach", description: "Also called 'Tamas Teertha', Ladghar Beach is famous for its red-hued sunsets and golden sands, making it a photographers paradise.", image: "/Beach.jpg" },
    { id: 8, title: "Harnai Fishing Port", description: "Experience the lively fish auctions at Harnai, a bustling fishing port known for its fresh seafood and coastal charm.", image: "/Beach.jpg" },
    { id: 9, title: "Kadyavarcha Ganpati", description: "A serene temple dedicated to Lord Ganesh, nestled in the scenic village of Anjarle, offering peace and divine blessings.", image: "/Beach.jpg" },
    { id: 10, title: "Parshuram Bhoomi", description: "A hilltop destination featuring a colossal statue of Lord Parshuram, offering panoramic views of the Arabian Sea.", image: "/Beach.jpg" },
    { id: 11, title: "Chandika Temple", description: "An ancient cave temple near Dabhol, dedicated to Goddess Chandika, surrounded by dense greenery and historical significance.", image: "/Beach.jpg" },
    { id: 12, title: "Panhalekaji Caves", description: "Step back in time as you explore these rock-cut Buddhist caves, adorned with intricate carvings and fascinating sculptures.", image: "/Beach.jpg" },
  ];

  return (
    <section className="px-6 md:px-16 py-12">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-6">
        Discover Dapoli <br/> Your Gateway to Konkan's Coastal Charm
      </h2>

      {/* Paragraphs */}
      <div className="max-w-3xl mx-auto text-justify text-lg text-gray-700 space-y-4 mb-10">
        <p>
          Located in the scenic Konkan region, Dapoli is blessed with breathtaking landscapes, pristine beaches, and a rich cultural heritage.
          Just 200 km from Pune and 240 km from Mumbai, Dapoli is a perfect getaway for beach lovers, history enthusiasts, and nature admirers.
        </p>
        <p>
          At the heart of Dapoli lies Murud Beach, a stunning stretch of coastline that offers the perfect blend of serenity and adventure.
          The beach is known for its clear waters, golden sands, and laid-back atmosphere, making it an ideal place for relaxation and family activities.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[70%] w-full">
              <Image 
                src={card.image} 
                alt={card.title} 
                width={400} 
                height={300} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 h-[30%] text-center flex flex-col justify-center">
              <h3 className="text-lg font-bold text-blue-800">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
