import { test, expect } from '@playwright/test';
//buenas herramientas pick locator y record new

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.ar/');
  await page.getByPlaceholder('Buscar productos, marcas y má').click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone 12 (128 GB) - Negro - Distribuidor autorizado' }).click();
});