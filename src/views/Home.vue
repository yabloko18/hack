<template>
  <div class="app-body">
    <AppHeader/>

    <main class="content">
      <div class="full-screen">
        <div class="container position-relative">
          <div class="row position-relative justify-content-between">
            <div class="col-12 col-lg-6">
              <h1 class="title">Экстренная психологическая помощь</h1>
              <div class="d-inline-flex flex-column">
                <router-link :to="{ name: 'Search' }" class="button">Найти помощь</router-link>
                <small>Первые 10 минут бесплатно</small>
              </div>
              <div class="full-screen__info d-none d-lg-block">
                <p class="text-1">
                  Тебе необходима помощь психолога? WISDOM решит проблему быстро!
                </p>
                <p class="text-1">
                  Сделай один клик и получи целых 10 минут бесплатного общения
                  с психологом без предварительной регистрации.
                </p>
                <p class="text-1">
                  WISDOM - один клик до помощи
                </p>
              </div>
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div class="image-container">
                <img src="img/home/1.jpg" alt="">
              </div>
            </div>
            <div class="col-12 bottom-arrow d-flex flex-column align-items-center justify-content-center">
              <small>Подробнее о сервисе</small>
              <div class="arrow-down">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionHelp/>
      <SectionWork/>
      <SectionAbout/>
<!--      <ModalWindowPay/>-->
    </main>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import SectionWork from "@/components/SectionWork";
import SectionHelp from "@/components/SectionHelp";
import SectionAbout from "@/components/SectionAbout";
import ModalWindowPay from "@/components/ModalWindowPay";

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,
    SectionWork,
    SectionHelp,
    SectionAbout,
    ModalWindowPay
  }
}
</script>
<style lang="scss" scoped>
.title {
  max-width: 800px;
  margin: 70px 0 40px 0;
  @media (max-width: 998px) {
    width: 100%;
    max-width: 400px;
    margin: 40px 0 20px 0;
  }
  @media (max-width: 576px) {
    margin: 10px 0 10px 0;
  }
}
small {
  margin-top: 10px;
  text-align: center;
  @media (max-width: 576px) {
    margin-top: 0;
  }
}
.image-container {
  position: relative;
  width: auto;
  height: 400px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  @media (max-width: 1200px) {
    width: auto;
    height: 300px;
  }
  @media (max-width: 998px) {
    margin-top: 20px;
    height: 200px;
  }
  @media (max-width: 576px) {
    margin-top: 0;
    height: 150px;
  }
}
.full-screen {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 93vh;
  @media (max-width: 576px) {
    min-height: 90vh;
    height: 90vh;
    max-height: 90vh;
  }
  .container {
    width: 100%;
    height: 100%;
    min-height: 93vh;
    .row {
      width: 100%;
      height: 100%;
      min-height: 93vh;
      margin: 0;
    }
    @media (max-width: 576px) {
      min-height: 90vh;
      height: 90vh;
      max-height: 90vh;
      .row {
        min-height: 90vh;
        height: 90vh;
        max-height: 90vh;
      }
    }
  }
}
.bottom-arrow {
  margin-top: 15px;
  @media (max-width: 576px) {
    margin-top: 5px;
  }
}
.arrow-down {
  margin-top: 30px;
  @media (max-width: 576px) {
    margin-top: 20px;
  }
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
  @media (max-width: 576px) {
    width: 15px;
    height: 15px;
    margin: -8px;
  }
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
.full-screen__info {
  padding: 20px 20px 20px 0;
}
</style>
