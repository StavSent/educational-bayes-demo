const childrenDataConverter = (t, lang = "en") => {
	if (lang === "en") {
		if (t === "hasan") return "Hasan";
		if (t === "achilles") return "Achilles";
		if (t === "roberto") return "Roberto";
		if (t === "yovan") return "Yovan";
		if (t === "john") return "John";
		if (t === "michelle") return "Michelle";
		if (t === "lee") return "Lee";
		if (t === "christine") return "Christine";
		if (t === "enarah") return "Enarah";
		if (t === "ioli") return "Ioli";
		if (t === "name") return "Name";
		if (t === "singleParent") return "Single Parent";
		if (t === "schoolPerformance") return "School Performance";
		if (t === "basicNeeds") return "Basic Needs";
		if (t === "no") return "No";
		if (t === "yes") return "Yes";
		if (t === "good") return "Good";
		if (t === "average") return "Average";
		if (t === "bullyingLikelihood") return "Bullying Likelihood";
	}

	if (t === "hasan") return "Χασάν";
	if (t === "achilles") return "Αχιλλέας";
	if (t === "roberto") return "Ρομπέρτο";
	if (t === "yovan") return "Γιοβάν";
	if (t === "john") return "Γιάννης";
	if (t === "michelle") return "Μισέλ";
	if (t === "lee") return "Λι";
	if (t === "christine") return "Χριστίνα";
	if (t === "enarah") return "Ινάρα";
	if (t === "ioli") return "Ιόλη";
	if (t === "name") return "Όνομα";
	if (t === "singleParent") return "Μονογονεϊκή Οικογένεια";
	if (t === "schoolPerformance") return "Σχολική Επίδοση";
	if (t === "basicNeeds") return "Κάλυψη Βασικών Αναγκών";
	if (t === "no") return "Όχι";
	if (t === "yes") return "Ναι";
	if (t === "good") return "Καλή";
	if (t === "average") return "Μέτρια";
	if (t === "bullyingLikelihood") return "Πιθανότητα Σχολικού Εκφοβισμού";
}

export default childrenDataConverter;
