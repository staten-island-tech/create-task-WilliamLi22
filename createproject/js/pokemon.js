const pokemon = [
  {
    id: 0,
    name: "Bulbasaur",
    gen: 1,
    types: "Grass" + "and" + "Poison",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 1,
    name: "Ivysaur",
    gen: 1,
    types: "Grass" + "and" + "Poison",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 2,
    name: "Venusaur",
    gen: 1,
    types: "Grass" + "and" + "Poison",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 3,
    name: "Charmander",
    gen: 1,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 4,
    name: "Charmeleon",
    gen: 1,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: 5,
    name: "Charizard",
    gen: 1,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 6,
    name: "Squirtle",
    gen: 1,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 7,
    name: "Wartortle",
    gen: 1,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    id: 8,
    name: "Blastoise",
    gen: 1,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    id: 9,
    name: "Chikorita",
    gen: 2,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
  },
  {
    id: 10,
    name: "Bayleef",
    gen: 2,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
  },
  {
    id: 11,
    name: "Meganium",
    gen: 2,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
  },
  {
    id: 12,
    name: "Cyndaquil",
    gen: 2,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
  },
  {
    id: 13,
    name: "Quilava",
    gen: 2,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
  },
  {
    id: 14,
    name: "Typhlosion",
    gen: 2,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
  },
  {
    id: 15,
    name: "Totodile",
    gen: 2,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
  },
  {
    id: 16,
    name: "Croconaw",
    gen: 2,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
  },
  {
    id: 17,
    name: "Feraligatr",
    gen: 2,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
  },
  {
    id: 18,
    name: "Treecko",
    gen: 3,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
  },
  {
    id: 19,
    name: "Grovyle",
    gen: 3,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
  },
  {
    id: 20,
    name: "Sceptile",
    gen: 3,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
  },
  {
    id: 21,
    name: "Torchic",
    gen: 3,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
  },
  {
    id: 22,
    name: "Combusken",
    gen: 3,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
  },
  {
    id: 23,
    name: "Blaziken",
    gen: 3,
    types: "Fire" + "and" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
  },
  {
    id: 24,
    name: "Mudkip",
    gen: 3,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
  },
  {
    id: 25,
    name: "Marshtomp",
    gen: 3,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
  },
  {
    id: 26,
    name: "Swampert",
    gen: 3,
    types: "Water" + "and" + "Ground",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
  },
  {
    id: 27,
    name: "Turtwig",
    gen: 4,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
  },
  {
    id: 28,
    name: "Grotle",
    gen: 4,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
  },
  {
    id: 29,
    name: "Torterra",
    gen: 4,
    types: "Grass" + "and" + "Ground",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
  },
  {
    id: 30,
    name: "Chimchar",
    gen: 4,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
  },
  {
    id: 31,
    name: "Monferno",
    gen: 4,
    types: "Fire" + "and" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
  },
  {
    id: 32,
    name: "Infernape",
    gen: 4,
    types: "Fire" + "and" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
  },
  {
    id: 33,
    name: "Piplup",
    gen: 4,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
  },
  {
    id: 34,
    name: "Prinplup",
    gen: 4,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
  },
  {
    id: 35,
    name: "Empoleon",
    gen: 4,
    types: "Water" + "and" + "Steel",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
  },
  {
    id: 36,
    name: "Snivy",
    gen: 5,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
  },
  {
    id: 37,
    name: "Servine",
    gen: 5,
    types: "Grass" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
  },
  {
    id: 38,
    name: "Serperior",
    gen: 5,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
  },
  {
    id: 39,
    name: "Tepig",
    gen: 5,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
  },
  {
    id: 40,
    name: "Pignite",
    gen: 5,
    types: "Fire" + "and" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
  },
  {
    id: 41,
    name: "Emboar",
    gen: 5,
    types: "Fire" + "and" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
  },
  {
    id: 42,
    name: "Oshawott",
    gen: 5,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
  },
  {
    id: 43,
    name: "Dewott",
    gen: 5,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
  },
  {
    id: 44,
    name: "Samurott",
    gen: 5,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
  },
  {
    id: 45,
    name: "Chespin",
    gen: 6,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
  },
  {
    id: 46,
    name: "Quilladin",
    gen: 6,
    types: "Grass" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
  },
  {
    id: 47,
    name: "Chesnaught",
    gen: 6,
    types: "Grass" + "and" + "Fighting",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
  },
  {
    id: 48,
    name: "Fennekin",
    gen: 6,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
  },
  {
    id: 49,
    name: "Braixen",
    gen: 6,
    types: "Fire" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
  },
  {
    id: 50,
    name: "Delphox",
    gen: 6,
    types: "Fire" + "and" + "Psychic",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
  },
  {
    id: 51,
    name: "Froakie",
    gen: 6,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
  },
  {
    id: 52,
    name: "Frogadier",
    gen: 6,
    types: "Water" + "and" + "N/A",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
  },
  {
    id: 53,
    name: "Greninja",
    gen: 6,
    types: "Water" + "and" + "Dark",
    front_sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
  },
];

export { pokemon };
