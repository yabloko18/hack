<template>
  <div class="col-12 col-lg-6">
    <h2>Авторизация</h2>
    <form v-on:submit.prevent="onLogin">
      <div class="form-group">
        <label for="exampleInputEmail2">Email адрес</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail2"
          aria-describedby="emailHelp"
          placeholder="Введите email"
          :class="{'is-invalid': $v.loginUser.email.$error}"
          @blur="$v.loginUser.email.$touch()"
          v-model="loginUser.email">
        <div class="invalid-feedback" v-if="!$v.loginUser.email.required">
          {{ loginErrors.null }}
        </div>
        <div class="invalid-feedback" v-if="!$v.loginUser.email.email">
          {{ loginErrors.email }}
        </div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword2">Пароль</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          placeholder="Введите пароль"
          :class="{'is-invalid': $v.loginUser.password.$error}"
          @blur="$v.loginUser.password.$touch()"
          v-model="loginUser.password">
        <div class="invalid-feedback" v-if="!$v.loginUser.password.required">
          {{ loginErrors.null }}
        </div>
      </div>
      <button
        :disabled="disabledLogin"
        type="submit"
        class="btn btn-primary">
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
import { required, email, helpers, minLength, maxLength, } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
const tele = helpers.regex('alpha', /^[0-9]*$/)

export default {
  name: "AppLogin",
  data () {
    return {
      loginErrors: {
        null: 'Пожалуйста, заполните поле',
        email: 'Это поле должно быть заполнено в таком формате: ivan@mail.ru'
      },
      loginUser: {
        email: '',
        password: ''
      },
      loginAccepted: false,
      filterInput: true
    }
  },
  computed: {
    disabledLogin () {
      return this.$v.loginUser.email.$invalid  ||
        this.$v.loginUser.password.$invalid
    }
  },
  methods: {
    onLogin () {
      this.axios
      .post('', { 'email': this.loginUser.email, 'password': this.loginUser.password })
      .then(response => {this.setLogin(response.data.token)})
      .catch(err => {console.error(err)})

      console.log(this.loginUser)
      for (let i in this.loginUser) {
        this.loginUser[i] = ''
      }
      this.$v.loginUser.$reset()
    },
    setLogin (token) {
      localStorage.setItem('token', token)
    }
  },
  validations: {
    loginUser: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form-group {
  margin-bottom: 20px;
  label {
    margin-bottom: 10px;
  }
}
h2 {
  margin-bottom: 40px;
}
</style>
