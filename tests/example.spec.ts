import { test, expect } from '@playwright/test';

test.describe('Testing authentication module', () => {
  test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:5173/")
  })
  test('should have a landing page', async ({page}) => {
    const heading = page.getByText("Split expenses for free");
    expect(heading).toBeTruthy()
  })


  test.describe('Testing login & signup buttons', () =>{
    test('test login button', async ({page}) =>{
      const login = page.getByRole("button", {name: "Login"});
      await login.click();
      await expect(page).toHaveURL("http://localhost:5173/login");
    });
    test('test signup button', async ({page}) => {
      const signup = page.getByRole("button", {name:"Join us Today"});
      await signup.click();
      await expect(page).toHaveURL("http://localhost:5173/create")
    })
  })

  test.describe('Testing login page', () =>{
    test('should redirect to /home on valid credentials', async ({page}) =>{
       await page.getByLabel("Email").fill('srikarvishnudatta@gmail.com');
      await page.getByLabel("Password").fill('Srikar@2001');
      const loginBtn = page.getByRole("button", {name:"Continue"});
      await loginBtn.click();
      await expect(page).toHaveURL("http://localhost:5173/home")
    });
    test('should display an error block on bad credentials', async ({page}) =>{
      await page.getByLabel("Email").fill('srikarvishnudatta@gmail.com');
      await page.getByLabel("Password").fill('Srikar@001');
      const loginBtn = page.getByRole("button", {name:"Continue"});
      await loginBtn.click();
      await expect(page.getByTitle("auth-error-msg")).toBeVisible();
    })
  })
});
