# Localization.js
Localization.js is (native) Javascript base Localization library.

##Usage

        // Define language elements
        var locales = {
            "tr_TR": {
                "homepage": "Anasayfa",
                "info": "Bilgi",
                "help": "Yardım"
            },
            "en_US": {
                "homepage": "Homepage",
                "info": "Info",
                "help": "Help"
            }
        };
        
        var loc = new Localization();
            loc.set(locales);
        
            console.log(loc.get("homepage"));


#Contribution
Fork & Pull Request

#License
The MIT License

Create multi-language structure with ASP.NET MVC

https://github.com/yasinkuyu/Localization

Created 2015 Yasin Kuyu - @yasinkuyu
