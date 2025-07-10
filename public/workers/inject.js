// inject.js

// Wait for the target to exist in the DOM
const waitForElement = (selector, callback) => {
  const observer = new MutationObserver(() => {
    const target = document.querySelector(selector);
    if (target) {
      observer.disconnect();
      callback(target);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

// Function to inject the button
function injectReactButton(targetElement) {
  if (document.getElementById("my-extension-button-container")) return;

  const container = document.createElement("div");
  container.id = "my-extension-button-container";
  container.style.marginTop = "10px";

  targetElement.appendChild(container);

  // Dynamically load your React bundle (if needed)
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("buttonBundle.js"); // this is the compiled React component
  script.onload = () => {
    // Your React component should mount itself to #my-extension-button-container
  };

  document.body.appendChild(script);
}

// Start the process
waitForElement("div.form-group.mb-8x", injectReactButton);
