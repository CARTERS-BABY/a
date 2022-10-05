onEvent("slider1", "change", function( ) {
  for (var a = 1; a < getNumber("slider1"); a++) {
    penUp();
    moveTo(150, 234);
    penDown();
    penRGB(randomNumber(0, 255), randomNumber(0, 255), 200);
    penWidth(1);
    arcLeft(60, a);
    arcRight(30, a);
    hide();
  }
});
onEvent("limpar", "click", function( ) {
  penColor(getProperty("screen1", "background-color"));
  dot(600);
});
