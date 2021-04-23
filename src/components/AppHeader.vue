<template>
  <header class="header">
    <div class="container header-container">
      <nav class="d-flex justify-content-between align-items-center header-line">
        <router-link :to="{ name: 'Home' }" class="logo">Wisdom</router-link>
        <ul class="d-none d-lg-flex pc-list">
          <li><router-link :to="{ name: 'Chat' }">Чат (для демонстрации)</router-link></li>
          <li><router-link :to="{ name: 'PsychologyUser' }">Кабинет психолога (для демонстрации)</router-link></li>
          <li><router-link :to="{ name: 'About' }">О нас</router-link></li>
          <li><router-link :to="{ name: 'Price' }">Цены</router-link></li>
          <li><router-link :to="{ name: 'Psychology' }">Для психологов</router-link></li>
        </ul>
        <div class="d-flex d-lg-none align-items-center justify-content-end">
          <router-link :to="{ name: 'Search' }" class="button">Найти помощь</router-link>
          <span class="burger" v-on:click="show = !show"></span>
        </div>
      </nav>
    </div>
    <transition name="fade">
      <div class="header-mob" v-show="show">
        <div class="container">
          <ul>
            <li><router-link :to="{ name: 'Chat' }">Чат (для демонстрации)</router-link></li>
            <li><router-link :to="{ name: 'PsychologyUser' }">Кабинет психолога (для демонстрации)</router-link></li>
            <li><router-link :to="{ name: 'About' }">О нас</router-link></li>
            <li><router-link :to="{ name: 'Price' }">Цены</router-link></li>
            <li><router-link :to="{ name: 'Psychology' }">Для психологов</router-link></li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped lang="scss">
header {
  position: fixed;
  height: 70px;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #A6A6AA;
  background-color: #fff;
  z-index: 11;
  .header-container {
    z-index: 10;
    position: relative;
  }
  .header-line {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 70px;
  }
  .nav-link {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .pc-list {
    a {
      font-weight: 500;
      font-size: 18px;
      line-height: 145%;
      color: #000000;
      position: relative;
      transition: .1s linear all;
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #0a58ca;
        content: '';
        transform: scale(0);
        transition: .1s linear all;
      }
      &:hover {
        color: #0a58ca;
        &:after {
          transform: scale(1);
        }
      }
      &:focus {
        color: #0a58ca;
        &:after {
          transform: scale(1);
        }
      }
      &.router-link-active {
        color: #0a58ca;
        &:after {
          transform: scale(1);
        }
      }
    }
    li {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.burger {
  position: relative;
  width: 24px;
  height: 2px;
  background-color: black;
  top: -6px;
  left: 0;
  transition: .2s linear all;
  margin-left: 15px;
  &:after {
    position: absolute;
    content: '';
    width: 24px;
    height: 2px;
    background-color: black;
    top: 6px;
    left: 0;
    transform: scale(1);
    transition: .2s linear all;
  }
  &:before {
    position: absolute;
    content: '';
    width: 24px;
    height: 2px;
    background-color: black;
    top: 12px;
    left: 0;
    transition: .2s linear all;
  }
  //&.active {
  //  transform: rotate(45deg) translateX(5px) translateY(5px);
  //  &:after {
  //    transform: scale(0);
  //  }
  //  &:before {
  //    transform: rotate(-90deg) translateX(12px);
  //  }
  //}
}
@keyframes anim-2 {
  from {
    opacity: .5;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@media (max-width: 998px) {
  .header-mob {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(255,255,255,0.7);
    backdrop-filter: blur(4px);
    z-index: 9;
    top: 0;
    left: 0;
    padding: 100px 0;
    transition: .2s linear all;
    a {
      font-weight: 500;
      font-size: 24px;
      line-height: 145%;
      color: #000000;
      position: relative;
      transition: .1s linear all;
      &:after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #0a58ca;
        content: '';
        transform: scale(0);
        transition: .1s linear all;
      }
      &:hover {
        color: #0a58ca;
        &:after {
          transform: scale(1);
        }
      }
      &:focus {
        color: #0a58ca;
        &:after {
          transform: scale(1);
        }
      }
      &.router-link-active {
        color: #0a58ca;
        &:after {
          transform: scale(1);
        }
      }
    }
  }
  .fade-enter-active {
    animation: anim-2 .2s;
  }
  .fade-leave-active {
    animation: anim-2 .2s reverse;
  }
}
</style>
