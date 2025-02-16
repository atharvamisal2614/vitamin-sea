import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: "url('/footer.jpg')" }} // Background Image
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.png" alt="Vitamin Sea Beach Resort" width={300} height={300} />
        </div>

        {/* Resort Description */}
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Experience the perfect blend of luxury and nature at Vitamin Sea Beach Resort.  
          Nestled along the serene Murud Beach, we offer a tranquil escape with stunning ocean views,  
          modern comforts, and the soothing sounds of the sea.
        </p>

        {/* Contact Information */}
        <div className="mt-6 space-y-2">
          <h3 className="text-xl font-bold">Contact Information</h3>
          <p>📞 Phone: <a href="tel:+919405960202" className="text-blue-300 hover:text-white">+91 9405960202</a></p>
          <p>✉️ Email: <a href="mailto:vitaminsea1118@gmail.com" className="text-blue-300 hover:text-white">vitaminsea1118@gmail.com</a></p>
          <p>📍 Address: Khalchi Pakhadi, Murud-Dapoli, Ratnagiri- 415713</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-6">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-3">
            <Link href="https://instagram.com/vitaminseabeachresort" target="_blank">
              <FaInstagram className="text-3xl hover:text-blue-300 transition-all" />
            </Link>
            <Link href="https://facebook.com/VitaminSeaBeachResort" target="_blank">
              <FaFacebook className="text-3xl hover:text-blue-300 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="relative z-10  text-center py-4 mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Vitamin Sea Beach Resort. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;