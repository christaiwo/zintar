const ORIGIN = "https://www.upwork.com";

// Set the behavior for the action icon to toggle the side panel
chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
});

// Listener to enable/disable the side panel based on the URL
chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);

  if (url.origin === ORIGIN) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: "index.html",
      enabled: true,
    });
  } else {
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false,
    });
  }
});
