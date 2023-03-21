import { test, devices, expect } from '@playwright/test'

let urlLogin = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";
let urlHome = "http://localhost:3000/home";
let urlMusic = "http://localhost:3000/music";

test.use({
  browserName: 'chromium',
  ...devices["iPad Air"],
  viewport: { width: 820, height: 1180 },
})

test.beforeAll(async () => {
  console.log('Before tests');
});


test.describe('Header area', () => {
  test('The title tag', async ({ page }) => {
    await page.goto(urlHome)

    await expect(page).toHaveTitle('About Us');

  });
});


test.describe("Testing the links", () => {

  test("Testing the favicon link", async ({ page }) => {
    await page.goto(urlMusic);

    const linkTag = page.locator('link[rel="icon"]');
    await expect(linkTag).toHaveAttribute('href', '/favicon.svg');

  });

  test("The cogs animation", async ({ page }) => {
    await page.goto(urlMusic);

    const linkTag = page.locator('.cog');
    await expect(linkTag).toHaveAttribute('src', 'animations/cogs.json');

  });
});
