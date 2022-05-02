import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  logTodo(todo.id, todo.title, todo.completed);
});

function logTodo(id: number, title: string, completed: boolean) {
  console.log(`
    id: ${id}
    title: ${title}
    completed: ${completed}
  `);
}
