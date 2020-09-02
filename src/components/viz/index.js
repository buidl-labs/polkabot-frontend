import React from "react";
import { includes } from "lodash";
import { useAcceptedInputs } from "lib/store";
import { actorNotAccepted } from "common/errors";
import ValidatorViz from "./validator-viz/ValidatorViz";
import NominatorApp from "./nominator-viz/NominatorApp";
import axios from "axios";

import "./viz.scss";

const topValidatorStashId = "FUfXiFsaoWbUeaWiWBDizP7VbTSLxMirbJEpLAk1g6YueJp";
const topNominatorStashId = "Eksmah4LfMN3wbVggUxftDnFr8J2sGhKUV84Yw7QHsox1iN";

const ActorViz = ({ actor }) => {
	const { acceptedActors } = useAcceptedInputs();
	if (!includes(acceptedActors, actor)) throw actorNotAccepted(actor);

	const [validatorData, setValidatorData] = React.useState();
	const [nominatorData, setNominatorData] = React.useState();

	React.useEffect(() => {
		axios
			.get(
				`https://yieldscan-api.onrender.com/api/validator/${topValidatorStashId}`
			)
			.then(({ data }) => {
				setValidatorData(data);
			});
			axios
				.get(
					`https://yieldscan-api.onrender.com/api/user/${topNominatorStashId}`
				)
				.then(({ data }) => {
					setNominatorData(data);
				});
	}, []);

	return actor === "validator" ? (
		<ValidatorViz validatorData={validatorData} networkName="KUSAMA NETWORK" />
	) : (
		<NominatorApp nominatorData={nominatorData} networkName="KUSAMA NETWORK" />
	);
};

export default ActorViz;
