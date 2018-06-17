(function() {
	const items = require('./items.json');

	function calculate_volume() {
		items.forEach(item => {
			item.volume = item.height * item.width * item.depth;
		});
	}

	module.exports.get_items = function() {
		calculate_volume();
		return items;
	};
})();
