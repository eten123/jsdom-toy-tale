let addToy = false;

const newToyForm = document.querySelector('form.add-toy-form')  //we put form before (add-toy-form ) because we want to specify its a form and also we use the . to specify that it is a class
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
 
});

function renderAllToys() {
  fetch('http://localhost:3000/toys') //by default fetch uses get method so need for second object indicating type of method
  .then(response => { //the .then knows when the fetch get request is complete and server responds, telling us then to invoke the callback function
      return response.json() //converts the data that we get from the response into javascript which our computer can use
      return response.json()
    }) 
  .then(toyArr => {
    toyArr.forEach(toy => {
          //combo appraoch- fast but some safety concerns
      // to do this we found the outermost element and added attributes the outermost needs
      //and we added html and basically whatever else we needed
    })
}

      


    div.innerHTML =  
      <h2>${toy.name}</h2>
     // <p>${toy.likes} Likes </p>
     // <button class="like-btn">Like <3</button>
  
  

      
      
      


      const toyCollectionDiv = document.querySelector('div#toy-collection')
      toyCollectionDiv.append(div) // we append or add the div tag which is a containter with properties to the toy Collection Div to display them on Dom
      console.log(toyCollectionDiv) //basically adding each card to a bigger container called Toy Collection Div
    })
  })
  

  newToyForm.addEventListener('submit', e => { //the event listener function takes two values, the event which in this case is submit and the e which is the object which is a call back function that we want to perform after the submit occurs
    e.preventDefault()
    console.log

    const nameInput = e.target.name.value //grabs the user input from the first input field which in this case the name of input field is name on the website fomr
    const imageInput = e.target.image.value //grabs the image input from the second input field. The name of the second input field is image so thats how i know which is which and this doesn't have to be second it just happens to be on our form

    //const imageInput = e.target[0].value //this is another way to grab the input value by grabbing in this case the value from the first object in the array of input fields on the form. In this case we are grabbing the first position but I would grab whichever field I wanted
    //const imageInput = querySelector('input[name="name"]').value //another way to grab input if we were really unclear about what we were grabbing and we got confused while coding/keeping track of data and wanted to super clearly specify the thing we are grabbing

    const configObject = { //creating a new toy so use post request
      method: 'POST'
      headers: { //the header is an object, so we need brackets
          'Content-Type': 'application/json' //must be in quotes since has dashes. we need content type to tell data the type of data we are sending it. In this case we are sending it json
          Accept: 'application/json'
      }
      body: JSON.stringify({name: nameInput, image: imageInput, likes: 0}){ //we tell computer which values we want to store in this post request. We are basically sending the data in the brackets as an object and also converting it to JSON so javascript in the computer can interact with this data
      }
    
    function renderOneToy(toy) { //creating function to create a new toy 
      const div = document.createElement('div')
      div.classList.add('card')
      div.dataset.id = toy.id

      div.innerHTML = 
      class="card">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>4 Likes </p>
      <button class="like-btn">Like <3</button>
  
    const toyCollectionDiv = document.querySelector('div#toy-collection')
    toyCollectionDiv.append(div)
    }
    fetch('http://localhost:3000/toys', configObject)
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(toyArr => toyArr.forEach(renderOneToy)) //we create a new toy after the toy is submitted)
    }
  })

const toyCollectionDiv = document.querySelector('div#toy-collection') //global variable to always have access to the toy collection
toyCollectionDiv.addEventListener('click', e => { //this function is responsible for adding likes
  console.log
  if (e.target.classList.contains('like-btn')) {
    const pLikesDisplay = e.target.previousElementSibling
    const oldLikes = parseInt(pLikesDisplay.textContent)
    const newLikes = oldLikes + 1
    const configObject = {
      method: "PATCH"
      headers: {
        'Content-Type': 'application/json'
      }
      body: JSON.stringify({likes:})
    }
    fetch(`http://localhost:3000/toys/${e.target.dataset.id}`, configObject)
      .then(response => response.json())
      .then(data => { //data is variable holding objects with likes key
        console.log(data)
        pLikesDisplay.textContent = ${data.likes} Likes
      })
  }
})


renderAllToys()