const pageDetail = {
    url: "https://www.mobile.de/?lang=en",
    login:{
        url:"https://id.mobile.de/login?service=https%3A%2F%2Fid.mobile.de%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Dmobile_web_DL1WJUPw%26redirect_uri%3Dhttps%253A%252F%252Fwww.mobile.de%252Fapi%252Fauth%252FloginCallback%253F%26response_type%3Dcode%26response_mode%3Dquery%26client_name%3DCasOAuthClient&lang=de&cf_template=OTP&state=eyJybmQiOiJfdEZlTUNtOE5OWUVSWk9US3BOem02T01sejVaVFQ3cVUyQkhVR3A4Z2Y4Iiwic3JjIjoiaHR0cHM6Ly93d3cubW9iaWxlLmRlLyIsImNmIjoiT1RQIn0%3D&nonce=s1SH0paVkxwLExQNURUMo2JOnEKhF3nf2Ks_XCZBwf0&scope=openid",
        emailSelector:"#login-username",
        passwordSelector:"#login-password",
        submitSelector:"#login-submit",
        cookieSelector:"#mde-consent-modal-dialog > div.sc-jCbFiK.fIuaZF > div.sc-cBYhjr.jMPPDq > button",
        
    }
}


module.exports = {
    pageDetail
}