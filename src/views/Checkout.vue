<template>
  <div class="container mt-5">
    <h3 class="payment-title">結帳</h3>
    <div class="main-content">
      <CheckoutStepper class="stepper-panel" :current-step="currentStep" />

      <form action="" class="form form-panel" @submit.stop.prevent="handleSubmit">
        <div class="form-part">
          <!-- form 1 -->
          <CheckoutAddressForm
            v-show="currentStep === 1"
          />
          <!-- form 2 -->
          <CheckoutShipmentForm
            v-show="currentStep === 2"
            @after-shipment-change="afterShipmentChange" 
          />
          <!-- form 3 -->
          <CheckoutPaymentForm
            v-show="currentStep === 3" 
          />          
        </div>

        <CheckoutButton 
          :initial-current-step="currentStep"
          @after-step-update="afterStepUpdate"
        />
      </form>
      <!-- cart -->
      <CheckoutCart
        :initial-cart-data="cartData"
        class="cart-panel"
      />
    </div>
  </div>
</template>

<script>
import CheckoutStepper from "../components/CheckoutStepper.vue";
import CheckoutAddressForm from "../components/CheckoutAddressForm.vue";
import CheckoutShipmentForm from "../components/CheckoutShipmentForm.vue";
import CheckoutPaymentForm from "../components/CheckoutPaymentForm.vue";
import CheckoutButton from "../components/CheckoutButton.vue";
import CheckoutCart from "../components/CheckoutCart.vue"

const dummyCartData = {
  products: [
    {
      id: 1,
      name: "破壞補丁修身牛仔褲",
      quantity: 1,
      price: 3999,
      amount: 3999,
      image: "https://i.imgur.com/0p83OpF.png"
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      quantity: 1,
      price: 1299,
      amount: 1299,
      image: "https://i.imgur.com/5GxNNK8.png"
    },
  ],
  shipment: {
    isStandard: true,
  },
};

console.log(dummyCartData);
export default {
  name: "Checkout",
  components: {
    CheckoutStepper,
    CheckoutAddressForm,
    CheckoutShipmentForm,
    CheckoutPaymentForm,
    CheckoutButton,
    CheckoutCart
  },
  data() {
    return {
      currentStep: 1,
      cartData: "",
    };
  },
  methods: {
    fetchCartData() {
      this.cartData = dummyCartData;
    },
    handleSubmit(e) {
      console.log("form submit");
      const form = e.target;
      const formData = new FormData(form);

      for (let [name, value] of formData.entries()) {
        console.log("payment | " + name + ":" + value);
      }
    },
    afterStepUpdate(currentStep) {
      console.log('new step:', currentStep)
      this.currentStep = currentStep
    },
    afterShipmentChange(shipment) {
      this.cartData.shipment.isStandard = (shipment === 'standard')
    }
  },
  created() {
    this.fetchCartData();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.main-content {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto minmax(300px, auto) auto;
}

.stepper-panel,
.form-panel {
  grid-column: 1 / 7;
}

.cart-panel {
  grid-column: 8 / 13;
  grid-row: 1 / 4;
}

.form-panel {
  grid-row: 2 / 4;

  .form-part {
    height: 350px;
    margin-bottom: 24px;
  }
}

</style>
