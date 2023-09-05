<script lang="ts" setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'
import type { Todo } from '@/stores/todo'

const todoData = useTodoStore()
const title = ref('')

function addTask() {
  todoData.addTask(title.value)
  title.value = ''
}

function setIcon(todo: Todo) {
  return todo.completed ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'
}

function strikeText(todo: Todo) {
  return todo.completed ? 'text-decoration-line-through' : ''
}
</script>

<template>
  <v-row class="mb-2" v-for="todo in todoData.tasks" :key="todo.id">
    <v-col>
      <div :class="strikeText(todo)">
        {{ todo.title }}
      </div>
    </v-col>
    <v-col>
      <v-btn :icon="setIcon(todo)" variant="text" @click="todoData.toggleTask(todo.id)"></v-btn>
    </v-col>
    <v-col>
      <v-btn icon="mdi-delete" variant="text" @click="todoData.removeTask(todo.id)"></v-btn>
    </v-col>
  </v-row>
  <v-text-field label="Title" v-model="title" />
  <v-btn @click="addTask">Add</v-btn>
</template>
