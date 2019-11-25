import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

/*Vue.mixin({
created(){
// eslint-disable-next-line no-console
console.log("globalMix");
}
});*/

Vue.use(VueResource);

Vue.http.options.root = "https://jsonplaceholder.typicode.com/todos";

Vue.http.interceptors.push((request, next) => {
  // if(request.method == "POST"){
  //   request.method = "PUT"
  // }
  next(response => {
    response.json = () => {
      return {
        userList: response.body
      }
    }
  });
});
Vue.config.productionTip = false;

/*export const eventBus = new Vue({
  methods: {
    filterData(todo) {
    this.$emit("todoDatas", todo);
    }
  },
 
});*/

new Vue({
  render: h => h(App),
}).$mount('#app')