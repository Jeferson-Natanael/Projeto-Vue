<template>
  <v-toolbar color="light-blue" light class="pa-3">
    <v-toolbar-title>
      <div class="menu-links">
        <router-link to="/">Home</router-link>
        <router-link to="/cart" style="float: right">
            <v-badge color="red lighten-2" v-model="show" left style="position: absolute">
              <span slot="badge">{{ cartCount }}</span>
              <v-icon color="white">shopping_cart</v-icon>
            </v-badge>
            <span style="margin-left: 30px;">Carrinho</span>
        </router-link>
      </div>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // mix the getters into the computed object
    ...mapGetters([
      'cartCount'

    ]),
    show () {
      return this.cartCount > 0;
    }
  }
}
</script>

<style>
.menu-links a {
  display: inline-block;
  text-decoration: none;
  color: white;
  margin-right: 30px;
}
.toolbar .toolbar__title{
  width: 100%;
}
</style>
