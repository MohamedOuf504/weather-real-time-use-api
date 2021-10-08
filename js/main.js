
let alldate ={};
let statusWeather ;
 let mainScreen = document.querySelector("#main-screen")
let currantlocation ="egypt"
 var searchInput =document.getElementById("search")

let boxcolorwidth;

boxcolorwidth= $(".box-color").outerWidth();



let maincard;
let secCard;
let trdCard;
let mainDetails;
let secDetails;
let trdDetails;

 searchInput.addEventListener("keyup",sendlocation)
 function sendlocation()
 {
    currantlocation = searchInput.value;
    getDate();

 }
async function getDate(){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=babf7ad86efb45b4a6f220236211109&q=${currantlocation}&days=3`)
    alldate=await response.json();
     getday()
    display()
    assign();

}
getDate();

function display (){

    var maindata =
    `
<div class="text-center  text-white p-3 ">

<h1>
${alldate.location.name} , ${alldate.location.country}
</h1>

</div>
<div class="row py-md-5">
<div class="col-md-4 p-3 main-card shadow-lg">
    <div class=" card-weather p-3">
    <div>
                                    <h4>
                                    ${ getday(alldate.forecast.forecastday[0].date)}
                                    </h4>
                                </div>
        <div class="">
            <img src="http:${alldate.current.condition.icon}" class="img-fluid" alt="">
        </div>
        <div class="">
            <h4 class="">
            ${alldate.current.condition.text}               
            </h4>
            <h1 class="p-3 ">
            ${alldate.current.temp_c}<sup>o</sup>C
            </h1>
        </div>
        <div class="py-4  details-main" id="main-details">
            <h4 class="p-1">Wind: ${alldate.current.wind_kph} kmph
            </h4>
            <h4 class="p-1">Precip:  ${alldate.current.precip_mm} mm

            </h4>
            <h4 class="p-1">Pressure: ${alldate.current.pressure_mb} mb

            </h4>
            
        </div>
    </div>
</div>
<div class="col-md-4 p-3  shadow-lg  "id="sec-card">
    <div class="card-weather p-5">
        <div>
            <h4>
            ${ getday(alldate.forecast.forecastday[1].date)}

            </h4>
        </div>
        <div class="">
            <img src="http:${alldate.forecast.forecastday[1].day.condition.icon}" class="img-fluid" alt="">
        </div>
        <div class="">
            <h4 class="">
            ${alldate.forecast.forecastday[1].day.condition.text}            </h4>
            <h4>
            ${alldate.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>C

            </h4>
        </div>
        <div class="py-4 d-none " id="sec-details">
        <h4 class="p-1">Wind: ${alldate.forecast.forecastday[1].day.maxwind_mph}   kmph
        </h4>
        <h4 class="p-1">Precip: ${alldate.forecast.forecastday[1].day.totalprecip_mm}mm

        
    </div>
    </div>
</div>
<div class="col-md-4 p-3 shadow-lg " id="trd-card">
    <div class=" card-weather p-5">
        <div>
            <h4>
            ${ getday(alldate.forecast.forecastday[2].date)}

            </h4>
        </div>
        <div class="">
            <img src="http:${alldate.forecast.forecastday[2].day.condition.icon}" class="img-fluid" alt="">
        </div>
        <div class="">
            <h4 class="">
            ${alldate.forecast.forecastday[2].day.condition.text}            </h4>
            <h4>
            ${alldate.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>C

            </h4>
        </div>
        <div class="py-4 " id="trd-details">
        <h4 class="p-1">Wind: ${alldate.forecast.forecastday[2].day.maxwind_mph}   kmph
        </h4>
        <h4 class="p-1">Precip: ${alldate.forecast.forecastday[2].day.totalprecip_mm}mm

       
    </div>
    </div>
</div>
</div>
    `
    mainScreen.innerHTML=maindata;

}

function getday(date){
 var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var d = new Date(date);
 var dayName = days[d.getDay()];
 return dayName
}
function assign()
{
   maincard =document.querySelector(".main-card")
   secCard= document.querySelector("#sec-card")
   trdCard= document.querySelector("#trd-card")
   mainDetails =document.querySelector("#main-details")
   secDetails= document.querySelector("#sec-details")
   trdDetails= document.querySelector("#trd-details")
   secCard.addEventListener("mouseenter",changeShow)
   secCard.addEventListener("mouseleave",changeShow2)
   trdCard.addEventListener("mouseenter",changeShow3)
   trdCard.addEventListener("mouseleave",changeShow4)
}

function changeShow()
{
    secDetails.classList.remove("d-none")
    mainDetails.classList.add("d-none")
}
function changeShow2()
{
    secDetails.classList.add("d-none")
    mainDetails.classList.remove("d-none")

}
function changeShow3()
{
    trdDetails.classList.remove("d-none")
    mainDetails.classList.add("d-none")
}
function changeShow4()
{
    trdDetails.classList.add("d-none")
    mainDetails.classList.remove("d-none")
}


(function()
{
    $("#colorContainer").css("left",`-${boxcolorwidth}px`)

})();
   
$(".fa-cog").click(()=>{
     if($("#colorContainer").css("left")== "0px")
     {
         $("#colorContainer").animate({"left":`-${boxcolorwidth}`},1000)
     }
     else{
        $("#colorContainer").animate({"left":`0px`},1000)
     }
})



 $(".color-item").click(function(e){
    let bgcolor=$(e.target).css("backgroundColor");
    $("h1,h2,h3,p,h4").css("color" , bgcolor   )
 })




$(window).scroll(()=>{

    let scrollval= $(window).scrollTop()
    console.log(scrollval)
    {
        if(scrollval>=100)
        {

            $(".navbar").removeClass("bg-dark")
            $(".navbar").addClass("bg-info")

        }
        else
        {
            $(".navbar").addClass("bg-dark")
            $(".navbar").removeClass("bg-info")

            
        }

    }




})