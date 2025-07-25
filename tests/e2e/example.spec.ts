import { test, expect } from '@playwright/test';
import { authlocators} from '../pageobjects/locators';

test('Проверка что приложение запускается', async ({ page }) => {
  await page.goto('http://localhost:5173/'); 
  const appElement =  page.locator('//div[@id="root"]');
  await expect(appElement).toBeVisible();
  await expect(page).not.toHaveTitle('Error'); 
});

test('Проверка авторизации приложения', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.locator(authlocators.authlogin).type('admin')
  await page.locator(authlocators.authpass).type('admin')
  await page.locator(authlocators.authbutton).click()
    expect(page.locator("//div[@class='MuiCardContent-root css-1lt5qva-MuiCardContent-root']")).toContainText('Lorem ipsum sic dolor amet...')
});
test('Проверка разлогина приложения', async ({ page }) => {
   await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173/')
  await page.locator(authlocators.authlogin).type('admin')
  await page.locator(authlocators.authpass).type('admin')
  await page.locator(authlocators.authbutton).click()
    expect(page.locator("//div[@class='MuiCardContent-root css-1lt5qva-MuiCardContent-root']")).toContainText('Lorem ipsum sic dolor amet...')
  await page.locator(authlocators.profilebutton).click()
  await page.locator(authlocators.logoutbutton).click()
  await expect(page).toHaveURL('http://localhost:5173/#/login');

});

