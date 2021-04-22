<template>
  <li class="col-12 massage-body_y">
    <div class="massage-body d-inline-flex flex-column">
      <p>{{ massage.text }}</p>
      <small class="d-flex justify-content-end"> {{ massage.time }}</small>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Massage',
  props: {
    massage: {
      type: Object,
      required: true
    }
  },
  methods: {
    test () {
      if (this.massage.user === 'B') {
        return console.log(1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
li {
  margin-bottom: 10px;
  padding: 0 !important;
  &:last-child {
    margin-bottom: 0;
  }
}
.massage-body {
  background: #FAFAFA;
  border-radius: 8px;
  display: inline-flex;
  padding: 8px;
  min-width: 250px;
  max-width: 80%;
  @media (max-width: 576px) {
    min-width: 120px;
    max-width: 80%;
  }
  &_y {
    justify-content: flex-end;
    display: flex;
    .massage-body {
      background: #DCF7C5;
    }
  }
  p {
    font-size: 16px;
    line-height: 145%;
    color: #1F1F1F;
  }
}
</style>
