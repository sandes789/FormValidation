<template>
  <div id="app">
    <form  @submit.prevent="validateBeforeSubmit" class="form" v-if="!preview">
      <div class="form-header">
        {{title}}
      </div>
      <div class="form-fields">

        <div class="form-control">
          <label for="name">Name</label>
          <input v-validate="'required|min:3'" v-model.lazy="name" name="name" type="text">
          <span v-show="errors.has('name')" class="is-danger">{{ errors.first('name') }}</span>
        </div>

        <div class="form-control">
          <label for="phone">Phone Nmber</label>
          <input v-validate="'required|min:10'" v-model.lazy="phone" name="phone" type="text">
          <span v-show="errors.has('phone')" class="is-danger">{{ errors.first('phone') }}</span>
        </div>

        <div class="form-control">
          <label for="email">Email</label>
             <input name="email" v-model="email" v-model.lazy="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text">
             <span v-show="errors.has('email')" class="is-danger">{{ errors.first('email') }}</span>
        </div>

        <div class="form-control">
          <label for="dob">Date of Birth</label>
          <date-picker v-validate="'required'"  name="date" v-model="time1" :first-day-of-week="1" lang="en"></date-picker>
          <span v-show="errors.has('date')" class="is-danger">{{ errors.first('date') }}</span>
        </div>
        <div class="form-control">
          <label for="address">Address</label>
          <input v-validate="'required'" v-model="address" name="address" type="text">
          <span v-show="errors.has('address')" class="is-danger">{{ errors.first('address') }}</span>
        </div>

        <div class="form-control">
          <label for="nationality">Nationality</label>
          <input v-validate="'required'" v-model="nationality" name="nationality" type="text">
          <span v-show="errors.has('nationality')" class="is-danger">{{ errors.first('nationality') }}</span>
        </div>

        <div class="form-control">
          <label for="contact">Contact</label>
          <select v-model="list.contactList">
            <option disabled>Select one from options</option>
            <option v-for="contactList in contactBy">{{contactList}}</option>
          </select>
        </div>
        
        <div class="form-control">
          <label for="gender">Gender</label>
            <input v-validate="'required'"  type="radio" name="gender" value="Male" v-model="list.gender"> Male
            <input  v-validate="'required'" type="radio" name="gender" value="Female" v-model="list.gender"> Female
            <span v-show="errors.has('gender')" class="is-danger">{{ errors.first('gender') }}</span>
        </div>

        <div class="form-control" style="width: 100%;">
          <label for="gender">Education Background</label>
          <textarea v-validate="'required'" v-model="education" name="education" rows="4" cols="65" placeholder="Add your educational Backgound.."></textarea>
          <span v-show="errors.has('education')" class="is-danger">{{ errors.first('education') }}</span>
        </div>
        
      </div>
      <div>
        <input class="button" type="submit" value="Submit">  
      </div>
      
    </form>
    
    <div v-if="preview" class="preview">
      <div class="form-header">
        {{titlePreview}}
      </div>
      <p><span>Name:</span>{{name}}</p>
      <p><span>Phone:</span>{{phone}}</p>
      <p><span>Email:</span>{{email}}</p>
      <p><span>Date of Birth:</span>{{time1}}</p>
      <p><span>Address:</span>{{address}}</p>
      <p><span>Nationality:</span>{{nationality}}</p>
      <p><span>Contact Via:</span>{{list.contactList}}</p>
      <p><span>Gender:</span>{{list.gender}}</p>
      <p>
        <span>Education Background:</span>
        <ul>
          <li>{{education}}</li>
        </ul>
      </p>



    </div>
  </div>
</template>

<script>

export default {
  name: 'form-example',
  
  data: () => ({
    list:{
      contactList:'',
      gender:''
    },
    contactBy:['Mail','Phone','Other'],
    title:'Form Validation',
    titlePreview:'Preview',
    email: '',
    name: '',
    address:'',
    nationality:'',
    education:'',
    phone: '',
    url: '',
    time1: '',
    time2: '',
    time3: '',
    preview:false
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('Form Submitted!');
          this.preview=true;
          return;
        }
        alert('Please Recorrect The Form !ERROR');
      });
    }
  }
};
</script>

<style lang="scss">

</style>
