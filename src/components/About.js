import React, { useState } from "react";

export default function About() {
	const [myStyle, setMyStyle] = useState({
		color: "white",
		backgroundColor: "black",
	});

	const [btnText, setBtnText] = useState("Enable Dark Mode");
	const toggleStyle = () => {
		if (myStyle.color === "white") {
			setMyStyle({
				color: "black",
				backgroundColor: "white",
			});
			setBtnText("Enable Light Mode");
		} else {
			setMyStyle({
				color: "white",
				backgroundColor: "black",
			});
			setBtnText("Enable Dark Mode");
		}
	};

	return (
		<>
			<div className="container">
				<p className="fs-3 my-4">
					This Web app gives you feature to do some operation on text very easily.
				</p>
			</div>
		</>
	);
}
