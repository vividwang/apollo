import data1 from '../container/tasks/data';
const t = {};
const data = function () {
  return {
    [data1.id]: {
      todos: data1.todos
    }
  }
};

export default data;

