window.addEventListener('scroll', function() {

    let header = document.querySelector(".header");
    let headerMenuLink = document.querySelectorAll(".header-menu-link");
    let scrollPosition = window.scrollY;
    let underline = document.querySelectorAll(".underline")
    let logoimg = document.querySelector(".header-menu-logoimg");
    let review_item = document.querySelectorAll(".real-review-item")
    let fontcolor = document.querySelector(".left-slide-top");
    let button = document.querySelector(".left-slide-top > i");
    let slideMenu = document.querySelector(".left-slide-menu");
    let slideLogo = document.querySelector(".left-slide-logoimg");


    console.log(scrollPosition)
    if (scrollPosition != 0) {
      header.style.backgroundColor = 'white'; // 스크롤 위치가 200 이상일 때 헤더 색을 빨간색으로 변경
      header.style.borderBottom = '1px solid rgba(4,4,4,0.1) ';
      logoimg.style.filter = "none"
      fontcolor.style.color = "#333";
      
    slideLogo.style.filter = "none"
      for(let i =0; i < headerMenuLink.length; i++){
        headerMenuLink[i].style.color = "#333";
        underline[i].style.backgroundColor = "#333";
      }

     

    } else {
      header.style.backgroundColor = 'transparent'; // 스크롤 위치가 200 미만일 때 투명한 배경색으로 변경
      header.style.borderBottom = '1px solid rgba(255,255,255,0.3)';
      logoimg.style.filter = "brightness(0) invert()"
      fontcolor.style.color = "white";
      for(let i =0; i < headerMenuLink.length; i++){
        headerMenuLink[i].style.color = "white";
        underline[i].style.backgroundColor = "white";
      }

      slideLogo.style.filter = "brightness(0) invert()"
     

      
   
    }
  });
  
function openSlideMenu(x){

  let header = document.querySelector(".header");
  let fontcolor = document.querySelector(".left-slide-top");
  let button = document.querySelector(".left-slide-top > i");
  let slideMenu = document.querySelector(".left-slide-menu");
  let slideLogo = document.querySelector(".left-slide-logoimg");

  if(x == 1){
    header.style.backgroundColor = 'white'; // 스크롤 위치가 200 이상일 때 헤더 색을 빨간색으로 변경
    header.style.borderBottom = '1px solid rgba(4,4,4,0.1) ';
    slideMenu.style.transform = "translateX(0%)";
    button.setAttribute("onclick", "openSlideMenu(0)");
    fontcolor.style.color = "#333";
    slideLogo.style.filter = "none"
  }else{
    header.style.backgroundColor = 'transparent'; // 스크롤 위치가 200 미만일 때 투명한 배경색으로 변경
    header.style.borderBottom = '1px solid rgba(255,255,255,0.3)';
    slideMenu.style.transform = "translateX(100%)";
    button.setAttribute("onclick", "openSlideMenu(1)");
    fontcolor.style.color = "white";
    slideLogo.style.filter = "brightness(0) invert()"
  }
}








function openMyAcc(x){
  let bodyNum = x;
  let serv_body = document.querySelectorAll(".serv-eigth-accBox-body");
  let buttonList = document.querySelectorAll(".openButton");
  console.log(x)
  for(let i = 0; i < 5; i ++){
    serv_body[i].classList.remove("serv-eigth-accBox-body-open");
    buttonList[i].classList.remove("openButton-opened")
  }
  serv_body[bodyNum-1].classList.add("serv-eigth-accBox-body-open")
  buttonList[bodyNum-1].classList.add("openButton-opened")
}

function scrollDown(){
  const currentScrollY = window.scrollY;

  // 100vh만큼 아래로 스크롤합니다.
  window.scrollTo({
    top: currentScrollY + window.innerHeight, // 100vh만큼 아래로 이동
    behavior: 'smooth' // 부드럽게 스크롤링됩니다.
  });
}


window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


function reveal() {
  var reveals = document.querySelectorAll(".real-review-item");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

