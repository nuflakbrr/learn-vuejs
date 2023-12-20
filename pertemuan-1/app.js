var app = new Vue({
  data: () => ({
    maximum: 50,
    products: null,
    cart: []
  }),
  mounted: () => {
    fetch('https://hplussport.com/api/products/order/price')
      .then(res => res.json())
      .then(data => {
        this.products = data;
      });
  },
  methods: {
    addItem: function (product) {
      this.cart.push(product);
    }
  }
});