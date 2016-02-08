var faker = require('faker');

module.exports = {
	install: function (Vue, options) {

		if (options && options.locale) {
			faker.locale = options.locale;
		}

		Vue.faker = function() {
			return faker;
		}

		Vue.prototype.$faker = function() {
			return Vue.faker();
		}

	},
};
