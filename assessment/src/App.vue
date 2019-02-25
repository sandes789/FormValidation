<template>
  <div id="app">
    <form-field></form-field>
  </div>
</template>

<script>
import formValidation from "./components/formValidation.vue";
import validation from "./validation.js";

export default {
  components: {
    "form-field": formValidation
  },
  name: "app",
  data() {
    return {
      title: "Form Validation Assissment"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.form {
  width: 500px;
  margin: auto;
  border: 1px solid #a7a6a6;
  padding: 20px;
  font-family: "Lato", sans-serif;
  background: #f7f7f7;
}

.form-header {
  font-size: 2rem;
  line-height: 1.28571429em;
  margin: 0px 0px 20px;
  font-weight: bold;
}

.form-control {
  width: 50%;
  float: left;
  min-height: 90px;
}
.is-danger {
  color: #fb4040;
  font-size: 11px;
  display: block;
}

.form-fields {
  clear: both;
  content: "";
  display: table;
}

label {
  display: block;
  margin: 0px 0px 8px;
  color: #000000;
  font-size: 0.92857143em;
  font-weight: bold;
}

input,
textarea,
select {
  line-height: 1.21428571em;
  padding: 0.67857143em 1em;
  font-size: 1em;
  background: #ffffff;
  border: 1px solid rgb(220, 220, 220);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  outline: none;
}

.button {
  background: #000;
  border-color: #000;
  color: #fff;
  padding: 10px 30px;
  border-radius: 6px;
  margin: 10px auto;
  display: block;
  text-transform: uppercase;
  letter-spacing: 1.1px;
}
.mx-calendar-icon {
  height: auto;
}
.preview {
  width: 500px;
  margin: auto;
  border: 1px solid #a7a6a6;
  padding: 20px;
  font-family: "Lato", sans-serif;
  background: #f7f7f7;
}

.preview p span {
  font-weight: 900;
  display: block;
  font-size: 20px;
}
</style>
