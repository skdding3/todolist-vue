<template>

    <main>
      <!-- heading -->
      <header>
  
        <h1>
          Todo List with Pinia
          {{ taskStore.name }}
        </h1>
      </header>
  
       <!-- task list -->
        <div class="task=list">
          <div v-for="task in taskStore.tasks">
            <h2>{{ task.title }}</h2>
            <p>{{ task.isFav }}</p>
            <div class="icons">   
              <button class="material-icons">favorite</button>
              <button class="material-icons">delete</button>
            </div>
          </div>
        </div>

        <div class="task-list">
        <h1>Favs</h1>
          <div v-for="task in taskStore.favs">
            <h2>{{ task.title }}</h2>
            <p>{{ task.isFav }}</p>
            <div class="icons">   
              <button class="material-icons">favorite</button>
              <button class="material-icons">delete</button>
            </div>
          </div>
        </div>
  
        <!-- test -->
         <div class="test">
          f
         </div>
    </main>
  </template>
  
  <script setup>
    import { useTaskStore } from '../stores/taskStore'
    const taskStore = useTaskStore()
  </script>