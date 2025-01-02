chrome.webNavigation.onHistoryStateUpdated.addListener( (details) => {
  if (
    details.url &&
    details.url.startsWith('https://www.youtube.com/watch')
  ) {
    chrome.scripting.insertCSS({
      target: {tabId: details.tabId},
      files: ['style/style.css'],
    });
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['content_script/content_script.js'],
    });
  }
});
