<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6 mx-auto">
          <formControl v-model="search"></formControl>
        </div>
      </div>
      <div class="row">
        <todoList
          class="col-6 text-left mx-auto shadow-sm rounded animated"
          v-bind:searching="{'userId':search.userId,'completed':false}"
        >Task</todoList>

        <todoList
          class="col-6 text-left mx-auto shadow-sm rounded animated"
          :class="[slide=search.completed ? 'slideInRight' : 'slideOutRight']"
          v-show="search.completed"
          v-bind:searching="{'userId':search.userId,'completed':true}"
        >Completed</todoList>
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
      slide: "slideInRight"
    };
  }
};
</script>

<style>
</style>
