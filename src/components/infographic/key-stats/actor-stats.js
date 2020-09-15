import React from "react";
import { useContent, useStats } from "lib/store";
import { get } from "lodash";
import convertCurrency from "lib/convert-currency";

const ActorStats = ({ network, actor }) => {
	const { primaryStatTitle, secondaryStatTitle } = useContent();
	const { primaryStat, secondaryStat } = useStats();
	const [primaryStatFiat, setPrimaryStatFiat] = React.useState(0);

	React.useEffect(() => {
		const _primaryStat = get(primaryStat, actor);
		const convertStat = async () => {
			convertCurrency(_primaryStat, network).then((convertedValue) =>
				setPrimaryStatFiat(convertedValue)
			);
		};
		convertStat();
	}, [primaryStat, network, actor]);

	return (
		<div className="key-stats">
			<h3>{get(primaryStatTitle, actor)}</h3>
			<p className="primary-stat">
				{get(primaryStat, actor)} {get(network, "currency")}
			</p>
			<p className="primary-stat-fiat">${primaryStatFiat.toFixed(2)}</p>
			<h3>{get(secondaryStatTitle, actor)}</h3>
			<p className="secondary-stat">{`${get(secondaryStat, actor)}`}</p>
		</div>
	);
};

export default ActorStats;
