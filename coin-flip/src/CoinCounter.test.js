import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CoinCounter from "./CoinCounter";

beforeEach(function() {
	jest.spyOn(Math, "random")
		.mockReturnValueOnce(0.25)
		.mockReturnValueOnce(0.75);
});

afterEach(function() {
	Math.random.mockRestore();
});

// smoke test
it("renders without crashing", function() {
	render(<CoinCounter />);
});

// snapshot test
it("matches snapshot", function() {
	const { asFragment } = render(<CoinCounter />);
	expect(asFragment()).toMatchSnapshot();
});

it("should start with no coin on the page", function() {
	const { queryByTestId } = render(<CoinCounter />);

	expect(queryByTestId("coin")).toBeNull();
});

it("should show heads on first flip", function() {
	const { getByText, queryByAltText } = render(<CoinCounter />);
	const flipBtn = getByText("Flip Me!");

	fireEvent.click(flipBtn);

	expect(queryByAltText("heads")).toBeInTheDocument();
	expect(
		getByText("Out of 1 flips, there have been 1 heads and 0 tails.")
	).toBeInTheDocument();
});

it("should show tails on second flip", function() {
	const { getByText, queryByAltText } = render(<CoinCounter />);
	const flipBtn = getByText("Flip Me!");

	fireEvent.click(flipBtn);
	fireEvent.click(flipBtn);

	expect(queryByAltText("tails")).toBeInTheDocument();
	expect(
		getByText("Out of 2 flips, there have been 1 heads and 1 tails.")
	).toBeInTheDocument();
});
