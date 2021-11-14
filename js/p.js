  $(document).ready(function() {
    $('#qrIos').qrcode({
      width: 200,
      height: 200,
      text: "iOS_URL_HERE"
    });
    $('#qrAndroid').qrcode({
      width: 200,
      height: 200,
      text: "DROID_URL_HERE"
    });
    $('#qrWeb').qrcode({
      width: 200,
      height: 200,
      text: "WINDOWS_URL_HERE"
    });
  });
  
  function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
      $card.removeClass('hover');
    } else {
      $card.addClass('hover');
    }
  }



  $(document).ready(function(){
    // Add smooth scrolling to all links in nav-menu class
    $("nav-item a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

   // Define selector for selecting 
        // anchor links with the hash 
        let anchorSelector = 'a[href^="#"]'; 
      
        // Collect all such anchor links 
        let anchorList =  
            document.querySelectorAll(anchorSelector); 
          
        // Iterate through each of the links 
        anchorList.forEach(link => { 
            link.onclick = function (e) { 
      
                // Prevent scrolling if the 
                // hash value is blank 
                e.preventDefault(); 
          
                // Get the destination to scroll to 
                // using the hash property 
                let destination =  
                    document.querySelector(this.hash); 
          
                // Scroll to the destination using 
                // scrollIntoView method 
                destination.scrollIntoView({ 
                    behavior: 'smooth' 
                }); 
            } 
        }); 
