<template>
  <div>
    <label for="model">{{text}}</label>
    <div>
      <select name="model" id="model" v-model="model">
        <option v-for="(value, index) in list" value="index" :key="index">{{ value }}</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    model: String,
    list: Array
  }
}
</script>