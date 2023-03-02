const pokemon = [
  {
    id: 0,
    name: "Bulbasaur",
    types: "Grass" + "Poison",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 1,
    name: "Ivysaur",
    types: "Grass" + "Poison",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 2,
    name: "Venusaur",
    types: "Grass" + "Poison",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 3,
    name: "Charmander",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 4,
    name: "Charmeleon",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: 5,
    name: "Charizard",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 6,
    name: "Squirtle",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 7,
    name: "Wartortle",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    id: 8,
    name: "Blastoise",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    id: 9,
    name: "Chikorita",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
  },
  {
    id: 10,
    name: "Bayleef",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
  },
  {
    id: 11,
    name: "Meganium",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
  },
  {
    id: 12,
    name: "Cyndaquil",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
  },
  {
    id: 13,
    name: "Quilava",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
  },
  {
    id: 14,
    name: "Typhlosion",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
  },
  {
    id: 15,
    name: "Totodile",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
  },
  {
    id: 16,
    name: "Croconaw",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
  },
  {
    id: 17,
    name: "Feraligatr",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
  },
  {
    id: 18,
    name: "Treecko",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
  },
  {
    id: 19,
    name: "Grovyle",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
  },
  {
    id: 20,
    name: "Sceptile",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
  },
  {
    id: 21,
    name: "Torchic",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
  },
  {
    id: 22,
    name: "Combusken",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
  },
  {
    id: 23,
    name: "Blaziken",
    types: "Fire" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
  },
  {
    id: 24,
    name: "Mudkip",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
  },
  {
    id: 25,
    name: "Marshtomp",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
  },
  {
    id: 26,
    name: "Swampert",
    types: "Water" + "Ground",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
  },
  {
    id: 27,
    name: "Turtwig",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
  },
  {
    id: 28,
    name: "Grotle",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
  },
  {
    id: 29,
    name: "Torterra",
    types: "Grass" + "Ground",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
  },
  {
    id: 30,
    name: "Chimchar",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
  },
  {
    id: 31,
    name: "Monferno",
    types: "Fire" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
  },
  {
    id: 32,
    name: "Infernape",
    types: "Fire" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
  },
  {
    id: 33,
    name: "Piplup",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
  },
  {
    id: 34,
    name: "Prinplup",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
  },
  {
    id: 35,
    name: "Empoleon",
    types: "Water" + "Steel",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
  },
  {
    id: 36,
    name: "Snivy",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
  },
  {
    id: 37,
    name: "Servine",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
  },
  {
    id: 38,
    name: "Serperior",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
  },
  {
    id: 39,
    name: "Tepig",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
  },
  {
    id: 40,
    name: "Pignite",
    types: "Fire" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
  },
  {
    id: 41,
    name: "Emboar",
    types: "Fire" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
  },
  {
    id: 42,
    name: "Oshawott",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
  },
  {
    id: 43,
    name: "Dewott",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
  },
  {
    id: 44,
    name: "Samurott",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
  },
  {
    id: 45,
    name: "Chespin",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
  },
  {
    id: 46,
    name: "Quilladin",
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
  },
  {
    id: 47,
    name: "Chesnaught",
    types: "Grass" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
  },
  {
    id: 48,
    name: "Fennekin",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
  },
  {
    id: 49,
    name: "Braixen",
    types: "Fire" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
  },
  {
    id: 50,
    name: "Delphox",
    types: "Fire" + "Psychic",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
  },
  {
    id: 51,
    name: "Froakie",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
  },
  {
    id: 52,
    name: "Frogadier",
    types: "Water" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
  },
  {
    id: 53,
    name: "Greninja",
    types: "Water" + "Dark",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
  },
];

export { pokemon };

/* {
  id: ,
  name: "",
  types: "Grass" + "N/A",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
},
{
  id: ,
  name: "",
  types: "Grass" + "N/A",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
},
{
  id: ,
  name: "",
  types: "Grass" + "N/A",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
},
{
  id: ,
  name: "",
  types: "Fire" + "N/A",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
},
{
  id: ,
  name: "",
  types: "Fire" + "Fighting",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
},
{
  id: ,
  name: "",
  types: "Fire" + "Fighting",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
},
{
  id: ,
  name: "",
  types: "Water" + "N/A",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
},
{
  id: ,
  name: "",
  types: "Water" + "N/A",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
},
{
  id: ,
  name: "",
  types: "Water" + "Steel",
  front_sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
}, */
