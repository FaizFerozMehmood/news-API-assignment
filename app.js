const container = document.querySelector(".container")
const fetchData = async()=>{
    try{
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-10&sortBy=publishedAt&apiKey=78eeb81244cd4d79a1ab6bf2ed4d089f
`)
        const jsondata = await response.json();
        console.log(jsondata.articles
        );
        // for(let i = 0; i <jsondata.articles.articles;i++){
        //     console.log("hhh",jsondata.articles.articles);
        // }
            //urlToImage
            //description


        
    }catch(error){
        console.log("Error Fetching data ",error);
    }
   
}
fetchData()