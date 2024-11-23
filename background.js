const pattern = '*://www.reddit.com/*'

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);

  return {
    redirectUrl: requestDetails.url.replace('www.', 'new.'),
  };
}

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  {
    urls: [pattern],
  },
  ['blocking']
);
