<template>
  <div class='container'>
    <h4 class='center-align blue-grey-text darken-4'>Sign Up Page</h4>
    <div class='row'>
      <div class='col s2 l3'></div>
      <div class='input-field col s8 l6'>
        <form id='signup-form' @submit.prevent='sign_up'>
          <input type='text' name='user_name' v-model='user_name'></input>
          <label for='user_name'>Please enter your heroic user name</label>
          <input type='password' name='password' v-model='password'></input>
          <label for='password'>Please enter your password</label>
          <input type='email' name='email' v-model='email'></input>
          <label for='email'>Please enter your email</label>
          <p class='red-text center' v-if='feedback'>{{ feedback }}</p>
          <div class='login_align field center-align'>
            <button class='btn blue-grey center-align waves-effect waves-light'>Sign Up
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
import functions from 'firebase/functions'

export default {
  data() {
    return {
      password: null,
      user_name: null,
      email: null,
      feedback: null
    }
  },

  methods: {
    sign_up() {
      if(this.password && this.user_name && this.email) {
        //fire cloud function to check if an alias is unique
        let check_unique = firebase.functions().httpsCallable('check_user_name')
        check_unique({name_to_check: this.user_name}).then(result => {
          if(!result.data.unique) {
            //username already exists, warn user
            this.feedback='This username already exists'
          } else {
            this.feedback = 'this alias is free to use'
            //continue with signup if username is unique
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((cred) => {
              //make a user record in the database
              db.collection('users').doc(this.user_name).set({
                email: this.email,
                password: this.password,
                user_id: cred.user.uid
              })
              //set the display name of the user auth token to be the sign up username
                cred.user.updateProfile({
                displayName: this.user_name
              }).then(() => {
                  //reset form fields
                  this.email = null
                  this.password = null
                  this.user_name = null
                  this.$router.push({ name: 'post_display'})

              })
            }).then(() => {
              //placeholder
            }).catch(err => {
              this.feedback = err.message
            })
          }
        })
      } else {
        this.feedback = 'Yo you must fill in the fields'
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
