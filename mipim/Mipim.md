https://www.mipim.com/en-gb/portal/participant-portal/participant-directory.html

curl 'https://api-f9b8414f-890d-44eb-aa5f-26f64d361813.sendbird.com/v3/users?token=&limit=20&user_ids=0a152d06-9d98-4daa-918e-f27d377a949f,90486712-8ddc-4ac5-bbb3-8568e4e2801d'
-H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0'
-H 'Accept: application/json, text/plain, _/_'
-H 'Accept-Language: it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3'
-H 'Accept-Encoding: gzip, deflate, br'
-H 'Referer: https://www.mipim.com/'
H 'SendBird: JS,Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0,3.1.13,F9B8414F-890D-44EB-AA5F-26F64D361813'
-H 'SB-User-Agent: JS%2Fc3.1.13%2F%2F'
-H 'Session-Key: 253a74e4decc85c89edb5bffe1828b66c4b9f572'
-H 'Request-Sent-Timestamp: 1678802676758'
-H 'Origin: https://www.mipim.com'
-H 'Connection: keep-alive'
-H 'Sec-Fetch-Dest: empty'
-H 'Sec-Fetch-Mode: cors'
-H 'Sec-Fetch-Site: cross-site'
-H 'TE: trailers'

curl 'https://api.reedexpo.com/graphql/' -X POST -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0' -H 'Accept: application/json' -H 'Accept-Language: it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Referer: https://www.mipim.com/' -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDQ0U3MDE0M0U2NkY0MzAwQzA5RTg1NTA2M0MyRUQ4NEQ2QzE1REZSUzI1NiIsIng1dCI6IjNNNXdGRDVtOURBTUNlaFZCand1MkUxc0ZkOCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVlZGV4cG8uY29tL3NlY3VyZSIsIm5iZiI6MTY3ODgwNjYwOSwiaWF0IjoxNjc4ODA2NjA5LCJleHAiOjE2Nzg4MDY5MDksImF1ZCI6WyJyb2xlcyIsImh0dHBzOi8vYXV0aC5yZWVkZXhwby5jb20vc2VjdXJlL3Jlc291cmNlcyJdLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6IlJYLUFVVEgtQ0wtUGtjZTAxIiwic3ViIjoiOTA0ODY3MTItOGRkYy00YWM1LWJiYjMtODU2OGU0ZTI4MDFkIiwiYXV0aF90aW1lIjoxNjc4ODA0NDE1LCJpZHAiOiJsb2NhbCIsInJ4UGFydGljaXBhbnQiOiJwYXItZmFjMzg4ODQtNTdkMS00MGU1LTk4YmUtMDQyMGQ0MjdmY2ZmIiwicnhBdGxhc0VlIjoiZXZlLTMyZjgyMGZjLTU4OTktNDE5NC1hYzI1LTFlNDg1MzM2ZGE4MyIsInNpZCI6IkZDREI0MTczN0NFQUQxRUNGM0RBMTVERUJGRDA3OTA2In0.DKvUg4yh4maVKy7YRhOxFL2BUwXW3fDYurDf_gizFPjYGNz-GuuMEuy4uf1NcTs0C00wKAgoTAf7ZKN1nzcdvkHiBCANKqwK64D3YCHg1gkOdNTBGirbVY7H2bP5853AQT_CCZNCA3Y9xlti4aCPy0yld6SsJ3dJtWRHAsH8bJRHHqwU-auTIiiVdPfUcNQDP-BIkjmukg3FUzT-ksRjQOruekakMvjjeNwEpN1LAIW7vhVMUOqN8LsDcld35YqJKmp5zPEpF2n-8G9pCTdzSH0jDRIhTiZSfNxPITYBexKgNUi15gst-LPT5AaBZnB64Ril00j745fRUWM5L-Wbng' -H 'X-ClientId: uhQVcmxLwXAjVtVpTvoerERiZSsNz0om' -H 'Content-Type: application/json' -H 'Origin: https://www.mipim.com' -H 'Connection: keep-alive' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers' --data-raw '{"query":"{\n participation(participationId: \"ptn-20b17c09-a9a5-4bda-af6d-47782ef276b9\") \n { \n id, firstName, lastName, middleName, phone, email, jobTitle, userId,\n showContactInformation,\n hideContactDetailsForEventEdition,\n countryCode, \n exhibitingOrganisationId, displayName, organisationId,\n photoKey,\n participantId,\n featureFilters { multilingualNames{ locale, name } },\n socialMedia {\n socialMediaType,\n url\n },\n profileResponses {\n questionId,\n questionText,\n questionShortDescription,\n answers {\n id,\n text\n }\n },\n groupedProfileResponses {\n type,\n profileResponse{\n answers {\n id,\n text\n }\n }\n },\n multilingual {\n locale,\n description\n }\n }\n }"}'

Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDQ0U3MDE0M0U2NkY0MzAwQzA5RTg1NTA2M0MyRUQ4NEQ2QzE1REZSUzI1NiIsIng1dCI6IjNNNXdGRDVtOURBTUNlaFZCand1MkUxc0ZkOCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVlZGV4cG8uY29tL3NlY3VyZSIsIm5iZiI6MTY3ODgwNjYwOSwiaWF0IjoxNjc4ODA2NjA5LCJleHAiOjE2Nzg4MDY5MDksImF1ZCI6WyJyb2xlcyIsImh0dHBzOi8vYXV0aC5yZWVkZXhwby5jb20vc2VjdXJlL3Jlc291cmNlcyJdLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6IlJYLUFVVEgtQ0wtUGtjZTAxIiwic3ViIjoiOTA0ODY3MTItOGRkYy00YWM1LWJiYjMtODU2OGU0ZTI4MDFkIiwiYXV0aF90aW1lIjoxNjc4ODA0NDE1LCJpZHAiOiJsb2NhbCIsInJ4UGFydGljaXBhbnQiOiJwYXItZmFjMzg4ODQtNTdkMS00MGU1LTk4YmUtMDQyMGQ0MjdmY2ZmIiwicnhBdGxhc0VlIjoiZXZlLTMyZjgyMGZjLTU4OTktNDE5NC1hYzI1LTFlNDg1MzM2ZGE4MyIsInNpZCI6IkZDREI0MTczN0NFQUQxRUNGM0RBMTVERUJGRDA3OTA2In0.DKvUg4yh4maVKy7YRhOxFL2BUwXW3fDYurDf_gizFPjYGNz-GuuMEuy4uf1NcTs0C00wKAgoTAf7ZKN1nzcdvkHiBCANKqwK64D3YCHg1gkOdNTBGirbVY7H2bP5853AQT_CCZNCA3Y9xlti4aCPy0yld6SsJ3dJtWRHAsH8bJRHHqwU-auTIiiVdPfUcNQDP-BIkjmukg3FUzT-ksRjQOruekakMvjjeNwEpN1LAIW7vhVMUOqN8LsDcld35YqJKmp5zPEpF2n-8G9pCTdzSH0jDRIhTiZSfNxPITYBexKgNUi15gst-LPT5AaBZnB64Ril00j745fRUWM5L-Wbng

