import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Shop name').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone number').fill('48')

  await page.getByRole('button', { name: 'Create account' }).click()

  const toast = page.getByText('Restaurant successfully registered!')

  expect(toast).toBeVisible()
})

test('sign up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Shop name').fill('Pizza Shopping')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByLabel('Your phone number').fill('48')

  await page.getByRole('button', { name: 'Create account' }).click()

  const toast = page.getByText('Error during restaurant registration.')

  expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('link', { name: 'Already have an account? Sign' })
    .click()

  expect(page.url()).toContain('/sign-in')
})
