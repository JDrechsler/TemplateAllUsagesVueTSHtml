import Vue from "vue";
import HelloComponent from "./components/Hello.vue";

Vue.component('global-comp', require('./components/GlobalVueComp/Global.vue'))

Vue.config.productionTip = false

new Vue({
	el: "#app",
	template: `
    <div>
		<h2>First index.ts</h2>	
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="1" />
    </div>
    `,
	data: {
		name: "Worlddd"
	},
	components: {
		HelloComponent
	}
});
