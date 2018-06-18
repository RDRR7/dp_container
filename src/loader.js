(function() {
	const items = require('./items.json');

	function calculate_volume() {
		items.forEach(item => {
			item.volume = item.height * item.width * item.depth;
		});
	}

	function push_duplicates() {
		items.forEach(item => {
			for (let i = 1; i < item.amount; i++) {
				items.push({
					code: item.code,
					amount: 1,
					height: item.height,
					width: item.width,
					depth: item.depth,
				});
			}
			item.amount = 1;
		});
	}

	module.exports.get_items = function() {
		push_duplicates();
		calculate_volume();
		return items;
	};
})();
