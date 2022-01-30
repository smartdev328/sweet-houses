<template>
  <div>
    <form @submit.prevent="onUpload">
      <div class="form-group">
        <input type="file" name="imagesArray" multiple @change="onChange">
      </div>
      <div class="form-group">
        <button class="btn btn-success">Store</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MultiUpload.vue"
}
</script>

<style scoped>

</style>