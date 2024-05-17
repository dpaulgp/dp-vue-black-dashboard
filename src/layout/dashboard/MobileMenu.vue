<template>
  <ul class="nav navbar-nav nav-mobile-menu">
    <slot>
      <fade-transition :duration="100" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
    </fade-transition>
    </slot>
  </ul>
</template>
<script>
export default {};
</script>
<style></style>
