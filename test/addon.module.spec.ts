import { Addon } from '../src/addon.module';
const affiliateTag = 'tag=minkorrekt-21';

describe('Addon', function() {
    const addon = new Addon();
    it('should be defined', function() {
        expect(addon).toBeDefined();
    });

    it('should add the affiliate parameter to a product url that has query parameters', function() {
        var productUrl = 'https://www.amazon.de/gp/product/B01M2WP0FI/ref=s9u_awsm_gw_i1?ie=UTF8&pd_rd_i=B01M2WP0FI&pd_rd_r=5e439293-11cb-11e8-bda9-4b799b7f517d&pd_rd_w=ji1Jb&pd_rd_wg=ZIqYq&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=&pf_rd_r=ZPR7VQ2SFTRDVFABC05Y&pf_rd_t=36701&pf_rd_p=1c175abe-9bc7-490b-bbe1-2caf7e752c98&pf_rd_i=desktop'
        var requestDetails = {
            url: productUrl
        }
        var expectedUrl = productUrl + '&' + affiliateTag
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual( { redirectUrl: expectedUrl });
    });

    it('should add the affiliate parameter to a product url that does not have query parameters', function() {
        var productUrl = 'https://www.amazon.de/gp/product/B01M2WP0FI/ref=s9u_awsm_gw_i1'        
        var requestDetails = {
            url: productUrl
        }
        var expectedUrl = productUrl + '?' + affiliateTag
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual( { redirectUrl: expectedUrl });
    });

    it('should add the affiliate parameter to a dp product url /w seo segment that has query parameters', function() {
        var productUrl = 'https://www.amazon.de/Schiesser-Damen-Bademantel-selected-premium/dp/B013LLIHOK/ref=sr_1_1?m=A3JWKAKR8XB7XF&s=apparel&ie=UTF8&qid=1518644796&sr=1-1&refinements=p_8%3A10-%2Cp_6%3AA3JWKAKR8XB7XF'
        var requestDetails = {
            url: productUrl
        }
        var expectedUrl = productUrl + '&' + affiliateTag
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual( { redirectUrl: expectedUrl });
    });

    it('should add the affiliate parameter to a dp product url /w seo segment that has no query parameters', function() {
        var productUrl = 'https://www.amazon.de/Schiesser-Damen-Bademantel-selected-premium/dp/B013LLIHOK/ref=sr_1_1'
        var requestDetails = {
            url: productUrl
        }
        var expectedUrl = productUrl + '?' + affiliateTag
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual( { redirectUrl: expectedUrl });
    });

    it('should add the affiliate parameter to a dp product url /wo seo segment that has no query parameters', function() {
        var productUrl = 'https://www.amazon.de/dp/B013LLIHOK/ref=sr_1_1'
        var requestDetails = {
            url: productUrl
        }
        var expectedUrl = productUrl + '?' + affiliateTag
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual( { redirectUrl: expectedUrl });
    });

    it('should add the affiliate parameter to a dp product url /wo seo segment that has query parameters', function() {
        var productUrl = 'https://www.amazon.de/dp/B0749ZSPP6/ref=gw_aucc_rd_qh-work?pf_rd_p=65b559dd-fe83-4a24-9fcf-cdb0c7fa98c8&pf_rd_r=W4YHRMNBJTBE6BE832S5'
        var requestDetails = {
            url: productUrl
        }
        var expectedUrl = productUrl + '&' + affiliateTag
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual( { redirectUrl: expectedUrl });
    });

    it('should not add affiliate parameter to homepage', function() {
        var url = 'https://www.amazon.de/'        
        var requestDetails = {
            url: url
        }
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual({ });
    });

    it('should not add affiliate parameter to search pages', function() {
        var searchUrl = 'https://www.amazon.de/s/ref=nb_sb_noss?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=minkorrekt'        
        var requestDetails = {
            url: searchUrl
        }
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual({ });
    });

    it('should not redirect google page', function() {
        var searchUrl = 'https://www.google.de/gp/product/'        
        var requestDetails = {
            url: searchUrl
        }
        var redirectedUrl = addon.redirectListener(requestDetails);
        expect(redirectedUrl).toEqual({ });
    });
    
});
