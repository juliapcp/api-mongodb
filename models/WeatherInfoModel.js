import mongoose from 'mongoose';
const { Schema } = mongoose;

const WeatherModel = new Schema({
  temperaturaMaxima: Number, 
  lat: String,
  long: String,
  temperatura: Number, 
  vento: Number,
  umidade: Number, 
  sensacao: Number, 
  data: Date, 
  descricao: String, 
  icone: String 
});

export function CreateWeatherModel(temperaturaMaxima,
  lat,
  long,
  temperatura,
  vento,
  umidade,
  sensacao,
  data,
  descricao,
  icone) {
  return {
    temperaturaMaxima,
    lat,
    long,
    temperatura,
    vento,
    umidade,
    sensacao,
    data,
    descricao,
    icone
  }
}

export const weatherInfoModel = mongoose.model("weather", WeatherModel);

export async function SaveWeatherModel(WeatherModel) {
  const dbs = weatherInfoModel.db;
  const coll = dbs.collection("weathers");
  return await coll.insertOne(WeatherModel);
}