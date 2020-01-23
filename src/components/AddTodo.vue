<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Add Todos ..." />
      <input type="submit" value="Sumbit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
    }
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b841;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b884;
  color: #fff;
  border: 1px #41b884 solid;
  cursor: pointer;
}
</style>
