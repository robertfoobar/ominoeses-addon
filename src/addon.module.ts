const tagParameter = 'tag=minkorrekt-21';

export class Addon  {
  
  public redirectListener = (requestDetails) => {
    const url = requestDetails.url;
    if (this.isAmazonProduct(url) && !this.isAffiliate(url)) {
      if (this.hasQueryParams(url)) {
        return {
          redirectUrl: `${url}&${tagParameter}`
        };
      }
      return {
        redirectUrl: `${url}?${tagParameter}`
      }      
    }
    return {} // no redirect
  };

  private isAmazonProduct(url: string) {
    return /amazon\.de\/(.+\/)?[a-zA-Z0-9]{10}\/.+/.test(url);
  }

  private isAffiliate(url: string) {
     return /[\?&]tag=/.test(url);
  }

  private hasQueryParams(url: string) {
    return url.split('?').length > 1
  }
}  
