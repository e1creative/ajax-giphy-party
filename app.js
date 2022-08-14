console.log("Let's get this party started!");

const searchForm = document.getElementById("search-form");
const searchTermInput = document.getElementById("search-term")
const removeButton = document.getElementById("remove-button")

const gifGrid = document.getElementById("images")

searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let searchTerm = searchTermInput.value
    async function getData() {
        const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    
        const gifCount = response.data.data.length
        let randomNumber = Math.floor(Math.random() * gifCount);

        let newImg = document.createElement("img")
        newImg.setAttribute("src", response.data.data[randomNumber].images.original.url)
            
        gifGrid.appendChild(newImg)
    }
    getData();
    searchTermInput.value = ""
})

removeButton.addEventListener("click", function(){
    gifGrid.innerHTML = ""
})
