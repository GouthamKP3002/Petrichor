import Link from "next/link";
import { RiReservedLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <nav className="bg-[#e09a5d] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-extrabold  text-[#392d24] ">
              Saptha Swada
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
