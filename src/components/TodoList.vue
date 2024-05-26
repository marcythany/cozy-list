<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from 'vue-clerk'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const auth = useAuth()
const todos = ref<Todo[]>([])
const text = ref('')

function addTodo() {
  if (text.value.trim()) {
    todos.value.push({ id: Date.now(), text: text.value, completed: false })
    text.value = ''
  }
}

function removeTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>

<template>
  <section
    v-if="auth.isLoaded && auth.isSignedIn"
    class="grid grid-flow-row grid-rows-[auto_1fr_auto] justify-center"
  >
    <div class="m-5 grid rounded-lg bg-slate-800 p-4">
      <form @submit.prevent="addTodo" class="flex gap-2">
        <label for="newTodo" class="sr-only">Add a new todo...</label>
        <input
          id="newTodo"
          type="text"
          placeholder="Add a new todo..."
          v-model="text"
          class="w-full rounded-lg border border-slate-600 bg-slate-500 p-2 placeholder:text-gray-100"
        />

        <button
          type="submit"
          class="group relative flex w-[5.9rem] justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
        >
          <span
            class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slate-800"
            >Add</span
          >
        </button>
      </form>

      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="mb-4 mt-6 flex w-full items-center justify-between gap-2 last:mb-0"
        >
          <label :for="'todo-' + todo.id" class="sr-only">{{ todo.text }}</label>

          <input
            :id="'todo-' + todo.id"
            type="checkbox"
            v-model="todo.completed"
            class="h-5 w-5 rounded-full border border-slate-600"
          />
          <div class="flex-1">
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          </div>

          <button
            @click="removeTodo(todo.id)"
            class="group relative flex justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-300 to-pink-500 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
          >
            <span
              class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-slate-800"
              >Remove</span
            >
          </button>
        </li>
      </ul>
    </div>
  </section>
  <div v-else>
    <p class="text-center text-2xl md:text-3xl">Please sign in to view your todo list.</p>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
