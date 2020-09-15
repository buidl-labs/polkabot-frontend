import React from "react";
import { useStats } from "lib/store";
import { get } from "lodash";
import Identicon from "@polkadot/react-identicon";

const ActorIdentity = ({ network, actor }) => {
	const {
		identity: { name, stashId },
	} = useStats();

	console.log("name");
	console.log(name);
	console.log("stashId");
	console.log(stashId);

	let actorIdentity =
		get(name, actor) !== null ? get(name, actor) : get(stashId, actor);

	console.log(actorIdentity);
	if (actorIdentity) {
		if (actorIdentity.length > 11) {
			actorIdentity =
				actorIdentity.slice(0, 5) + "..." + actorIdentity.slice(-5);
		}
	}

	return (
		<React.Fragment>
			<div className="flex">
				<Identicon
					className="identicon"
					size="2.5rem"
					value={get(stashId, actor)}
					theme="polkadot"
				/>
				{<h3>{actorIdentity}</h3>}
			</div>
			{/* <p>{get(stashId, actor)}</p> */}
		</React.Fragment>
	);
};

export default ActorIdentity;
