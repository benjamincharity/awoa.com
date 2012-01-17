$(function() {

// Responsive Headers
  $("#main .popular h1").fitText(.8);
  $("#main aside h1").fitText(.9);
  $("#main .materials h1").fitText(2.4);
  $("#main.kit .content > h1").fitText(1.8);

// Flexible slider
  $('.flexslider').flexslider({
    animation: "fade",
    directionNav: false
  });


// Lock zoom during iOS rotation
// https://gist.github.com/901295#file_ios_viewport_scaling_bug_fix.js
// By @mathias, @cheeaun and @jdalton
  (function(doc) {
    var addEvent = 'addEventListener',
        type = 'gesturestart',
        qsa = 'querySelectorAll',
        scales = [1, 1],
        meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

    function fix() {
      meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
      doc.removeEventListener(type, fix, true);
    }

    if ((meta = meta[meta.length - 1]) && addEvent in doc) {
      fix();
      scales = [.25, 1.6];
      doc[addEvent](type, fix, true);
    }
  }(document));

});
