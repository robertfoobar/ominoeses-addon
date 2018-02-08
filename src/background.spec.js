describe('Minkorrekt Background', function() {
   
    it('should be defined', function() {
        expect(window.addon).toBeDefined();
    });
    it('should redirect amazon homepage', function() {
        var requestDetails = {
            url: 'https://www.amazon.de'
        }
        var redirectedUrl = window.addon.redirect(requestDetails);
        expect(redirectedUrl).toEqual('https://www.amazon.de/');
    });
});
