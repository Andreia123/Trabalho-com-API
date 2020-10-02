//let fullName = document.querySelector(data);

async function fetchData(){
    let response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=92795957&s=Psicose');
    console.log(response);
    let data = await response.json();
    console.log(data);
   
    //fullName.textcontent = data.Search[0].Title; 
}

fetchData();
