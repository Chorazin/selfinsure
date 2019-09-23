<template>
  <div>
    <footer class='page-footer blue-grey darken-4'>
      <div class='container row'>
        <div class='col s12 l6'>
          <h5>Some stuff</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id metus faucibus ex placerat bibendum. Phasellus bibendum
            ante in sem varius blandit. Nunc in lacus ac libero molestie ornare.</p>
        </div>
        <div class='col s12 l4 offset-l2'>
          <h5>Insurers on social media</h5>
          <ul>
            <li><a href='#' class='btn-floating btn-small social_spacing' v-on:click.prevent>
              <i class='fab fa-facebook amber darken-3'></i>
            </a> Lorem ipsum dolor sit amet</li>
            <li><a href='#' class='btn-floating btn-small social_spacing' v-on:click.prevent>
              <i class='fab fa-twitter amber darken-3'></i>
            </a> consectetur adipiscing eli</li>
            <li><a href='#' class='btn-floating btn-small social_spacing' v-on:click.prevent>
              <i class='fab fa-linkedin amber darken-3'></i>
            </a> Pellentesque id metus faucibus</li>
            <li><a href='#' class='btn-floating btn-small social_spacing' v-on:click.prevent>
              <i class='fab fa-instagram amber darken-3'></i>
            </a> Phasellus bibendum</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>

export default {
  name: 'footer_base',

  data() {
    return {

    }
  }
}
</script>


<style>
.social_spacing {
  margin-top: 5px;
}

</style>
