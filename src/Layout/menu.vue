<template>
  <a-menu-item :key="key" @click="menuclick">
    <a-icon :type="icon"/>
    <span class="nav-text">{{text}}</span>
  </a-menu-item>
</template>

<script>
export default {
  name: "menu",
  props:{
    icon: {
        type: String
    },
    text: {
        type: String
    },
    to: {
        required:false
    },
    key: {
        required:false
    }
  },
  methods:{
      menuclick(){
          console.log('click')
      }
  }
};
</script>

<style>
</style>
