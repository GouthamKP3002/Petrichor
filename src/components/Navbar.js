import { RiReservedLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="bg-[#dfbf9f] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-extrabold  text-[#5c5147] ">
              Petrichor
            </a>
          </div>
          <div className="flex space-x-5 items-center justify-between">
            <a href="/" className="text-white hover:text-gray-900">
              Home
            </a>
            <a href="/menu" className="text-white hover:text-gray-900">
              Menu
            </a>
            <a href="/reservation" className="text-white hover:text-gray-900">
              Reservation
            </a>
            <a
              href="/manager"
              className="  text-white hover:text-gray-900 flex-grow-0"
            >
              <RiReservedLine className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
