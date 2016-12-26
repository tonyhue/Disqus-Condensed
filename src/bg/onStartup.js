// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("Thanks for installing Disqus Condensed!");
        
        // open new tab to Disqus Home
        chrome.tabs.create({url: "https://disqus.com/home/"}, function (tab) {	console.log("Hello, Disqus Home.");	});
    } else if(details.reason == "update"){
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    }
});