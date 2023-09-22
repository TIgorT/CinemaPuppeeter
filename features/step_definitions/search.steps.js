const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} = require("cucumber");
const {
  theDayOfTheFilmScreening,
  sessionTime,
  choosingAPlace,
  clickingTheBookButton,
  buttonName,
  sessionTimeVIP,
  sessionTimeTerminator,
  choosingReservedSeat,
  buttonStatus,
} = require("../../lib/commands.js");

setDefaultTimeout(60000);

Before(async function () {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on {string} page", async function (string) {
  return await this.page.goto(
    `http://qamid.tmweb.ru/client/index.php${string}`
  );
});

When("user chooses day {string} of the week", async function (string) {
  return await theDayOfTheFilmScreening(this.page, string);
});

When("user selects session time", async function () {
  return await sessionTime(this.page);
});

When("user chooses row {string} and seat {string}", async function (row, seat) {
  return await choosingAPlace(this.page, row, seat);
});

When("clicks on the book button", async function () {
  return await clickingTheBookButton(this.page);
});

Then("the user sees the button {string}", async function (string) {
  const actual = await buttonName(this.page);
  expect(actual).to.equal(string);
});

When("user selects session time VIP", async function () {
  return await sessionTimeVIP(this.page);
});

When("user selects session time Terminator", async function () {
  return await sessionTimeTerminator(this.page);
});

When("user trying to choose a reserved seat", async function () {
  return await choosingReservedSeat(this.page);
});

Then("check the button 'Забронировать' not active", async function () {
  const actual = await buttonStatus(this.page);
  expect(actual).to.equal(true);
});
