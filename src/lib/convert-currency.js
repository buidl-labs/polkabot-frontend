import _axios from "axios";
import { get } from "lodash";

const convertCurrency = async (value, network) => {
	const res = await _axios(
		"https://api.coingecko.com/api/v3/simple/price?ids=kusama%2Cpolkadot&vs_currencies=usd"
	);
	const { kusama, polkadot } = res.data;
	let convertedValue = null;
	if (get(network, "name") === "kusama") {
		convertedValue = value * kusama.usd;
	}
	if (get(network, "name") === "polkadot")
		convertedValue = value * polkadot.usd;
	return convertedValue;
};

export default convertCurrency;
