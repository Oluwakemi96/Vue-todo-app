<template>
  <div class="contentIllus-wrapper">
    <div class="content">
      <h1>Manage your tasks effectively</h1>
      <p>Modern todo list application to help you track your activities and stay productive.</p>
      <TButton name="Get Started" @click="handleGetStarted"></TButton>
    </div>

    <div class="illustration">
      <img src="@/assets/hero-illustration.svg" alt="">   
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  },
  methods:{
    handleGetStarted() {
      this.$router.push('/todos')
    }
  }
}
</script>

<style scoped>

.contentIllus-wrapper{
  margin-block: 40px;
 
}

h1{
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  max-width: 333px;
  margin-bottom: 8px;
}

p{
  max-width: 324px;
  margin-bottom: 16px;
  line-height: 160%;
}

   @media (min-width: 768px) {
     
     .contentIllus-wrapper{
       display: flex;
       align-items: center;
       justify-content: space-between;
     }

   }
   
</style>
