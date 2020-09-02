import React from "react";
import ActorStats from "./actor-stats";
import ActorIdentity from "./actor-identity";

import Crown from "assets/images/crown.svg"

import "./key-stats.scss"

const KeyStats = ({ network, actor }) => {
	return (
		<div className="key-stats-container">
			<img className="key-stats-crown" src={Crown} alt="key-stats-crown" />
			<ActorIdentity actor={actor} />
			<ActorStats actor={actor} network={network} />
		</div>
	);
};

export default KeyStats;
