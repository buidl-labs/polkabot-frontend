import React from "react";
import { get } from "lodash";

const NetworkLogo = ({ network }) => {
	return (
		<img
			className="network-logo"
			src={get(network, "logo")}
			alt={`${network}-logo`}
		/>
	);
};

export default NetworkLogo;
