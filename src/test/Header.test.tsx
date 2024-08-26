import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/header/Header";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<Header setSearch={() => {}} />);
    expect(screen.getByText(/Games Db/i)).toBeInTheDocument();
  });
});
