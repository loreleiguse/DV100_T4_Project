$(document).ready(function(){

    getApiData();
    getApiHeaderData();
    //yearSortLastFive();
    
    
    

    
    

})

function getApiHeaderData(){

    userSavedId = ["tt0499549","tt1825683","tt1211837","tt0800369","tt3895150","tt2245084","tt7078180","tt1772341","tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"]
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
                    
            
            console.log(response);
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
                    <button type="button" class="btn btn-primary btnWatchL">Watch Now</button>
                    <button type="button" class="btn btn-primary btnAddtWL">Add to Watchlist</button>
                    <button type="button" class="btn btn-primary btnBookmarkL"></button>
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

function getApiData(){

    userSavedId = ["tt0499549","tt1825683","tt1211837","tt0800369","tt3895150","tt2245084","tt7078180","tt1772341","tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"]//userSavedId.length ,"tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"


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
  
            
            console.log(response);
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
getYearList = ["tt0499549","tt1825683","tt1211837","tt0800369","tt3895150","tt2245084","tt7078180","tt1772341","tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"]//

function yearSortLastFive(){
    sortYear = [2010,2015,2022];
    releaseYear = []
    for(let i = 0; i < getYearList.length; i++){
    apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${getYearList[i]}`
    
    releaseYearMoreFive = []
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
    
        // console.log(response);
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

    if(dataAr[4] == sortYear[0]){
        cardContainerId.empty();
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
    }
          
    })
  
}






function cardGet(){
    console.log(releaseYear.length)
for(let a = 0; a < releaseYear.length; a++){
  
      
    apiUrlF = `https://moviesdatabase.p.rapidapi.com/titles/${releaseYear[a]}`
    

    const settingsOne = {
        async: true,
        crossDomain: true,
        url: apiUrlF,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '212e6fe1bemsh379babdfd35761ap17f717jsna33b04c724a5',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    
    $.ajax(settingsOne).done(function (response) {

        // console.log(response);
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
        cardContainerId.empty();

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

 


}
// function rating(){

//     getRatingList = ["tt0499549","tt1825683","tt1211837","tt0800369","tt3895150","tt2245084","tt7078180","tt1772341","tt4975722","tt15398776","tt9362722","tt0816692","tt0468569","tt0993846","tt4154796","tt0944947","tt0068646","tt4574334"]
//     ratingSortAr = [];
//     aboveEightRating = [];
//     belowEightRating = [];


    // for(let b = 0; b < getRatingList.length; b++){
    //     const settings = {
    //         async: true,
    //         crossDomain: true,
    //         url: `https://moviesdatabase.p.rapidapi.com/titles/${getRatingList[b]}/ratings`,
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '7f077e9ed9msh1e0c21025299eaap11a459jsn457e98831728',
    //             'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //         }
    //     };
        
    //     $.ajax(settings).done(function (response) {

    //     const ratingAr = [response.results.averageRating, 
    //                         response.results.tconst];

    //     // ratingSortAr.push(ratingAr[0])
    //     // console.log(ratingSortAr)



    //     if(ratingAr[0] >=8){//Above 8
    //         //console.log(ratingAr);
    //         aboveEightRating.push(ratingAr[1])           
    //     }

    //     });
        
            
        
        

    //     function eightScore(){
    //         for(let c = 0; c < aboveEightRating.length; c++){
    //                 apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${aboveEightRating[c]}`
            
        
    //         const settingsOne = {
    //             async: true,
    //             crossDomain: true,
    //             url: apiUrl,
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': 'c8bef0d4c3msh3b946805a8dbf8bp1224a7jsn11220334bd98',
    //                 'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //             }
    //         };
            
    //         $.ajax(settingsOne).done(function (response) {
        
    //             // console.log(response);
    //             const dataAr = [response.results.id, 
    //                             response.results.originalTitleText.text, 
    //                             response.results.primaryImage.url, 
    //                             response.results.primaryImage.caption.plainText, 
    //                             response.results.releaseDate.year
    //                             ];
    //             const movieMapping = dataAr.map(movieMap =>({
    //                 id: dataAr[0],
    //                 title: dataAr[1],
    //                 image: dataAr[2],
    //                 caption: dataAr[3],
    //                 releaseDate: dataAr[4]
    //             }))
        
    //             const cardContainerId = $('#storedTitleCards');
    //             // cardContainerId.empty();
        
    //             const card = $(`
    //             <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    //                 <div class="card JcardIn" style="width: 18rem;">
    //                         <img src="${dataAr[2]}" class="card-img-top JcardImgTop" alt="...">
    //                         <div class="card-body">
    //                         <h5 class="card-title JcardTH">${dataAr[1]}</h5>
    //                         <p class="card-text JcardT">${dataAr[3]}</p>
    //                         <a href="#" class="btn btn-primary btnWatchL">Add to Watchlist</a>
    //                     </div>
    //                 </div>
    //             </div>`)
        
        
        
    //             cardContainerId.append(card);
           
    //     })
    //     }
    // }

// }

   
    

    // }       
//     function eightScore(){
//         for(let c = 0; c < aboveEightRating.length; c++){
//                 apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/${aboveEightRating[c]}`
        
    
//         const settingsOne = {
//             async: true,
//             crossDomain: true,
//             url: apiUrl,
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '7f077e9ed9msh1e0c21025299eaap11a459jsn457e98831728',
//                 'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//             }
//         };
        
//         $.ajax(settingsOne).done(function (response) {
    
//             // console.log(response);
//             const dataAr = [response.results.id, 
//                             response.results.originalTitleText.text, 
//                             response.results.primaryImage.url, 
//                             response.results.primaryImage.caption.plainText, 
//                             response.results.releaseDate.year
//                             ];
//             const movieMapping = dataAr.map(movieMap =>({
//                 id: dataAr[0],
//                 title: dataAr[1],
//                 image: dataAr[2],
//                 caption: dataAr[3],
//                 releaseDate: dataAr[4]
//             }))
    
//             const cardContainerId = $('#storedTitleCards');
//             // cardContainerId.empty();
    
//             const card = $(`
//             <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
//                 <div class="card JcardIn" style="width: 18rem;">
//                         <img src="${dataAr[2]}" class="card-img-top JcardImgTop" alt="...">
//                         <div class="card-body">
//                         <h5 class="card-title JcardTH">${dataAr[1]}</h5>
//                         <p class="card-text JcardT">${dataAr[3]}</p>
//                         <a href="#" class="btn btn-primary btnWatchL">Add to Watchlist</a>
//                     </div>
//                 </div>
//             </div>`)
    
    
    
//             cardContainerId.append(card);
       
//     })
//     }
// }                      








function emptyCard(){
    const cardContainerId = $('#storedTitleCards');
    cardContainerId.empty()
    
}












//second API


// function getApiDataB(){
//     const libraryData = ["tt0944947","tt0944947"]
//     for (let i = 0; i < libraryData.length; i++) {
        
      
//     const tvMazeAPI = `https://api.tvmaze.com/lookup/shows?imdb=${libraryData[i]}` //the IMDB code we can replace with the saved data

//     $.ajax({
//         url: tvMazeAPI,
//         method: 'GET',
//         dataType: 'json',
//         success: function(data){

//             const dataAr = [data.name, data.externals.imdb, data.image.medium,data.summary]
//             const movieMapping = dataAr.map(movieMap =>({
//                 name: dataAr[0],
//                 id: dataAr[1],
//                 image: dataAr[2],
//                 about: dataAr[3]

//             }))
            
            
//             const cardContainerId = $('#storedTitleCards');
            
    
            
                
//                 const card = $(`
//                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
//                     <div class="card JcardIn" style="width: 18rem;">
//                             <img src="${dataAr[2]}" class="card-img-top JcardImgTop" alt="...">
//                             <div class="card-body">
//                             <h5 class="card-title JcardTH">${dataAr[0]}</h5>
//                             <p class="card-text JcardT">${dataAr[3]}</p>
//                             <a href="#" class="btn btn-primary btnWatchL">Add to Watchlist</a>
//                         </div>
//                     </div>
//                 </div>`)
    
//                 cardContainerId.append(card);
    
            



//             console.log(movieMapping); 
//             displayShowCards(movieMapping);
//         },
//         error: function(error){
//             // Handle Error
//         }
//     })
// }
// }

    


   

