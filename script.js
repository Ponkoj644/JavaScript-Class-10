// querySelector // Return a single element

// Example 1 : Select Tag
const tag1 = document.querySelector("h1");
console.log(tag1);

// Example 2 : Select Class
const class1 = document.querySelector(".class1");
console.log(class1);

// Example 1 : Select Id
const id1 = document.querySelector("#id1");
console.log(id1);

// querySelectorAll // Return Nodelist(Array like object) element
const tag2 = document.querySelectorAll("h1");
console.log(tag2); //Provide a NodeList(Array like object)

const class2 = document.querySelectorAll(".class1");
console.log(class2); //Provide a NodeList(Array like object)

const id2 = document.querySelectorAll("#id1");
console.log(id2); //Provide a NodeList(Array like object)

const tag3 = document.getElementsByTagName("h1");
console.log(tag3); //Provide a HTMLCollection(Array like object)

const class3 = document.getElementsByClassName("class1");
console.log(class3);

//childNodes//
const id3 = document.getElementById("id1");
console.log(id3);
console.log(id3.childNodes);

// children // DOM element children
const id4 = document.getElementById("list-id"); // First select the parent id
console.log(id4);
console.log(id4.children); // Second - to see the children. it return - HTMLCollection(4) [li, li, li, li]

// creatElement // Use to creat a new element ***
// const newList = document.createElement("li");
// newList.innerHTML = "List 5";
// console.log(newList.innerHTML);

// appendChild // Use to insert/inject a new element into an object

//Example 1
const newList = document.createElement("li"); // First : make the new element/child element.
newList.innerHTML = "List 5";
console.log(newList.innerText);

const listId = document.getElementById("list-id"); // Second: select the parent like "list-id"
console.log(listId);

listId.appendChild(newList); // Third : inject the child element into parent. At first select parrent id (listId), then method (.appendChild), then new item (newList).

//Example 2
const divText = document.getElementById("div-text");
const newHeading = document.createElement("h2");
newHeading.innerText = "This is Heading 2";
divText.appendChild(newHeading);

// removeChild // Use to remove an element child.
const id5 = document.getElementById("list-id"); // 1st: select the parent (list-id)
// console.log(id5);

const list1 = id5.children[2]; // 2nd: Sellect the child by the index [2] which will be delete
// console.log(list1.innerText);
id5.removeChild(list1);

// replaceChild // Use to replace a child element
const id6 = document.getElementById("list-id"); // 1st: Selece the parent.
const list2 = listId.children[1]; // 2nd: Sellect the child
// console.log(list2.innerText);

const newlist1 = document.createElement("li"); // 3rd: Create a new element
newlist1.innerText = "New list";
// console.log(newlist1.innerText);
id6.replaceChild(newlist1, list2); // Replace the child element.

// title proprety//
console.log(document.title); // to see our title.
document.title = "New JavaScript title"; // To change our title

// body //
// console.log(document.body); //To select our body
// document.body.innerHTML = "<h1> This is only JavaScript heading...</h1>";

// innerHTML // we use tag into innerTHML
const id7 = document.getElementById("id1");
id7.innerHTML = "<p> This is a example of innerHTML</p>"; //return "This is a example of innerHTML".

// innerText // it read tag as Test
const id8 = document.getElementById("id2");
id8.innerText = "<p>This is a example of innerText</p>"; // Return: <p>This is a example of innerText</p>

// Home Task //

const homeTask = document.getElementById("home-task");
const heading1 = document.createElement("h1");
heading1.innerText = "This is heading 1";
homeTask.appendChild(heading1);

const homeTask2 = document.getElementById("home-task");
const heading2 = document.createElement("h2");
heading2.innerText = "This is heading 2";
homeTask.appendChild(heading2);

const homeTask3 = document.getElementById("home-task");
const heading3 = document.createElement("h3");
heading3.innerText = " This is heading 3";
homeTask3.appendChild(heading3);

const homeTask4 = document.getElementById("home-task");
const heading4 = document.createElement("h4");
heading4.innerText = "This is heading 4";
homeTask4.appendChild(heading4);

const homeTask5 = document.getElementById("home-task");
const heading5 = document.createElement("h5");
heading5.innerText = "This is heading 5";
homeTask5.appendChild(heading5);

const homeTask6 = document.getElementById("home-task");
const heading6 = document.createElement("h6");
heading6.innerText = "This is heading 6";
homeTask6.appendChild(heading6);

// Paragraph div
// const paragraphTag = document.getElementById("home-task");
// const ptag = document.createElement("p");
// ptag.innerText = "This is a Paragaraph Tag";
// paragraphTag.appendChild(ptag);

// 2nd try
const paragraphTag = document.getElementById("paragraph");
const ptag = document.createElement("p");
ptag.innerText = "This is a Paragaraph Tag";
paragraphTag.appendChild(ptag);
