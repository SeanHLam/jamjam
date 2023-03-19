import { test, devices, expect } from '@playwright/test'

let urlLogin = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";
let urlHome = "http://localhost:3000/home";
let urlMusic = "http://localhost:3000/music";

test.use({
    browserName: 'chromium',
    ...devices["iPad Air"],
    viewport : { width: 820, height: 1180 },
})

test.beforeAll(async () => {
    console.log('Before tests');
});


test.describe("Testing the pill menu", () => {

    test("Counting how many pill menu items show up", async ({ page }) => {
      await page.goto(urlMusic);
  
      await expect(page.locator(".pill")).toHaveCount(9);
  
    });
    
    test("Testing the font size of pill menu", async ({ page }) => {
      await page.goto(urlMusic);
  
      const pill = await page.waitForSelector('.pill');
  
      const pillSize = await pill.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("font-size");
      });
  
      expect(pillSize).toBe("14px");
  
    });
  
  });
  
  test.describe("Testing the Music Menu", () => {
  
    test("Testing no music menu height", async ({ page }) => {
      await page.goto(urlMusic);
  
      const music = await page.waitForSelector('.NoMusic');
  
      const musicHeight = await music.evaluate((ele) => {
        return window.getComputedStyle(ele).getPropertyValue("height");
      });
  
      expect(musicHeight).toBe("350px");
  
     
  
    });
    
  
  
  });