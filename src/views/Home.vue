<template>
  <div>
    <carousel />
    <div class='container row center-align'>
      <div class='col s12 l4'>
        <div class='card card_home blue-grey darken-4'>
          <div class='card-image'>
            <img src='../assets/insurance_generic_image.jpg' alt=''>
            <a href='#' class='halfway-fab btn-floating amber darken-3' v-on:click.prevent>
              <i class='material-icons'>favorite</i>
            </a>
          </div>
          <div class='card-content white-text left-align'>
            <span class='card-title'>Something about Insurance</span>
            <p>Test test data data datatat </p>
          </div>
          <div class='card-action'>
            <a href='#' v-on:click.prevent>More Details</a>
            <a href='#' v-on:click.prevent>View something</a>
          </div>
        </div>
      </div>
      <div class='col s12 l4'>
        <div class='card card_home blue-grey darken-4'>
          <div class='card-image'>
            <img src='../assets/insurance_generic_v002.jpg' alt=''>
            <a href='#' class='halfway-fab btn-floating amber darken-3' v-on:click.prevent>
              <i class='material-icons'>favorite</i>
            </a>
          </div>
          <div class='card-content white-text left-align'>
            <span class='card-title'>Something about Insurance</span>
            <p>Test test data data datatat </p>
          </div>
          <div class='card-action'>
            <a href='#' v-on:click.prevent>More Details</a>
            <a href='#' v-on:click.prevent>View something</a>
          </div>
        </div>
      </div>
      <div class='col s12 l4'>
        <div class='card card_home blue-grey darken-4'>
          <div class='card-image'>
            <img src='../assets/insurance_generic_v003.jpg' alt=''>
            <a href='#' class='halfway-fab btn-floating amber darken-3' v-on:click.prevent>
              <i class='material-icons'>favorite</i>
            </a>
          </div>
          <div class='card-content white-text left-align'>
            <span class='card-title'>Something about Insurance</span>
            <p>Test test data data datatat </p>
          </div>
          <div class='card-action'>
            <a href='#' v-on:click.prevent>More Details</a>
            <a href='#' v-on:click.prevent>View something</a>
          </div>
        </div>
      </div>
    </div>
    <div class='parallax-container hide-on-small-only'>
      <div class='parallax'>
        <img src='../assets/healthcare_insurance_v001.jpg' class='responsive-img'>
      </div>
    </div>
    <div class='container' id='services'>
      <div class='row'>
        <div class='col s12 l4'>
          <h2 class=''>Insurance hero!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id metus faucibus ex placerat bibendum. Phasellus bibendum
            ante in sem varius blandit. Nunc in lacus ac libero molestie ornare. Praesent at feugiat turpis, vitae imperdiet eros. Sed congue,
            mi id fermentum mattis, nisi neque accumsan eros, eget consequat arcu diam dictum ante.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum porttitor ipsum a lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Sed ornare purus odio, id dapibus felis pharetra sit amet. Praesent turpis massa, fermentum et
            mauris quis, pharetra laoreet lorem. Phasellus in massa iaculis, tincidunt quam in, interdum neque.
          </p>
        </div>
        <div class='col s12 l6 offset-l2'>
          <ul class='tabs'>
            <li class='tab col s4'>
              <a href='#Travel' class='blue-grey-text'>Travel</a>
            </li>
            <li class='tab col s4'>
              <a href='#Life' class='blue-grey-text'>Life</a>
            </li>
            <li class='tab col s4'>
              <a href='#Business' class='blue-grey-text'>Business</a>
            </li>
          </ul>
          <div class='col s12' id='Travel'>
            <p class='flow-text blue-grey-text'>TRAVEL</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id metus faucibus ex placerat bibendum. Phasellus bibendum
              ante in sem varius blandit. Nunc in lacus ac libero molestie ornare. Praesent at feugiat turpis, vitae imperdiet eros. Sed congue,
              mi id fermentum mattis, nisi neque accumsan eros, eget consequat arcu diam dictum ante.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum porttitor ipsum a lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed ornare purus odio, id dapibus felis pharetra sit amet. Praesent turpis massa, fermentum et
              mauris quis, pharetra laoreet lorem. Phasellus in massa iaculis, tincidunt quam in, interdum neque.
            </p>
          </div>
          <div class='col s12' id='Life'>
            <p class='flow-text blue-grey-text'>LIFE</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id metus faucibus ex placerat bibendum. Phasellus bibendum
              ante in sem varius blandit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum porttitor ipsum a lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed ornare purus odio, id dapibus felis pharetra sit amet. Praesent turpis massa, fermentum et
              mauris quis, pharetra laoreet lorem. Phasellus in massa iaculis, tincidunt quam in, interdum neque.
            </p>
          </div>
          <div class='col s12' id='Business'>
            <p class='flow-text blue-grey-text'>BUSINESS</p>
            <p>Praesent at feugiat turpis, vitae imperdiet eros. Sed congue,
              mi id fermentum mattis, nisi neque accumsan eros, eget consequat arcu diam dictum ante.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum porttitor ipsum a lobortis lobortis. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Sed ornare purus odio, id dapibus felis pharetra sit amet. Praesent turpis massa, fermentum et
              mauris quis, pharetra laoreet lorem. Phasellus in massa iaculis, tincidunt quam in, interdum neque.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class='parallax-container hide-on-small-only'>
      <div class='parallax'>
        <img src='../assets/healthcare_insurance_v002.jpg' class='responsive-img'>
      </div>
    </div>
    <div class='container section' id='contact'>
      <div class='row'>
        <div class='col s12 l6'>
          <h2> Something </h2>
          <p>Sed ornare purus odio, id dapibus felis pharetra sit amet. Praesent turpis massa, fermentum et
          mauris quis, pharetra laoreet lorem.</p>
        </div>
        <div class='col s12 l6'>
          <form>
            <div class='input-field'>
              <i class='material-icons prefix'>email</i>
              <input type='email' id='email'>
              <label for='email'>Your email</label>
            </div>

            <div class='input-field'>
              <i class='material-icons prefix'>message</i>
              <textarea id='message' class='materialize-textarea'></textarea>
              <label for='message'>Your message</label>
            </div>

            <div class='input-field'>
              <input type='text' id='date' class='datepicker'>
              <label for='date'>Every site seems to want a date picker</label>
            </div>

            <div class='input-field center-align'>
              <button class='btn amber submit_home darken-3' v-on:click.prevent>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer_base />
  </div>
