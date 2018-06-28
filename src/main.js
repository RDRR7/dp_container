const loader = require('./loader.js');

const { items, item_duplicates } = loader.get_items();

const cotainer_size = {
	heigth: 4,
	width: 4,
	depth: 4,
};

const container_volume =
	cotainer_size.heigth * cotainer_size.width * cotainer_size.depth;

function dp_container(total_volume, items) {
	const DP = new Array(items.length + 1);
	for (let i = 0; i < DP.length; i++) {
		DP[i] = new Array(total_volume + 1);
	}

	for (let i = 0; i < items.length + 1; i++) {
		for (let j = 0; j < total_volume + 1; j++) {
			if (i === 0 || j === 0) {
				DP[i][j] = 0;
			} else if (items[i - 1].volume <= j) {
				DP[i][j] = Math.max(
					DP[i - 1][j - items[i - 1].volume] + items[i - 1].volume,
					DP[i - 1][j]
				);
			} else {
				DP[i][j] = DP[i - 1][j];
			}
		}
	}
	return DP[items.length][total_volume];
}

console.log(`Container volume: ${container_volume}`);
console.log(
	`Max use volume: ${dp_container(container_volume, item_duplicates)}`
);
console.log(items);
