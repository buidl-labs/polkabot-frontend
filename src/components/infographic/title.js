import React from "react";
import { useContent } from "lib/store";
import { get } from "lodash";

const Title = ({ actor }) => {
	const { title } = useContent();
	return (
		<div className="title-container">
			<h1 className="title">{get(title, actor)}</h1>
			<h1 className="title-shadow shadow-1">{get(title, actor)}</h1>
			<h1 className="title-shadow shadow-2">{get(title, actor)}</h1>
			<h1 className="title-shadow shadow-3">{get(title, actor)}</h1>
			<h1 className="title-shadow shadow-4">{get(title, actor)}</h1>
		</div>
	);
};

export default Title;
