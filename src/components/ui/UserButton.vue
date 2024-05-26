<script setup lang="ts">
import { useClerk, useAuth } from 'vue-clerk'

const clerk = useClerk()

const openSignIn = () => {
  clerk.openSignIn()
}

const openSignUp = () => {
  clerk.openSignUp()
}

const { isSignedIn, signOut } = useAuth()

// Wrapper function for signOut without parameters
const handleSignOut = async () => {
  await signOut.value({})
}
</script>

<template>
  <div class="grid items-center justify-center">
    <!-- Sign In button -->
    <button
      v-if="!isSignedIn"
      @click="openSignIn"
      class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
      aria-label="Sign In"
    >
      <span
        class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
        >Sign In</span
      >
    </button>
    <!-- Sign Up button -->
    <button
      v-if="!isSignedIn"
      @click="openSignUp"
      class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
      aria-label="Sign Up"
    >
      <span
        class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
        >Sign Up</span
      >
    </button>

    <button
      v-if="isSignedIn"
      @click="handleSignOut"
      class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800"
      aria-label="Sign Out"
    >
      <span
        class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
        >Sign Out</span
      >
    </button>
  </div>
</template>
