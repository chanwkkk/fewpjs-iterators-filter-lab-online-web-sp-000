// Code your solution here


function findMatching(array,name){
  return array.filter(item=>item.toUpperCase()==name.toUpperCase())
}

function matchingTest(item,testWord){
  let length = testWord.split("").length
  let testString = []
  for (let i = 0;i<length; i++){
    testString.push(item[i])
  }
  let test = testString.join("")
  return !!(test===testWord)

}


function fuzzyMatch(array,string){
  return array.filter(item=>matchingTest(item,string))
}
