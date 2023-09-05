import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Todo {
    id: number
    title: string
    completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
    const tasks = ref<Todo[]>([
        {
            id: 1,
            title: 'Learn Vue 3',
            completed: true
        },
        {
            id: 2,
            title: 'Learn Pinia',
            completed: false
        },
        {
            id: 3,
            title: 'Build a Todo App',
            completed: false
        }
    ])

    function addTask(title: string) {
        const maxId = tasks.value.reduce((max, task) => Math.max(max, task.id), 0)

        tasks.value.push({
            id: maxId + 1,
            title: title,
            completed: false
        })
    }

    function removeTask(id: number) {
        tasks.value = tasks.value.filter(task => task.id !== id)
    }

    function toggleTask(id: number) {
        const task = tasks.value.find(task => task.id === id)
        if (task) {
            task.completed = !task.completed
        }
    }
    
    return {
        tasks, addTask, removeTask, toggleTask
    }
})
