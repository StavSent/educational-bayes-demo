import { useState, useEffect } from "react";
import Child from "./components/Child/Child.jsx"

import children from "./data/children.json";

import './index.css'

const App = () => {
	const [selectedChild, setSelectedChild] = useState(undefined);
	const [childrenPair, setChildrenPair] = useState([]);
	const [success, setSuccess] = useState(undefined);
	const [showNext, setShowNext] = useState(false);

	useEffect(() => {
		const childrenNames = Object.keys(children);
		const maxRange = childrenNames.length;
		const initialChildrenPair = [];

		let ran1 = Math.floor(Math.random() * maxRange);
		let ran2;

		do {
			ran2 = Math.floor(Math.random() * maxRange);
		} while (ran1 === ran2);

		initialChildrenPair.push(childrenNames[ran1]);
		initialChildrenPair.push(childrenNames[ran2]);

		setChildrenPair(initialChildrenPair)
	}, [])

	return (
		<div className="container" style={{ flexDirection: "column", minHeight: "100vh", margin: 0 }}>
			<section style={{ padding: "1rem" }}>
				<div className="container">
					<h1>{"Who' s more likely to get bullied?"}</h1>
				</div>
			</section>
			<section style={{ padding: "1rem" }}>
				{childrenPair.length === 2 && (
					<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
						<div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
							<Child
								isSelected={childrenPair[0] === selectedChild}
								name={childrenPair[0]}
								onClick={() => {
									if (!showNext) setSelectedChild(childrenPair[0])
								}}
							/>
							<h2>{"or"}</h2>
							<Child
								isSelected={childrenPair[1] === selectedChild}
								name={childrenPair[1]}
								onClick={() => {
									if (!showNext) setSelectedChild(childrenPair[1])
								}}
							/>
						</div>
						<div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
							<button
								className={selectedChild ? "" : "disabled"}
								style={{ marginRight: "0.5rem", backgroundColor: success === false ? "#FF0000" : success === true ? "#0A6847" : "#C73659" }}
								onClick={() => {
									if (!selectedChild) return;

									let win = true;
									for (const child of childrenPair) {
										if (children[selectedChild].bullyingLikelihood < children[child].bullyingLikelihood) {
											win = false;
										}
									}

									setSuccess(win);
									setShowNext(true);
								}}
							>
								{"Select"}
							</button>
							<button
								className={showNext ? "" : "disabled"}
								style={{ marginLeft: "0.5rem" }}
								onClick={() => {
									if (!showNext) return;

									const previousPair = childrenPair;
									const previousSelected = selectedChild;

									const childrenNames = Object.keys(children);
									const maxRange = childrenNames.length;

									let rand;
									do {
										rand = Math.floor(Math.random() * maxRange);
									} while (childrenNames[rand] === previousSelected);

									const selectedIndex = childrenPair.findIndex((i) => i === previousSelected);
									if (selectedIndex === 0) previousPair[1] = childrenNames[rand];
									else previousPair[0] = childrenNames[rand];

									setChildrenPair(previousPair)
									setSelectedChild(undefined)
									setSuccess(undefined);
									setShowNext(false);
								}}
							>
								{"Next"}
							</button>
						</div>
					</div>
				)}
			</section>
		</div>
	)
}

export default App
