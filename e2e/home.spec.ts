import { test, devices, expect } from "@playwright/test";

let urlLogin = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";
let urlHome = "http://localhost:3000/home";
let urlMusic = "http://localhost:3000/music";

test.use({
  browserName: "chromium",
  ...devices["iPhone XR"],
  viewport: { width: 414, height: 896 },
});

test.beforeAll(async () => {
  console.log("Before tests");
});

test.describe("Testing Blocks in Landing Page", () => {

    test("Counting the number of blocks", async ({ page }) => {
      await page.goto(urlHome);
  
      await expect(page.locator(".Block")).toHaveCount(2);
  
    });
    
    test("Testing the size of the blocks", async ({ page }) => {
      await page.goto(urlHome);
  
      const block = await page.waitForSelector('.Block');
  
      const blockSize = await block.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("height");
      });
  
      expect(blockSize).toBe("280px");
  
    });
  
  });
  
  test.describe("Testing the 'Discover' Button", () => {
    test('Navigate to the music page', async ({ page }) => {
      await page.goto(urlHome)
      await page.click('button=Discover')
      await expect(page).toHaveURL('http://localhost:3000/music')
    });

  });

  test.describe("Testing API Logos", () => {
  
    test("Testing the sizes of API logos", async ({ page }) => {
      await page.goto(urlHome);
  
      const logo = await page.waitForSelector('.Photo');
  
      const logoSize = await logo.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("height");
      });
  
      expect(logoSize).toBe("50px");
  
    });
  });