var pattern = "https://www.amazon.de/*";
var affiliateParams = "ref=as_li_ss_tl?_encoding=UTF8&camp=1638&creative=19454&linkCode=ur2&site-redirect=de&tag=minkorrekt-21";

function redirect(requestDetails) {
  var url = requestDetails.url;
  if (url.indexOf(affiliateParams) === -1) {
    var redirectUrl = "https://www.amazon.de/" + affiliateParams;
    return {
      redirectUrl: redirectUrl
    };
  }
  return {}
}

console.log('initializing minkorrekt addon');
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {
    urls:[pattern],
    types: ["main_frame"]
  },
  ["blocking"]
);
