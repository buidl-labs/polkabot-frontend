import React, { useState, useEffect } from "react";
import axios from "axios";
import Infographic from "components/infographic";
import { useStats } from "lib/store";
import ActorViz from "components/viz";

function TopNominator() {
	const [data, setData] = useState();
	const { setNominatorIdentity, setRewardEarned, setNominations } = useStats();

	useEffect(() => {
		axios
			.get("https://yieldscan-api.onrender.com/api/twitter/top-nominator")
			.then(({ data }) => {
				setData(data);
			});
	}, []);

	console.log(data);

	useEffect(() => {
		if (data) {
			setNominatorIdentity({ name: data.nomId, stashId: data.nomId });
			setRewardEarned(data.nomEraReward.toFixed(3));
			setNominations(data.nominations);
		}
	}, [data, setNominatorIdentity, setRewardEarned, setNominations]);

	return data ? (
		<div className="top-validator">
			<Infographic actor="nominator" network="kusama" />
			<ActorViz actor="nominator" stashId={data.nomId} />
		</div>
	) : null;
}

export default TopNominator;
