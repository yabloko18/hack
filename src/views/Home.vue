<template>
  <AppHeader/>
  <main class="content">
    <div class="container">
      <div>
        <div class="row">
          <div class="col-12 col-lg-6">
            <h1 class="title">Экстренная психологическая помощь</h1>
            <div class="d-inline-flex flex-column">
              <router-link :to="{ name: 'Search' }" class="button">Найти помощь</router-link>
              <small>Первые 15 минут бесплатно</small>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div class="image-container">
              <img src="img/home/1.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="bottom-arrow d-flex flex-column justify-content-center align-items-center">
          <small>Подробнее о сервисе</small>
          <div class="arrow-down">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </main>
  <AppFooter/>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped lang="scss">
.title {
  max-width: 800px;
  margin: 70px 0 40px 0;
  @media (max-width: 998px) {
    width: 100%;
    max-width: 400px;
    margin: 40px 0 20px 0;
  }
}
small {
  margin-top: 10px;
  text-align: center;
}
.image-container {
  position: relative;
  width: auto;
  height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  @media (max-width: 1200px) {
    width: auto;
    height: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  @media (max-width: 998px) {
    margin-top: 20px;
    height: 200px;
    img {
      width: 100%;
      height: 200px;
    }
  }
}
.bottom-arrow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-60px);
}
.arrow-down {
  margin-top: 30px;
}
.arrow-down span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 2px solid #A6A6AA;
  border-right: 2px solid #A6A6AA;
  transform: rotate(45deg);
  margin: -16px;
  animation: arrow-down 3s infinite;
}
.arrow-down span:nth-child(2){
  animation-delay: -0.2s;
}
.arrow-down span:nth-child(3){
  animation-delay: -0.4s;
}
@keyframes arrow-down {
  0%{
    opacity: 0;
    transform: rotate(45deg) translate(-10px,-10px);
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: rotate(45deg) translate(10px,10px);
  }
}
</style>
