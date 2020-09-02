import React from "react";
import { Stage, Layer, Rect, Text, Circle } from "react-konva";
import Validators from "./Validators";
import Network from "../Network";

class NominatorApp extends React.Component {
	constructor() {
		super();
		this.container = React.createRef();
		this.state = {
			stageWidth: undefined,
			stageHeight: undefined,
		};
	}

	componentDidMount() {
		this.setState({
			stageWidth: this.container.offsetWidth,
			stageHeight: this.container.offsetHeight,
		});
	}

	render() {
		const width =
			this.state.stageWidth !== undefined
				? this.state.stageWidth
				: window.innerWidth / 2;
		const height =
			this.state.stageHeight !== undefined
				? this.state.stageHeight
				: window.innerHeight;
		let nomText = "";
		if (this.props.nominatorData !== undefined) {
			nomText =
				this.props.nominatorData.name !== null
					? this.props.nominatorData.name
					: this.props.nominatorData.nomId;
			if (nomText.length > 11) {
				nomText = nomText.slice(0, 5) + "..." + nomText.slice(-5);
			}
		}

		const NetworkName = this.props.networkName;

		const nominatorRectangleWidth = 110;
		const nominatorRectangleHeight = 30;

		return (
			<div
				className="viz"
				ref={(node) => {
					this.container = node;
				}}
			>
				<Stage className="validator-viz-stage" width={width} height={height}>
					<Layer>
						<Validators
							colorMode={this.props.colorMode}
							validatorsInfo={
								this.state.nominatorData &&
								this.state.nominatorData.validatorsInfo
							}
							x={width / 2}
							y={height / 4 - nominatorRectangleHeight / 2}
						/>

						<Circle
							x={width / 2}
							y={height + 135}
							rotation={180}
							angle={180}
							radius={235}
							fill={"transparent"}
							stroke={"#3C608B"}
							strokeWidth={4}
						/>
						<Rect
							x={width / 2 - nominatorRectangleWidth / 2}
							y={height / 4 - nominatorRectangleHeight}
							width={nominatorRectangleWidth}
							height={nominatorRectangleHeight}
							fill={"#627E9F"}
							cornerRadius={8}
						/>
						<Text
							text={nomText}
							x={width / 2 - nominatorRectangleWidth / 2}
							y={height / 4 - nominatorRectangleHeight + 10}
							width={nominatorRectangleWidth}
							height={nominatorRectangleHeight}
							align="center"
							fill="white"
							fontSize={12}
							fontStyle="bold"
						/>
						<Network x={width / 2} y={height + 135} NetworkName={NetworkName} />
					</Layer>
				</Stage>
			</div>
		);
	}
}

export default NominatorApp;
