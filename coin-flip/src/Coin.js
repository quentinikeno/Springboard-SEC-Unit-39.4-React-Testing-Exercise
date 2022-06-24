import React from "react";

const Coin = ({ imgSrc, side }) => {
	return <img src={imgSrc} alt={side} />;
};

export default Coin;
