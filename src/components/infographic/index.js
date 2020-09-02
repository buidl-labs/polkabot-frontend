import React from "react";
import Title from "./title";
import NetworkLogo from "./network-logo";
import BackgroundGraphic from "./background";
import KeyStats from "./key-stats";
import { useAcceptedInputs, useNetwork } from "lib/store";
import { includes, find } from "lodash";
import { networkNotSupported, actorNotAccepted } from "common/errors";

import "./infographic.scss";

const Infographic = ({ network, actor }) => {
	const { supportedNetworks, acceptedActors } = useAcceptedInputs();
	const { kusama, polkadot } = useNetwork();
	const currentNetwork = find(
		[kusama, polkadot],
		(_network) => _network.name === network
	);
	if (!includes(supportedNetworks, network)) throw networkNotSupported(network);

	if (!includes(acceptedActors, actor)) throw actorNotAccepted(actor);

	return (
		<div className="infographic-container">
			<Title actor={actor} network={currentNetwork} />
			<KeyStats network={currentNetwork} actor={actor} />
			<BackgroundGraphic network={currentNetwork} actor={actor} />
			<NetworkLogo network={currentNetwork} />
		</div>
	);
};

export default Infographic;
