<template>
  <div>
     <v-layout row wrap>
      <v-flex v-for="(p, imageIndex) in allProducts" :key="p.id" xs3>
        <v-card :color="p.inventory ? 'red lighten-2' : 'grey darken-1'" class="white--text product-container" :to="{name: 'product', params: {id: p.id, page: '/'}}">
            <v-container fluid grid-list-md>
              <v-layout row>
                <v-flex xs9>
                  <div>
                    <div class="headline">{{p.title}}</div>
                    <div>{{'R$' + p.price}}</div>
                    <div v-show="!p.inventory">Fora de estoque</div>
                  </div>
                </v-flex>
                <v-flex xs2>
                    <v-card-media class="image" @click="p.index = imageIndex"
                      :style="{ backgroundImage: 'url(' + p.images[0] + ')', width: '60px', height: '60px' }"
                      contain
                    ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    mounted () {
      this.getAllProducts()
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ])
    },
    methods: {
      ...mapActions([
        'getAllProducts'

      ])
    }
  }
</script>

<style>
.product-container {
  padding: 20px;
}

.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    cursor: pointer;
}
.card {
    margin: 5px;
    border-radius: 5px;
}
.layout.wrap {
    margin: 10px;
}
</style>
