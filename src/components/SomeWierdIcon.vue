<template>
    
    <button class="btn btn-success" @click="showAlert">Hello world</button>


</template>
    


<script>



export default {



    name: 'SomeWierdIcon',

    methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
}
</script>

<style scoped>


</style>