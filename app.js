console.log('hello world')

var button = document.getElementsByTagName('button')
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    console.log(button[i].innerText)
  })
}

// function test(a, b, c) {
//   console.log([...arguments])
//   console.log(arguments.length)
// }
// test('apple', 'mango', 'banana')

// function test(test) {
//   let test
//   console.log(test)
//   var test = 'var test'
//   function test() {
//     console.log('test func')
//   }
//   console.log(test)
// }
// test('hello')

// function NewTab() {
//   window.open('https://www.google.com')
// }