curl 'https://api.reedexpo.com/graphql/' -X POST -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0' -H 'Accept: application/json' -H 'Accept-Language: it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Referer: https://www.mipim.com/' -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDQ0U3MDE0M0U2NkY0MzAwQzA5RTg1NTA2M0MyRUQ4NEQ2QzE1REZSUzI1NiIsIng1dCI6IjNNNXdGRDVtOURBTUNlaFZCand1MkUxc0ZkOCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVlZGV4cG8uY29tL3NlY3VyZSIsIm5iZiI6MTY3ODgwNzMzNiwiaWF0IjoxNjc4ODA3MzM2LCJleHAiOjE2Nzg4MDc2MzYsImF1ZCI6WyJyb2xlcyIsImh0dHBzOi8vYXV0aC5yZWVkZXhwby5jb20vc2VjdXJlL3Jlc291cmNlcyJdLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6IlJYLUFVVEgtQ0wtUGtjZTAxIiwic3ViIjoiOTA0ODY3MTItOGRkYy00YWM1LWJiYjMtODU2OGU0ZTI4MDFkIiwiYXV0aF90aW1lIjoxNjc4ODA0NDE1LCJpZHAiOiJsb2NhbCIsInJ4UGFydGljaXBhbnQiOiJwYXItZmFjMzg4ODQtNTdkMS00MGU1LTk4YmUtMDQyMGQ0MjdmY2ZmIiwicnhBdGxhc0VlIjoiZXZlLTMyZjgyMGZjLTU4OTktNDE5NC1hYzI1LTFlNDg1MzM2ZGE4MyIsInNpZCI6IkZDREI0MTczN0NFQUQxRUNGM0RBMTVERUJGRDA3OTA2In0.kXKWkX6W15Gs9JWDFXQMGRCnwokqR571MaR16CJPqCD6ibCTKSUXWRrqlhaWs6FaOpOFxC9SY71LHgHge03nsREsQ0_zqV0nNIq3UARQpC407OMjh2vfHizZi1DbF8WnPaFxpXGJfFtBkIan7ErMXL_Wns25egDlMQuYTlpxyKUTvtuljkVMSyfGaWdhqeoCxQLuyiHpLCCaJR0FXpF7dd3QlyrZH4iaORqn0prGCJWMVZRdgGI3mx2PntoBX-3zGMu7F0Hkt5xuc8g65itJczaH08JiZkSZWRFlkQPCRTzxZoRO7PRxVNc7iojTvvt64BVvQd5joFEkEYcnh6txAA' -H 'X-ClientId: uhQVcmxLwXAjVtVpTvoerERiZSsNz0om' -H 'Content-Type: application/json' -H 'Origin: https://www.mipim.com' -H 'Connection: keep-alive' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' -H 'TE: trailers' --data-raw '{"query":"{\n participation(participationId: \"ptn-20b17c09-a9a5-4bda-af6d-47782ef276b9\") \n { \n id, firstName, lastName, middleName, phone, email, jobTitle, userId,\n showContactInformation,\n hideContactDetailsForEventEdition,\n countryCode, \n exhibitingOrganisationId, displayName, organisationId,\n photoKey,\n participantId,\n featureFilters { multilingualNames{ locale, name } },\n socialMedia {\n socialMediaType,\n url\n },\n profileResponses {\n questionId,\n questionText,\n questionShortDescription,\n answers {\n id,\n text\n }\n },\n groupedProfileResponses {\n type,\n profileResponse{\n answers {\n id,\n text\n }\n }\n },\n multilingual {\n locale,\n description\n }\n }\n }"}'

