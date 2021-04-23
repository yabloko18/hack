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
            <div class="col-12 col-lg-6" v-if="filterInput">
              <h2>Регистрация</h2>
              <form v-on:submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email адрес</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Введите email"
                    :class="{'is-invalid': $v.registerUser.email.$error}"
                    @blur="$v.registerUser.email.$touch()"
                    v-model="registerUser.email">
                  <div class="invalid-feedback" v-if="!$v.registerUser.email.required">
                    {{ registerErrors.null }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.email.email">
                    {{ registerErrors.email }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Пароль</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Введите пароль"
                    :class="{'is-invalid': $v.registerUser.password.$error}"
                    @blur="$v.registerUser.password.$touch()"
                    v-model="registerUser.password">
                  <div class="invalid-feedback" v-if="!$v.registerUser.password.required">
                    {{ registerErrors.null }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.password.minLength">
                    {{ registerErrors.minLength6 }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputFirstName1">Имя</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputFirstName1"
                    placeholder="Введите ваше имя"
                    :class="{'is-invalid': $v.registerUser.firstName.$error}"
                    @blur="$v.registerUser.firstName.$touch()"
                    v-model="registerUser.firstName">
                  <div class="invalid-feedback" v-if="!$v.registerUser.firstName.required">
                    {{ registerErrors.null }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.firstName.alpha">
                    {{ registerErrors.alpha }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.firstName.minLength">
                    {{ registerErrors.minLength2 }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputLastName1">Фамилия</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputLastName1"
                    placeholder="Введите вашу фамилию"
                    :class="{'is-invalid': $v.registerUser.lastName.$error}"
                    @blur="$v.registerUser.lastName.$touch()"
                    v-model="registerUser.lastName">
                  <div class="invalid-feedback" v-if="!$v.registerUser.lastName.required">
                    {{ registerErrors.null }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.lastName.alpha">
                    {{ registerErrors.alpha }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.lastName.minLength">
                    {{ registerErrors.minLength2 }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputNumber1">Номер мобильного телефона</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputNumber1"
                    placeholder="Введите номер мобильного телефона"
                    :class="{'is-invalid': $v.registerUser.number.$error}"
                    @blur="$v.registerUser.number.$touch()"
                    v-model="registerUser.number">
                  <div class="invalid-feedback" v-if="!$v.registerUser.number.required">
                    {{ registerErrors.null }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.number.tele || !$v.registerUser.number.maxLength || !$v.registerUser.number.minLength">
                    {{ registerErrors.tele }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputInn1">ИНН</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputInn1"
                    placeholder="Введдите ИНН"
                    :class="{'is-invalid': $v.registerUser.inn.$error}"
                    @blur="$v.registerUser.inn.$touch()"
                    v-model="registerUser.inn">
                  <div class="invalid-feedback" v-if="!$v.registerUser.inn.required">
                    {{ registerErrors.null }}
                  </div>
                  <div class="invalid-feedback" v-if="!$v.registerUser.inn.minLength || !$v.registerUser.inn.maxLength || !$v.registerUser.inn.tele">
                    {{ registerErrors.length12 }}
                  </div>
                </div>
                <button
                  :disabled="disabledButton"
                  type="submit"
                  class="btn btn-primary">
                  Отправить
                </button>
                <div class="modal-window" v-if="this.registerAccept">
                  Вы успешно зарегистрировались
                  <button @click="accepted" class="button">Отлично</button>
                </div>
                <div class="modal-window__bg" v-if="this.registerAccept"></div>
              </form>
            </div>
            <div class="col-12 col-lg-6" v-else>
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
import { required, email, helpers, minLength, maxLength, } from 'vuelidate/lib/validators'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
const tele = helpers.regex('alpha', /^[0-9]*$/)


export default {
  name: 'Registration',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      registerErrors: {
        length12: 'Это поле должно содержать 12 цифр',
        minLength6: 'Это поле должно содержать минимум 6 символов',
        minLength2: 'Это поле должно содержать минимум 2 символа',
        alpha: 'Это поле должно содержать только буквы',
        null: 'Пожалуйста, заполните поле',
        email: 'Это поле должно быть заполнено в таком формате: ivan@mail.ru',
        tele: 'Это поле должно быть заполнено в таком формате: 79999999999'
      },
      registerUser: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        inn: '',
        number: ''
      },
      registerAccept: false,
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
    disabledButton () {
      return this.$v.registerUser.firstName.$invalid ||
        this.$v.registerUser.lastName.$invalid ||
        this.$v.registerUser.email.$invalid ||
        this.$v.registerUser.password.$invalid ||
        this.$v.registerUser.inn.$invalid ||
        this.$v.registerUser.number.$invalid
    },
    disabledLogin () {
      return this.$v.loginUser.email.$invalid  ||
        this.$v.loginUser.password.$invalid
    }
  },
  methods: {
    onSubmit () {
      console.log(this.registerUser)

      this.registerAccept = true
    },
    accepted () {
      for (let i in this.registerUser) {
        this.registerUser[i] = ''
      }
      this.$v.registerUser.$reset()
      this.registerAccept = false
    },
    onLogin () {
      console.log(this.loginUser)
      for (let i in this.loginUser) {
        this.loginUser[i] = ''
      }
      this.$v.loginUser.$reset()
    }
  },
  validations: {
    registerUser: {
      firstName: {
        required,
        alpha,
        minLength: minLength(2)
      },
      lastName: {
        required,
        alpha,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      inn: {
        required,
        tele,
        minLength: minLength(12),
        maxLength: maxLength(12)
      },
      number: {
        required,
        tele,
        minLength: minLength(11),
        maxLength: maxLength(11)
      }
    },
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
.form-group {
  margin-bottom: 20px;
  label {
    margin-bottom: 10px;
  }
}
h2 {
  margin-bottom: 40px;
}
.modal-window {
  position: fixed;
  padding: 20px;
  background-color: #fff;
  backdrop-filter: blur(10px);
  width: auto;
  max-width: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 20px;
  }
  &__bg {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.4);
    backdrop-filter: blur(10px);
    z-index: 19;
  }
}
</style>
