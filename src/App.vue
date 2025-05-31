<template lang="">
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일을 입력하세요" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  
  const newTodo = ref('')
  const todos = ref([])

  // 추가 기능
  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push(newTodo.value)
      newTodo.value = ''
    }
  }
</script>
<style lang="">
  
</style>