import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from '../src/app.js';

describe('API', () => {
  it('GET /health retorna 200 e status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });

  it('GET /converter retorna a temperatura em Fahrenheit', async () => {
    const res = await request(app).get('/converter?celsius=100');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ fahrenheit: 212 });
  });

  it('GET /converter com valor inválido retorna 400', async () => {
    const res = await request(app).get('/converter?celsius=abc');
    expect(res.status).toBe(400);
    expect(res.body).toEqual({
      erro: 'O parâmetro celsius deve ser um número.',
    });
  });
});
