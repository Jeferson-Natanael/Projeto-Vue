<template>
  <div>
    <v-dialog v-model="dialogConfirm.show" max-width="290">
      <v-card style="background-color: white !important">
        <center>
            <v-card-title class="headline">Alerta de Confirmação</v-card-title>
            <v-icon color="indigo darken-4" x-large>help</v-icon>
            <v-card-text>Você deseja realmente excluir esse item?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="light-blue" flat="flat" @click.native="removeCart(dialogConfirm.product)">Confirmar</v-btn>
              <v-btn color="light-blue" flat="flat" @click.native="dialogConfirm.show = false">Cancelar</v-btn>
            </v-card-actions>
        </center>
      </v-card>
    </v-dialog>
    <div v-show="!products.length" class="cartNull">
      <img src="../assets/shop-cart-icon.png"/>
      <p>Adicione alguns produtos ao carrinho.</p>
    </div>
    <div v-show="products.length > 0">
      <table class="checkout-table">
        <thead style="text-align: center">
          <tr>
            <th>Nome</th>
            <th>Preço/Unidade</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="p in  products" :key="p.id">
          <td>
            <router-link :to="{name: 'product', params: {id: p.id, page: '/cart'}}">
              <v-icon>link</v-icon>
              <span style="margin-left: 5px;">{{ p.title }}</span>
            </router-link>
          </td>
          <td>R$ {{ p.price }}</td>
          <td>
            <input type="number" v-model="p.quantity" min="0" :max="p.inventory">
            <v-btn flat icon color="green" @click="refrechCart(p)">
                <v-icon>cached</v-icon>
            </v-btn>
          </td>
          <td>R$ {{ (p.price * parseInt(p.quantity)).toFixed(2) }}</td>
        </tr>
        <tr class='total'>
          <td><b>TOTAL</b></td>
          <td></td>
          <td></td>
          <td>R$ {{ total.toFixed(2) }}</td>
        </tr>
        </tbody>
      </table>

      <div class="chartCart">
        <h2>Histórico de Preço</h2>
        <div class="uk-margin-bottom">
          <vn-line :model="traffics"
                  :x-format="formatDate"
                  y-format=".2f" :colors="colors">
          </vn-line>
        </div>
      </div>
      <v-btn color="red lighten-2" large :disabled="!products.length" @click="checkout(products)" class='checkout-button'>Confirmar</v-btn>
    </div>
    <v-btn large color="light-blue" class="listProduct-button" to="/">
          {{ products.length > 0 ? "Continuar comprando" : "Lista de compras" }}
    </v-btn>
    <!-- <p v-show="checkoutStatus">Confirmação {{ checkoutStatus }}.</p> -->
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import d3 from 'd3'
  import _ from 'lodash'

  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        dialogConfirm: 'dialogConfirm'
      }),
      // checkoutStatus () {
      //   this.$store.state.cart.dialog = true;
      //   return this.$store.state.cart.lastCheckout;
      // },
      total () {
        return this.products.reduce((total, p) => {
          return total + p.price * parseInt(p.quantity);
        }, 0);
      },
      // dialogConfirm (){
      //   return { show: false, product: null }
      // },
      traffics () {
        let historic = [];
        this.products.forEach(p => { historic.push(
           {
              key: p.title,
              area: false,
              values: _.map(p.historic, (ph) => {
                return {
                  x: ph.date,
                  y: ph.price
                }
              })
            },
          )
        });

        return historic
      },
      colors () {
        return ['#9F6633', '#4FB399', '#6F33FF', '#4FFF99', '#00B3E6',
                '#E6B333', '#7366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                '#8F99E6', '#CCFF1A', '#8F1A66', '#E6331A', '#63FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#4AB399',
                '#E666B3', '#93991A', '#CC9999', '#B3B31A', '#00E680',
                '#8D8066', '#809980', '#E6FF80', '#EAFF33', '#999933',
                '#9F3380', '#CCCC00', '#66E64D', '#8D80CC', '#9900B3',
                '#E64D66', '#5DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
      }
    },
    methods: {
      ...mapActions([
        'checkout',
        'removeToCart',
        'refrechToCart'
      ]),
      refrechCart: function (product) {
         if (parseInt(product.quantity) == 0){
           this.dialogConfirm.show = true
           this.dialogConfirm.product =  product
         }
         else{
           this.refrechToCart(product);
         }
      },
      removeCart: function (product) {
          this.removeToCart(product);
          this.dialogConfirm.show = false;
      },
      formatDate (d){
        return d3.time.format("%d/%m/%Y")(new Date(d))
      }
    }
  }
</script>

<style>

.checkout-table {
  width: 100%;
}

.checkout-table th {
  text-align: center;
  padding: 15px 0px;
  border-bottom: 1px solid #aaa;
}

.checkout-table td {
  padding: 8px 0px;
}

.checkout-table  a {
  text-decoration: none;
  color:black;
}

.checkout-button {
  color: white;
  float: right;
}
.listProduct-button {
  color: white;
  float: left;
}
.refrech-button{
  float: right;
  width: 23px;
  height: 23px;
}

.total td {
  border-top: 1px solid #aaa;
  padding-top: 10px;
}

input{
  text-align: center;
  width: 50px;
}

table{
  text-align: center;
}
p {
    margin: 16px;
    text-align: center;
}
.cartNull {
   align-items: center;
}
.chartCart {
    float: left;
    margin: 10px 10px;
    width: 98%;
    height: 350px;
}
img {
    display: block;
    margin: 0 auto;
    width: 200px;
}
</style>
