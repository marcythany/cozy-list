<script setup lang="ts">
import { ref } from 'vue'
import Section from './ui/SectionWrapper.vue'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const todos = ref<Todo[]>([])
const text = ref('')

function toggleTodo(id: number) {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo
  })
}

function addTodo(text: string) {
  todos.value.push({ id: Date.now(), text, completed: false })
}

function removeTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>

<template>
  <Section>
    <div class="m-5 grid gap-4 rounded-lg bg-slate-800 p-4">
      <h1 class="text-center text-3xl font-bold tracking-tighter antialiased">Cozy List</h1>
      <form @submit.prevent class="flex gap-2">
        <input
          type="text"
          placeholder="Add a new todo..."
          v-model="text"
          @keyup.enter="addTodo(text)"
          class="w-full rounded-lg border border-slate-600 bg-slate-500 p-2"
        />
        <button
          type="submit"
          @click="addTodo(text)"
          class="rounded-lg border border-teal-700 p-2 hover:bg-teal-700"
        >
          Add
        </button>
      </form>

      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="mb-4 flex w-full items-center justify-between gap-2 last:mb-0"
        >
          <input
            type="checkbox"
            v-model="todo.completed"
            @click="toggleTodo(todo.id)"
            class="h-5 w-5 rounded-full border border-slate-600"
          />
          <div class="flex-1">
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          </div>
          <button
            type="submit"
            @click="removeTodo(todo.id)"
            class="rounded-lg border border-red-700 p-2 hover:bg-red-700"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  </Section>
</template>
