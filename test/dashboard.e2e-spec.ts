import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% in comparison to yesterday')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('67')).toBeVisible()
  expect(page.getByText('-5% in comparison to yesterday')).toBeVisible()
})

test('display total revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('$192.03')).toBeVisible()
  expect(page.getByText('+12% in comparison to last')).toBeVisible()
})

test('display canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('3', { exact: true })).toBeVisible()
  expect(page.getByText('-6% in comparison to last')).toBeVisible()
})
