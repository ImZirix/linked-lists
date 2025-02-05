import { LinkedList, Node } from "./linkedList.js";

const list = new LinkedList();

list.append("Zirix");
list.append("Cartier");
list.append("Zipra");
list.append("Alina");
list.append("Yosimar");
list.append("Bakri");
list.append("Monster");
list.append("Cat");
list.append("Mario");
list.insertAt("Someone", 4);
let head = list.tail;
list.removeAt(4);
//console.log(head);
//console.log(list);
//list.pop();
// console.log(list.at(3));
// console.log(list.contains("Zipr"));
// console.log(list.find("Cartier"));
console.log(list.toString());
