var faker = require('faker'),
	_ = require('underscore');

module.exports = {
	install: function (Vue, options) {

		if (options && options.locale) {
			faker.locale = options.locale;
		}

		var config = {
			active: true,
		};

		_.extend(config, options);

		Vue.faker = function() {
			return faker;
		}

		Vue.prototype.$faker = function() {
			return Vue.faker();
		}

		Vue.prototype.$fake = function(string) {
			if (!config.active) {
				return "";
			}
			return Vue.faker().fake(string);
		}
	},
};
