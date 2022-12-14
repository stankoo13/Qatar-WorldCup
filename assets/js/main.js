window.onload = function(){
    console.log("radi");


//Dinimicki meni
    var nizNavigacija = [
        {naziv:"Home",
          href:"#home"},
        {
          naziv:"Cards",
          href:"#kartice"
        },
        {naziv:"About",
          href:"#about"},

        {naziv:"Contact",
          href:"#contact"},

        {naziv:"Author",
          href:"#author"},

        {naziv:"Documentation",
          href:"#"},
    ]

    var navStrana = document.getElementById("meni") ;
    console.log(navStrana);


    for(let meni of nizNavigacija){
        console.log(meni.naziv);
        navStrana.innerHTML +=`<li><a href="${meni.href}">${meni.naziv} </a></li>`
    }
  
//----------------------------------------------------------
 //upotreba jQueri-ja za slajder funkciju nad glavnim banerom 
//slajder
var mainBaner = document.getElementById("baner");

var brojac=1;

var slajder = setInterval(function(){

  const urlSlike = `assets/images/sl${brojac}.jpg`

  mainBaner.style.backgroundImage = `url(${urlSlike})`;

  brojac+=1;
  if(brojac==6){
    clearInterval(slajder);
  }

},4000)

//Kartice-------------------------------------
    var nizZanimljivosti =[
        {id:"1",
          naslov : "World Cup History",
          slika : "assets/images/football.png",
          tekst : `Due to the success of the Olympic football tournaments, FIFA, with President Jules Rimet as the driving force,
again started looking at staging its own international tournament outside of the Olympics. On 28 May 1928,
          the FIFA Congress in Amsterdam decided to stage a world championship itself. With Uruguay now two-time official
          football world champions and to celebrate their centenary of independence in 1930, FIFA named Uruguay as the host
          country of the inaugural World Cup tournament. The national associations of selected nations were invited to send
          a team, but the choice of Uruguay as a venue for the competition meant a long and costly trip across the Atlantic Ocean
          for European sides. As such, no European country pledged to send a team until two months before the start of the competition. 
          Rimet eventually persuaded teams from Belgium, France, Romania, and Yugoslavia to make the trip. In total, 13 nations took part: seven from South America, four from Europe, and two from North America.`}
,
        {id:"2",
          naslov : "FIFA World Ranking",
          slika : "assets/images/ranking.png",
          tekst : `FIFA rankings are a unique way to measure how national teams compare to each other and can prove important when it comes to tournaments like a World Cup.  
          Draws for such events are influenced by rankings, with the best teams separated from facing each other in the group stages. 
          This means nations with lower rankings are often drawn in tougher groups and have an even tougher task to win the overall tournament.
          FIFA rankings aren't perfect and have come in for criticism in recent years, but they do provide a solid and reliable overview of a side's general consistency and how they'll likely fair come World Cup time. 
          Brazil are the current world number one as they compete at the 2022 World Cup.
          The South American giants have held top spot since March 31 this year when they replaced Belgium, who themselves were top for nearly four years. 
          Ghana, meanwhile, arrived in Qatar as the lowest-ranked nation with the African side currently 61st. 
          Italy (6th) are the highest ranked side not to have qualified, and Saudi Arabia, in 51st, caused a sensational upset by beating third-ranked Argentina in their opening game.`},

        {id:"3",
        naslov : "World Cup 2022 - Groups",
          slika : "assets/images/workflow.png",
          tekst : `All 32 spaces were filled following a lengthy qualifying campaign. Qatar qualified automatically as hosts for what is their first World Cup appearance.
          Several high-ranking countries failed to make the cut, however, with Euro 2020 winners Italy not in attendance for the second World Cup running after losing to North Macedonia in the first stage of UEFA's play-offs. Chile and Colombia missed out from CONMEBOL.
          Canada are competing for the first time since 1986, while Iran might be the most surprising qualifier from the AFC sector.
          The 2022 World Cup will begin with 32 teams in eight groups of four:
                  Group A: Qatar, Ecuador, Senegal, Netherlands
                  Group B: England, Iran, USA, Wales
                  Group C: Argentina, Saudi Arabia, Mexico, Poland
                  Group D: France, Australia, Denmark, Tunisia
                  Group E: Spain, Costa Rica, Germany, Japan
                  Group F: Belgium, Canada, Morocco, Croatia
                  Group G: Brazil, Serbia, Switzerland, Cameroon
                  Group H: Portugal, Ghana, Uruguay, South Korea`
    },


        {id:"4",
          naslov : "Referees",
          slika : "assets/images/whistle.png",
          tekst : `On 19 May 2022, Fifa announced the list of 36 referees, 69 assistant referees and 24 VAR referees for the championship. Among the 36 chief referees, FIFA selected two each from Argentina, Brazil, England and France, while one referee was selected from the other countries.
          Among the 36 referees, three women were chosen: Stephanie Frapard from France, Salima Mukansanga from Rwanda and Yoshimi Yamashita from Japan, who became the first women to referee the men's World Cup. In addition to the main judges, three women were also elected as assistant judges.
          Frapar previously refereed the final of the 2019 Women's World Cup. Referee from Gambia — Bakari Gassama, as well as assistant referee from Argentina — Juan Pablo Belati, are officiating at the third World Cup; Belati was an assistant referee at the World Cup final in 2018.
          Other referees who are officiating at the World Cup for the second time are Cesar Arturo Ramos of Mexico, Gianni Sikazwe of Zambia, as well as Iranian assistant referee Mohamadreza Mansouri.
          Nestor Pitana, who refereed the final of the 2018 championship, is not on the list, nor are Felix Brych and Junaj Čakir, while Damir Skomina, Björn Capers and Milorad Mažić have finished their careers.
          Michael Oliver and Anthony Taylor were selected among the 36 referees, making England's referees return to the World Cup, after no England referee officiated at the 2018 World Cup, the first time English referees have not officiated at a World Cup since 1938.
          `},

        {id:"5",
          naslov : "The most expensive World Cup",
          slika : "assets/images/stadium.png",
          tekst : `The 2022 World Cup in Qatar, which kicked off November 20, is the most expensive World Cup ever, with costs reaching $220 billion. The expenses included new stadiums, but the majority of the money was spent on new infrastructure like hotels, airports, and a metro system. Tickets are also the highest price they’ve ever been: football fans paid an average of $340 per match, roughly 40% more than for the 2018 tournament.
          Host countries like Qatar, Russia, and Brazil hope to balance the cost with this investment in infrastructure, international exposure, and a boost in tourism. Qatar expects more than 1 million tourists to come for the event. But research shows that most mega-sporting events have a zero or negative effect on tourism.
          That cost-benefit analysis doesn’t include attracting international attention, but Qatar has drawn international criticism for the human cost of the tournament. Human rights organizations have accused Qatar of exploiting hundreds of thousands of Nepali migrant workers who built the stadiums. Amnesty International reports thousands of those workers died while working in high heat and dangerous conditions, though the exact count is unknown because officials attributed most deaths to “natural causes.”`},

        {id:"6",
          naslov : "General Sponsors",
          slika : "assets/images/deal.png",
          tekst : `In any tournament, Sponsors are very important as well as supporting the programs financially and it helps to promote the brand as well.
          Many companies are trying to come to the sponsor’s list. FIFA World Cup is one of the most effective international marketing platforms.  All top brands like Adidas, Coca-Cola, Hyundai, Wanda Group, and Qatar Airways become part of FIFA.
          Now the new partner for the 2022 FIFA World Cup is going to be Indian-based EdTech Company BYJU an Official Sponsor for the 2022 Qatar FIFA World Cup. And also, we can see on the official FIFA website that there are some sports brands, soft drinks, Airways, cars, movies, and other companies.
          The all-out speculation, all in all, expenses, planned for the 2022 FIFA World Cup Qatar is $1,696 million. A lessening contrast with the $1,824 million in costs caused for the 2018 FIFA World Cup Russia. The controversies, opportunities, and storylines to watch as the month-long soccer tourney nears with the top-notch brands.`}
    ]

    var mestoZan = document.getElementById("kartice") ;
    var mcont = document.getElementById("modalContent");
    var zanString = ''

    ispisiKartice()

    function ispisiKartice() {
      for (var zanimljivost of nizZanimljivosti){
        console.log(zanimljivost.naslov)
 
        zanString += `<div class="blok"> <h2> ${zanimljivost.naslov} </h2> 
        <img src="${zanimljivost.slika}"/>

        <button data-txt=${zanimljivost.tekst} data-id="${zanimljivost.id}" class="zanimljivostiVise"> Read more </button>
        
        </div>
        
        `

     }

      mestoZan.innerHTML = zanString
    }


    $('.zanimljivostiVise').click(function() {
       $('#modal').toggle(500)

      var idN = this.dataset.id
      var cont = document.getElementById("modalContent");
      console.log(idN);
     
      for(var niz of nizZanimljivosti){
        if(niz.id == idN){
          var txt = niz.tekst;
          $('#modalContent').text(txt)
        }
      }  
    })

    $('#modalClose').click(function() {
      $('#modal').toggle(500)
    })
  

}




