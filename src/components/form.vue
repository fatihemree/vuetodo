<template>
  <div>
    <div class="row my-5">
      <div class="col-3">
        <input
          class="form-control form-control-sm"
          type="text"
          placeholder="name"
          ref="name"
          :value="search"
          @input="updata()"
        />
      </div>
      <div class="custom-control custom-switch mt-1">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitch1"
          @click="updata()"
          ref="comp"
        />
        <label class="custom-control-label" for="customSwitch1">complated</label>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
//import { eventBus } from "../main";
export default {
  props: ["search"],
  data() {
    return {
      check: "",
      name: ""
    };
  },
  methods: {
    updata() {
      this.check = this.$refs.comp.checked;
      this.name = this.$refs.name.value;

      if (this.name == "" && this.check == false) {
        this.$emit("input", "");
        // eslint-disable-next-line no-console
        console.log("if")
      } else if (this.name != "" && this.check == true) {
                // eslint-disable-next-line no-console
                console.log("if else")
        this.$emit("input", { "userId": this.name ,"completed": true });
      }
      else if (this.name=="" && this.check==true) {
         this.$emit("input", {"completed": true });
      }
      else{
                // eslint-disable-next-line no-console
                console.log("else")

        this.$emit("input", {"userId":this.name});
      }
    }
  }
};
</script>

<style>
</style>