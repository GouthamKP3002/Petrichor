"use client";
import { useState, useEffect } from "react";
import { db } from "@/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  Timestamp,
} from "firebase/firestore";

// Manager keys for different locations
const VALID_KEYS = {
  sapthaswada0000007: "Ramohalli",
};

export default function ManagerDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [key, setKey] = useState("");
  const [location, setLocation] = useState("");
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    if (VALID_KEYS[key]) {
      setIsAuthenticated(true);
      setLocation(VALID_KEYS[key]);
      setError("");
    } else {
      setError("Invalid key. Please try again.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchTodaysReservations();
    }
  }, [isAuthenticated]);

  const fetchTodaysReservations = async () => {
    setLoading(true);
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const reservationsRef = collection(db, "reservations");
      const q = query(
        reservationsRef,
        where("createdAt", ">=", today),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      const reservationData = [];
      querySnapshot.forEach((doc) => {
        reservationData.push({ id: doc.id, ...doc.data() });
      });

      setReservations(reservationData);
    } catch (error) {
      console.error("Error fetching reservations:", error);
      setError("Error loading reservations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen relative"
        style={{
          backgroundImage: "url(' banyantree.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-serif text-center mb-6 text-amber-700">
              Manager Access
            </h2>
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                {error}
              </div>
            )}
            <form onSubmit={handleAuth}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Enter Access Key
                </label>
                <input
                  type="password"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b7355]"
                  placeholder="Enter your access key"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#8b7355] text-white py-2 rounded-lg hover:bg-[#6d5a43] transition-colors"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif text-[#2c2420]">
              Saptha Swada Dashboard - {location}
            </h1>
            <p className="text-[#5c5147]">Reservations</p>
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setKey("");
              setLocation("");
              setReservations([]);
            }}
            className="px-4 py-2 bg-[#8b7355] text-white rounded-lg hover:bg-[#6d5a43] transition-colors"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading reservations...</div>
        ) : reservations.length === 0 ? (
          <div className="text-center py-8 text-[#5c5147]">
            No reservations found for today.
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2c2420] text-white">
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Email</th>
                    <th className="px-6 py-4 text-left">Date</th>
                    <th className="px-6 py-4 text-left">Time</th>
                    <th className="px-6 py-4 text-left">Guests</th>
                    <th className="px-6 py-4 text-left">Status</th>
                    <th className="px-6 py-4 text-left">Special Requests</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reservations.map((reservation) => (
                    <tr
                      key={reservation.id}
                      className="hover:bg-gray-50 text-amber-700"
                    >
                      <td className="px-6 py-4">{reservation.name}</td>
                      <td className="px-6 py-4">{reservation.email}</td>
                      <td className="px-6 py-4">{reservation.date}</td>
                      <td className="px-6 py-4">{reservation.time}</td>
                      <td className="px-6 py-4">{reservation.guests}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded-full text-sm ${
                            reservation.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {reservation.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {reservation.specialRequests || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
