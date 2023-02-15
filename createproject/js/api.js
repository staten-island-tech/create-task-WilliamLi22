const API = ["https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"];

async function getData(API) {
  try {
    const response = await fetch(API);
    if (response.status < 200 || response.status > 299) {
      throw Error(response.status);
    } else {
      const data = await response.json(); //makes the data into json object we can use
      console.log(data);
      document.getElementById("api-response");
    }
  } catch (error) {
    console.log(error);
  }
}
getData(API);

export { API };

//https://anapimolodec.github.io/pokemonia/ use to learn how to get random pokemon from api
