import { expect, test } from '@playwright/test'

test('load orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  await expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()
})

test('orders pagination', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Next page' }).click()

  await expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Customer 20' })).toBeVisible()

  await page.getByRole('button', { name: 'Last page' }).click()

  await expect(page.getByRole('cell', { name: 'Customer 51' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Customer 60' })).toBeVisible()

  await page.getByRole('button', { name: 'Previous page' }).click()

  await expect(page.getByRole('cell', { name: 'Customer 41' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Customer 50' })).toBeVisible()

  await page.getByRole('button', { name: 'First page' }).click()

  await expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Order ID').fill('order-11')
  await page.getByRole('button', { name: 'Filter results' }).click()

  await expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Customer name').fill('Customer 11')
  await page.getByRole('button', { name: 'Filter results' }).click()

  await expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Canceled').click()
  await page.getByRole('button', { name: 'Filter results' }).click()

  const tableRows = await page.getByRole('cell', { name: 'Canceled' }).all()

  expect(tableRows).toHaveLength(10)
})
