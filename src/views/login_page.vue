<template>
  <div class='container'>
    <h4 class='center-align blue-grey-text darken-4'>Login Page</h4>
    <div class='row'>
      <div class='col s2 l3'></div>
      <div class='input-field col s8 l6'>
        <form id='login-form' @submit.prevent='login'>

          <input type='email' name='email' v-model='email'></input>
          <label for='email'>Please enter your heroic email</label>
          <p v-if='feedback' class='red-text center'>{{ feedback }} </p>

          <input type='password' name='password' v-model='password'></input>
          <label for='password'>Please enter your password</label>
          <p v-if='feedback' class='red-text center'>{{ feedback }} </p>

          <div class='login_align field center-align'>
            <button class='btn blue-grey center-align waves-effect waves-light'>Login
              <i class="material-icons right">lock</i>
            </button>
          </div>
        </form>
      </div>
      <div class='col s2 l3'></div>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase'
import db from '@/firebase/init_db.js'

export default {
  data() {
    return {
      password: null,
      email: null,
      feedback: null
    }
  },

  methods: {
    login() {
      if(this.email) {
        if(this.password) {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((cred) => {
           //login then clear fields and redirect to dashboard
           this.email = null
           this.password = null
           this.$router.push({ name: 'post_display'})
          }).catch(err => {
            this.feedback = err.message
          })
          this.feedback = null
        } else {
        this.feedback = 'please enter an password'
        }
      } else {
        this.feedback = 'please enter an email'
      }
    }
  }
}


</script>


<style>
.login_align {
  margin-top: 50px;
}

.btn {
  width: 100%;
}
</style>
