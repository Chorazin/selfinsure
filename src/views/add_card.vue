<template>
  <div>
    <div class='add_card container'>
      <h2 class='center-align blue-grey-text darken-4'>Add activity you are engaged in</h2>
      <form @submit.prevent='create_card'>
        <div class='field title'>
          <label for='title'>Name of the activity</label>
          <input type='text' name='title' placeholder='Business' v-model='title'></input>
        </div>

        <div class='field details'>
          <label for='details'>Describe the activity you are engaged in, eg travelling Asia</label>
          <input type='text' name='details' v-model='details'></input>
        </div>



        <div class='field specifics'>
          <label for='specifics'>tags, one word answers, once you enter a tag press tab</label>
          <div v-for="(spec, index) in specifics" v-bind:key="index" class='field'>
            <label for='specifics'>Tags:</label>
            <input type='text' name='specifics' v-model='specifics[index]'>
            <i class="material-icons delete" v-on:click='delete_tag(spec)'>delete</i>
          </div>
          <input type='text' name='specifics' placeholder='eg. Travel 3months Europe' v-on:keydown.tab.prevent="add_specific" v-model="another"></input>
        </div>

        <div class='field center-align'>
          <p v-if='feedback' class='red-text'>{{ feedback }}</p>
          <button class='btn blue-grey top waves-effect waves-light'>Add Activity
              <i class="material-icons right">send</i>
          </button>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init_db.js'
import slugify from 'slugify'
import firebase from 'firebase'

export default {
  name: 'add_card',

  data() {
    return {
      title: '',
      details: '',
      user_name: '',
      specifics: '',
      another: null,
      specifics: [],
      feedback: null,
      slug: null,
      id: null
    }
  },

  methods: {
    //generate a date for the posts
    get_date() {
      let today = new Date()
      let date_time = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
      return date_time
    },


    create_card() {
      this.id = firebase.auth().currentUser.uid
      if(this.title) {
        this.feedback = null
        //create a slug using slugify
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        //push data to firestore beta
        db.collection('posts').add({
          id: this.id,
          title: this.title,
          specifics: this.specifics,
          details: this.details,
          user_name: firebase.auth().currentUser.displayName,
          slug: this.slug,
          datetime: this.get_date()
        }).then(() => {
          this.$router.push({ name: 'post_display'})
        })
      }else {
        this.feedback = 'You must enter a title'
      }
      //reset input fields
      this.specifics = []
      this.title = ''
      this.details = ''
      this.user_name = ''


    },
    //add tags to the array and reset fields
    add_specific() {
      if(this.another) {
        this.specifics.push(this.another)
        this.another = null
        this.feedback = null
      }
      else {
        this.feedback = 'you must enter a specific activity to add it to the tags'
      }
    },

    delete_tag(tag) {
      this.specifics = this.specifics.filter(tags => {
        return tags != tag
      })
    }
  },

  created() {

  }
}
</script>


<style>
.delete {
  position: absolute;
  right: 0px;
  bottom: 16px;
  color: #aaaaaa;
  font-size: 1.4em;
  cursor: pointer;
}
.add_card {
  margin-top: 60px;
  padding: 20px;
  max-width: 700px;
}

.add_card h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add_card .field {
  margin: 20px auto;
  position: relative;
}

.top{
  margin-top: 50px;
  width: 100%;
}
</style>
