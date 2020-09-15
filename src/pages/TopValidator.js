import React, { useState, useEffect } from "react";
import Infographic from "components/infographic";
import getStats from "lib/get-stats";
import { useStats } from "lib/store";
import ActorViz from "components/viz";
import axios from "axios";

function TopValidator() {
	const [data, setData] = useState();
	const [valId, setValId] = useState();
	useEffect(() => {
		axios
			.get("https://yieldscan-api.onrender.com/api/twitter/top-validator")
			.then(({ data }) => {
				setData(data);
			});
	}, []);
	const {
		setValidatorIdentity,
		setPoolReward,
		setCommission,
		setNominatorIdentity,
		setRewardEarned,
		setNominations,
	} = useStats();

	console.log(data);

	useEffect(() => {
		if (data) {
			setValidatorIdentity({
				name: data[0].info.display,
				stashId: data[0].stashId,
			});
			setPoolReward(data[0].estimatedPoolReward.toFixed(3));
			setCommission(data[0].commission);
			setValId(data[0].stashId);
		}
	}, [data, setCommission, setPoolReward, setValidatorIdentity]);

	React.useEffect(() => {
		const stats = getStats("kusama", "nominator");
		const { name, stashId, rewardEarned, nominations } = stats;
		setNominatorIdentity({ name, stashId });
		setRewardEarned(rewardEarned);
		setNominations(nominations);
	}, [setNominatorIdentity, setRewardEarned, setNominations]);

	return data ? (
		<div className="top-validator">
			<Infographic actor="validator" network="kusama" />
			<ActorViz actor="validator" stashId={valId} />
		</div>
	) : null;
}

export default TopValidator;
