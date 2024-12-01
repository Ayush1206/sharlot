import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function MobileFooter() {
  return (
    <footer
      id="contact"
      className="bg-black shadow-md text-white py-10 flex flex-col items-center space-y-12"
    >
      {/* Follow Us */}
      <div className="w-full text-center">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Follow Us
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 hover:text-gray-400"
          >
            <FaFacebook size={20} />
            <span>Facebook</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 hover:text-gray-400"
          >
            <FaTwitter size={20} />
            <span>Twitter</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 hover:text-gray-400"
          >
            <FaInstagram size={20} />
            <span>Instagram</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 hover:text-gray-400"
          >
            <FaYoutube size={20} />
            <span>YouTube</span>
          </a>
        </div>
      </div>

      {/* Contact Us */}
      <div className="w-full text-center">
        <h3
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Contact Us
        </h3>
        <div className="space-y-4">
          <p className="flex items-center justify-center space-x-2 text-lg text-gray-300">
            <FaEnvelope size={20} />
            <a href="mailto:djsharlot@example.com" className="hover:text-gray-400">
              djsharlot@example.com
            </a>
          </p>
          <p className="flex items-center justify-center space-x-2 text-lg text-gray-300">
            <FaPhone size={20} />
            <span>+1 (234) 567-890</span>
          </p>
          <p className="flex items-center justify-center space-x-2 text-lg text-gray-300">
            <FaMapMarkerAlt size={20} />
            <span>Los Angeles, CA</span>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400">
        <p>
          © 2024 DJ Sharlot<span className="text-xs align-top">™</span>. All rights reserved.
        </p>
        <p className="mt-4">
          Website created by <span className="text-gray-300 font-semibold">Ayush Mishra</span>
        </p>
      </div>
    </footer>
  );
}
