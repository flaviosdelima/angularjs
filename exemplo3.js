class Person{

name;

constructor(name){
  this.name = name;
 }
 
 getName(){
  return this.name;
 }
 
}
var pessoa = new Person("Flávio");
console.log(pessoa.getName());
