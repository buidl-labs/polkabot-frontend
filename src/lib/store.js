import create from "zustand";

import kusamaLogo from "assets/images/network/kusama/logo/kusama-logo.svg";
import kusamaBgValidator from "assets/images/network/kusama/background/kusama-validator-bg.svg";
import kusamaBgNominator from "assets/images/network/kusama/background/kusama-nominator-bg.svg";

import polkadotLogo from "assets/images/network/polkadot/logo/polkadot-logo.svg";
import polkadotBgValidator from "assets/images/network/polkadot/background/polkadot-validator-bg.svg";
import polkadotBgNominator from "assets/images/network/polkadot/background/polkadot-nominator-bg.svg";
import { cloneDeep } from "lodash";

const [useAcceptedInputs] = create(() => ({
	acceptedActors: ["validator", "nominator"],
	supportedNetworks: ["polkadot", "kusama"],
}));

const [useNetwork] = create(() => ({
	kusama: {
		name: "kusama",
		currency: "KSM",
		logo: kusamaLogo,
		bgValidator: kusamaBgValidator,
		bgNominator: kusamaBgNominator,
	},
	polkadot: {
		name: "polkadot",
		currency: "DOT",
		logo: polkadotLogo,
		bgValidator: polkadotBgValidator,
		bgNominator: polkadotBgNominator,
	},
}));

const [useContent] = create(() => ({
	title: {
		validator: "Top Pool Reward",
		nominator: "Highest Earning Nominator",
	},
	primaryStatTitle: {
		validator: "Pool Reward",
		nominator: "Reward Earned",
	},
	secondaryStatTitle: {
		validator: "Commission",
		nominator: "Nominations",
	},
}));

const [useStats] = create((set) => ({
	identity: {
		name: { validator: null, nominator: null },
		stashId: {
			validator: null,
			nominator: null,
		},
	},
	primaryStat: {
		validator: null,
		nominator: null,
	},
	secondaryStat: {
		validator: null,
		nominator: null,
	},

	setValidatorIdentity: ({ name, stashId }) =>
		set((state) => ({
			identity: {
				name: { ...state.identity.name, validator: name },
				stashId: { ...state.identity.stashId, validator: stashId },
			},
		})),
	setNominatorIdentity: ({ name, stashId }) =>
		set((state) => ({
			identity: {
				name: { ...state.identity.name, nominator: name },
				stashId: { ...state.identity.stashId, nominator: stashId },
			},
		})),

	setPoolReward: (poolReward) =>
		set((state) => ({
			primaryStat: { ...state.primaryStat, validator: poolReward },
		})),
	setCommission: (commission) =>
		set((state) => ({
			secondaryStat: { ...state.secondaryStat, validator: commission },
		})),

	setRewardEarned: (rewardEarned) =>
		set((state) => ({
			primaryStat: { ...state.primaryStat, nominator: rewardEarned },
		})),
	setNominations: (nominations) =>
		set((state) => ({
			secondaryStat: { ...state.secondaryStat, nominator: nominations },
		})),

	setStats: (stats) => set(() => ({ ...cloneDeep(stats) })),
}));

export { useAcceptedInputs, useNetwork, useContent, useStats };
