const div = (x, y) => { return x / y }

const divide = new Vue({
  el: '#divide',
  data: {
    firstNumber: 100,
    secondNumber: 4
  },
  computed: {
    divide: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return ` Average number of students per section : ${div(i, j)}.`
    }
  }
})