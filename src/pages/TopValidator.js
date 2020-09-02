import React from "react";
import Infographic from "components/infographic";
import getStats from "lib/get-stats";
import { useStats } from "lib/store";
import ActorViz from "components/viz";

function TopValidator() {
	const {
		setValidatorIdentity,
		setPoolReward,
		setCommission,
		setNominatorIdentity,
		setRewardEarned,
		setNominations,
	} = useStats();

	React.useEffect(() => {
		const stats = getStats("kusama", "validator");
		const { name, stashId, poolReward, commission } = stats;
		setValidatorIdentity({ name, stashId });
		setPoolReward(poolReward);
		setCommission(commission);
	}, [setValidatorIdentity, setPoolReward, setCommission]);

	React.useEffect(() => {
		const stats = getStats("kusama", "nominator");
		const { name, stashId, rewardEarned, nominations } = stats;
		setNominatorIdentity({ name, stashId });
		setRewardEarned(rewardEarned);
		setNominations(nominations);
	}, [setNominatorIdentity, setRewardEarned, setNominations]);

	return (
		<div className="top-validator">
			<Infographic actor="nominator" network="polkadot" />
			<ActorViz actor="nominator" />
		</div>
	);
}

export default TopValidator;
