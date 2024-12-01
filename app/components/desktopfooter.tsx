import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
  } from "react-icons/fa";
  
  export default function DesktopFooter() {
    return (
      <footer id="contact" className="bg-black shadow-md text-white py-16">
        <div className="container mx-auto px-12 flex flex-row justify-between items-start gap-5">
          {/* Left Section */}
          <div
            className="flex flex-col justify-between"
            style={{ flexBasis: "55%", margin: "0 10%" }}
          >
            {/* Ready to Groove Text */}
            <div>
              <h1
                className="text-4xl font-extrabold mb-2 leading-snug"
                style={{ fontFamily: "'Orbitron', sans-serif", color: "#E63946" }}
              >
                Ready to
              </h1>
              <h1
                className="text-4xl font-extrabold"
                style={{ fontFamily: "'Orbitron', sans-serif", color: "#E63946" }}
              >
                get your Groove On?
              </h1>
            </div>
  
            {/* Subscribe Form */}
            <div className="bg-gray-800 p-4 rounded-lg mt-8 w-3/4">
              <h3
                className="text-xl font-bold mb-3 text-center"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Subscribe to our Newsletter
              </h3>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md text-black"
                />
                <button
                  type="submit"
                  className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col gap-6" style={{ flexBasis: "40%" }}>
            {/* Follow Us and Contact Us Side by Side */}
            <div className="flex flex-row justify-between items-start gap-12">
              {/* Follow Us */}
              <div className="flex-1 flex flex-col items-center">
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
                    className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-800 text-white rounded-md"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-800 text-white rounded-md"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-800 text-white rounded-md"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-red-600 hover:bg-red-800 text-white rounded-md"
                  >
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>
  
              {/* Contact Us */}
              <div className="flex-1 flex flex-col items-start">
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                  Contact Us
                </h3>
                <div className="flex flex-col space-y-4">
                  <p className="flex items-center space-x-2 text-lg text-gray-300">
                    <FaEnvelope size={20} />
                    <a
                      href="mailto:djsharlot@example.com"
                      className="hover:text-gray-400"
                    >
                      djsharlot@example.com
                    </a>
                  </p>
                  <p className="flex items-center space-x-2 text-lg text-gray-300">
                    <FaPhone size={20} />
                    <span>+1 (234) 567-890</span>
                  </p>
                  <p className="flex items-center space-x-2 text-lg text-gray-300">
                    <FaMapMarkerAlt size={20} />
                    <span>Los Angeles, CA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>
            © 2024 DJ Sharlot<span className="text-xs align-top">™</span>. All
            rights reserved.
          </p>
          <p className="mt-4">
            Website created by{" "}
            <span className="text-gray-300 font-semibold">Ayush Mishra</span>
          </p>
        </div>
      </footer>
    );
  }
  