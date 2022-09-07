
import {createStore} from 'vuex'
import todos from './modules/todos'
import shop from './modules/shop'


const store = createStore({
  modules:{
    todos,
    shop
  }
})

export default store