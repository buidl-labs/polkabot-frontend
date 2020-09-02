const getValidatorStats = (network) => {
	// TODO: Fetch validator stats for the appropriate network
	const fakeValidator = {
		name: "Fake Validator",
		stashId: "E4StaSGGGk17tCTyc6y1tg9MxK84RGbtL9C8JZa5JcUshCH",
		poolReward: 1.952,
		commission: 10,
	};

	return fakeValidator;
};

const getNominatorStats = (network) => {
	// TODO: Fetch nominator stats for the appropriate network
	const fakeNominator = {
		name: "Fake Nominator",
		stashId: "Eksmah4LfMN3wbVggUxftDnFr8J2sGhKUV84Yw7QHsox1iN",
		rewardEarned: 0.523,
		nominations: 14,
	};

	return fakeNominator;
};

const getStats = (network, actor) => {
	let stats;
	if (actor === "nominator") {
		stats = getNominatorStats(network);
	}
	if (actor === "validator") {
		stats = getValidatorStats(network);
	}
	return stats;
};

export default getStats;
