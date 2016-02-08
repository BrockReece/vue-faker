# vue-faker
Vue plugin that wraps the node fake data generator, [faker] (https://github.com/marak/Faker.js/).

## Installation

You can install this plugin through NPM

``` cmd 
npm install vue-faker
```

And then register the plugin with Vue.

``` js
Vue.use(require('vue-faker'));
```

## Usage
You now access the faker library using the following command

``` js
Vue.faker().name.firstName()
```

Or from within a Vue component

``` js
this.$faker().name.firstName()
```

``` js
...
data() {
    return {
      name: this.$faker().name.findName(),
      email: this.$faker().internet.email(),
      company: this.$faker().company.companyName(),
    }
},
...
```

### Locale
You can set the loacle globally by passing it through as an option to the plugin

``` js
Vue.use(require('vue-faker'), {locale: 'en_GB'});
```
