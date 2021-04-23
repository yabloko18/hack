<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content">
      <section>
        <div class="container">
          <h1>Личный кабинет</h1>
          <h3>{{ psychUser.firstName +' ' + psychUser.lastName }}</h3>
          <p class="text-1">{{ 'ИНН - ' + psychUser.inn }}</p>
          <p class="text-1">{{ 'Телефон - ' + psychUser.number }}</p>
          <transition name="button-anim">
            <button class="button" @click="searchClient()" v-if="!psychUser.searchState">Поиск клиента</button>
          </transition>
          <transition name="button-anim">
            <button class="button button-search" v-if="psychUser.searchState" @click="searchClient()">Поиск клиента</button>
          </transition>
        </div>
      </section>
    </main>

    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'PsychologyUser',
  data () {
    return {
      psychUser: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        id: '00001',
        inn: '111111111111',
        searchState: false,
        number: '79999999999'
      }
    }
  },
  methods: {
    searchClient () {
      console.log(1)
      this.psychUser.searchState = !this.psychUser.searchState
      console.log(this.psychUser.searchState)
    }
  },
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss" scoped>
@keyframes anim-1 {
  from {
    opacity: .4;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1);
  }
}
@keyframes anim-2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.button {
  position: absolute;
  transition: .3s linear all;
}
.button-search {
  display: flex;
  overflow: hidden;
  background-color: transparent;
  border: 1px solid #0a58ca;
  color: #0a58ca;
  &:after {
    position: absolute;
    content: '';
    width: 200px;
    height: 200px;
    top: -75px;
    left: -10px;
    border-radius: 50%;
    background-color: #0a58ca;
    transition: .3s linear all;
    opacity: 1;
    transform: scale(0);

    animation-name: anim-1;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  &:before {
    position: absolute;
    content: '';
    width: 200px;
    height: 200px;
    top: -75px;
    left: -10px;
    border-radius: 50%;
    background-color: #0a58ca;
    transition: .3s linear all;
    opacity: 1;
    transform: scale(0);

    animation-name: anim-1;
    animation-duration: 2s;
    animation-delay: 1.5s;
    animation-iteration-count: infinite;
  }
  &:hover {
    background-color: #0a58ca;
    color: #fff;
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }
  &:focus {
    background-color: #0a58ca;
    color: #fff;
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }
}
.button-anim-enter-active {
  animation: anim-2 .5s;
}
.button-anim-leave-active {
  animation: anim-2 .5s reverse;
}
</style>
