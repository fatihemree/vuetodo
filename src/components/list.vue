<template>
  <div>
    <p>{{searching}}</p>
    <table class="table table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Todo  <slot></slot></th>
        </tr>
      </thead>
      <transition name="slide-fade">
      <tbody class="todoTable">
        <tr :key="index" v-for="(todo,index) in userList">
          <th scope="row" v-text="todo.data.id"></th>
          <td><b>{{todo.data.userId}}</b> - {{todo.data.title}} - <b>{{todo.data.completed}}</b></td>
        </tr>
      </tbody>
      </transition>
    </table>
  </div>
</template>

<script>
import { request } from "./request.js";
export default {
  mixins: [request]
  
};
</script>

<style>

</style>