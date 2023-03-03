const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")

const getData = async() => {
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
const result  = data[0]
const result2 = data[1]
const result3 = data[2]
const result4 = data[3]
const result5 = data[4]
const result6 = data[5]
console.log(result);


one.innerHTML = `<h2>1</h2> <b>name: </b> ${result.name} <br> <b>phone: </b>${result.phone}<b><br>username: </b>${result.username}<br>
<b>website:</b>${result.website}<br><b>email: </b>${result.email}`

two.innerHTML = `<h2>2</h2> <b>name: </b> ${result.name} <br> <b>phone: </b>${result.phone}<b><br>username: </b>${result.username}<br>
<b>website:</b>${result.website}<br><b>email: </b>${result.email}`

three.innerHTML = `<h2>3</h2> <b>name: </b> ${result.name} <br> <b>phone: </b>${result.phone}<b><br>username: </b>${result.username}<br>
<b>website:</b>${result.website}<br><b>email: </b>${result.email}`

four.innerHTML = `<h2>4</h2> <b>name: </b> ${result.name} <br> <b>phone: </b>${result.phone}<b><br>username: </b>${result.username}<br>
<b>website:</b>${result.website}<br><b>email: </b>${result.email}`

five.innerHTML = `<h2>5</h2> <b>name: </b> ${result.name} <br> <b>phone: </b>${result.phone}<b><br>username: </b>${result.username}<br>
<b>website:</b>${result.website}<br><b>email: </b>${result.email}`

six.innerHTML = `<h2>6</h2> <b>name: </b> ${result.name} <br> <b>phone: </b>${result.phone}<b><br>username: </b>${result.username}<br>
<b>website:</b>${result.website}<br><b>email: </b>${result.email}`
}
getData()