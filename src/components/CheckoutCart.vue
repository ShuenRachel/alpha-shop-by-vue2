<template>
  <section class="cart-panel right-content" id="cart">
    <div class="cart-wrapper" id="cart">
      <h4 class="cart-title">購物籃</h4>
      <div class="cart-list">
        <div
          class="cart-item"
          v-for="product in productsData"
          :key="product.id"
        >
          <div class="cart-item-img"><img :src="product.image" alt="" /></div>
          <div class="cart-item-details">
            <div class="cart-item-details-name">{{ product.name }}</div>
            <div class="cart-item-details-quantity-wrapper">
              <button
                class="btn-minus"
                @click="deductProductQuantity(product.id)"
              >
                <span>-</span>
              </button>
              <span class="cart-item-details-quantity">{{
                product.quantity
              }}</span>
              <button class="btn-add" @click="addProductQuantity(product.id)">
                <span>+</span>
              </button>
            </div>
            <div class="cart-item-details-price">
              $ <span class="price">{{ product.amount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-shipping">
      <span class="cart-shipping-title">運費</span>
      <span 
        class="cart-shipping-price"
        v-if="standardShipment"
      >
        免費
      </span>
      <span 
        class="cart-shipping-price"
        v-else
      >
        $500
      </span>
    </div>
    <div class="cart-total">
      <span class="cart-total-title">小計</span>
      <span class="cart-total-price"
        >$ <span class="total-price">{{ cartTotal }}</span></span
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    initialCartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      productsData: "",
      productsTotal: 0,
      standardShipment: true,
      cartTotal: 0
    };
  },
  methods: {
    deductProductQuantity(productId) {
      const targetP = this.productsData.find(
        (product) => product.id === productId
      );

      if (targetP.quantity <= 1) return;
      targetP.quantity -= 1;

      this.updateProductAmount(targetP);
    },
    addProductQuantity(productId) {
      const targetP = this.productsData.find(
        (product) => product.id === productId
      );

      targetP.quantity += 1;

      this.updateProductAmount(targetP);
    },
    updateProductAmount(product) {
      product.amount = product.quantity * product.price;

      this.updateProductsTotal()
    },
    updateProductsTotal() {
      this.productsTotal = 0

      this.productsData.forEach(product => {
        this.productsTotal += product.amount
      })

      this.updateCartTotal()
    },
    updateCartTotal() {
      let shipmentPrice = this.standardShipment ? 0 : 500;
      this.cartTotal = this.productsTotal + shipmentPrice;
    }
  },
  created() {
    this.productsData = this.initialCartData.products;
    this.standardShipment = this.initialCartData.shipment.isStandard;

    this.updateProductsTotal()
  },
  watch: {
    initialCartData: {
      handler: function() {
        this.standardShipment = this.initialCartData.shipment.isStandard;
        this.updateCartTotal()
      },
      deep: true,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.cart-panel {
  border: $cart-border;
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;

  .cart-wrapper {
    @extend %cart-setting;
    border-bottom: $cart-border;
    font-size: 16px;
    .cart-title {
      display: none;
    }

    .cart-list {
      width: 100%;
      .cart-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        &:nth-child(1) {
          margin-bottom: 16px;
        }

        &-img {
          width: 100px;
          height: 100px;

          img {
            width: 100%;
            display: block;
          }
        }

        &-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          text-align: end;
          &-name {
            font-size: 16px;
            font-weight: 400;
            color: $light-black;
          }
          &-quantity-wrapper {
            width: 116px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            button {
              height: 27px;
              width: 26px;
              border-radius: 50%;
              background-color: $cart-line;
              border: none;
              outline: none;
              // text-align: center;
              // line-height: 1rem;

              span {
                line-height: 1rem;
              }
            }
          }
          &-price {
            font: "Nunito Sans";
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
    }
  }

  .cart-shipping {
    @extend %cart-setting;
    border-bottom: $cart-border;
    &-price {
      font: "Nunito Sans";
      font-weight: 700;
    }
  }

  .cart-total {
    @extend %cart-setting;
    font: "Nunito Sans";
  }
}
</style>
