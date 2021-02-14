<template>
  
    <header id="calc-header" class="card-content has-background-primary p-3">
      <h1 class="title is-size-5">
        {{ title }}
      </h1>
      <p class="subtitle is-size-7" >
        {{ subtitle }}
      </p>
     <!-- Add dropdown or modal for app desription -->
    </header>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }, 
      subtitle: {
        type: String
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>