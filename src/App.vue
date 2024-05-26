<script setup lang="ts">
import { useAuth } from 'vue-clerk'
import TodoList from '@/components/TodoList.vue'
import NavBar from '@/components/ui/NavBar.vue'
import Footer from '@/components/ui/FooterNav.vue'

const { isLoaded, isSignedIn } = useAuth()
</script>

<template>
  <main class="grid h-screen grid-flow-row grid-rows-[auto_1fr_auto]">
    <header class="h-16">
      <NavBar />
    </header>

    <template v-if="isLoaded && isSignedIn">
      <TodoList />
    </template>
    <template v-else>
      <div class="flex justify-center">
        <p class="text-center text-2xl md:text-3xl">Please sign in to view your cozy list.</p>
      </div>
    </template>

    <Footer />
  </main>
</template>
