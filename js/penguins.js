(function () {
  function createWing(side) {
    var wing = document.createElement("span");
    wing.className = "waddle-penguin__wing waddle-penguin__wing--" + side;
    return wing;
  }

  function createEye(side) {
    var eye = document.createElement("span");
    eye.className = "waddle-penguin__eye waddle-penguin__eye--" + side;
    return eye;
  }

  function build(container) {
    container.textContent = "";

    for (var index = 1; index <= 3; index += 1) {
      var penguin = document.createElement("div");
      var body = document.createElement("div");
      var face = document.createElement("span");
      var belly = document.createElement("span");
      var beak = document.createElement("span");
      var scarf = document.createElement("span");
      var leftFoot = document.createElement("span");
      var rightFoot = document.createElement("span");

      penguin.className = "waddle-penguin waddle-penguin--" + index;
      body.className = "waddle-penguin__body";
      face.className = "waddle-penguin__face";
      belly.className = "waddle-penguin__belly";
      beak.className = "waddle-penguin__beak";
      scarf.className = "waddle-penguin__scarf";
      leftFoot.className = "waddle-penguin__foot waddle-penguin__foot--left";
      rightFoot.className = "waddle-penguin__foot waddle-penguin__foot--right";

      face.append(createEye("left"), createEye("right"), beak);
      body.append(
        createWing("left"),
        createWing("right"),
        face,
        scarf,
        belly,
        leftFoot,
        rightFoot,
      );
      penguin.appendChild(body);
      container.appendChild(penguin);
    }
  }

  window.ComfortPenguinParade = {
    build: build,
  };
})();
