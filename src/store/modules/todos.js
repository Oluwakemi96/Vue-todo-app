export default {
  state: () => ({
    todoList: [{
      id: Math.random(), 
      title: 'Go to work', 
      added: new Date(2022, 4, 16), 
      priority: 0, 
      completed: false,
    }],
  }),
  getters: {
    sortedList(state) {
      return [...state.todoList].sort((a,b) => b.priority - a.priority);
    },
  },

  mutations: {
    changeName(state, newName) {
      state.name = newName;
    },

    updateList(state, newList) {
      state.todoList = newList;
    },
    updateTodo(state, {itemId, title}){
      state.todoList.forEach((item) => {
        if (item.id === itemId) {
          item.title = title;
        }
      })
    },

  },
  actions: {
   addTodo ({ commit, state}, newTodo) {
      const newList = [...state.todoList, newTodo];
      commit("updateList", newList);
    },


    editTodo: (context, payload) => {
       context.commit("updateTodo", payload)
    },

    deleteTodo(context, itemId) {
     const newList = context.state.todoList.filter((item)=> item.id !== itemId);
     
     context.commit("updateList", newList)

  }
 }

}
