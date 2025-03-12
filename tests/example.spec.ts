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
  

});