https://api.reedexpo.com/graphql/

await fetch("https://api.reedexpo.com/graphql/", {
"credentials": "include",
"headers": {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0",
"Accept": "application/json",
"Accept-Language": "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3",
"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDQ0U3MDE0M0U2NkY0MzAwQzA5RTg1NTA2M0MyRUQ4NEQ2QzE1REZSUzI1NiIsIng1dCI6IjNNNXdGRDVtOURBTUNlaFZCand1MkUxc0ZkOCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVlZGV4cG8uY29tL3NlY3VyZSIsIm5iZiI6MTY3ODgwNzgyMSwiaWF0IjoxNjc4ODA3ODIxLCJleHAiOjE2Nzg4MDgxMjEsImF1ZCI6WyJyb2xlcyIsImh0dHBzOi8vYXV0aC5yZWVkZXhwby5jb20vc2VjdXJlL3Jlc291cmNlcyJdLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6IlJYLUFVVEgtQ0wtUGtjZTAxIiwic3ViIjoiOTA0ODY3MTItOGRkYy00YWM1LWJiYjMtODU2OGU0ZTI4MDFkIiwiYXV0aF90aW1lIjoxNjc4ODA0NDE1LCJpZHAiOiJsb2NhbCIsInJ4UGFydGljaXBhbnQiOiJwYXItZmFjMzg4ODQtNTdkMS00MGU1LTk4YmUtMDQyMGQ0MjdmY2ZmIiwicnhBdGxhc0VlIjoiZXZlLTMyZjgyMGZjLTU4OTktNDE5NC1hYzI1LTFlNDg1MzM2ZGE4MyIsInNpZCI6IkZDREI0MTczN0NFQUQxRUNGM0RBMTVERUJGRDA3OTA2In0.Ze_OdykGmoZgtgyNu5vlC7aaOnAy_1De2HoD5zwfiIWsSUjNcHC3m_FGWOo9n9Bd0C2pUxmHSF38HW9aNDz0llqAhcgkUBz9tggM8nTGJC0A1Ih9ddLIOJ9CPN3fO_ur9pWx-dBNB9XFf61pua0RqsPhTGHxj23BjI08Qg6-DA-d6VPMlSpAiHpDxZYz9vrPUOe38CwLjwDOGQFzsXc4jSXTgwNkBoOgAS2D7AuvZFcyr6vw1Gw71l3Vbdg1vZj4bEGwfNiNBi70YH4NfoTzzgm588s1lCB7fCQjXCFNtZCsLaydbfQywQwV5_bRznbyANMSRggkwQpHPLg2CLDuRg",
"X-ClientId": "uhQVcmxLwXAjVtVpTvoerERiZSsNz0om",
"Content-Type": "application/json",
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "cross-site"
},
"referrer": "https://www.mipim.com/",
"body": "{\"query\":\"{\\n participation(participationId: \\\"ptn-20b17c09-a9a5-4bda-af6d-47782ef276b9\\\") \\n { \\n id, firstName, lastName, middleName, phone, email, jobTitle, userId,\\n showContactInformation,\\n hideContactDetailsForEventEdition,\\n countryCode, \\n exhibitingOrganisationId, displayName, organisationId,\\n photoKey,\\n participantId,\\n featureFilters { multilingualNames{ locale, name } },\\n socialMedia {\\n socialMediaType,\\n url\\n },\\n profileResponses {\\n questionId,\\n questionText,\\n questionShortDescription,\\n answers {\\n id,\\n text\\n }\\n },\\n groupedProfileResponses {\\n type,\\n profileResponse{\\n answers {\\n id,\\n text\\n }\\n }\\n },\\n multilingual {\\n locale,\\n description\\n }\\n }\\n }\"}",
"method": "POST",
"mode": "cors"
});

