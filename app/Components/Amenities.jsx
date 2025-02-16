import { FaWifi, FaTshirt, FaParking } from "react-icons/fa";
import { MdTv} from "react-icons/md";
import { GiCookingPot, GiHotMeal, GiVacuumCleaner, GiCctvCamera } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { IoMdBatteryCharging,IoIosWater  } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa6";


import { MdHotTub,MdPower } from "react-icons/md";
import { FaBolt, FaShower } from "react-icons/fa";



const Amenities = () => {
  return (
    <div className="mt-10 ">
      <h2 className="text-2xl font-bold mb-5 text-center">Top Amenities</h2>
      <div className="grid grid-cols-4 gap-8">
        {/* Row 1 */}
        <div className="flex flex-col items-center text-indigo-500">
          <TbAirConditioning size={50} className="mb-2" />
          <span>Air Conditioning</span>
        </div>

        <div className="flex flex-col items-center text-blue-500">
          <FaWifi size={50} className="mb-2" />
          <span>Free WiFi</span>
        </div>
        <div className="flex flex-col items-center text-green-500">
          <MdHotTub size={50} className="mb-2" />
          <span>Hot Water</span>
        </div>
       

        {/* Row 2 */}
        <div className="flex flex-col items-center text-yellow-600">
          <FaBolt size={50} className="mb-2" />
          <span>24 x 7 Electricity</span>
        </div>
        <div className="flex flex-col items-center text-green-600">
          <MdPower size={50} className="mb-2" />
          <span>Generator Backup</span>
        </div>
        <div className="flex flex-col items-center text-gray-800">
          <GiVacuumCleaner size={50} className="mb-2" />
          <span>Housekeeping</span>
        </div>
        <div className="flex flex-col items-center text-black">
          <MdTv size={50} className="mb-2" />
          <span>Tv</span>
        </div>
        <div className="flex flex-col items-center text-pink-500">
          <FaShower size={50} className="mb-2" />
          <span>Private Bathroom</span>
        </div>

        

        </div>
      </div>

  );
};

export default Amenities;
