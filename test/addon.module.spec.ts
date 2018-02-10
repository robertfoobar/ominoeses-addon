//import 'babel-polyfill';
import { Addon } from '../src/addon.module';

const affiliateLink = '?camp=1638&linkCode=ur2&tag=minkorrekt-21';

describe('Minkorrekt Background', function() {
    const addon = new Addon();
    it('should be defined', function() {
        expect(addon).toBeDefined();
    });

    it('should redirect amazon homepage', function() {
        var requestDetails = {
            url: 'https://www.amazon.de'
        }
        var redirectedUrl = addon.redirect(requestDetails);
        expect(redirectedUrl).toEqual( { redirectUrl: `https://www.amazon.de/${affiliateLink}` });
    });
});
