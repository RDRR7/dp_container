(function() {
	const items = require('./items.json');
	const item_duplicates = [];

	function calculate_volume() {
		items.forEach(item => {
			item.volume = item.height * item.width * item.depth;
		});
	}

	function push_duplicates() {
		items.forEach(item => {
			for (let i = 0; i < item.amount; i++) {
				item_duplicates.push({
					code: item.code,
					amount: 1,
					height: item.height,
					width: item.width,
					depth: item.depth,
					volume: item.volume,
				});
			}
		});
	}

	module.exports.get_items = function() {
		calculate_volume();
		push_duplicates();
		return { items, item_duplicates };
	};
})();
