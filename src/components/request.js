/* eslint-disable no-console */

export const request = {
  props: ["searching"],
  data() {
    return {
      userList: [],
      resource: {},

    }
  },
  watch: {

    searching: {
      // eslint-disable-next-line no-unused-vars
      handler: function (val, oldVal) {
        this.$resource("", this.searching)
          .get()
          .then(response => {
            return response.json();
          })
          .then(data => {
            for (let key in data.userList) {
              this.userList.push({
                key: key,
                data: data.userList[key]
              });
            }
          })
        document.querySelector(".todoTable").innerHTML = "";
         this.userList = [];
      },
      deep: true
    }
  }
}