await fetch("https://auth.reedexpo.com/secure/connect/token", {
"credentials": "omit",
"headers": {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0",
"Accept": "_/_",
"Accept-Language": "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3",
"Content-Type": "application/x-www-form-urlencoded",
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "cross-site"
},
"referrer": "https://www.mipim.com/",
"body": "refresh_token=51E5F107C698BBD5BF034EC1824E34FA85765C46F197DE511494FD83892E4849-1&grant_type=refresh_token&client_id=RX-AUTH-CL-Pkce01",
"method": "POST",
"mode": "cors"
});

await fetch("https://api.reedexpo.com/graphql/", {
"credentials": "include",
"headers": {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0",
"Accept": "application/json",
"Accept-Language": "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3",
"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDQ0U3MDE0M0U2NkY0MzAwQzA5RTg1NTA2M0MyRUQ4NEQ2QzE1REZSUzI1NiIsIng1dCI6IjNNNXdGRDVtOURBTUNlaFZCand1MkUxc0ZkOCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVlZGV4cG8uY29tL3NlY3VyZSIsIm5iZiI6MTY3ODgxNTQyOSwiaWF0IjoxNjc4ODE1NDI5LCJleHAiOjE2Nzg4MTU3MjksImF1ZCI6WyJyb2xlcyIsImh0dHBzOi8vYXV0aC5yZWVkZXhwby5jb20vc2VjdXJlL3Jlc291cmNlcyJdLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6IlJYLUFVVEgtQ0wtUGtjZTAxIiwic3ViIjoiOTA0ODY3MTItOGRkYy00YWM1LWJiYjMtODU2OGU0ZTI4MDFkIiwiYXV0aF90aW1lIjoxNjc4ODE0ODU1LCJpZHAiOiJsb2NhbCIsInJ4UGFydGljaXBhbnQiOiJwYXItZmFjMzg4ODQtNTdkMS00MGU1LTk4YmUtMDQyMGQ0MjdmY2ZmIiwicnhBdGxhc0VlIjoiZXZlLTMyZjgyMGZjLTU4OTktNDE5NC1hYzI1LTFlNDg1MzM2ZGE4MyIsInNpZCI6IkQ0MDE2Rjk4OTcxMEYzMEVERTVGM0NFOTA2MjBDNzFCIn0.rfxVZFzoNX5YAj45cg-PigfitLYuOufBV54jCd9oQSSStnJCa3V1-xer56Sm1WGF3hm_ECUg1RMsaWvs3fENRtPjJpqUHRXIMNxAQvNvWhdpMJIudaMsOsq5_gR_RgAl1ZHTaAfYHDqHWSmMYMEwJaQ1_PyRXgGwOeVQUkKtEEpSBkNFI_MUjJXCa9HX0P_x1v0Pc3vvYNLIMN0pUYTe3trC0tehqOGatfTYLPsh6GWKA-wUiSqhSoDJzWSOx-Ejeew5ve5sdNify6D5KzUVzP9_bKZx20RtnTO3YtttDIm3CCURbBFEKP0GheW6OHIUSb_rguRCyVc3t9xHNncu0Q",
"X-ClientId": "uhQVcmxLwXAjVtVpTvoerERiZSsNz0om",
"Content-Type": "application/json",
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "cross-site"
},
"referrer": "https://www.mipim.com/",
"body": "{\"query\":\"{\\n participation(participationId: \\\"ptn-20b17c09-a9a5-4bda-af6d-47782ef276b9\\\") \\n { \\n id, firstName, lastName, middleName, phone, email, jobTitle, userId,\\n showContactInformation,\\n hideContactDetailsForEventEdition,\\n countryCode, \\n exhibitingOrganisationId, displayName, organisationId,\\n photoKey,\\n participantId,\\n featureFilters { multilingualNames{ locale, name } },\\n socialMedia {\\n socialMediaType,\\n url\\n },\\n profileResponses {\\n questionId,\\n questionText,\\n questionShortDescription,\\n answers {\\n id,\\n text\\n }\\n },\\n groupedProfileResponses {\\n type,\\n profileResponse{\\n answers {\\n id,\\n text\\n }\\n }\\n },\\n multilingual {\\n locale,\\n description\\n }\\n }\\n }\"}",
"method": "POST",
"mode": "cors"
});

