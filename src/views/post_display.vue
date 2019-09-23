<template>

  <div class="home container center-align">
    <a href="" class="btn-floating btn-large position_button blue-grey waves-effect waves-light">
      <router-link v-bind:to="{ name: 'add_card' }">
        <i class="material-icons">add</i>
      </router-link>
    </a>
    <div class='spacer_display hide-on-large-only'></div>
    <div class='card' v-for="card in cards" v-bind:key="card.id">
      <div class="card-content">
        <i class="material-icons delete" v-on:click="delete_card(card.id)">delete</i>
        <div>
          posted by: {{ card.user_name }}
        </div>
        <div>
          posted on: {{ card.datetime }}
        </div>
        <h2 class="blue-grey-text">{{ card.title }}</h2>
        <ul class="ingredients">
          <li v-for="(spec, index) in card.specifics" v-bind:key="index">
            <span class="chip">
              {{ spec }}
            </span>
          </li>
          <div class=" details_span">
            {{ card.details | snips }}
          </div>
        </ul>
      </div>
      <span class='btn-floating btn-large halfway-fab pink blue-grey waves-effect waves-light'>
        <router-link v-bind:to='{ name: "edit_card", params: {card_slug: card.slug}}'>
          <i class="material-icons">visibility</i>
        </router-link>
      </span>
    </div>
  </div>

</template>

<script>
import db from '@/firebase/init_db.js'
import firebase from 'firebase'

export default {
  name: 'home',

  data() {
    return {
      //populated from db in created lifecycle hook
      cards: [

      ],
      current_id: null
    }
  },

  methods: {
    delete_card(id){
      //delete document from firestore
      db.collection('posts').doc(id).delete().then(() => {
        //delete from front end view
        this.cards = this.cards.filter(card => {
          return card.id != id
        })
      })

    }
  },

  components: {

  },

  created() {
    this.current_id = firebase.auth().currentUser.uid
    //fetch data from firestore
    db.collection('posts').where('id', '==', this.current_id).get().then(snapshot => {
      snapshot.forEach(doc => {
        //populate the cards array with database data
        let card = doc.data()
        card.id = doc.id
        this.cards.push(card)
      })
    })
  }
}
</script>


<style>
/*change css grid columns for the materialize cards on varying screen sizes*/
@media screen and (max-width: 900px) {
  .home {
    display: grid;
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 900px) {
  .home{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;

  }
}


.home h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}


.home li{
  display: inline-block;
}

.home .card{

  text-align: center;
}

.details_span{
  margin-top: 50px;
}

.home .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}

.position_button {
  position: absolute;
  right: 20px;
  top: 70px;
}

.spacer_display {
  margin-top:50px;
}
</style>
