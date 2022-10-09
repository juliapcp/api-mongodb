import { CreateWeatherModel, SaveWeatherModel } from '../models/WeatherInfoModel.js';

export async function createWeather(req, res) {
    try {
        const { temperaturaMaxima,
            lat,
            long,
            temperatura,
            vento,
            umidade,
            sensacao,
            data,
            descricao,
            icone } = req.body;
        const model = CreateWeatherModel(temperaturaMaxima,
            lat,
            long,
            temperatura,
            vento,
            umidade,
            sensacao,
            data,
            descricao,
            icone)
        await SaveWeatherModel(model)
        return res.status(201).json(model)
    }
    catch (err) {
        let statusCode = err.status || 500;
        return res.status(statusCode).json({ message: err.message })
    }
}
