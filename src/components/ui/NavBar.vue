<script setup lang="ts">
import Buttons from './UserButton.vue'
import { UserButton, useAuth } from 'vue-clerk'

const { isSignedIn } = useAuth()
const appearance = {
  variables: {
    fontSize: 'sm',
    fontWeight: { semibold: 600, bold: 700 },
    color: 'blue',
    bg: 'white'
  }
}
</script>

<template>
  <nav role="navigation" aria-label="Primary Navigation" class="mx-5 flex items-center">
    <div class="container mx-auto flex items-center justify-between py-4">
      <h1>
        <router-link to="/" class="text-xl font-bold text-orange-200">Cozy List</router-link>
      </h1>
      <aside class="flex items-center justify-between gap-4">
        <UserButton v-if="isSignedIn" :show-name="true" :appearance="appearance" />
        <Buttons />
      </aside>
    </div>
  </nav>
</template>
