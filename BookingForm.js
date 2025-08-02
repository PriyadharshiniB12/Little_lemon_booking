import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.date && formData.time) {
      console.log("Form submitted", formData);
      setSubmitted(true);
    } else {
      alert("Please fill all required fields.");
    }
  };

  return submitted ? (
    <p role="alert">Thank you for your reservation, {formData.name}!</p>
  ) : (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="name">Full Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="date">Date:</label>
      <input
        id="date"
        name="date"
        type="date"
        required
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="time">Time:</label>
      <select
        id="time"
        name="time"
        required
        value={formData.time}
        onChange={handleChange}
      >
        <option value="">Select time</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
      </select>

      <label htmlFor="guests">Guests:</label>
      <input
        id="guests"
        name="guests"
        type="number"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