//DUGME SA STRELICOM----------------------------
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



//brojac u ABOUT------------------------------
function timer (){
  const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
  let time = "December 31, 2022 20:32:00";
  let countDown = new Date(time).getTime(),
  x = setInterval(function () {

      let now = new Date().getTime(),
          distance = countDown - now;

          document.getElementById('days').innerText = Math.floor(distance / (day)) + ' days',
          document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)) + ' hours',
          document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)) + ' minutes',
          document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second) + ' seconds';

      if (distance <= 0) {

          document.getElementById('days').innerText = ('0 days');
          document.getElementById('hours').innerText = ('0 hours');
          document.getElementById('minutes').innerText = ('0 minutes');
          document.getElementById('seconds').innerText = ('0 seconds');

          
          document.getElementById("divTimerExpired").style.display = "block";

      }

  }, second)
}

timer();

//FORMA--------------------------------------



//HAMBURGER
$('.menu_btn').click(function() {
  $(this).toggleClass('open');
  $('#meni').toggleClass('active');
});

//---------------------------------------
//REGULARNI----------------------------------------
const btn = document.querySelector('#btn');        
const radioButtons = document.querySelectorAll('input[name="pol"]');
btn.addEventListener("click", () => {
    contact()
    let selectedPol;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedPol = radioButton.value;
            break;
        }
        else{
          
        }
    }
    radioGreska.innerText = selectedPol ? `` : `You haven't selected any taster`;
});

