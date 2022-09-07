<template>
  <button class="btn">{{name}}</button>
</template>

<script>
  export default {
    name:'TButton',
    props:['name']
  }
</script>

<style  scoped>

.btn{
  background-color: #5222d0;
  color: white;
  padding: 8px 24px;
  border: none;
  font-size: 16px;
  line-height: 160%;
  border-radius: 8px;
  cursor: pointer;
}
.btn:hover{
  background-color: black;
}
</style>