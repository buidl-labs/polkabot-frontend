import React from "react";
import { get } from "lodash";

const BackgroundGraphic = ({ network, actor }) => {
	return (
		<img
			className="bg-graphic"
			src={get(network, actor === "validator" ? "bgValidator" : "bgNominator")}
			alt={`${network}-${actor}-background`}
		/>
	);
};

export default BackgroundGraphic;
