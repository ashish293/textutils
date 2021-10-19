import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	const toggleMode = () => {
		if (props.colorMode === "dark") {
			props.setColorMode("light");
			document.body.style.backgroundColor = "white";
		} else {
			props.setColorMode("dark");
			document.body.style.backgroundColor = "#1b2b57";
		}
	};
	return (
		<nav className={`navbar navbar-expand-lg navbar-${props.colorMode} bg-${props.colorMode}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					TextUtils
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="/navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>
					<div className="form-check form-switch">
						<input
							className="form-check-input"
							onChange={toggleMode}
							type="checkbox"
							id="flexSwitchCheckDefault"
						/>
						<label
							className={`form-check-label text-${props.colorMode === "dark" ? "light" : "dark"}`}
							htmlFor="flexSwitchCheckDefault"
						>
							<i className="bi bi-moon-stars-fill mx-2"></i>
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
}
