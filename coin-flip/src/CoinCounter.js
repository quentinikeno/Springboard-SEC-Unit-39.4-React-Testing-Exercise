import React from "react";
import Coin from "./Coin";

const CoinCounter = ({ sides }) => {
	const [side, setSide] = null;
	const [totalFlips, setTotalFlips] = 0;
	const [totalTails, setTotalTails] = 0;
	const handleClick = () => {
		if (Math.random() > 0.5) {
			setSide("tails");
			setTotalTails(totalTails + 1);
		} else {
			setSide("heads");
		}
		setTotalFlips(totalFlips + 1);
	};

	return (
		<div>
			<h1>Let's Flip a Coin!</h1>
			<Coin imgSrc={sides[side]} />
			<button onClick={handleClick}>Flip Me!</button>
			<p>
				Out of {totalFlips} flips, there have been{" "}
				{totalFlips - totalTails} heads and {totalTails} tails.
			</p>
		</div>
	);
};

CoinContainer.defaultProps = {
	sides: {
		heads: {
			imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
		},

		tails: {
			imgSrc: "https://tinyurl.com/react-coin-tails-jpg",
		},
	},
};

export default CoinCounter;
