export class Addon  {
    
  private staticParams = {
      ref: "as_li_ss_tl",
      _encoding: "UTF8",
      ie: "UTF8"
  };
  
  private affiliateParams = {
    camp: "1638",
    linkCode: "ur2",
    tag: "minkorrekt-21"
  };
  
  public redirect = (requestDetails) => {
    const url = requestDetails.url;
    const overriddenUrl = this.addOrOverrideParameterValue(url, this.affiliateParams);

    if (url.indexOf(this.affiliateParams.tag) === -1) {
      return {
        redirectUrl: overriddenUrl
      };
    }
    return {}
  };
  
  private addOrOverrideParameterValue = (url, affiliateParams) => {
    const split = url.split("?");
    if (split.length == 2) {
      const hostAndPath = split[0];
      const queryParams = split[1];
      const parameters = this.getParameters(queryParams);
      const mergedQueryParameters = this.mergeParameters(parameters, affiliateParams);
      return this.appendParameters(hostAndPath, mergedQueryParameters);
    }
    return this.appendParameters(url, affiliateParams);
    }
  
  private getParameters = (queryParams) => {
    var paramObj = {};
    var listOfParamStatements = queryParams.split('&');
    for (let paramStatement of listOfParamStatements) {
      var parameterName = paramStatement.split('=')[0];
      var parameterValue = paramStatement.split('=')[1];
      paramObj[parameterName] = parameterValue;
    }
    return paramObj;
  }
  
  private mergeParameters = (sourceParameters, targetParameters, override = false) => {
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
  
  private appendParameters = (hostAndPath, parameters) => {
    var queryString = '?';
    for (let param in parameters) {
      queryString += param + '=' + parameters[param] + '&';
    }
    queryString = queryString.substring(0, queryString.length - 2);
    return hostAndPath + queryString;
  }  
}  
  