</template>

<script>
import carousel from '../components/carousel.vue'
import footer_base from '../components/footer_base.vue'

export default {
  name: 'home',

  data() {
    return {

    }
  },

  components: {
    carousel,
    footer_base

  },

  mounted() {
    //initialize the parallax website components once vue is mounted
    $(document).ready(function() {
      $('.parallax').parallax();
      $('.tabs').tabs();
      $('.datepicker').datepicker({
        disableWeekends: true
      });
    })
  }

}

</script>

<style>
.card_home {
  margin-top: 200px;
  margin-bottom: 200px;
}
/*adjust card margins on smaller screen resolutions*/
@media screen and (max-width: 900px) {
  .card_home {
    margin-top: 50px;
    margin-bottom: 50px;
  }
}

.hidden {
  visibility: hidden;
}
/*materialize tabs colours*/
.tabs .tab a{
            color:#ff8f00;
        } /*Black color to the text*/

        .tabs .tab a:hover {
            background-color:#ff8f00;
            color:#ff8f00;
        } /*Text color on hover*/

        .tabs .tab a.active {
            background-color:#ff8f00;
            color:#ff8f00;
        } /*Background and text color when a tab is active*/

        .tabs .indicator {
            background-color:#ff8f00;
        } /*Color of underline*/


/*Materialize input fields colours*/
        /* label color */
           .input-field label {
             color: #ff8f00;
           }
           /* label focus color */
           .input-field input[type=text]:focus + label {
             color: #ff8f00;
           }
           /* label underline focus color */
           .input-field input[type=text]:focus {
             border-bottom: 1px solid #ff8f00;
             box-shadow: 0 1px 0 0 #ff8f00;
           }
           /* valid color */
           .input-field input[type=text].valid {
             border-bottom: 1px solid #ff8f00;
             box-shadow: 0 1px 0 0 #ff8f00;
           }
           /* invalid color */
           .input-field input[type=text].invalid {
             border-bottom: 1px solid #ff8f00;
             box-shadow: 0 1px 0 0 #ff8f00;
           }
           /* icon prefix focus color */
           .input-field .prefix.active {
             color: #ff8f00;
           }

/*Change the datepicker colours for materialize date component*/
.datepicker-date-display {
  background-color: #ff8f00;
}
.datepicker-done {
  color: #ff8f00;
}
.datepicker-cancel {
  color: #ff8f00;
}
.datepicker-table td.is-today {
  color: #ff8f00;
}
.datepicker-table td.is-selected {
  background-color: #ff8f00;
}

.submit_home {
  width: 100%;
}
</style>
