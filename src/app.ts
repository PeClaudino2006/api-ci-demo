import express from 'express';
import { celsiusParaFahrenheit } from './conversor.js';

export const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('API no ar');
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/converter', (req, res) => {
  const celsius = Number(req.query.celsius);

  if (req.query.celsius === undefined || Number.isNaN(celsius)) {
    res.status(400).json({ erro: 'O parâmetro celsius deve ser um número.' });
    return;
  }
  res.status(200).json({ fahrenheit: celsiusParaFahrenheit(celsius) });
});
