<template>
  <div v-if='activity' class='container edit_card'>
    <h1>Edit {{ activity.title }}</h1>

    <form @submit.prevent='edit_card'>
      <div class='field title'>
        <label for='title'>Name of the activity</label>
        <input type='text' name='title' v-model='activity.title'></input>
      </div>

      <div class='field details'>
        <label for='details'>Describe the activity you are engaged in, eg travelling Asia</label>
        <textarea name='details' class='materialize-textarea' v-model='activity.details'></textarea>
      </div>

      <div class='field user_name'>
        <label for='user_name'>Name</label>
        <input type='text' name='user_name' v-model='activity.user_name'></input>
      </div>

      <div class='field specifics'>
        <label for='specifics'>tags, one word answers</label>
        <div v-for="(spec, index) in activity.specifics" v-bind:key="index" class='field'>
          <label for='specifics'>Tags:</label>
          <input type='text' name='specifics' v-model='activity.specifics[index]'>
          <i class="material-icons delete" v-on:click='delete_tag(spec)'>delete</i>
        </div>
        <input type='text' name='specifics' v-on:keydown.tab.prevent="add_specific" v-model="another"></input>
      </div>

      <div class='field center-align'>
        <p v-if='feedback' class='red-text'>{{ feedback }}</p>
        <button class='btn blue-grey top waves-effect waves-light'>Update Activity
            <i class="material-icons right">send</i>
        </button>

      </div>
    </form>
  </div>
</template>


<script>
import db from '@/firebase/init_db.js'
import slugify from 'slugify'

export default {
  name: 'edit_card',

  data() {
    return {
      activity: null,
      another: null,
      feedback: null

    }
  },

  methods: {
    add_specific() {
      if(this.another) {
        this.activity.specifics.push(this.another)
        this.another = null
        this.feedback = null
      }
      else {
        this.feedback = 'you must enter a specific activity to add it to the tags'
      }
    },

    delete_tag(tag) {
      this.activity.specifics = this.activity.specifics.filter(tags => {
        return tags != tag
      })
    },

    edit_card() {
      if(this.activity.title) {
        this.feedback = null
        //create a slug
        this.activity.slug = slugify(this.activity.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        //push data to firestore beta
        db.collection('posts').doc(this.activity.id).update({
          title: this.activity.title,
          specifics: this.activity.specifics,
          details: this.activity.details,
          user_name: this.activity.user_name,
          slug: this.activity.slug
        }).then(() => {
          this.$router.push({ name: 'post_display'})
        }).catch(err => {
          console.log(err)
        })
      }else {
        this.feedback = 'You must enter a title'
      }
      //reset input fields
      this.specifics = []
      this.title = ''
      this.details = ''
      this.user_name = ''
    }
  },


  created() {
    let ref = db.collection('posts').where('slug', '==', this.$route.params.card_slug)
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.activity = doc.data()
        this.activity.id = doc.id
      })
    })
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
.edit_card {
    margin-top: 60px;
    padding: 20px;
    max-width: 700px;
  }

.edit_card h2 {
    font-size: 2em;
    margin: 20px auto;
  }

.edit_card .field {
    margin: 20px auto;
    position: relative;
  }

.top{
    margin-top: 50px;
    width: 100%;
  }

textarea.materialize-textarea {
  min-height: 500px;

}
</style>
