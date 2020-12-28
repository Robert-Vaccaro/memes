let num  = "1"
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
    fetch('https://ancient-springs-47837.herokuapp.com/get-all-memes-v2', {
        method: 'post', 
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
         body: JSON.stringify({username: "yo",startPoint:page,like:"",category:""})
      }).then(res=>res.json())
        .then(res => getMemes(res))
        .catch(err => console.log(err))
}
startMemes(num)

var getMemes = (res) => {
    let ele = document.getElementById('columns')
    for (i in res){
        console.log(res[i].url)
        ele.innerHTML += 
        `<figure class=>
        <img src=${res[i].url}></img>

        </figure>`;
    }
} 
{/* <figcaption class="port-title"></figcaption>
<figcaption></figcaption>
<br>
<figcaption><b>Technologies</b></figcaption>
<br>
<div class="visit-link">
<a class="box" href="" target="_blank"><button class="btn-blue">Visit</button></a>
</div> */}