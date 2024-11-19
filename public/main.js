var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");


// document.addEventListener("DOMContentLoaded", () => {
//   fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=40&skip=6")
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//       data.forEach(x=>{
//         document.querySelector('#api').innerHTML += `<li class="message">
//         <span>${x.name}</span>
//         <span>${x.thumbUp}</span>
//         <img src = ${x.image}>
//         <span><i class="fa fa-thumbs-up" aria-hidden="true"></i></span>
//         <span><i class="fa fa-thumbs-down" aria-hidden="true"></i></span>
//         <span><i class="fa fa-trash-o" aria-hidden="true"></i></span>
//         <span><i class="fa fa-heart" onclick = abdi() aria-hidden="true"></i></span>
//       </li>`
//       })
      
//     })
// })
// function abdi(){
//   console.log('akjfbkhjasb')
// }
var heart = document.getElementsByClassName("fa-heart");
console.log(heart)

Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});
Array.from(heart).forEach(function (element) {
  element.addEventListener('click', function () {
    console.log('heart')
    const name = element.closest('li').querySelector('span.name').innerText;
    const img = element.closest('li').childNodes[3].src;
    console.log(name, img)
    // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[3].innerText)
    fetch('favorite', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'img': img
        // 'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload()
      })
  });
});


Array.from(thumbDown).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)

    fetch('thumbDown', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
