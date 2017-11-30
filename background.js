chrome.pageAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	// body...
	console.log(tab);
	var msg = {
		txt: "hello"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}