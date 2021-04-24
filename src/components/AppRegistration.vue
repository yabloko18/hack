<template>
  <div class="col-12 col-lg-6">
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
</template>

<script>
import { required, email, helpers, minLength, maxLength, } from 'vuelidate/lib/validators'
import axios from 'axios'
const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
const tele = helpers.regex('alpha', /^[0-9]*$/)
export default {
  name: "AppRegistration",
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
    }
  },
  methods: {
    onSubmit () {
      axios
        .post('http://mansur.ideah.ru/api/v1/psychologist/registration', { 'name': this.registerUser.firstName, 'lastname': this.registerUser.lastName, 'email': this.registerUser.email, 'password': this.registerUser.password })
        .then(response => {
          console.log(this.registerUser)})
        .catch(err => {console.error(err)})
    },
    accepted () {
      for (let i in this.registerUser) {
        this.registerUser[i] = ''
      }
      this.$v.registerUser.$reset()
      this.registerAccept = false
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
