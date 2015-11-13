/**
 * Insya Localization.js Library
 *
 * Create multi-language structure with Javascript
 * Localization.js is (native) Javascript base Localization library.
 * Author: Yasin Kuyu (github.com/yasinkuyu)
 * insya.com
 * v.0.5 source
 */
(function() {

    this.Localization = function() {

        this.currentLang = getCurrentLanguage();
        this.defaultLang = 'en_US';

        // Language collections
        var locales = {
            "tr_TR": {
                "homepage": "Anasayfa",
                "info": "Bilgi",
                "help": "Yardım"
                // or more...
            },
            "en_US": {
                "homepage": "Homepage",
                "info": "Info",
                "help": "Help"
                // or more...
            }
        };

        // Define option defaults
        var defaults = {
            defaultLang: this.defaultLang
        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = mergeArguments(defaults, arguments[0]);
        }

    }

    // #Public Methods

    /*  
    * @param slug  ->  homepage: "Anasayfa"
    */    
    Localization.prototype.get = function(slug) {
        return get(slug, this);
    }

    /*  
    * @param slug  ->  homepage: "Anasayfa"
    */
    Localization.prototype.localize = function(slug) {
        return get(slug);
    }
    
    /*  
    * return tr_TR, en_US
    */
    Localization.prototype.browserLang = function() {
        return rename(getBrowserLanguage());
    }
        
    /*  
    * @param setLang("tr_TR")
    */
    Localization.prototype.setLang = function(lang) {
        setCookie('lang', lang);
    } 
    
    Localization.prototype.set = function(locales) {
        if( typeof locales !== undefined){
            
            // is not defined marge arguments
            this.locales = mergeArguments(this.locales, locales);
        } 
    }

    // #Private Methods
  
    function mergeArguments(source, properties) {
        var property;
        for (property in properties) {
          if (properties.hasOwnProperty(property)) {
            source[property] = properties[property];
          }
        }
        return source;
    }
    
    function get(slug, _this){
        
        var lang;
        
        if(typeof _this.currentLang != "undefined") {
            lang = _this.currentLang;
        }else{
            lang = _this.defaultLang;
        }
            
        return locales[lang][slug];
    }

    function getCurrentLanguage() {
        var language = this.currentLang || getQueryParam(location.search, 'CacheLang') || getCookie('CacheLang') || getBrowserLanguage();
        return rename(language);
    }

    function getBrowserLanguage() {
        return (navigator.language || navigator.browserLanguage || navigator.userLanguage);
    }

    function getQueryParam(queryString, target) {
        var params, i, param;
        queryString = location.search.split('?')[1];
        if (queryString) {
            params = queryString.split('&');
            if (params) {
                for (i = 0; i < params.length; ++i) {
                    param = params[i].split('=');
                    if (param[0] === target) return param[1];
                }
            }
        }
        return null;
    }

    function rename(lang) {
        lang = lang.split('_');
        if (lang.length == 1) {
            lang = lang[0].split('-');
        }
        return lang[0].toLowerCase() + '_' + lang[1].toUpperCase();
    }

    function setCookie(name, value) {
        document.cookie = name + "=" + encodeURIComponent(value);
    }

    function getCookie(name) {
        var arg = name + "=",
            i = 0,
            j = 0,
            index;
        while (i < document.cookie.length) {
            j = i + arg.length;
            if (document.cookie.substring(i, j) === arg) {
                return getCookieValue.call(this, j);
            }
            index = document.cookie.indexOf(" ", i);
            if (index === -1) {
                return null;
            }
            i = 1 + index;
        }
        return null;
    }

    function getCookieValue(offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return encodeURIComponent(document.cookie.substring(offset, endstr));
    }

}());
