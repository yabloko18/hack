<template>
  <section class="psychology">
    <div class="container">
      <h2>Как это работает?</h2>
      <div class="row psychology-row">
        <div class="col-12 col-lg-4">
          <div class="col-body d-flex">
            <div class="col-2">
              <span class="col-number color-red">
                01
              </span>
            </div>
            <div class="col-10">
              <h3 class="color-blue">
                Начало поиска
              </h3>
              <p class="text-1">
                В это время наш сервис ищет свободного психолога, а затем связывает вас с ним в нашем чате
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="col-body d-flex">
            <div class="col-2">
              <span class="col-number color-red">
                02
              </span>
            </div>
            <div class="col-10">
              <h3 class="color-blue">
                Первое общение с психологом
              </h3>
              <p class="text-1">
                После соединения вас с психологом вы получаете бесплатную помощь в течении 10 минут. Психолог выявляет вашу проблему, даёт короткие советы
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="col-body d-flex">
            <div class="col-2">
              <span class="col-number color-red">
                03
              </span>
            </div>
            <div class="col-10">
              <h3 class="color-blue">
                Продолжение общения с психологом
              </h3>
              <p class="text-1">
                После 10 минут бесплатной помощи вам будет предложенно оплатить продолжение сеанса. После этого вы сможете общаться с психологом по аудио связи
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionWork'
}
</script>

<style scoped lang="scss">
.psychology {
  background-color: transparent;
  &-row {
    margin-top: 60px;
    @media (max-width: 998px) {
      margin-top: 40px;
    }
    @media (max-width: 576px) {
      margin-top: 20px;
    }
  }
  .col-body {
    padding: 15px;
  }
  .col-number {
    display: block;
    position: absolute;
    font-size: 40px;
    font-weight: 700;
    transform: rotate(270deg);
    opacity: .4;
  }
}
</style>
