var points = sessionStorage.getItem("points")

var head = document.getElementById("result-header")
var body = document.getElementById("result-body")

if(points>=5){
    head.innerText="That's nice ! you've got " +points +" out of 6 right"
    body.innerHTML="You worked hard and it paid off! Nice work figuring out these tough questions, you earned it buddy!"
} 

else{
    head.innerText="Oops! You got " +points +" out of 6 right. That's sad 😔"
    body.innerHTML="Marvel have created more Avengers than even the geekiest of geeks could remember, but that doesn’t mean you shouldn’t try."
}

function reset(){
    location.href="./index.html"
}