import Image from "next/image";

const CardsSection = () => { //Name and description changes
  const cards = [
    { id: 1, title: "A Peaceful Escape", description: " Tucked away in lush coconut groves, our resort offers the perfect mix of calm and natural beauty.", image: "/Beach.jpg" },
    { id: 2, title: "Nestled by the Arabian Sea", description: " Located right on the shores of the Arabian Sea, our resort offers unparalleled access to its pristine beauty and calming waves.", image: "/Beach.jpg" },
    { id: 3, title: "Tailored Just for You", description: "Whether it is romance, family fun, or solo time, we customize your stay to make it truly special.", image: "/Beach.jpg" },
    { id: 4, title: "Charm Meets Comfort", description: " Experience modern amenities with the warm vibes of a seaside retreat.", image: "/Beach.jpg" },
    { id: 5, title: "BeachatYour Doorstep", description: "Walk just a few steps and feel the sand between your toes on our private beach", image: "/Beach.jpg" },
    { id: 6, title: "Always Close to the Sea", description: "Every corner of the resort lets you enjoy the soothing sound and feel of the ocean.", image: "/Beach.jpg" },
    { id: 7, title: "Unwind Your Way", description: " Relax on the beach, watch stunning sunsets, or enjoy magical dinners under the stars.", image: "/Beach.jpg" },
    { id: 8, title: " FunforEveryone", description: "Dive into a good book at our cozy reading corner, or challenge your friends with our giant chessboard and life-sized snakes and ladders", image: "/Beach.jpg" },
  ];

  return (
    <section className="px-6 md:px-16 py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Unique Features</h2>
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
