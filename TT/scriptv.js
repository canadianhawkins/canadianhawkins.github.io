(function($) {
  // Find each player on the page and set it up.
  $(".cxiv-container").each(function() {
    var player = $(this);
    
    // Get menu item elements and calculate height of each.
    var menuItems = player.find(".cxiv-menu a");
    var menuHeight = player.find(".cxiv-menu").innerHeight();
  
    if (menuItems.length < 6) {
      // The 21 accounts for padding top and bottom plus 1 pixel border.
      var height = (menuHeight / menuItems.length) - 21;
      menuItems.css("height", height + "px");
    }

    // Set default title to the first video menu title
    player.find(".cxiv-title").text(menuItems.eq(0).text());
  
    menuItems.on("click", function(event) {
      event.preventDefault();
      
      var thisItem = $(this);
      var closestContainer = thisItem.closest(".cxiv-container");
      closestContainer.find("iframe").attr("src", thisItem.attr("href"));
      closestContainer.find(".cxiv-title").text(thisItem.text());
    });
  });
})( jQuery );