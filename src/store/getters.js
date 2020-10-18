export default{
  getQu(state){
    return state.count*state.count;
  },
  morexstu(state){
    return state.students.filter(s=> s.age>20)
  },
  moreLength(state,getters){
    return getters.morexstu.length
  },
  moreAge(state){
    return age=>state.students.filter(s=>s.age>age)
  }
}