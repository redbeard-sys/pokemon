const search = (event) => {

  event.preventDefault();
  const pokenumber = document.getElementById("pokemonSearch").value;
  const baseURL = "https://pokeapi.co/api/v2/pokemon/";

  //jquery
  $.get(baseURL + pokenumber, (pokemon) => {

    document.getElementById("pokename").innerHTML = pokemon.name;
    document.getElementById("pokeimage").src = pokemon.sprites.front_default;
    document.getElementById("pokeweight").innerHTML = pokemon.weight;
    $("#weight").css("visibility", "visible");
    $("#name").css("visibility", "visible");

  });
}

document.getElementById("pokeform").addEventListener('submit', search);

$("#img1").click(function () {
  $("#img1").hide("slow").show("slow");

});

$("#img2").click(function () {
  $("#img2").hide("slow").show("slow");

});

$("#changebtn").click(function () {
  $("body").css("background-color", "yellow");
  $(".header").css("background-color", "yellow");
  $(".content").css("background-color", "blue");
  $(".inner_text_shadow").css("color", "blue");

});

$("#default").click(function () {
  $("body").css("background-color", "blue");
  $(".header").css("background-color", "blue");
  $(".content").css("background-color", "yellow");
  $(".inner_text_shadow").css("color", "yellow");
  
});

  function instruct() {
    alert("Welcome to my website where you can find information about generation one pokemon. Oh! By the way, both pokeballs are clickable!");
  }

  window.onload = instruct;
