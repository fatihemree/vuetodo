<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6 mx-auto">
          <formControl v-model="search"></formControl>
        </div>
      </div>
      <div class="row">
        <todoList class="col-6 text-left mx-auto" v-bind:searching="search">
          
        </todoList>
      </div>
    </div>
  </div>
</template>

<script>
import todoList from "@/components/list.vue";
import formControl from "@/components/form.vue";

export default {
  components: {
    formControl,
    todoList
  },
  data() {
    return {
      search: {},
      kitap:"fatihEmre"
    };
  },
  created() {
    // eslint-disable-next-line no-console
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
