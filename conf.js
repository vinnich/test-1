exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub/',

    capabilities: {
        'browserName': 'chrome'
    },


    onPrepare: function(){
        global.dvr = browser.driver;
        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };
    },
    specs: ['qatest-spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        //defaultTimeoutInterval: 50000
    }
};