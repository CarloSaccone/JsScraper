import fetch from "node-fetch";

const getToken = async (lastToken) => {
  let newToken = { ...lastToken };

  if (!newToken.expiredate) {
    newToken.expiredate = new Date();
    newToken.expiredate.setSeconds(
      newToken.expiredate.getSeconds() + newToken.expires_in
    );
  }

  if (newToken.expiredate <= new Date()) {
    console.log("Refreshing token...");
    var response = await fetch(
      "https://auth.reedexpo.com/secure/connect/token",
      {
        credentials: "omit",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0",
          Accept: "*/*",
          "Accept-Language": "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3",
          "Content-Type": "application/x-www-form-urlencoded",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
        },
        referrer: "https://www.mipim.com/",
        body:
          "refresh_token=" +
          lastToken.refresh_token +
          "&grant_type=refresh_token&client_id=RX-AUTH-CL-Pkce01",
        method: "POST",
        mode: "cors",
      }
    );
    console.log("response.status", response.status);

    if (response.status !== 200) return null;

    const refreshedToken = await response.json();
    newToken = refreshedToken;
    newToken.expiredate = new Date();
    newToken.expiredate.setSeconds(
      newToken.expiredate.getSeconds() + newToken.expires_in
    );
  } else {
    console.log("No need to refresh token...");
  }
  return newToken;
};

export default getToken;
