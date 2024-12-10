/// <reference types="chrome" />

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'add',
    title: 'Add word to flashCard',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'add' && tab?.id) {
    console.log('XD1');
    console.log(info);
    console.log(tab);
    chrome.tabs.sendMessage(tab.id, { text: info.selectionText });
  } else {
    console.log('XD2');
    chrome.tabs.sendMessage(1, { text: 'TEXT TEST XDDD' });
  }
});
