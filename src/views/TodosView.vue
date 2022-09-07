<template>
  <div class="todo-wrapper">
    <div class="input-container">
  
        <input type="text" class="input" placeholder="Add Task..." v-model="title" >
        <TButton name="Add" class="Btn" v-if="!isEditing" @click="addTodo"></TButton>
        <TButton name="Save" v-else @click="saveTodo"></TButton>
      
    </div>

    <div class="task-List">
      <div :class="['task-item', {'is-editing': isEditing === item.id} ]" v-for="item in sortedList" :key="item.id">

        <input type="checkbox" v-model="item.completed" class="ChckBox">

        <div class="description">
          <div :class="['title', { 'completed': item.completed }]">{{  item.title  }}</div>
          <div class="time-added"> Added {{ formatDate(item.added )}} </div>
        </div>

        <div class="control-Btns">
          <div class="icons-wrapper">
            <div class="editBtn" @click="editItem(item.id, item.title)"><img src="@/assets/EditBtn.svg" /></div>
            <div class="deleteBtn" @click="deleteTodo(item.id)"><img src="@/assets/DeleteBtn.svg" /></div>
          </div>

          <div class="priority">
            {{  item.priority  }}
          </div>

            <div class="ArrowBtn">
              <img src="@/assets/UpArrow.svg" class="upArrow" @click="item.priority++"/>
              <img src="@/assets/DownArrow.svg" class="downArrow" @click="item.priority--"/>
            </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {format} from 'date-fns';
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
export default {
  name: 'TodosView',
  data:()=> ({
    title:"",
    isEditing: null,
    // todoList: [{
    //   id: Math.random(), title: 'Go to work', added: new Date(2022, 4, 16), priority: 0, completed: false,
      
    // }]
  }), 
  methods: {
    addTodo() {
      if (!this.title) 
        return;
      
      const newTodo = {
      id:Math.random(),
      title:this.title,
      added:new Date(),
      priority:0,
      completed:false
    }

    this.addTodoAction(newTodo);
    this.title="";
    },

    deleteTodo(itemId) {    
      this.$store.dispatch('deleteTodo', itemId)
    },

    editItem(itemId, title) {
      this.isEditing= itemId;
      this.title = title;
      // const item = this.todoList.find((item) => item.id === itemId)
    }, 
    saveTodo() {
      if (!this.title) 
        return;

      const itemId = this.isEditing;
      this.editTodo({itemId, title: this.title });

      this.title= "";
      this.isEditing = null;
    },
    formatDate(date) {
      return format(date, 'do MMMM yyyy hh:mm aaa')
    },
  
    ...mapMutations(['updateList']),
    ...mapActions({addTodoAction: 'addTodo', editTodo:'editTodo'})
  },
  
  computed: {
    
    ...mapGetters(['sortedList']),
    ...mapState(['todoList'])
  }
     
    
  
    
}

</script>

<style  scoped>


.todo-wrapper {
  max-width: 640px;
  margin-inline: auto;
}

.input-container {
  display: flex;
  margin-top: 50px;
  width: 100%;
  padding: 8px;
  background-color: white;
  border-radius: 8px;
}

.input {
  width: 100%;
  outline: none;
  border: none;
  padding: 4px 8px;
  font-size: 17px;
}

.Btn:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

::placeholder {
  opacity: 0.5;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 8px;
  word-break: break-all;
}

.task-item.is-editing{
  opacity: 0.4;
  cursor: not-allowed;
}

.ChckBox {
  width: 20px;
  height: 20px
}

.ChckBox:hover {
  cursor: pointer;
}

.description {
  margin-left: 16px;
}

.title {
  font-weight: 500;
  margin-bottom: 6px;
}

.title.completed {
  text-decoration: line-through;
}

.time-added {
  font-size: 12px;
  opacity: 0.8;
}

.control-Btns {
  display: flex;
  margin-left: auto;

}

.icons-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 16px;
}

.editBtn {
  margin-right: 10px;
  margin-top: 2px;
}

.editBtn:hover {
  
  cursor: pointer;
}

.deleteBtn:hover {
  cursor: pointer;
}

.control-Btns {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.ArrowBtn{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 5px;
}


.upArrow:hover{
  cursor: pointer;
}
.downArrow:hover{
  cursor: pointer;
}

.prioBtn {
  display: flex;
  align-items: center;
}

.priority {
  margin-right: 15px;
  width: 40px;
  height: 30px;
  border-radius: 8px;
  background-color:#EFEFEF ;
  text-align: center;
  font-weight: 600;
  padding-top: 9px;
  
}

@media (max-width:768px) {
  .prioBtn {
    padding: 4px 10px;
    margin-right: 8px
  }

  .icons-wrapper {
    gap: 5px;
  }

  .deleteBtn {
    margin-right: 10px;
  }

}
</style>