import React, { useState } from "react";

export function Home() {
	let [colorRed, setColorR] = useState("off");
	let [colorYellow, setColorY] = useState("off");
	let [colorGreen, setColorG] = useState("off");

	return (
		<div className="container">
			<div className="top"></div>
			<div className="trafficLight">
				<div
					className={"round " + colorRed}
					onClick={() => {
						setColorR((colorRed = "red-on"));
						setColorG((colorGreen = "off"));
						setColorY((colorYellow = "off"));
					}}></div>
				<div
					className={"round " + colorYellow}
					onClick={() => {
						setColorY((colorYellow = "yellow-on"));
						setColorR((colorRed = "off"));
						setColorG((colorGreen = "off"));
					}}></div>
				<div
					className={"round " + colorGreen}
					onClick={() => {
						setColorG((colorGreen = "green-on"));
						setColorR((colorRed = "off"));
						setColorY((colorYellow = "off"));
					}}></div>
			</div>
		</div>
	);
}
