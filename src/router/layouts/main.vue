<script>
import HelloWorld from '../../components/HelloWorld.vue'

export default {
  components: { HelloWorld },
}
</script>

<template>
  <div :class="$style.container">
    <HelloWorld />
    <slot />
  </div>
</template>

<style lang="scss" module>
@import '../../design';

.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>