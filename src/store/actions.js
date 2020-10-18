export default{
  // updateInfo(context,payload){
  //   setTimeout(()=>{
  //     context.commit("changeStu")
  //     console.log(payload.message)
  //     payload.success()
  //   })
  // }
  updateInfo(context, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit('updateInfo');
        console.log(payload);

        resolve('1111111')
      }, 1000)
    })
  }
}