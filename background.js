const host = 'https://new.reddit.com'

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);

  // https://stackoverflow.com/questions/12065029/redirecting-url-in-a-chrome-extension
  return { redirectUrl: host + requestDetails.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1] };
}

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  {
    urls: [
      '*://reddit.com/',
      '*://reddit.com/r/*/comments/*',
      '*://www.reddit.com/',
      '*://www.reddit.com/r/*/comments/*',
    ],
  },
  ['blocking']
);
