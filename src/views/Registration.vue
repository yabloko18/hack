<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content">
      <section class="registration">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 filter">
              <form>
                <div>
                  <input type="radio" id="reg" name="filter" checked value="true" v-model="filterInput">
                  <label for="reg">Регистрация</label>
                </div>
                <div>
                  <input type="radio" id="log" name="filter" value="" v-model="filterInput">
                  <label for="log">Авторизация</label>
                </div>
              </form>
            </div>
            <AppRegistration  v-if="filterInput" />
            <AppLogin  v-else />
          </div>
        </div>
      </section>

    </main>

    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppRegistration from "@/components/AppRegistration";
import AppLogin from "@/components/AppLogin";
import { required, email, helpers, minLength, maxLength, } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
const tele = helpers.regex('alpha', /^[0-9]*$/)


export default {
  name: 'Registration',
  components: {
    AppHeader,
    AppFooter,
    AppRegistration,
    AppLogin
  },
  data () {
    return {
      filterInput: true
    }
  }
}
</script>
<style lang="scss" scoped>
.filter {
  margin-bottom: 40px;
  form {
    display: flex;
    justify-content: center;
  }
  input {
    display: none;
    &:checked+label {
      background-color: #2E87E6;
      color: #fff;
    }
  }
  label {
    cursor: pointer;
    margin-bottom: 20px;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 10px;
    transition: .3s linear all;
    margin-right: 20px;
  }
}
</style>
