const re = document.getElementById('re')
const getData = async() => {
    const te = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const fr = await te.json()

    const changedUsers = fr.map ((el) => {
         return `<div class = "di"> <p> userId: </p> ${el.userId} <p> id: </p> ${el.id} ${el.title} ${el.body} </div>`
    })
    re.innerHTML = changedUsers.join("");

}
getData()
