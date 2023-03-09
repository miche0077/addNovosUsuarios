function addNomes() {

  let list = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
  let newList = list;

  var name = [].slice.call(arguments,0);
  

  for (let i=0; i < name.length; i++ ) {

      if(typeof name[i] !== "string") {
          console.log(`O ${name[i]} precisa ser uma String!`)
      } else if (list.find(n => n === name[i]) ) {
          console.log(`Este ${name[i]} já existe na lista!`)
      } else {
          newList.push(name[i])
      }

  }
   
console.log(newList);

}

addNomes("Michelle",1,"Danilo");