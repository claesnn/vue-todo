<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-app-bar>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/todo">Todo</RouterLink>
    </v-app-bar>
    <v-main>
      <v-container>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <HelloWorld msg="You did it!" />
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
