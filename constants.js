const pageDetail = {
    userDataDir:"./data",
    url: "https://www.mobile.de/?lang=en",
    login:{
        url:"https://www.mobile.de/api/auth/login?cf_template=OTP&source_uri=https%3A%2F%2Fwww.mobile.de%2F",
        // url:"https://whatismyipaddress.com/",
        emailSelector:"#login-username",
        passwordSelector:"#login-password",
        submitSelector:"#login-submit",
        cookieSelector:"#mde-consent-modal-dialog > div.sc-jCbFiK.fIuaZF > div.sc-cBYhjr.jMPPDq > button",
    },
    searchInfoPage: {
        url: "https://suchen.mobile.de/goto/fahrzeuge/mymobile/searchOverview.html",
        selector:"#root > header > div.q2OrQ > div.VwijT > div > div.dmhtY > span:nth-child(2) > span",
        // searchItemParentSelector: "#saved-searches-tab_72572_panel > div > section > div",
        searchItemParentSelector:{
            start:"saved-searches-tab_",
            end:"_panel",
            extra:"div > section > div > *"
        },
        searchLinkRelative:"div.OSgOk > div > a.ueuGs.FWtU1.CCaE2.vfGGm",
        seachEditLink(i){
            return `#saved-searches-tab_45073_panel > div > section > div > div:nth-child(${i}) > ${this.searchLinkRelative}`;
        },
        eachPage:{
            selector:{
                name:"#root > div > article:nth-child(7) > section > div > div > div.GYtzH > div > div > input",
                basicData:{
                    marke:"#make-incl-0",
                    modell:"#model-incl-0",
                    extraInput:"#section-basicData > section > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div > input",
                    //preis
                    price:{
                        // von
                        from:"#section-basicData > section > div > div.twIII > div > div:nth-child(1) > div > div > div.KN56P.wM_tn.NeA3T > input",
                        
                        // bis
                        until:"#section-basicData > section > div > div.twIII > div > div.GW_a6.k53Mm > div > div > div.KN56P.wM_tn.NeA3T > input"
                    },
                    //Erstzulassung
                    initialRegistration:{
                        // von
                        from:"#section-basicData > section > div > div.lRiEb > div.cnWMh > div:nth-child(1) > div > div:nth-child(1) > div > div > div.KN56P.wM_tn.NeA3T > input",
                        // bis
                        until:"#section-basicData > section > div > div.lRiEb > div.cnWMh > div:nth-child(1) > div > div.GW_a6.k53Mm > div > div > div.KN56P.wM_tn.NeA3T > input"
                    },
                    //Kilometerstand
                    mileage:{
                        // von
                        from:"#section-basicData > section > div > div.lRiEb > div.cnWMh > div:nth-child(2) > div > div:nth-child(1) > div > div > div.KN56P.wM_tn.NeA3T > input",
                        // bis
                        until:"#section-basicData > section > div > div.lRiEb > div.cnWMh > div:nth-child(2) > div > div.GW_a6.k53Mm > div > div > div.KN56P.wM_tn.NeA3T > input"
                    },
                    //Kraftstoffart
                    fuelType:{
                        parent:"#section-techData > section > div > div:nth-child(1) > div > ul ",
                        checkbox(i){
                            return `#section-techData > section > div > div:nth-child(1) > div > ul > li:nth-child(${i}) > div > label > input`
                        },
                        checkboxSelectorRelative:"div > label > input"
                    },
                    //Material der Innenausstattung

                    interiorMaterial:{
                        parent:"#section-interiorFeatures > section > div > div:nth-child(2) > div > ul",
                        checkbox(i){
                            return `#section-interiorFeatures > section > div > div:nth-child(2) > div > ul > li:nth-child(${i}) > div > div > label > input`
                        },
                        checkboxSelectorRelative:"div > div > label > input"
                    }

                }
            }
        }

    },
}


module.exports = {
    pageDetail
}