import React from "react";
import { createRoot } from "react-dom/client";
import GenerateProposalModal from "./components/injects/GenerateProposalModal";

// Inject compiled Tailwind CSS (zintar.css) into the host page
const style = document.createElement("link");
style.rel = "stylesheet";
style.type = "text/css";
style.href = chrome.runtime.getURL("zintar.css"); // Make sure this path matches the build output
document.head.appendChild(style);

let reactRoot: ReturnType<typeof createRoot> | null = null;

function injectButton() {
  const attachmentsAreaDiv = document.querySelector(
    "div.attachments-area.mt-6x"
  );

  if (
    attachmentsAreaDiv &&
    !document.getElementById("my-injected-button-container")
  ) {
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "my-injected-button-container";

    // Insert the container BEFORE the attachments area
    attachmentsAreaDiv.parentElement?.insertBefore(
      buttonContainer,
      attachmentsAreaDiv
    );

    // Create a React root and render your component
    reactRoot = createRoot(buttonContainer);
    reactRoot.render(
      <React.StrictMode>
        <GenerateProposalModal />
      </React.StrictMode>
    );

    return true;
  } else if (document.getElementById("my-injected-button-container")) {
    return true;
  } else {
    return false;
  }
}

// --- Injection Logic with MutationObserver ---

// Use a MutationObserver to watch for DOM changes,
// especially common in SPAs where elements load dynamically.
const observer = new MutationObserver(() => {
  const injected = injectButton();
  if (injected) {
  }
});

observer.observe(document.body, { childList: true, subtree: true });
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    injectButton();
  });
} else {
  injectButton();
}
