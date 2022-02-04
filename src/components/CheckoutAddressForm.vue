<template>
  <div class="part part-address">
    <div class="form-title">寄送地址</div>
    <div class="form-row">
      <div class="form-item">
        <label for="a-title">稱謂</label>
        <div class="select-wrapper">
          <select name="a-title" id="a-title" required>
            <option value="mr" selected>先生</option>
            <option value="miss">小姐</option>
            <option value="mrs">女士</option>
          </select>
        </div>
      </div>
      <div class="form-item">
        <label for="a-name">姓名</label>
        <input type="text" id="a-name" name="a-name" placeholder="請輸入姓名" />
      </div>
    </div>
    <div class="form-row">
      <div class="form-item form-item-phone">
        <label for="a-phone">電話</label>
        <input
          type="text"
          id="a-phone"
          name="a-phone"
          placeholder="請輸入行動電話"
        />
      </div>
      <div class="form-item form-item-email">
        <label for="a-email">Email</label>
        <input
          type="text"
          id="a-email"
          name="a-email"
          placeholder="請輸入電子郵件"
        />
      </div>
    </div>
    <div class="form-row">
      <div class="form-item form-item-city">
        <label for="a-city">縣市</label>
        <div class="select-wrapper">
          <select name="a-city" id="a-city" required>
            <option value="" disabled selected>請選擇縣市</option>
            <option value="taipei">臺北市</option>
            <option value="newtaipei">新北市</option>
            <option value="taoyuan">桃園市</option>
          </select>
        </div>
      </div>
      <div class="form-item form-item-address">
        <label for="a-address">地址</label>
        <input
          type="text"
          id="a-address"
          name="a-address"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.part-address {
  .form-row {
    @extend %form-row;
    &:nth-child(2),
    &:nth-child(4) {
      .form-item {
        &:nth-child(1) {
          flex: 1;
          margin-right: 10px;
        }
        &:nth-child(2) {
          flex: 2;
        }
      }
    }
    &:nth-child(3) {
      .form-item {
        &:nth-child(1) {
          flex: 1;
          margin-right: 5px;
        }
        &:nth-child(2) {
          flex: 1;
          margin-left: 5px;
        }
      }
    }
    .form-item {
      // flex: 1;
      label {
        @extend %label-style;
      }
      input {
        -webkit-appearance: none;
        @extend %input-style;
        @extend %placeholder-setting;
      }
      select {
        -webkit-appearance: none;
        cursor: pointer;
        background-color: transparent;
        @extend %input-style;
        &:invalid {
          color: $placeholder-color;
        }
      }
      .select-wrapper {
        cursor: pointer;
        z-index: 0;
        position: relative;
        background: transparent;
        &::after {
          z-index: -1;
          content: "";
          border-style: solid;
          border-width: 6px 5px 0 5px;
          border-color: $light-black transparent transparent transparent;
          position: absolute;
          top: 50%;
          right: 18px;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
