import PropTypes from "prop-types";

import childrenDataConverter from "../../functions/childrenDataConverter.js";

import children from "../../data/children.json";

import "./Child.css"

const Child = ({ isSelected, name, onClick }) => (
	<div className="container" onClick={onClick} style={{ padding: "2rem" }}>
		{children?.[name]
			?
			(
				<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
					<div className="child-container" style={{ borderColor: isSelected ? "#C73659" : "#987070" }}>
						<div style={{ width: "8rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
							<img className="child-img" style={{ maxWidth: isSelected ? "6rem" : "5rem", maxHeight: isSelected ? "6rem" : "5rem" }} src={`/${name}.jpg`} />
						</div>
						<div style={{ padding: "1rem", width: "15rem" }}>
							<div>
								{`${childrenDataConverter("name")}: ${childrenDataConverter(name)}`}
							</div>
							<div>
								{`${childrenDataConverter("singleParent")}: ${childrenDataConverter(children?.[name]?.singleParent)}`}
							</div>
							<div>
								{`${childrenDataConverter("schoolPerformance")}: ${childrenDataConverter(children?.[name]?.schoolPerformance)}`}
							</div>
							<div>
								{`${childrenDataConverter("basicNeeds")}: ${childrenDataConverter(children?.[name]?.basicNeeds)}`}
							</div>
						</div>
					</div>
				</div>
			)
			: ""}
	</div>
)

Child.propTypes = {
	isSelected: PropTypes.bool,
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

export default Child;
