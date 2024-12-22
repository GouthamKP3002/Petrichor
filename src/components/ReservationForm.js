"use client";
import { useState } from "react";
import { db } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Add some basic validation
      const reservationDate = new Date(formData.date + "T" + formData.time);
      if (reservationDate < new Date()) {
        throw new Error("Please select a future date and time");
      }

      // Create the reservation data object
      const reservationData = {
        ...formData,
        createdAt: serverTimestamp(), // Use serverTimestamp for consistent timestamps
        status: "pending",
        reservationDateTime: reservationDate.toISOString(),
      };

      console.log("Attempting to add reservation:", reservationData); // Debug log

      // Add to Firestore
      const reservationsRef = collection(db, "reservations");
      const docRef = await addDoc(reservationsRef, reservationData);

      console.log("Reservation added with ID:", docRef.id); // Debug log

      setMessage(
        "Reservation submitted successfully! We will confirm it through email. Thank you for visiting Petrichor!"
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        guests: "2",
        specialRequests: "",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setMessage(
        error.message || "Error submitting reservation. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClasses =
    "w-full px-4 py-3 border-2 border-[#d4a373] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#d4a373] focus:border-transparent transition duration-200";
  const labelClasses = "block text-[#2c2420] font-medium mb-2";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
    >
      {message && (
        <div
          className={`p-4 mb-6 rounded-lg ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-[#d4a373] bg-opacity-20 text-[#2c2420]"
          }`}
        >
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
        <div>
          <label className={labelClasses}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label className={labelClasses}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label className={labelClasses}>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label className={labelClasses}>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>

        <div>
          <label className={labelClasses}>Number of Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={inputClasses}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className={labelClasses}>Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
            rows="5"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 w-full bg-[#d4a373] text-white py-4 rounded-lg font-medium hover:bg-[#c49363] disabled:bg-[#e5c4a3] transition-colors duration-200"
        >
          {loading ? "Processing..." : "Confirm Reservation"}
        </button>
      </div>
    </form>
  );
}