function contact(){
  var name = document.getElementById("name").value;
  var namePoruka = "";
  var nameGreska = false;

  var lastName = document.getElementById("lastname").value;
  var lastNamePoruka = "";
  var lastNameGreska = false;

  var email = document.getElementById("email").value;
  var emailPoruka = "";
  var emailGreska = false;

  var message = document.getElementById("Message").value;
  var messagePoruka = "";
  var messageGreska = false;

  var datum = document.getElementById("datum").value;
  var datePoruka = "";
  var datumGreska = false;

  if(datum == ""){
    datePoruka = "Morate izabrati datum";
  }
  else{
    datePoruka = "";
    dateGreska = true;
  }
  

  if(name == ""){
    namePoruka = "Name must not be an empty field";
  }
  else{
    regularni = /^[a-zA-Z]*$/;
    if(regularni.test(name)== false){
      namePoruka = "Name must not be a number or special character";
    }
    else{
      namePoruka = "";
      nameGreska = true;
    }
  }

  if(lastName == ""){
    lastNamePoruka = "Last name must not be an empty field";
  }
  else{
    regularni = /^[a-zA-Z]*$/;
    if(regularni.test(lastName)== false){
      lastNamePoruka = "Last name must not be a number or special character";
    }
    else{
      lastNamePoruka = "";
      lastNameGreska = true;
    }
  }
//-----
if(email == ""){
  emailPoruka = "Email is a required field.";
}
else{
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(regex.test(email) == false){
      emailPoruka = "Incorrect email format. Example: email@gmail.com";
  }
  else{
      emailPoruka = "";
      emailGreska = true;
  }
}
  //---
  if(message == ""){
    messagePoruka = "It is mandatory to fill in the message field.";
}
else{
    var regex = /^[a-zA-Z ]*$/;

    if(regex.test(message) == false){
        messagePoruka = "Numbers and special characters are not allowed";
    }
    else{
        messagePoruka = "";
        messageGreska = true;
    }
}



//---------------------------------------
  document.getElementById("nameGreska").innerHTML = namePoruka;
  document.getElementById("lastNameGreska").innerHTML = lastNamePoruka;
  document.getElementById("emailGreska").innerHTML = emailPoruka;
  document.getElementById("messageGreska").innerHTML = messagePoruka;
  document.getElementById("dateGreska").innerHTML = datePoruka;

}
