import { CgFacebook } from "react-icons/cg";
import { CgInstagram } from "react-icons/cg";
import { CgTwitter } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>#85 Restaurant Street, Bangalore, Karnataka</p>
            <p>Phone:+91 659436258</p>
            <p>Email:petrichor69@petri.com </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hours</h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday: 10am - 12am</p>
            <p>Sunday: 10am - 9pm</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#Facebook" className="hover:text-gray-300">
                <CgFacebook />
              </a>
              <a href="#Instagram" className="hover:text-gray-300">
                <CgInstagram />
              </a>
              <a href="#Twitter" className="hover:text-gray-300">
                <CgTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
