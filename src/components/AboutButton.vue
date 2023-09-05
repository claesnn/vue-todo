<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
const count = useCounterStore()
</script>

<template>
    <v-btn @click="count.increment()">About {{ count.count }}</v-btn>
    {{ count.doubleCount }}
</template>