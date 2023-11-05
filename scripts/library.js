$(document).ready(function(){
    getApiData();
    getApiHeaderData();
    //yearSortLastFive();
})


//gets api data for the header Image and data
function getApiHeaderData(){

    userSavedId = ["tt0910970","tt2948356","tt0499549","tt1825683","tt1211837","tt0800369","tt3895150","tt2245084","tt7078180","tt1772341","tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"]
    const  headerRand = Math.floor(Math.random() * userSavedId.length)



    apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${userSavedId[headerRand]}`
    


        const settings = {
            async: true,
            crossDomain: true,
            url: apiUrl,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '212e6fe1bemsh379babdfd35761ap17f717jsna33b04c724a5',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        
        $.ajax(settings).done(function (response) {

                    
            
            
            const dataAr = [response.results.id, 
                            response.results.originalTitleText.text, 
                            response.results.primaryImage.url, 
                            response.results.primaryImage.caption.plainText, 
                            response.results.releaseDate.year,
                            ];
            const movieMapping = dataAr.map(movieMap =>({
                id: dataAr[0],
                title: dataAr[1],
                image: dataAr[2],
                caption: dataAr[3],
                releaseDate: dataAr[4]
            }))
        
            const headerContainerId = $('#headerContainer');
            const headerImageId = $('#headerImageId')
            headerContainerId.empty();
            
        
            const headerImage = $(`
            <div class="Jhead"id="headerContainer" style="background-image: url();">
                    <h1 class="LheadT">${dataAr[1]}</h1>
                    <h6 class="LparT">${dataAr[3]}</h6>
                    <button type="button" class="btn btn-primary btnWatchL" onclick = "headerLocalStorageSingle();"><a href="../pages/individual.html">Watch Now</a></button>
                    <button type="button" class="btn btn-primary btnAddtWL"   onclick = "headerLocalStorageWatch();">Add to Watchlist</button>
                    
            </div>`
        
            )
            const headerImageFinal = $(`
        <style id="headerImageId">
            .Jbody{
                background-image: url('${dataAr[2]}');
                background-blend-mode: overlay;
            }
        </style>`)
            headerContainerId.append(headerImage);
            headerImageId.append(headerImageFinal);
            
        })

}
function headerLocalStorageSingle(dataAr){
    showIdWatch = dataAr[0];
    showIdSingle = dataAr[0];
    localStorage.setItem(showIdWatch,dataAr[0])
}
function headerLocalStorageWatch(headerRand){
    showIdWatch = userSavedId[headerRand];
    localStorage.setItem(showIdWatch,headerRand)
}

// function headerLocalStorage(headerRand){
//     userSavedId = ["tt0910970","tt2948356","tt0499549","tt1825683","tt1211837","tt0800369","tt3895150","tt2245084","tt7078180","tt1772341","tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"]
//     showIdWatch = userSavedId[headerRand];
//     showIdSingle = userSavedId[headerRand];

//     localStorage.setItem(showIdWatch)
// }


//gets data for all 20 cards
function getApiData(){

    userSavedId = ["tt0910970","tt2948356","tt0499549","tt1825683","tt1211837","tt0800369","tt3895150","tt2245084","tt7078180","tt1772341","tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"]//userSavedId.length ,"tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"


    for(let i = 0; i < userSavedId.length; i++){
        apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${userSavedId[i]}`

        const settings = {
            async: true,
            crossDomain: true,
            url: apiUrl,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '212e6fe1bemsh379babdfd35761ap17f717jsna33b04c724a5',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        
        $.ajax(settings).done(function (response) {
  
            
            
            const dataAr = [response.results.id, 
                            response.results.originalTitleText.text, 
                            response.results.primaryImage.url, 
                            response.results.primaryImage.caption.plainText, 
                            response.results.releaseDate.year,
                            ];
            const movieMapping = dataAr.map(movieMap =>({
                id: dataAr[0],
                title: dataAr[1],
                image: dataAr[2],
                caption: dataAr[3],
                releaseDate: dataAr[4]
            }))
            const cardContainerId = $('#storedTitleCards');
              
            const card = $(`
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card JcardIn" style="width: 18rem;">
                        <img src="${dataAr[2]}" class="card-img-top JcardImgTop" alt="...">
                        <div class="card-body">
                        <h5 class="card-title JcardTH">${dataAr[1]}</h5>
                        <p class="card-text JcardT">${dataAr[3]}</p>
                        <a href="#" class="btn btn-primary btnWatchL">Add to Watchlist</a>
                    </div>
                </div>
            </div>`)
        


            cardContainerId.append(card);
            
        });
        

    }

   
}
//
//gets data for the shows that released after 2014
function yearSortLastFive(){
    getYearList = ["tt2948356","tt1211837","tt1825683","tt7078180","tt4574334","tt4975722","tt15398776","tt9362722","tt4154796"]
    releaseYears = [];
    

    for(let i = 0; i < getYearList.length; i++){
       
        apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${getYearList[i]}`

    
    const settings = {
        async: true,
        crossDomain: true,
        url: apiUrl,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '212e6fe1bemsh379babdfd35761ap17f717jsna33b04c724a5',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
    
        const dataAr = [response.results.id, 
                        response.results.originalTitleText.text, 
                        response.results.primaryImage.url, 
                        response.results.primaryImage.caption.plainText, 
                        response.results.releaseYear.year];
        const movieMapping = dataAr.map(movieMap =>({
            id: dataAr[0],
            title: dataAr[1],
            image: dataAr[2],
            caption: dataAr[3],
            releaseDate: dataAr[4]
        }))




    
    const cardContainerId = $('#storedTitleCards');
    
    

    const card = $(`
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card JcardIn" style="width: 18rem;">
                <img src="${dataAr[2]}" class="card-img-top JcardImgTop" alt="...">
                <div class="card-body">
                <h5 class="card-title JcardTH">${dataAr[1]}</h5>
                <p class="card-text JcardT">${dataAr[3]}</p>
                <a href="#" class="btn btn-primary btnWatchL">Add to Watchlist</a>
            </div>
        </div>
    </div>`)



    cardContainerId.append(card);
          
     })
  
}


}

//gets data to display only shows with the animation genre.
function animation(){
    getYearList = ["tt2948356","tt0910970","tt2245084","tt3895150","tt7078180","tt1772341","tt9362722"]
    releaseYears = [];
    

    for(let i = 0; i < getYearList.length; i++){
       
        apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${getYearList[i]}`

    
    const settings = {
        async: true,
        crossDomain: true,
        url: apiUrl,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '212e6fe1bemsh379babdfd35761ap17f717jsna33b04c724a5',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
    

        const dataAr = [response.results.id, 
                        response.results.originalTitleText.text, 
                        response.results.primaryImage.url, 
                        response.results.primaryImage.caption.plainText, 
                        response.results.releaseYear.year];
        const movieMapping = dataAr.map(movieMap =>({
            id: dataAr[0],
            title: dataAr[1],
            image: dataAr[2],
            caption: dataAr[3],
            releaseDate: dataAr[4]
        }))




    
    const cardContainerId = $('#storedTitleCards');
    
    

    const card = $(`
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card JcardIn" style="width: 18rem;">
                <img src="${dataAr[2]}" class="card-img-top JcardImgTop" alt="...">
                <div class="card-body">
                <h5 class="card-title JcardTH">${dataAr[1]}</h5>
                <p class="card-text JcardT">${dataAr[3]}</p>
                <a href="#" class="btn btn-primary btnWatchL">Add to Watchlist</a>
            </div>
        </div>
    </div>`)



    cardContainerId.append(card);
          
     })
  
}


}
function emptyCard(){
    const cardContainerId = $('#storedTitleCards');
    cardContainerId.empty()
    
}
    


   

