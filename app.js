let button=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
// to assign button its property of adding tasks
button.addEventListener("click",function(){
    if(input.value==""){
        input.placeholder="Enter some valid task !";
    }else{
        input.placeholder="Task";
        let div=document.createElement("div");
        let item=document.createElement("li");
        let span=document.createElement("span");
        // console.log(input.value);
        item.innerText=input.value;
        ul.appendChild(div);
        div.appendChild(span);
        span.classList.add("far","fa-square");
        div.appendChild(item);
        input.value="";
    }
    
});
// to assign enter aslo its property of adding tasks same as button above
let body = document.querySelector("body");
body.addEventListener("keydown",function(event){
    // console.dir(`${event.code},${event.key}`);
    if(input.value==""){
        input.placeholder="Enter some valid task !";
    }else{
        input.placeholder="Task";
        if(event.code=="Enter"||event.key=="Enter"){
            let div=document.createElement("div");
            let item=document.createElement("li");
            let span=document.createElement("span");
            console.log(input.value);
            item.innerText=input.value;
            ul.appendChild(div);
            div.appendChild(span);
            // span.classList.add("far","fa-square");
            span.className="far fa-square";
            div.appendChild(item);
            input.value="";
        }
    }
})

// to assign functioning of button to enable or diasble task "using event delegation"
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="SPAN"){
        console.dir(event.target);
        let span=event.target;
        span.nextElementSibling.classList.toggle("done");
        span.parentElement.classList.toggle("div-grey");
        if(span.classList.contains("fa-square")){
            // span.classList.remove("far","fa-square");
            // span.classList.add("fa-regular","fa-square-check");
            span.setAttribute("class","fa-regular fa-square-check");
        }else{
            span.setAttribute("class","far fa-square");
        }
    }
})
//        <!-- its without event delegation --!>
// let spans=document.querySelectorAll("span");
// for(let span of spans){
//     span.addEventListener("click",function(){
//         span.nextElementSibling.classList.toggle("done");
//         span.parentElement.classList.toggle("div-grey");
//         if(span.classList.contains("fa-square")){
//             span.classList.remove("far","fa-square");
//             span.classList.add("fa-regular","fa-square-check");
//         }else{
//             span.setAttribute("class","far fa-square");
//         }
//     });
// }

//          to delete any task by pressing on task
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="LI"){
        console.dir(event.target);
        let li=event.target;
        li.classList.add("delete");
        li.previousElementSibling.classList.add("delete");
        let div=event.target.parentElement;
        }
});
