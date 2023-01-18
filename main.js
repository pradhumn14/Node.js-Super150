//DOM(Document Object Model)
//tree of nodes/elements created by the browser
//javascript can be used to read/manipulate/write to the DOM
//Object oriented Representation

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all[5]);
// document.all[5]='hello world';
// document.all[5].textContent='hello world';
// console.log(document.all[12].innerText);


// let header=document.getElementById('main-header');
// header.style.backgroundColor='red';
// header.innerHTML='<h3>This is a h3 heading</h3>';
// console.log(header);

// //get element by class Name
// var items=document.getElementsByClassName("list-group-item");
// console.log(items);

// for(let i=0;i<items.length;i++){
//     //items[i].style.backgroundColor='lightgrey';
//     Object.assign(items[i].style,{
//         backgroundColor:'red',fontWeight:'bold'
//     })
// }

// //getElementByQuerySelectorAll
// var heading=document.querySelectorAll('.title');
// for(let i=0;i<heading.length;i++){
//     heading[i].style.backgroundColor='green';
// }

// //how to traverse in DOM
// var itemList=document.getElementById('items');
//parentNode;
// console.log(itemList.parenNode);
// itemList.parentNode.style.backgroundColor='lightgrey';
// //parentElement
// console.log(itemList.parentElement);
// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='yellow';
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// var button=document.querySelector('#btn');
// button.addEventListener('click',addEvent);
// function addEvent(e){
    // console.log('1');
    //  var mainTitle=document.getElementsById('main-title');
    //  mainTitle.style.innerText='changed';
//    console.log(e);
//    console.log(e.target);
//    console.log(e.clientX);
//    console.log(e.clientY);
   
// }
var button=document.querySelector('#btn');
var form=document.getElementById('addform');

form.addEventListener('submit',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('1')
}