import App from "../App";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Simple working test", () => {
  it("empty data text is visible", () => {
    render(<App searchRes={{ data: [] }} />);
    expect(screen.getByText(/Search for a title/i)).toBeInTheDocument();
  });
});
