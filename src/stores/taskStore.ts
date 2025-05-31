import { defineStore } from 'pinia'

interface Task {
  id: number
  title: string
  isFav: boolean
}

interface TaskState {
    tasks: Task[]
    name: string
}


export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
        {id: 1,  title: 'Task 1', isFav:false},
        {id: 2,  title: 'Task 2', isFav:true},
        {id: 3,  title: 'Task 3', isFav:false},
    ],
    name: 'Sunki'
  }),
  getters: {
    favs(): Task[] {
        return this.tasks.filter(task => task.isFav)
    }
  }
})