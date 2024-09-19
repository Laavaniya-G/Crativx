let i=0 ;
    
    $('.slide').click(function(){
       $('.active').addClass('nonActive')
        $(this).removeClass('nonActive').addClass('active')
        i= $(this).index()
    })
    
    setItner = setInterval(go,4000);
    
    function go(){
       $('.active').addClass('nonActive')
        $($('.slide')[i%4]).removeClass('nonActive').addClass('active')
        i++;
    }


 // Get the image element
 const image = document.querySelector(".service-image img");

      // Add event listeners to the text elements to toggle the active class on click
      const textElements = document.querySelectorAll(".text");
      textElements.forEach((text) => {
        text.addEventListener("mouseover", () => {
          textElements.forEach((otherText) => {
            otherText.classList.remove("hover");
          });
          text.classList.add("hover");

           // Change the src attribute of the image based on which text is active
           if (text.classList.contains("text-1")) {
            image.src = "./assests/images/service-img.svg";
          } else if (text.classList.contains("text-2")) {
            image.src = "./assests/images/hover-2.jpg";
          } else if (text.classList.contains("text-3")) {
            image.src = "./assests/images/hover-4.jpg";
          }
        });
      });

      