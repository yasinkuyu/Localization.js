# Localization.js
Create multi-language structure with Javascript


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
