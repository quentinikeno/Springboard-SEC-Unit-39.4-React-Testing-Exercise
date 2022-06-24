import React from "react";
import { render } from "@testing-library/react";
import CoinCounter from "./CoinCounter";

// smoke test
it("renders without crashing", function() {
	render(<CoinCounter />);
});

// snapshot test
it("matches snapshot", function() {
	const { asFragment } = render(<CoinCounter />);
	expect(asFragment()).toMatchSnapshot();
});
