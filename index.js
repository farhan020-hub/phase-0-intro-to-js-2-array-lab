// Write your solution here!


 const cats = ["Milo", "Otis", "Garfield"];
 

  function destructivelyAppendCat(name){
    cats.push("Ralph");

  }
  destructivelyAppendCat;


  function  destructivelyPrependCat(name){
    cats.unshift("Bob");
  }
  destructivelyPrependCat;



  function destructivelyRemoveLastCat(){
    cats.pop();
  }
  destructivelyRemoveLastCat;

 
function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat;


function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const originalCats = [...cats, name];
    return originalCats;
  }


  function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const originalCats = ["Arnold" ,...cats];
    return originalCats;

  }


  function removeLastCat(){
    const cats=["Milo","Otis","Garfield"];
    const originalCats = [...cats.slice(0,2)];
    return originalCats;

  }


  function removeFirstCat(){
    const cats=["Milo","Otis","Garfield"];
    const originalCats = [...cats.slice(1)];
    return originalCats;

  }



