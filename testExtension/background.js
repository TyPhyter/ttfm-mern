chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.");
    });
});

console.log('hey');
// chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//     chrome.declarativeContent.onPageChanged.addRules([{
//         conditions: [new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: 'developer.chrome.com' },
//         })
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
// });

chrome.browserAction.onClicked.addListener(function() {
    //this won't run as long as we have a popup defined for the action
});