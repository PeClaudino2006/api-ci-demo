import { describe, expect, it } from 'vitest';
import { celsiusParaFahrenheit } from '../src/conversor.js';

describe('celsiusParaFahrenheit', () => {
  it('converte 0 °C para 32 °F', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
  });
  it('converte 100 °C para 212 °F', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });
  it('converte temperatura negativa', () => {
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });
});
