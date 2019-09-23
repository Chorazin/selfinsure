<template>
  <div class="nav">
    <nav class="nav-extended blue-grey darken-4">
      <div class="nav-content">
        <router-link v-bind:to="{ name: 'home' }">
          <span class="nav-title">Self <b>Insure</b><img class='spacer' src='../assets/logo_minified_v001.jpg'></span>
        </router-link>
       <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>

          <span class='righteous hide-on-med-and-down'>
             <a href='#'><i class="material-icons display_inline" v-on:click='to_dashboard' v-if='current_user'>home</i></a>
          <span v-if='current_user' v-on:click='to_dashboard'>
            <a href='#'>welcome: {{ current_user }} |</a>
          </span>
          <span> <a href='#' v-if='current_user' v-on:click='logout'> Logout |</a></span>
          <router-link to="/about"> About |</router-link>
          <router-link to='/login_page' v-if='!current_user'> Login |</router-link>
          <router-link to='/register_page' v-if='!current_user'> Register |</router-link>
          <router-link to='' class='insurer_highlight'><b>INSURER</b></router-link>
        </span>
        <!-- hidden slide out menu -->
        <ul class="sidenav" id="mobile-demo">
          <li><router-link v-bind:to="{ name: 'about' }">About</router-link></li>
          <li><router-link v-if='!current_user' v-bind:to="{ name: 'login_page' }">Login</router-link></li>
          <li><a href='#' v-if='current_user' v-on:click='logout'> Logout </a></li>
          <li><router-link v-if='!current_user' v-bind:to="{ name: 'register_page' }">Register</router-link></li>
          <li><router-link v-bind:to="{ name: '' }">Insurer</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>



<script>
import firebase from 'firebase'
import db from '@/firebase/init_db.js'

export default {
  name: 'navbar',

  data() {
    return {
      current_user: null
    }
  },

  methods: {
    logout() {

      firebase.auth().signOut().then(() => {
      this.current_user = null
      this.$router.push({ name: 'login_page'})
      })
    },

    to_dashboard() {
      this.$router.push({ name: 'post_display'})
    }
  },

  created() {

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log('authentication state has changed')
        if(user.displayName == null) {
          this.current_user = user.email
        } else {
          this.current_user = user.displayName
        }

      } else {
        //no user so set current_user to null
        console.log('no current user')
        this.current_user = null
      }
    })
  },

  mounted() {
    //slideout menu on phones and smaller screen sizes
    $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  }
}
</script>




<style>
nav {
  padding: 0px 20px;

}
.insurer_highlight {
  color: #607d8b;
  margin-left: 5px;
}
.spacer {
  margin-left: 10px;
}

.righteous {
  float: right;
  margin-top: 38px;
}

nav .sidenav-trigger {
  margin-top: 22px;
}

.display_inline {
  display: inline !important;
  line-height: 0px !important;
  margin-right: 10px;
  position: relative;
  top: 5px;
}

</style>
