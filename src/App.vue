<template>
  <div class="app">
    <v-dialog v-model="dialog.show" max-width="290">
      <v-card style="background-color: white !important">
        <center>
            <v-card-title class="headline" center>{{dialog.title}}</v-card-title>
            <v-icon :color="dialog.color" x-large>{{dialog.icon}}</v-icon>
            <v-card-text>{{dialog.message}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <v-btn color="light-blue" flat="flat" @click.native="dialog.show = false">OK</v-btn>
            </v-card-actions>
        </center>
      </v-card>
    </v-dialog>
    <div  class="header">
      <header-bar></header-bar>
    </div>
    <div class="page">
      <router-view></router-view>
    </div>
    <v-footer class="pa-3" color="light-blue">
      <v-spacer></v-spacer>
      <div>© {{ new Date().getFullYear() }}</div>
    </v-footer>
    <!-- // <div class="help-text">
          //   <p>Vue.js 2 Single Page App (SPA) Example with vuex and vue-router.</p>
          //   <a href="https://github.com/skyronic/vue-spa">View Source Code</a>
          // </div> -->
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
       dialog: 'dialog'
    })
  },
  components: {
    HeaderBar
  },
  name: 'app'
}
</script>

<style>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.help-text {
  margin-top: 20px;
  font-size: 12px;
}
.btn.btn--disabled {
    background-color: #9e9e9e !important;
}
</style>
