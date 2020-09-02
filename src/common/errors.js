const actorNotAccepted = (actor) => new Error(
	`InvalidArgument: Received \`${actor}\` for \`actor\`. Accepted values are "validator" and "nominator".`
);

const networkNotSupported = (network) => new Error(
	`InvalidArgument: Received \`${network}\` for \`network\`. Accepted values are "Polkadot" and "Kusama".`
);

export { actorNotAccepted, networkNotSupported };
