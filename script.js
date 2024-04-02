  var typed= new Typed(".typeing",{
    strings:["","Web Designer","Web Developer","Software Engineer"],
    typespeed:100,
    backspeed:60,
    loop:troe
  })
  /*  **********Aside********** */
  const nav= document.querySelector(".nav"),
  navList= nav.querySelectorAll("li"),
  totalNavList= navList.length;
  for(let i=0; i<totalNavList; i++)
  {
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        for(letj=0;j<totalNavList; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.claassList.add("active")
    })
  }