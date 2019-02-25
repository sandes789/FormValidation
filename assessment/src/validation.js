export default {
methods: {
    checkForm: function (e) {
        this.errors = [];
    
        if (!this.name) {
          this.errors.push("Name required.");
        }
        if (!this.errors.length) {
          return true;
        }
    
        e.preventDefault();
      }
}
}