import {INCREMENT} from "./mutation_type.js";

export default{
  // 方法
  [INCREMENT](state) {
    state.count++
  },
  decCount(state){
    state.count--;
  },
  addFive(state,count){
    state.count+=count
  },
  addTen(state,countOpt){
    state.count+=countOpt.count
  },
  addStudent(state,stu){
    state.students.push(stu)
  },
  updateInfo(state){
    state.info.name="hah"
  }
}