import _axios from "axios";
import { get } from "lodash";

const convertCurrency = async (value, network) => {
	const res = await _axios(
		"https://api.coingecko.com/api/v3/simple/price?ids=kusama%2Cpolkadot&vs_currencies=usd"
	);
	const { kusama, polkadot } = res.data;
	if (get(network, "name") === "kusama") {
		console.log("hello kusama: " + value);
		return value * kusama.usd;
	} else if (get(network, "name") === "polkadot") {
		console.log("hello polkadot: " + value);
		return value * polkadot.usd;
	}
};

export default convertCurrency;
