import { faBars, faBuilding, faXmark } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { navEleData } from "./data";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
	const [hamburgerMenu, setHamburgerMenu] = useState();
	return (
		<>
			<div className="desktop-nav">
				<div className="logo-cont">
					<div className="logo">
						<FontAwesomeIcon icon={faBuilding} />
					</div>
					<div className="company">PERCEPTION</div>
				</div>
				<div className="nav-ele-cont">
					{navEleData.map((data, i) => (
						<Link
							to={`/${data.link}`}
							className="nav-ele"
							key={i}
						>
							<div className="icon">{data.icon}</div>
							<div className="name">{data.name}</div>
						</Link>
					))}
				</div>
			</div>
			<div className="mobile-nav">
				<div className="logo-cont">
					<div className="logo">
						<FontAwesomeIcon icon={faBuilding} />
					</div>
					<div className="company">PERCEPTION</div>
				</div>
				<div
					className="hamburger-menu-icon"
					onClick={() =>
						setHamburgerMenu((prevState) => !prevState)
					}
				>
					<FontAwesomeIcon icon={hamburgerMenu ? faXmark: faBars} />
				</div>
			</div>
			<div
				className={`hamburger-menu${
					(hamburgerMenu && " active") || ""
				}`}
			>
				{navEleData.map((data, i) => (
					<Link to={`/${data.link}`} className="nav-ele" key={i}>
						<div className="icon">{data.icon}</div>
						<div className="name">{data.name}</div>
					</Link>
				))}
			</div>
			<div className="mobile-nav-gap"></div>
		</>
	);
}