await fetch("https://8cd2g7qy2d-1.algolianet.com/1/indexes/eve-32f820fc-5899-4194-ac25-1e485336da83_en-gb/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.27.1&x-algolia-application-id=8CD2G7QY2D&x-algolia-api-key=Y2ZkYmM1Y2UxNDdhZDYzZDY1ZmYyNDIzNWViNzMyMDEwNWRkMWIxN2Y2YzlhMzgyZjc2NTEwZmIyYzVkY2ZlN3Jlc3RyaWN0SW5kaWNlcz1ldmUtMzJmODIwZmMtNTg5OS00MTk0LWFjMjUtMWU0ODUzMzZkYTgzXyomdmFsaWRVbnRpbD0xNjc4ODE4NDc4", {
"credentials": "omit",
"headers": {
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0",
"Accept": "application/json",
"Accept-Language": "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3",
"content-type": "application/x-www-form-urlencoded",
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "cross-site"
},
"referrer": "https://www.mipim.com/",
"body": "{\"params\":\"page=0&facetFilters=\"}",
"method": "POST",
"mode": "cors"
});

curl 'https://8cd2g7qy2d-1.algolianet.com/1/indexes/eve-32f820fc-5899-4194-ac25-1e485336da83_en-gb/query?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%203.27.1&x-algolia-application-id=8CD2G7QY2D&x-algolia-api-key=Y2ZkYmM1Y2UxNDdhZDYzZDY1ZmYyNDIzNWViNzMyMDEwNWRkMWIxN2Y2YzlhMzgyZjc2NTEwZmIyYzVkY2ZlN3Jlc3RyaWN0SW5kaWNlcz1ldmUtMzJmODIwZmMtNTg5OS00MTk0LWFjMjUtMWU0ODUzMzZkYTgzXyomdmFsaWRVbnRpbD0xNjc4ODE4NDc4' -X POST -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0' -H 'Accept: application/json' -H 'Accept-Language: it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate, br' -H 'Referer: https://www.mipim.com/' -H 'content-type: application/x-www-form-urlencoded' -H 'Origin: https://www.mipim.com' -H 'Connection: keep-alive' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: cross-site' --data-raw '{"params":"page=0&facetFilters="}'
