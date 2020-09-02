import React from "react";
import { useStats } from "lib/store";
import { get } from "lodash";
import Identicon from "@polkadot/react-identicon";

const ActorIdentity = ({ network, actor }) => {
	const {
		identity: { name, stashId },
	} = useStats();
	return (
		<React.Fragment>
			<div className="flex">
				<Identicon className="identicon" size="2.5rem" value={get(stashId, actor)} theme="polkadot" />
				<h3>{get(name, actor)}</h3>
			</div>
			{/* <p>{get(stashId, actor)}</p> */}
		</React.Fragment>
	);
};

export default ActorIdentity;
