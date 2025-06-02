<template lang="">
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="할 일을 입력하세요" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">삭제</button>
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
      todos.value.push({ text: newTodo.value, done: false })
      newTodo.value = ''
    }
  }

  // 삭제 기능
  const removeTodo = (index) => {
    todos.value.splice(index, 1)
  }
</script>
<style lang="">
  
</style>