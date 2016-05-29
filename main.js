"use strict";

/**
 * This webpage has 2400 <span> tags arranged in a grid.
 * When you move your mouse over any one of them, its background color should become whatever has been written in the "Enter a color" field.
 */
(function() {

  /**
   * Draw a sketchpad with 2400 pixel grid.
   */
  function loadSquares() {
    // Dimensions:
    //   sketchpad:  600x400
    //   each pixel: 10x10
    var NUM_PIXEL = 2400;

    // Initialize temp vars.
    var count     = 0;
    var innerhtml = "";

    // Draw the specified number of pixels.
    for( count = 0; count < NUM_PIXEL; count++ ){
      innerhtml += "<span></span>";
    }
    $( "#sketchpad" ).html( innerhtml );
  }

  /**
   * @return {string} The color name that the user inputs in the field.
   */
  function getColor() {
    return $( '#color_input' ).val();
  }

  /**
   * Clear the color input field.
   */
  function fillPixel() {
    // Change the background-color of the pixel.
    $( this ).css( 'background', getColor()  );
  }

  /**
   * Clear the color input field.
   */
  function clearColor() {
    $( '#color_input' ).val( "" );
  }

  /**
   * Wait until the document is loaded.
   */
  $( document ).ready( function() {

    // Load squares.
    loadSquares();

    // Obtain all the pixels.
    var $pixels = $( '#sketchpad span' );

    // Listen for mouseover on all the pixels.
    $pixels.on( 'mouseover', fillPixel );

    // Listen for click on all the pixels.
    $pixels.on( 'click', clearColor );
  });
}());
