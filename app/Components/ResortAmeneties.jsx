import { FaWifi, FaBolt, FaShower, FaTv } from "react-icons/fa";
import { MdLocalParking, MdBeachAccess, MdSecurity, MdOutlineBedroomParent } from "react-icons/md";

export default function RoomAmenities() {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Resort-Wide Amenities */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-white flex items-center mb-4">
            <MdBeachAccess size={40} className="text-yellow-400 mr-2 text-3xl" /> Resort-Wide Amenities
          </h2>
          <ul className="space-y-4">
            {[
              { icon: <FaWifi size={30} className="text-green-300 text-xl" />, text: "High-speed WiFi" },
              { icon: <FaBolt size={30} className="text-yellow-300 text-xl" />, text: "24/7 electricity with generator backup" },
              { icon: <FaShower size={30} className="text-blue-300 text-xl" />, text: "Hot water in all rooms" },
              { icon: <MdBeachAccess size={30} className="text-orange-300 text-xl" />, text: "Private beach access" },
              { icon: <MdLocalParking size={30} className="text-gray-300 text-xl" />, text: "Ample parking space" },
              { icon: <MdSecurity size={30} className="text-red-300 text-xl" />, text: "CCTV surveillance for security" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-white text-lg hover:text-yellow-300 transition duration-300">
                {item.icon} <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Room-Specific Amenities */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-white flex items-center mb-4">
            <MdOutlineBedroomParent size={40} className="text-pink-400 mr-2 text-3xl" /> Room-Specific Amenities
          </h2>
          <ul className="space-y-4">
            {[
              { icon: <MdOutlineBedroomParent size={30}t className="text-pink-300 text-xl" />, text: "Comfortable bedding with fresh linens" },
              { icon: <FaTv size={30} className="text-blue-300 text-xl" />, text: "Smart TV with cable channels" },
              { icon: <FaShower size={30} className="text-green-300 text-xl" />, text: "Attached bathrooms with modern fixtures" },
              { icon: <FaBolt size={30} className="text-yellow-300 text-xl" />, text: "Power outlets near the bed for convenience" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 text-white text-lg hover:text-yellow-300 transition duration-300">
                {item.icon} <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
