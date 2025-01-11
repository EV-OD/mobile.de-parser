const pageDetail = {
    url: "https://www.mobile.de/?lang=en",
    login:{
        url:"https://www.mobile.de/api/auth/login?cf_template=OTP&source_uri=https%3A%2F%2Fwww.mobile.de%2F",
        // url:"https://whatismyipaddress.com/",
        emailSelector:"#login-username",
        passwordSelector:"#login-password",
        submitSelector:"#login-submit",
        cookieSelector:"#mde-consent-modal-dialog > div.sc-jCbFiK.fIuaZF > div.sc-cBYhjr.jMPPDq > button",
    }
}


module.exports = {
    pageDetail
}