import React from "react";
import { Line, Circle } from "react-konva";

class Rectangleandlines extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Line
					points={[this.props.x, this.props.y, this.props.x2, this.props.y2]}
					stroke="#3C608B"
					strokeWidth={1}
				/>
				<Line
					points={[
						this.props.x,
						this.props.y,

						this.props.x,
						this.props.y + this.props.radius * Math.abs(Math.sin(this.props.angle) ** 2) + 131.5,
					]}
					stroke={"#3C608B"}
				/>
				<Circle x={this.props.x} y={this.props.y} radius={7} fill="#F5B100" />
			</React.Fragment>
		);
	}
}

export default Rectangleandlines;
