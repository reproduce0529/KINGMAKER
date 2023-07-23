window.addEventListener('scroll', function() {

    let header = document.querySelector(".header");
    let headerMenuLink = document.querySelectorAll(".header-menu-link");
    let scrollPosition = window.scrollY;
    let underline = document.querySelectorAll(".underline")
    let logoimg = document.querySelector(".header-menu-logoimg");
    console.log(scrollPosition);
    if (scrollPosition != 0) {
      header.style.backgroundColor = 'white'; // 스크롤 위치가 200 이상일 때 헤더 색을 빨간색으로 변경
      header.style.borderBottom = '1px solid rgba(4,4,4,0.1) ';
      logoimg.style.filter = "none"
      for(let i =0; i < headerMenuLink.length; i++){
        headerMenuLink[i].style.color = "#333";
        underline[i].style.backgroundColor = "#333";
      }
    } else {
      header.style.backgroundColor = 'transparent'; // 스크롤 위치가 200 미만일 때 투명한 배경색으로 변경
      header.style.borderBottom = '1px solid rgba(255,255,255,0.3)';
      logoimg.style.filter = "brightness(0) invert()"
      for(let i =0; i < headerMenuLink.length; i++){
        headerMenuLink[i].style.color = "white";
        underline[i].style.backgroundColor = "white";
      }
      
   
    }
  });
  
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