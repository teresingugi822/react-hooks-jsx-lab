import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  const { container } = render(<Home />);
  expect(container.querySelector("#home")).toBeInTheDocument();
});

test("renders the h1 with the text 'Teresa is a Web Developer from Nairobi'", () => {
  render(<Home />);
  const h1 = screen.queryByText("Teresa is a Web Developer from Nairobi");
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home />);
  const h1 = screen.queryByText("Teresa is a Web Developer from Nairobi");
  expect(h1).toHaveStyle({ color: "firebrick" });
});
