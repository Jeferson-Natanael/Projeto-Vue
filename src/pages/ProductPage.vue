<template>
  <div>
    <div class="product-item">
       <v-btn class="white--text" color="red lighten-2" dark :to="$route.params.page || '/'">
          <v-icon dark left>arrow_back</v-icon>Voltar
       </v-btn>
      <div class="product-title">
        <div>{{ product.title }}</div>
        <div style="font-size: 20px;">R$ {{ product.price }}</div>
      </div>
      <div class="product-details">
        <div class="inventory"><strong class="red--text text--lighten-2">Em Estoque:</strong> <span class="grey--text">({{ product.inventory }})</span></div>
        <v-btn large color="light-blue" class="white--text add-button"  @click="addToCart(product)" :disabled="!product.inventory">
          {{ product.inventory > 0 ? "Adicionar ao carrinho" : "Fora de estoque" }}
        </v-btn>
      </div>
    </div>
    <div class="product-img">
      <gallery :images="product.images" :index="product.index" @close="product.index = null"></gallery>
      <div class="image" v-for="(image, imageIndex) in product.images" :key="imageIndex" @click="product.index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '47%', height: '47%' }">
      </div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      'gallery': VueGallery
    },
    mounted () {
      this.getAllProducts()
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ]),
      product () {
        let id = parseInt(this.$route.params.id)
        return this.allProducts.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllProducts',
        'addToCart'
      ])
    }
  }
</script>

<style>
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    cursor: pointer;
}

.product-item {
  float: left;
  margin: 10px 20px;
  width: 40%;
  height: 350px;
}

.product-img {
  float: left;
  margin: 10px 20px;
  width: 50%;
  height: 350px;
}

.back-link {
  font-size: 20px;
}

.product-title {
    text-align: center;
    margin: 0 auto;
    font-size: 26px;
    padding-top: 91px
}

.product-details {
  margin-top: 100px;
}

.inventory {
  float: left;
  font-size: 20px;
  margin-top: 15px;
}
.add-button {
  float: right;
  cursor: pointer;
}

/* .btn--active .btn__content:before, .btn:focus .btn__content:before, .btn:hover .btn__content:before{
  background-color: #e57373 !important;
} */

</style>
