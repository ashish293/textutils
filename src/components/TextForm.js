import React, { useState } from "react";

export default function TextForm(props) {
	const handleNormal = () => {
		let temp = text.split(". ");
		let str = "";
		for (let i = 0; i < temp.length; i++) {
			if (i !== 0) str += ". ";
			str += temp[i].charAt(0).toUpperCase() + temp[i].substr(1).toLowerCase();
		}
		setText(str);
	};
	const handleUpClick = () => {
		setText(text.toUpperCase());
	};
	const handleLoClick = () => {
		setText(text.toLowerCase());
	};
	const handleOnChange = (event) => {
		setText(event.target.value);
	};
	const handleReverse = (event) => {
		let temp = "";
		for (let i = text.length - 1; i >= 0; i--) {
			temp += text.charAt(i);
		}
		setText(temp);
	};
	const handleCapitalize = () => {
		let newText = text.split(" ").map((currentValue) => {
			let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
			return newText;
		});
		setText(newText.join(" "));
	};
	const [text, setText] = useState("Enter text here");
	let textColor = props.colorMode === "dark" ? "light" : "dark";
	return (
		<>
			<div className={`container my-3 text-${textColor}`}>
				<h1>{props.heading}</h1>
				<div className="my-3">
					<textarea
						className={`form-control text-${textColor}`}
						value={text}
						onChange={handleOnChange}
						id="Textbox"
						rows="8"
					></textarea>
				</div>
				<button className="btn btn-primary mx-1" onClick={handleNormal}>
					Normal
				</button>
				<button className="btn btn-primary mx-1" onClick={handleUpClick}>
					Convert to uppercase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleLoClick}>
					Convert to lowercase
				</button>
				<button className="btn btn-primary mx-1" onClick={handleReverse}>
					Convert to Reverse
				</button>
				<button className="btn btn-primary mx-1" onClick={handleCapitalize}>
					Capitalize
				</button>
			</div>
			<div className={`container my-3 text-${textColor}`}>
				<p>
					Words = {text.split(" ").length}, Character = {text.length}
				</p>
			</div>
		</>
	);
}
