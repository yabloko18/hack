<template>
  <div class="app-body">
    <main class="content">
      <div class="search-body d-flex flex-column align-items-center justify-content-end">
        <div class="text-bottom">
          <router-link :to="{ name: 'Home' }" class="button">Остановить поиск</router-link>
          <div class="text-bottom">Все будет хорошо, не переживайте</div>
        </div>
      </div>
      <div class="animation">
        <div class="circle-text">Идет поиск...</div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Search'
}
</script>
<style lang="scss" scoped>
main {
  margin: 0 !important;
}
.animation {
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #649DF2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .circle {
    position: absolute;
    width: 200vw;
    height: 200vw;
    border-radius: 50%;
    animation-name: anim-1;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    &:nth-child(2) {
      animation-delay: 2s;
    }
    &:nth-child(3) {
      animation-delay: 4s;
    }
    &:nth-child(4) {
      animation-delay: 6s;
    }
    &-text {
      z-index: 2;
      font-weight: 600;
      font-size: 24px;
      line-height: 145%;
      color: #F6F2E4;
      text-transform: uppercase;
    }
  }
}
.search-body {
  position: relative;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  @media (max-width: 998px) {
    height: 100vh;
    min-height: 100vh;
  }
  .text-bottom {
    font-weight: 300;
    font-size: 16px;
    line-height: 145%;
    text-align: center;
    color: #FFFFFF;
    margin: 20px 0 30px 0;
    @media (max-width: 576px) {
      font-size: 10px;
      margin: 20px 0 10px 0;
    }
  }
}
@keyframes anim-1 {
  0% {
    background-color: #649DF2;
    transform: scale(0);
    opacity: 1;
    z-index: 1;
  }
  25% {

  }
  50% {

  }
  75% {

  }
  100% {
    z-index: 0;
    background-color: #fff;
    transform: scale(1);
    opacity: 0;
  }
}
</style>
