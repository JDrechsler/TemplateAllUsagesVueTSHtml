<template>
	<section>
		<h2>Add.vue import Add from './Add.vue'</h2>
		<h3>Add :D </h3>
		<External></External>
		<global-comp></global-comp>
	</section>
</template>


<script lang="ts">
import Vue from "vue";
import External from './TSHTML/External'
export default Vue.extend({
	name: 'Add',
	data() {
		return {
			myData: 'asda'
		}
	},
	components: {
		External
	}


})


</script>
