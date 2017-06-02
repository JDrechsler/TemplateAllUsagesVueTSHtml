<!-- src/components/Hello.vue -->
<template>
	<div>
		<h2>Hello.vue durch import HelloComponent from "./components/Hello.vue";</h2>
		<div class="greeting">Helloooooo {{name}}{{exclamationMarks}}</div>
		<button @click="decrement">-</button>
		<button @click="increment">+</button>
	
		<Add></Add>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Add from './Add.vue'

export default Vue.extend({
	props: ['name', 'initialEnthusiasm'],
	data() {
		return {
			enthusiasm: this.initialEnthusiasm,
			test: 'asdsdfsdf'

		}
	},
	methods: {
		increment() { this.enthusiasm++; },
		decrement() {
			if (this.enthusiasm > 1) {
				this.enthusiasm--;

			}
		},
	},
	computed: {
		exclamationMarks(): string {
			return Array(this.enthusiasm + 1).join('!');
		}
	},
	components: {
		Add
	}
});
</script>

<style>
.greeting {
	font-size: 20px;
}
</style>
