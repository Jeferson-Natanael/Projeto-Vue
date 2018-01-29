<template>
  <div class='product-container'>
     <v-list v-for="(p, imageIndex) in allProducts" :key="p.id">
        <v-list-tile ripple :to="{name: 'product', params: {id: p.id, page: '/'}}">
            <v-list-tile-title v-text="p.title" />
            <v-list-tile-title v-text="'R$' + p.price" />
            <v-list-tile-action>
              <div class="image"  @click="p.index = imageIndex"
                :style="{ backgroundImage: 'url(' + p.images[0] + ')', width: '47%', height: '47%' }">
              </div>
            </v-list-tile-action>
        </v-list-tile>
     </v-list>
    <!-- <div v-for="p in allProducts" :key="p.id" class="product">
      <router-link :to="{name: 'product', params: {id: p.id}}" class="title">{{ p.title }}</router-link>
      <span class="price">R$ {{ p.price }}</span>
    </div> -->
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
/* .product {
  padding: 10px 0px;
  border-bottom: 1px solid #eee;
  width: 400px;
} */

/* .title {
  color: #312377;
}

.price {
  float: right;
} */

.product-container {
  width: 50%;
}

.product-container a {
  text-decoration: none;
  color:black;
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
</style>
