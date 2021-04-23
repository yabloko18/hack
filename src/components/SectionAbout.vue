<template>
  <section class="about">
    <div class="container">
      <div class="about-body">
        <h2>Что такое Wisdom?</h2>
        <p class="text-1">
          Wisdom - сервис, который быстро подберет для вас психолога.
          Наши психологи обладают знаниями, опытом и навыками, необходимыми для оказания экстренной психологической помощи.
        </p>
        <p class="text-1">Цель Wisdom - помочь вам сразу.</p>
        <p class="text-1">Что делать, если не к кому обратиться за поддержкой, а на выбор психолога и ожидание встречи нет времени?</p>
        <p class="text-1">Что делать, если помощь нужна прямо сейчас?</p>
        <p class="text-1">С помощью WISDOM каждый может начать диалог с психологом без регистрации, поиска и записи на сеанс.</p>
        <p class="text-1">Это и делает наш сервис уникальным</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "SectionAbout"
}
</script>

<style scoped lang="scss">
.about {
  background-color: rgba(255,93,88,.4);
  h2 {
    font-size: 36px;
    margin-bottom: 40px;
    font-weight: 700;
    color: #1a1e21;
    @media (max-width: 998px) {
      margin-bottom: 30px;
    }
    @media (max-width: 576px) {
      margin-bottom: 20px;
    }
  }
  .about-body {
    max-width: 600px;
    margin: 0 auto;
    p {
      font-weight: 500;
      font-size: 24px;
      color: #1a1e21;
    }
  }
}
</style>
