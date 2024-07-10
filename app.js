
const fetchData = async()=>{
    try{
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-10&sortBy=publishedAt&apiKey=78eeb81244cd4d79a1ab6bf2ed4d089f
`)
        const jsondata = await response.json();
        console.log(jsondata
            
        );
        
    }catch(error){
        console.log("Error Fetching data ",error);
    }
   
}
fetchData()