import Vue from "vue";
export default Vue.extend({
	name: 'Pizza',
	template: require('./Pizza.html'),
	data() {
		return {
			myData: 'Pizza',
			testVar: 3
		}
	},
	methods: {
		test() {
			var test: string = "Pizza"
		}
	}
})