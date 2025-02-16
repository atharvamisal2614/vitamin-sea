import React from "react";
import Image from "next/image";
import Link from "next/link";
import Amenities from "../Components/Amenities";



const CoupleCottage = () => {
    const roomImage = "/Beach.jpg";
    const miniImages = [
        "/Beach.jpg",
        "/Beach.jpg",
        "/Beach.jpg"
    ];

    return (
        <div className=" flex justify-center items-start p-5">
            <div className="flex flex-col md:flex-row w-full ">
                <div className="w-full md:w-3/5 mb-5 md:mb-0">
                    <h1 className="text-4xl md:text-5xl text-gray-700 mb-5">Family Rooms</h1>

                    <div className="relative w-full h-[400px] mb-5">
                        <Image
                            src={roomImage}
                            alt="Room Image"
                            className="object-cover w-full h-full rounded-lg"
                           width={1000}
                           height={1000}
                        />
                    </div>

                    <div className="flex gap-4 mb-5">
                        {miniImages.map((img, index) => (
                            <div key={index} className="relative w-1/3 h-48">
                                <Image
                                    src={img}
                                    alt={`Mini Room Image ${index + 1}`}
                                    className="object-cover rounded-lg"
                                    fill
                                />
                            </div>
                        ))}
                    </div>

    

                </div>

                {/* Booking Section */}
                <div className="w-full md:w-2/5 p-5">
                    <h3 className="text-lg font-bold">Description</h3>
                    <p className="mt-2">Spacious and ideal for families or groups.</p>


                    <div className="mt-5">
                        <h1 className="text-xl font-bold mb-4">Features</h1>

                        <div className="mb-6">
                        <ul className="list-disc ml-5">
    <li><strong> 4+1 (extra mattress available).</strong></li>
    <li><strong> Onedouble bed and two single beds.</strong></li>
    <li><strong> Private balcony with stunning views of the property and beach.</strong></li>
</ul>

                        </div>


                    </div>

                    <Link href="tel:+919322177366">
                        <button className="mt-5 w-full bg-blue-800 text-white py-2 rounded hover:opacity-80">
                            Book Now
                        </button>
                    </Link>

                    <div className="mt-8"> {/* Add top margin for spacing */}
                       <Amenities />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoupleCottage;
