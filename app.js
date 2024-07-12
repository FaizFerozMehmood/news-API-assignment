const container = document.querySelector(".container")
const userInput = document.getElementById('userInput')
const get_News = document.getElementById('get_News')
get_News.addEventListener('click',function(){
    const output = userInput.value;
   

const fetchData = async()=>{
    try{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${output}&from=2024-06-12&sortBy=publishedAt&apiKey=78eeb81244cd4d79a1ab6bf2ed4d089f

`)
        const jsondata = await response.json();
       
        for(let i = 0; i <jsondata.articles.length;i++){
            console.log(jsondata.articles[i]);
            container.innerHTML+=`
            <div id="cards" class="card" style="width: 18rem ;">
  <img src=${jsondata.articles[i].urlToImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">${jsondata.articles[i].title}.</p>
    <a href=${jsondata.articles[i].url} class="btn btn-primary">See more...</a>
  </div>
</div>
            `
        }
            //
            //description


        
    }catch(error){
        console.log("Error Fetching data ",error);
    }
   
}
fetchData()
})