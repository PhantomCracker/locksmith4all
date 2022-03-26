<template>
  <div class="our-services pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">EMERGENCY LOCKSMITH</h5>
              <div class="card-text">
                <ul>
                  <li>Lock rekeys</li>
                  <li>Lock repairs</li>
                  <li>Master key systems</li>
                  <li>Card access & keypad locking</li>
                  <li>Security lock systems</li>
                </ul>
              </div>
              <button class="btn btn-primary w-50 my-primary-btn mt-3 mb-4">
                <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">RESIDENTIAL PRICES</h5>
              <div class="card-text">
                <ul>
                  <li>Lock rekeys</li>
                  <li>Lock-Box Installation</li>
                  <li>Lock-Box Repair</li>
                  <li>Lock Repairs</li>
                  <li>Security lock systems</li>
                </ul>
              </div>
              <button class="btn btn-primary w-50 my-primary-btn mt-3 mb-4">
                <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">AUTOMOTIVE PRICES</h5>
              <div class="card-text">
                <ul>
                  <li>Car Lockout</li>
                  <li>Car Re-Keys</li>
                  <li>Ignition Key Programming</li>
                  <li>Transponder Keys Programming</li>
                  <li>Security Lock Systems</li>
                </ul>
              </div>
              <button class="btn btn-primary w-50 my-primary-btn mt-3 mb-4">
                <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3">
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">COMMERCIAL PRICES</h5>
              <div class="card-text">
                <ul>
                  <li>Lock rekeys</li>
                  <li>Lock repairs</li>
                  <li>Master key systems</li>
                  <li>Card access & keypad locking</li>
                  <li>Security lock systems</li>
                </ul>
              </div>
              <button class="btn btn-primary w-50 my-primary-btn mt-3 mb-4">
                <a class="text-white text-decoration-none" href="tel:03333446467"><font-awesome-icon icon="phone-alt" style="margin-right: 10px" />Call now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurServices"
}
</script>

<style lang="scss" scoped>
  .our-services {
    .col-12, .col-lg-3 {
      padding-left: 0;
      padding-right: 0;
    }
    .red-part {
      background: $ourRed;
    }
    .card {
      border-radius: 0;
      min-height: 290px;
      border: none;
      border-bottom: 1px solid #ededed;
      .card-body {
        border-left: 10px solid $ourRed;
        padding: 0;
      }
      .card-title {
        border-bottom: 1px solid #ededed;
        background: black;
        color: #FFFFFF;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
      }
      .card-text {
        ul {
          text-decoration: none;
          list-style-type: none;
          text-align: left;
          padding-left: 0;
          font-family: sans-serif;
          li {
            border-bottom: 1px solid #ededed;
            font-size: 13px;
            padding-left: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            color: #787878;
          }
        }
      }
    }
    .btn-primary {
      background-color: $ourRed !important;
      border: none;
      border-radius: 0;
      &:focus, :active, :target, :visited {
        border: none;
        box-shadow: none;
      }
      a {
        text-align: center;
      }
    }
  }
</style>