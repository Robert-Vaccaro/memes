let num  = "0"
window.onscroll = function(ev) {
    console.log("window.innerHeight + window.scrollY)",window.innerHeight+window.scrollY)
    console.log("document.body.offsetHeight",document.body.offsetHeight)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        num = parseInt(num)
        num += 1
        num = num.toString()
        console.log(num)
        startMemes(num)
    }
};
var startMemes = (page) => {
    fetch('https://ancient-springs-47837.herokuapp.com/get-memer-rankings-v2', {
        method: 'post', 
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({username: "",startPoint:parseInt(page),like:"",category:""})
      }).then(res=>res.json())
        .then(res => getMemes(res))
        .catch(err => console.log(err))
}
startMemes(num)

var getMemes = (res) => {
    console.log(res)
    let ele = document.getElementById('rankings-column')
    for (i in res){
        console.log(res[i].url)
        ele.innerHTML += 
        `<div class="rankings-container">
        <img class="memers" src=${res[i].profilePhoto}></img>
        <h1>${res[i].username}</h1>
        <p>Level: ${res[i].level}</p>
        <p>Exp: ${res[i].exp}/100</p>
        <p>Memes: ${res[i].memes}</p>
        </div>`;
    }
} 