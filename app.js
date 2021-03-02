console.log('hello world')

function test(a, b, c) {
  console.log([...arguments])
  console.log(arguments.length)
}
test('apple', 'mango', 'banana')

function test(test) {
  let test
  console.log(test)
  var test = 'var test'
  function test() {
    console.log('test func')
  }
  console.log(test)
}
test('hello')

function NewTab() {
  window.open('https://www.google.com')
}
