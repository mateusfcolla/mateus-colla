<template lang="pug">

.loading-screen( :class="{ 'active': props.isLoading }" )
    .loading
        .line
        .line
        .line

</template>

<script setup>

const props = defineProps(['isLoading'])

</script>

<style lang="scss" scoped>

.loading-screen {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #0f0f0f;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    gap: .2;
    pointer-events: none;
    transition: .4s;
    opacity: 0;

    &.active {
      opacity: 1;
    }
}

.loading {
    display: flex;
    gap: .2rem;
}

.line {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #ffffff;
}

.loading .line:nth-last-child(1) {
  animation: loadingC .75s 0.1s ease-in-out infinite;
}
.loading .line:nth-last-child(2) {
  animation: loadingC .75s 0.2s ease-in-out infinite;
}
.loading .line:nth-last-child(3) {
  animation: loadingC .75s 0.3s ease-in-out infinite;
}


@keyframes loadingC {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, 0);
  }
}

</style>