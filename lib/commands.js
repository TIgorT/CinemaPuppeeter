module.exports = {
  theDayOfTheFilmScreening: async function (page, day) {
    try {
      let selector = `nav a:nth-child(${day})`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector clickDay ${selector} is not clickable`);
    }
  },
  sessionTime: async function (page) {
    try {
      let selector = `[data-seance-id='178']`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector sessionTime is not clickable: ${selector}`);
    }
  },
  choosingAPlace: async function (page, row, place) {
    try {
      let selector = `[class='buying-scheme__row']:nth-child(${row}) span:nth-child(${place})`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector choosingAPlace is not clickable: ${selector}`);
    }
  },
  clickingTheBookButton: async function (page) {
    try {
      let selector = `[class='acceptin-button']`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector Button is not clickable: ${selector}`);
    }
  },
  buttonName: async function (page) {
    try {
      let selector = `button`;
      await page.waitForSelector(selector);
      return await page.$eval(selector, (link) => link.textContent);
    } catch (error) {
      throw new Error(`The text differs from the selector: ${selector}`);
    }
  },
  choosingAVIPPlace: async function (page) {
    try {
      let selector = `[class='buying-scheme__row']:nth-child(1) span:nth-child(8)`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector choosingAPlace is not clickable: ${selector}`);
    }
  },
  sessionTimeVIP: async function (page) {
    try {
      let selector = `[data-seance-id='177']`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector sessionTime is not clickable: ${selector}`);
    }
  },
  sessionTimeTerminator: async function (page) {
    try {
      let selector = `[data-seance-id='173']`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector sessionTime is not clickable: ${selector}`);
    }
  },
  buttonStatus: async function (page) {
    try {
      let selector = `[class='acceptin-button']`;
      await page.waitForSelector(selector);
      return await page.$eval(selector, (link) => link.disabled);
    } catch (error) {
      throw new Error(`The text differs from the selector: ${selector}`);
    }
  },
  choosingReservedSeat: async function (page) {
    try {
      let selector = `.buying-scheme__chair_taken`;
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error(`Selector choosingAPlace is not clickable: ${selector}`);
    }
  },
};
