const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (par) => {
  const films_IXX = await promiseTheaterIXX();
  let film_IXX = await films_IXX.filter(el => el.hasil === par);
  let countFilm_IXX = film_IXX.length;


  const films_VGC = await promiseTheaterVGC();
  let film_VGC = await films_VGC.filter(el => el.hasil === par);
  let countFilm_VGC = film_VGC.length;

  return countFilm_IXX + countFilm_VGC;

};

module.exports = {
  promiseOutput,
};
