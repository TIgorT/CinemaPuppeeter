const { expect } = require("chai");
const {
  theDayOfTheFilmScreening,
  sessionTime,
  choosingAPlace,
  clickingTheBookButton,
  buttonName,
  choosingAVIPPlace,
  sessionTimeVIP,
  sessionTimeTerminator,
  buttonStatus,
  choosingReservedSeat,
} = require("./lib/commands.js");
const {
  dateGeneration,
  rowGeneration,
  placeGeneration,
} = require("./lib/util.js");
let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Let's go to the cinema", () => {
  beforeEach(async () => {
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  }, 5000);

  test("Successful booking of one seat", async () => {
    let choosingADay = dateGeneration();
    let rowSelection = rowGeneration();
    let place = placeGeneration();
    await theDayOfTheFilmScreening(page, choosingADay);
    await sessionTime(page);
    await choosingAPlace(page, rowSelection, place);
    await clickingTheBookButton(page);
    const actual = await buttonName(page);
    expect(actual).to.equal("Получить код бронирования");
  });

  test("Successful booking of one VIP seat", async () => {
    let choosingADay = dateGeneration();
    await theDayOfTheFilmScreening(page, choosingADay);
    await sessionTimeVIP(page);
    await choosingAVIPPlace(page);
    await clickingTheBookButton(page);
    const actual = await buttonName(page);
    expect(actual).to.equal("Получить код бронирования");
  });

  test("Unsuccessful seat reservation", async () => {
    let choosingADay = dateGeneration();
    let rowSelection = rowGeneration();
    let place = placeGeneration();
    await theDayOfTheFilmScreening(page, choosingADay);
    await sessionTimeTerminator(page);
    await choosingReservedSeat(page);
    const actual = await buttonStatus(page);
    expect(actual).to.equal(true);
  });
});
