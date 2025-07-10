class UpworkJobScraper {
  bestMatches = [];
  searchResults = [];

  constructor() {
    // You can pass options later if needed
  }

  extractRating(section) {
    const ratingEl = section.querySelector(".air3-rating-foreground");
    return ratingEl
      ? (parseFloat(ratingEl.style.width.replace("%", "")) / 20).toFixed(1)
      : null;
  }

  extractSkills(section, selector) {
    return Array.from(section.querySelectorAll(selector)).map((el) =>
      el.textContent.trim()
    );
  }

  scrapeBestMatches() {
    const jobTileList = document.querySelector(
      'div[data-test="job-tile-list"]'
    );
    if (!jobTileList) return [];

    const sections = jobTileList.querySelectorAll("section");
    return Array.from(sections).map((section) => {
      const titleLink = section.querySelector("h3 a");

      return {
        title: titleLink?.innerText.trim() || "",
        url: titleLink?.href
          ? new URL(titleLink.href, window.location.origin).href
          : "",
        posted:
          section.querySelector('[data-test="posted-on"]')?.innerText.trim() ||
          "",
        type:
          section.querySelector('[data-test="job-type"]')?.innerText.trim() ||
          "",
        experienceLevel:
          section
            .querySelector('[data-test="contractor-tier"]')
            ?.innerText.trim() || "",
        duration:
          section.querySelector('[data-test="duration"]')?.innerText.trim() ||
          "",
        description:
          section
            .querySelector('[data-test="job-description-text"]')
            ?.innerText.trim() || "",
        skills: this.extractSkills(section, '[data-test="attr-item"]'),
        paymentVerified: !!section.querySelector(
          '[data-test="payment-verification-status"]'
        ),
        clientLocation:
          section
            .querySelector('[data-test="client-country"]')
            ?.innerText.trim()
            .replace(/\s+/g, " ") || "",
        clientSpent:
          section
            .querySelector(
              '[data-test="client-spendings"] [data-test="formatted-amount"]'
            )
            ?.innerText.trim() || "",
        rating: this.extractRating(section),
        proposals:
          section.querySelector('[data-test="proposals"]')?.innerText.trim() ||
          "",
        source: "best-match",
      };
    });
  }

  scrapeSearchResults() {
    const jobTileList = document.querySelector(
      'section[data-ev-label="search_result_impression"]'
    );
    if (!jobTileList) return [];

    const sections = jobTileList.querySelectorAll("article.job-tile");
    return Array.from(sections).map((section) => {
      const titleLink = section.querySelector("h2 a");

      return {
        title: titleLink?.innerText.trim() || "",
        url: titleLink?.href
          ? new URL(titleLink.href, window.location.origin).href
          : "",
        posted:
          section
            .querySelector('[data-test="job-pubilshed-date"]')
            ?.innerText.trim() || "",
        type:
          section
            .querySelector('[data-test="job-type-label"]')
            ?.innerText.trim() || "",
        experienceLevel:
          section
            .querySelector('[data-test="experience-level"]')
            ?.innerText.trim() || "",
        budget:
          section
            .querySelector('[data-test="is-fixed-price"]')
            ?.innerText.trim() || "",
        description:
          section
            .querySelector('[data-test="UpCLineClamp JobDescription"] p')
            ?.innerText.trim() || "",
        skills: this.extractSkills(section, ".air3-token-container button"),
        paymentVerified: !section.innerHTML.includes("Payment unverified"),
        clientLocation:
          section
            .querySelector('[data-test="location"] span')
            ?.innerText.trim() || "",
        clientSpent:
          section
            .querySelector('[data-test="total-spent"] strong')
            ?.innerText.trim() || "",
        rating: this.extractRating(section),
        proposals:
          section
            .querySelector('[data-test="proposals-tier"]')
            ?.innerText.trim() || "",
        source: "search-result",
      };
    });
  }

  async run() {
    this.bestMatches = this.scrapeBestMatches();
    this.searchResults = this.scrapeSearchResults();
  }

  getAllJobs() {
    return [...this.bestMatches, ...this.searchResults];
  }

  getGrouped() {
    return {
      bestMatches: this.bestMatches,
      searchResults: this.searchResults,
    };
  }
}

(async () => {
  const scraper = new UpworkJobScraper();
  await scraper.run();

  // console.log("🔎 Grouped Jobs:", scraper.getGrouped());
  // console.log("🧾 All Jobs Combined:", scraper.getAllJobs());
})();
