function towerBuilder(nFloors) {
	let tower = [];

	for (let i = nFloors - 1; i >= 0; i--) {
		let floor = "";
		let k = i + (i - 1);

		for (; k >= -1; k--) {
			floor += "*";
		}

		let arrFloor = Array.from(floor);

		if (i < nFloors - 1) {
			let len = (tower[nFloors - 1].length - arrFloor.length) / 2;

			for (; len > 0; len--) {
				arrFloor.push("\u00A0");
				arrFloor.unshift("\u00A0");
			}
		}
		floor = arrFloor.join("");
		tower[i] = floor;
	}
	return tower
}
towerBuilder(6)
console.log(towerBuilder(6));