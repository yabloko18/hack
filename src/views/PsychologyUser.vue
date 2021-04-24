<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content">
      <section>
        <div class="container">
          <h1>Личный кабинет</h1>
          <h3>{{ this.$store.state.psychologyUserInfo.info.name }}</h3>
          <p class="text-1">{{ 'ID - ' + + this.$store.state.psychologyUserInfo.info.id }}</p>
          <p class="text-1">{{ 'ИНН - ' + + this.$store.state.psychologyUserInfo.info.inn }}</p>
          <p class="text-1">{{ 'Email - ' + this.$store.state.psychologyUserInfo.info.email }}</p>
          <p class="text-1">{{ 'Телефон - ' + this.$store.state.psychologyUserInfo.info.phone }}</p>
          <transition name="button-anim">
            <button class="button" @click="searchClient()" v-if="!searchState">Поиск клиента</button>
          </transition>
          <transition name="button-anim">
            <button class="button button-search" v-if="searchState" @click="searchClient()">Поиск клиента</button>
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
import {mapActions} from 'vuex'

export default {
  name: 'PsychologyUser',
  data () {
    return {
      searchState: false,
    }
  },
  methods: {
    searchClient () {
      console.log(1)
      this.searchState = !this.searchState
      console.log(this.searchState)
    },
    ...mapActions([
      'GET_INFO_FROM_API'
    ])
  },
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    this.GET_INFO_FROM_API()
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
