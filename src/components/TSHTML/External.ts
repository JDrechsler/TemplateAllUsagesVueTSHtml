import Vue from "vue";
import Pizza from './../PizzaTSHTML/Pizza'


export default Vue.extend({
	name: 'External',
	template: require('./External.html'),
	data() {
		return {
			myData: 'externallll2',
			testVar: 3
		}
	},
	methods: {
		test() {
			var test: string = "asdasd"
		}
	},
	components: {
		Pizza
	}
})