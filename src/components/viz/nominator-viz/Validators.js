import React from "react";
import Rectangleandlines from "./Rectangleandlines";

class Validators extends React.Component {
	render() {
		if (this.props.validatorsInfo) {
			let arr1 = [];

			let radius = 160;
			let angle = (2 / 3) * Math.PI;
			let maxAngle = (2 / 3) * Math.PI;

			this.props.validatorsInfo.forEach((validator, index) => {
				angle += maxAngle / (this.props.validatorsInfo.length + 1);
				arr1.push(
					<Rectangleandlines
						key={index}
						x={radius * Math.sin(angle) + this.props.x}
						y={-radius * Math.cos(angle) + this.props.y}
						x2={this.props.x}
						y2={this.props.y}
						angle={angle}
						radius={radius}
					/>
				);
			});
			return arr1;
		} else return null;
	}
}

export default Validators;
