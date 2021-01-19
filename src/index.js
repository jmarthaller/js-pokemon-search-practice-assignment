document.addEventListener('DOMContentLoaded', () => {
  //console.log(POKEMON)
  //YOUR CODE HERE



//   function fetchKantoPokemon() {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//      .then(response => response.json())
//      .then(function(allpokemon){
//      allpokemon.results.forEach(function(pokemon){
//        fetchPokemonData(pokemon); 
//      })
//     })
//    }

//    fetchKantoPokemon()

//    function fetchPokemonData(pokemon){
//     let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
//       fetch(url)
//       .then(response => response.json())
//       .then(function(pokeData){
//       renderPokemon(pokeData)
//       })
//     }




// //const pokemonContainer = document.querySelector('#pokemon-container')



// // function renderAllPokemon(allPokemon) {
// //   debugger
// //   allPokemon.forEach(pokemon => {
// //       pokemonContainer.innerHTML += `
// //           <div class="pokemon-card">
// //             <div class="pokemon-frame">
// //               <h1 class="center-text">${pokemon.name}</h1>
// //               <div class="pokemon-image">
// //                 <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
// //               </div>
// //             </div>
// //           </div>

// //       `
// //   });
// // }


// function renderPokemon(pokeData){
//   let allPokemonContainer = document.getElementById('poke-container');
//   let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
//   let pokeName = document.createElement('h4')
//   pokeName.innerText = pokeData.name
//   let pokeNumber = document.createElement('p')
//   pokeNumber.innerText = `#${pokeData.id}`
//   let pokeTypes = document.createElement('ul') 
//   //ul list will hold the pokemon types
//   createTypes(pokeData.types, pokeTypes) 
//   // helper function to go through the types array and create li tags for each one
//   pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
//   //appending all details to the pokeContainer div
//   allPokemonContainer.appendChild(pokeContainer);       
//   //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
//   }


//   function createTypes(types, ul){
//     types.forEach(function(type){
//     let typeLi = document.createElement('li');
//     typeLi.innerText = type['type']['name'];
//     ul.append(typeLi)
//     })
//   }

fetchKantoPokemon()

function fetchKantoPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
   .then(response => response.json())
   .then(function(allpokemon){
   allpokemon.results.forEach(function(pokemon){
     fetchPokemonData(pokemon); 
   })
  })
 }


 function fetchPokemonData(pokemon){
  let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
    renderPokemon(pokeData)
    })
  }

  function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('pokemon-container');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('pokemon-card')

    let innerPokeDiv = document.createElement('div')
    innerPokeDiv.classList.add('pokemon-frame')

    let pokeName = document.createElement('h1')
    pokeName.innerText = pokeData.name
    pokeName.classList.add('center-text')

    let pokeImgDiv = document.createElement('div')
    pokeImgDiv.classList.add('pokemon-image')
    
    let pokeImg = document.createElement('img')
    pokeImg.src = pokeData.sprites.front_default
    pokeImg.classList.add('toggle-sprite')
    pokeImg.dataset.id = pokeData.id
    pokeImg.dataset.action = "flip"


    pokeContainer.append(innerPokeDiv, pokeName, pokeImgDiv, pokeImg);   

    allPokemonContainer.appendChild(pokeContainer);       

    }

let pokeForm = document.querySelector('#pokemon-search-form')

pokeForm.addEventListener('keydown', someFunction)


function someFunction(e) {
  //console.log(e.key)
}



})