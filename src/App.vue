<template>
  <div id="app">
    <h2>mutation</h2>
    <div>{{$store.state.count}}</div>
    <button @click="addCount">+</button>
    <button @click="decCount">-</button>
    <button @click="addFive(5)">+5</button>
    <button @click="addTen(10)">+10</button>
    <button @click="addStudent">添加学生</button>


    <h2>getters</h2>
    <div>平方 超过20岁 超过20岁的人数 超过x的数组（）传参</div>
    <div>{{$store.getters.getQu}}</div>
    <div>{{$store.getters.morexstu}}</div>
    <div>{{$store.getters.moreLength}}</div>
    <div>{{$store.getters.moreAge(10)}}</div>


    <h2>actions</h2>
    <div>{{$store.state.info}}</div>
    <button @click="updateInfo">修改信息</button>


    <h2>moudles</h2>
    <div>{{$store.state.a.name}}</div>
    <button @click="asyncUpdateName">异步修改名字</button>
    <div>{{$store.getters.fullname}}</div>
    <div>{{$store.getters.fullname2}}</div>
    <div>{{$store.getters.fullname3}}</div>

  </div>
</template>

<script>
import store from './store/index'
import {INCREMENT} from "./store/mutation_type";



export default {
  data() {
    return {
      store
    }
  },
  methods: {
    addCount(){
      this.$store.commit(INCREMENT);
    },
    decCount(){
      this.$store.commit("decCount")
    },
    addFive(count){
      this.$store.commit("addFive",count)
    },
    addTen(count){
      this.$store.commit({
        type:"addTen",
        count
      })
    },
     addStudent() {
        const stu = {id: 114, name: 'alan', age: 35}
        this.$store.commit('addStudent', stu)
      },
      updateInfo(){
        this.$store.dispatch("updateInfo",{
          message: '我是携带的信息',
          success: () => {
            console.log('里面已经完成了');
          }
        })
      },
      asyncUpdateName(){
        this.$store.dispatch("aUpdateName")
      }
  },
}
</script>

<style lang="scss">

</style>
