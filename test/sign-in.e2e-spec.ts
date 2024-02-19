import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText(
    'An authentication link has been sent to your e-mail!',
  )

  expect(toast).toBeVisible()
})

test('sign with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your e-mail').fill('wrong@email.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText('Invalid credentials.')

  expect(toast).toBeVisible()
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New around? Sign up here!' }).click()

  expect(page.url()).toContain('/sign-up')
})
