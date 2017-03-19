const app = "I don't do much."
function Sandwich(bread, ingredients, name){
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}

function serve(){
  if(arguments.length > 0){
    var customer = Array.prototype.slice.call(arguments);
    last = customer.pop;
    console.log(this.name + " for " + customer.join(", ") + " and" + last + ". Enjoy!");
  }else {
      console.log(this.name + ". Order up!");
  }
}

let pbj = new Sandwich("white", ["peanut-butter", "jelly"], "Peanut Butter and Jelly");
