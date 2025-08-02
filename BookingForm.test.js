import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Booking form renders correctly", () => {
  render(<BookingForm />);
  const formTitle = screen.getByLabelText("Booking Form");
  expect(formTitle).toBeInTheDocument();
});
