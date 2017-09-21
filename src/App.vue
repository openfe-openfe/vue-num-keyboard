<style>
  .box{
    height: 100%;
    height: 50px;
    padding:10px;
    margin-top:10px;
  }
</style>
<template>
  <div id="aap">
    <div class="box">
       <sh-keyboard 
        placeholder="请输入提现金额"
        label="提现金额"
        inter="5"
        decimal="2"
        v-model="val"/>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        val: ''
      }
    }
  }
</script>