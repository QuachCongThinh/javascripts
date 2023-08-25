Array.prototype.forEach2 = function(callback){ 
  for(var index in this){
    console.log('index:', index)
  }
}

var courses = [
  'Javascript',
  'HTML,CSS'
]

console.log(courses)

courses.forEach2(function(course,index){
  console.log(courses[index])
})