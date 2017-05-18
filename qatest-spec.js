beforeEach(function(){
    isAngularSite(false);
});

afterEach(function(){

});

describe('asos acceptance test ', function(){

    it('search for yellow t shirts in Australian store',function(){
        browser.get('http://www.asos.com/');
        dvr.sleep(1000);
        dvr.findElement(by.css('.menu-arrow')).click();
        dvr.sleep(100);
        dvr.findElement(by.css('li.site-selector-9 > a')).click();
        dvr.findElement(by.id('txtSearch')).sendKeys('yellow t shirts');
        dvr.findElement(by.css('.go > span')).click();
        var search = dvr.findElement(by.css('.search-term'));
        expect(search.getText()).toEqual('Yellow T Shirts');

    });

    it('should search for purple t shirts', function () {
        browser.get('http://www.asos.com/');
        dvr.findElement(by.id('txtSearch')).sendKeys('purple t shirts');
        dvr.findElement(by.css('.go > span')).click();
        dvr.sleep(100);
        var result = dvr.findElement(by.css('.search-term'));
        expect(result.getText()).toEqual('Purple T Shirts');

    });

    it('search for yellow t shirts in Australian store in NZD currency',function(){
        browser.get('http://www.asos.com/');
        dvr.findElement(by.css('.menu-arrow')).click();
        dvr.sleep(100);
        dvr.findElement(by.css('li.site-selector-9 > a')).click();
        dvr.findElement(by.css('.menu-arrow')).click();
        dvr.sleep(100);
        dvr.findElement(by.xpath('//*[@id="currencyList"]/option[2]')).click();
        var nzd = dvr.findElement(by.xpath('//*[@id="miniBagApp"]/div/div[1]/a/span[2]'));
        expect(nzd.getText()).toEqual('NZD$0.00');
    });

    it('search for yellow t shirts in Australian store and display images in 4 columns',function(){
        browser.get('http://www.asos.com/');
        dvr.findElement(by.css('.menu-arrow')).click();
        dvr.sleep(100);
        dvr.findElement(by.css('li.site-selector-9 > a')).click();
        dvr.findElement(by.id('txtSearch')).sendKeys('yellow t shirts');
        dvr.findElement(by.css('.go > span')).click();
        var search = dvr.findElement(by.css('.search-term'));
        expect(search.getText()).toEqual('Yellow T Shirts');
        dvr.findElement(by.css('.regular')).click();
        dvr.sleep(150);
        var lastImage = dvr.findElement(by.xpath('//*[@id="productlist-results"]/div/div[4]/ul/li[4]/a/div[1]/img'));
        lastImage.click();
    });
});

