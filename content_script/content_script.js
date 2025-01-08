{
  let bannerIdSelector = '#clarify-box'
  let closeButtonId = 'close-fact-checker-button'

  // Create a MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver(findDivElement);
  setTimeout(function () {
    console.log('Could not find fact checker banner.');
    observer.disconnect();
  }, 10000);

  // Configure the observer to listen for changes in the entire document
  const observerConfig = {
    childList: true,
    subtree: true,
  };

  // Start observing the document
  observer.observe(document, observerConfig);

  const closeFactCheckerBanner = () => {
    const divElement = document
      .querySelector(bannerIdSelector)

    divElement.remove()
  };

  const addCloseButton = (divElement) => {
    let button = document.createElement('button');
    button.className = 'ourButton';
    button.type = 'button';
    button.innerHTML = '\u{274C}';
    button.id = closeButtonId

    button.addEventListener('click', closeFactCheckerBanner);
    divElement.querySelector('#header-menu')?.children[0]?.appendChild(button);
  };

  function findDivElement() {
    // console.log('searching...')
    
    const divElement = document
      .querySelector(bannerIdSelector)

    if (divElement) {
      chrome.storage.sync.get('autoClose', function(data) {
        if (data.autoClose) {
          closeFactCheckerBanner();
        } else {
          addCloseButton(divElement);
        }
      });

      observer.disconnect();
    }
  }
}
