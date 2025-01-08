document.getElementById("auto-close").addEventListener("click", saveAutoClose);

chrome.storage.sync.get('autoClose', function(data) {
    let toggle = document.getElementById("auto-close-checkbox")
    toggle.checked = data.autoClose
});

function saveAutoClose() {
    let toggle = document.getElementById("auto-close-checkbox")
    chrome.storage.sync.set({ autoClose: toggle.checked });
}