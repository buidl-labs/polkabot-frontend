import React from "react";
import Infographic from "components/infographic";
import getStats from "lib/get-stats";
import { useStats } from "lib/store";

function TopValidator() {
	const {
		setValidatorIdentity,
		setPoolReward,
		setCommission,
		setNominatorIdentity,
		setEarnedReward,
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
		const { name, stashId, earnedReward, nominations } = stats;
		setNominatorIdentity({ name, stashId });
		setEarnedReward(earnedReward);
		setNominations(nominations);
	}, [setNominatorIdentity, setEarnedReward, setNominations]);

	return (
		<div className="top-validator">
			<Infographic actor="validator" network="kusama" />
		</div>
	);
}

export default TopValidator;
