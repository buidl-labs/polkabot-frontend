import React from "react";
import { includes } from "lodash";
import { useAcceptedInputs } from "lib/store";
import { actorNotAccepted } from "common/errors";
import ValidatorViz from "./validator-viz/ValidatorViz";
import NominatorApp from "./nominator-viz/NominatorApp";
import axios from "axios";

import "./viz.scss";

const ActorViz = ({ actor, stashId }) => {
	const { acceptedActors } = useAcceptedInputs();
	if (!includes(acceptedActors, actor)) throw actorNotAccepted(actor);

	const [validatorData, setValidatorData] = React.useState();
	const [nominatorData, setNominatorData] = React.useState();

	console.log("stashId");
	console.log(stashId);

	React.useEffect(() => {
		if (actor === "validator" && stashId !== undefined) {
			axios
				.get(`https://yieldscan-api.onrender.com/api/validator/${stashId}`)
				.then(({ data }) => {
					setValidatorData(data);
				});
		} else if (actor === "nominator" && stashId !== undefined) {
			axios
				.get(`https://yieldscan-api.onrender.com/api/user/${stashId}`)
				.then(({ data }) => {
					setNominatorData(data);
				});
		}
	}, [actor, stashId]);

	return actor === "validator" ? (
		<ValidatorViz validatorData={validatorData} networkName="KUSAMA NETWORK" />
	) : (
		<NominatorApp nominatorData={nominatorData} networkName="KUSAMA NETWORK" />
	);
};

export default ActorViz;
