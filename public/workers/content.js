const jobs = [];

const fetchBestMatches = async () => {
  const jobTileList = document.querySelector('div[data-test="job-tile-list"]');
  if (jobTileList) {
    const sections = jobTileList.querySelectorAll("section");

    sections.forEach((section) => {
      const titleLink = section.querySelector("h3 a");
      const title = titleLink?.innerText.trim() || "";
      const url = titleLink?.href
        ? new URL(titleLink.href, window.location.origin).href
        : "";

      const posted =
        section.querySelector('[data-test="posted-on"]')?.innerText.trim() ||
        "";
      const type =
        section.querySelector('[data-test="job-type"]')?.innerText.trim() || "";
      const experienceLevel =
        section
          .querySelector('[data-test="contractor-tier"]')
          ?.innerText.trim() || "";
      const duration =
        section.querySelector('[data-test="duration"]')?.innerText.trim() || "";

      const description =
        section
          .querySelector('[data-test="job-description-text"]')
          ?.innerText.trim() || "";

      const skills = Array.from(
        section.querySelectorAll('[data-test="attr-item"]')
      ).map((el) => el.textContent.trim());

      const paymentVerified = !!section.querySelector(
        '[data-test="payment-verification-status"]'
      );

      const clientLocation =
        section
          .querySelector('[data-test="client-country"]')
          ?.innerText.trim()
          .replace(/\s+/g, " ") || "";

      const clientSpent =
        section
          .querySelector(
            '[data-test="client-spendings"] [data-test="formatted-amount"]'
          )
          ?.innerText.trim() || "";

      const ratingEl = section.querySelector(".air3-rating-foreground");
      const rating = ratingEl
        ? (ratingEl.style.width.replace("%", "") / 20).toFixed(1)
        : null;

      const proposals =
        section.querySelector('[data-test="proposals"]')?.innerText.trim() ||
        "";

      jobs.push({
        title,
        url,
        posted,
        type,
        experienceLevel,
        duration,
        description,
        skills,
        paymentVerified,
        clientLocation,
        clientSpent,
        rating,
        proposals,
      });
    });
  }
};

const fetchSearchResults = async () => {};

fetchBestMatches();
fetchSearchResults();

console.log(jobs);
