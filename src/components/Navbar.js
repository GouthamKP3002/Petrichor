import Link from "next/link";
import { RiReservedLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="bg-[#dfbf9f] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-extrabold  text-[#5c5147] ">
              Petrichor
            </Link>
          </div>
          <div className="flex space-x-5 items-center justify-between">
            <Link href="/" className="text-white hover:text-gray-900">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-gray-900">
              Menu
            </Link>
            <Link
              href="/reservation"
              className="text-white hover:text-gray-900"
            >
              Reservation
            </Link>
            <Link
              href="/manager"
              className="  text-white hover:text-gray-900 flex-grow-0"
            >
              <RiReservedLine className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
