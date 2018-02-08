let addon = {};

addon.staticParams = {
  ref: "as_li_ss_tl",
  _encoding: "UTF8",
  ie: "UTF8"
};

addon.affiliateParams = {
  camp: "1638",
  linkCode: "ur2",
  tag: "minkorrekt-21"
};

addon.redirect = (requestDetails) => {
  var url = requestDetails.url;
  var overriddenUrl = addon.addOrOverrideParameterValues(url, addon.affiliateParams);

  if (url.indexOf(addon.affiliateParams.tag) === -1) {
    return {
      redirectUrl: overriddenUrl
    };
  }
  return {}
}

addon.addOrOverrideParameterValues = (url, affiliateParams) => {
  var split = url.split("?");
  if (split.length == 2) {
    var hostAndPath = split[0];
    var queryParams = split[1];
    var parameters = addon.getParameters(queryParams);
    var mergedQueryParameters = addon.mergeParameters(parameters, affiliateParams);
    return addon.appendParameters(hostAndPath, mergedQueryParameters);
  }
  return addon.appendParameters(url, affiliateParams);
}

addon.getParameters = (queryParams) => {
  var paramObj = {};
  var listOfParamStatements = queryParams.split('&');
  for (let paramStatement of listOfParamStatements) {
    var parameterName = paramStatement.split('=')[0];
    var parameterValue = paramStatement.split('=')[1];
    paramObj[parameterName] = parameterValue;
  }
  return paramObj;
}

addon.mergeParameters = (sourceParameters, targetParameters, override) => {
  var parameters = {}
  for (let key in sourceParameters) {
    parameters[key] = sourceParameters[key];
  }
  for (let targetKey in targetParameters) {
    if (typeof parameters[targetKey] !== 'undefined') {
      if (override) {
        parameters[targetKey] = targetParameters[targetKey] 
      }
      continue;
    }
    parameters[targetKey] = targetParameters[targetKey];
  }
  return parameters;
}

addon.appendParameters = (hostAndPath, parameters) => {
  var queryString = '?';
  for (let param in parameters) {
    queryString += param + '=' + parameters[param] + '&';
  }
  queryString = queryString.substring(0, queryString.length - 2);
  return hostAndPath + queryString;
}

if (typeof browser !== 'undefined') {
  browser.webRequest.onBeforeRequest.addListener(
    addon.redirect,
    {
      urls:["https://www.amazon.de/*"],
      types: ["main_frame"]
    },
    ["blocking"]
  );
}

window.addon = addon;

console.log('addon: ' + addon);
