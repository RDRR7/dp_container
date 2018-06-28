(function() {
	const items = require('./items.json');
	const item_duplicates = [];

	function calculate_volume() {
		item_duplicates.forEach(item => {
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
				});
			}
		});
	}

	module.exports.get_items = function() {
		push_duplicates();
		calculate_volume();
		return { items, item_duplicates };
	};
})();
