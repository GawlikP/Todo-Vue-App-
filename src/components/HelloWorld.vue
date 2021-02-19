<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <SomeWierdIcon />


    <form class="form-group" @submit.prevent="addTodo()">
		<label>New ToDo </label><br>
		<input class="form-text" v-model="newTodo" name="newTodo" autocomplete="off">
		<button class="btn btn-success">Add ToDo</button>
	</form>
	<h2>ToDo List</h2>
	<ul>
		<li v-for="(todo, index) in todos" :key="index">
			<span class="alert alert-info" :class="{ 'alert alert-danger done': todo.done }" @click="doneTodo(todo)" >
        {{ todo.content }}</span>
			<button class="btn btn-danger" @click="removeTodo(index)">Remove</button>
      <button class="btn btn-warning" @click="doneTodo(todo)">Done</button>
		</li><br>
	</ul>
	<h4 v-if="todos.length === 0">Empty list.</h4>


  </div>
</template>

<script>


import SomeWierdIcon from './SomeWierdIcon.vue';
import { ref }  from 'vue';

export default {
  name: 'HelloWorld',
  components: {
    SomeWierdIcon
  },
  
  setup() {
    const newTodo = ref('');
    const defaultData = [{
      done: false,
      content: 'Write a blog post'
    }]
    const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;

    const todos = ref(todosData)

    function addTodo(){
      if(newTodo.value){
        todos.value.push({
          done: false,
          content: newTodo.value
        })
        newTodo.value = '';
      }
    }

    function doneTodo(todo){
      todo.done = !todo.done
      saveData()
    }
    function saveData(){
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem('todos', storageData)
    }
    function removeTodo(index){
      todos.value.splice(index,1)
      saveData();
    }

    return {
        todos,
				newTodo,
				addTodo,
				doneTodo,
				removeTodo,
				saveData
    }

  },
  
  props: {
    msg: String
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#done {
  color: red;
}
.done{
  color: red;
  font-weight: bolder;
}
</style>
