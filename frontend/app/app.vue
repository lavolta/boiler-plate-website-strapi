<script setup lang="ts">

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <p
      v-for="item in 3"
      :key="item"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
