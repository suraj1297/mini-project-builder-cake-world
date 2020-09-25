/*Fill your code */
// variable for checking if any particular layer is selected or not
var isChocolate = false;
var isStrawberry = false;
var isVanilla = false;
var isButterScotch = false;
var isRedVelvet = false;
var isBuy = false;

var cakeLayers = [];

function updateState(e) {
  // grabbing element which has been clicked by user
  let element = e.target.innerText.toLowerCase();

  if (element == "chocolate") {
    // if user added chocolate layer then isChocolate will be set to true or if removed then false.
    isChocolate = !isChocolate;
    billItem(element, isChocolate);

    // adding choosen layer in cake Layer Array or removing if removed by user
    updateLayer(element, isChocolate);

    //changing button of color after repective selection
    changeColor(element, isChocolate);
  }
  // if user added strawberry layer then isStrawberry will be set to true or if removed then false.
  else if (element == "strawberry") {
    isStrawberry = !isStrawberry;
    billItem(element, isStrawberry);

    // adding choosen layer in cake Layer Array or removing if removed by user
    updateLayer(element, isStrawberry);

    //changing button of color after repective selection
    changeColor(element, isStrawberry);
  }
  // if user added vanilla layer then isVanilla will be set to true or if removed then false.
  else if (element === "vanilla") {
    isVanilla = !isVanilla;
    billItem(element, isVanilla);

    // adding choosen layer in cake Layer Array or removing if removed by user
    updateLayer(element, isVanilla);

    //changing button of color after repective selection
    changeColor(element, isVanilla);
  }
  // if user added butterscotch layer then isButterScotch will be set to true or if removed then false.
  else if (element === "butterscotch") {
    isButterScotch = !isButterScotch;
    billItem(element, isButterScotch);

    // adding choosen layer in cake Layer Array or removing if removed by user
    updateLayer(element, isButterScotch);

    //changing button of color after repective selection
    changeColor(element, isButterScotch);
  }
  // if user added redvelvet layer then isRedVelvet will be set to true or if removed then false.
  else if (element === "redvelvet") {
    isRedVelvet = !isRedVelvet;
    billItem(element, isRedVelvet);

    // adding choosen layer in cake Layer Array or removing if removed by user
    updateLayer(element, isRedVelvet);

    //changing button of color after repective selection
    changeColor(element, isRedVelvet);
  }

  // calling buy function to hide total if user clicked on buy and then gain he changed selection
  buy();

  // displaying cake layer
  displayCakeLayer();
}

function billItem(id, layer) {
  // function takes the input of id of element which is supposed to be showed or removed from bill.
  let element = document.querySelector(`#${id}`);
  element.style.display = layer ? "inline-block" : "none";
}

function buy(changeBuy) {
  // function will calculate all total amount when buy button is clicked on the basis of user item selection
  var total = 0;
  total += isChocolate ? 300 : 0;
  total += isStrawberry ? 100 : 0;
  total += isRedVelvet ? 350 : 0;
  total += isButterScotch ? 200 : 0;
  total += isVanilla ? 250 : 0;

  if (!isBuy && changeBuy) {
    document.getElementById(
      "total"
    ).innerHTML = `<strong>Total -------- ${total}<strong>`;
    document.getElementById("total").style.display = "inline-block";
    document.getElementById("buy").style.color = "white";
    document.getElementById("buy").style.backgroundColor = "#6fc1a5";
    // displaying candle on top of cake
    if (cakeLayers.length) {
      let $candleImage = document.querySelector("#candle");
      $candleImage.style.display = "block";
    }
  } else {
    document.getElementById("total").style.display = "none";
    displayCakeLayer();
    document.getElementById("buy").style.color = "black";
    document.getElementById("buy").style.backgroundColor = "#c6cf65";
  }
  if (changeBuy) isBuy = !isBuy;
  else isBuy = false;
}

function updateLayer(element, flag) {
  // adding choosen layer in cake Layer Array or removing if removed by user
  if (flag) cakeLayers.unshift(element);
  else {
    if (cakeLayers.includes(element))
      cakeLayers.splice(cakeLayers.indexOf(element), 1);
  }
}

function displayCakeLayer() {
  var element = `<div id="candle">
  <img src="assets/candle.png" alt="Candle" class="candle" />
</div>`;

  console.log(cakeLayers);
  cakeLayers.forEach((e, i) => {
    element += `<div id="layer${
      cakeLayers.length - i
    }" class="${e}-color"></div>`;
  });
  console.log(element);

  let cakeDiv = document.querySelector(".cake");

  cakeDiv.innerHTML = element;
}

function changeColor(element, flag) {
  var button = document.querySelector(`.${element}-button`);
  if (flag) {
    button.style.backgroundColor = "white";
    button.style.color = "#537d91";
  } else {
    button.style.backgroundColor = "#537d91";
    button.style.color = "white";
  }
}
