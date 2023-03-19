import fetch from "node-fetch";
import getToken from "./auth.mjs";
// import { parse, valid } from "node-html-parser";

const currentToken = {
  id_token:
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDQ0U3MDE0M0U2NkY0MzAwQzA5RTg1NTA2M0MyRUQ4NEQ2QzE1REZSUzI1NiIsIng1dCI6IjNNNXdGRDVtOURBTUNlaFZCand1MkUxc0ZkOCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVlZGV4cG8uY29tL3NlY3VyZSIsIm5iZiI6MTY3ODgxNzI5MSwiaWF0IjoxNjc4ODE3MjkxLCJleHAiOjE2Nzg4MTc1OTEsImF1ZCI6IlJYLUFVVEgtQ0wtUGtjZTAxIiwiYW1yIjpbInB3ZCJdLCJhdF9oYXNoIjoiRFhobHhpaG1RZlo5N1pZZ2pGaUpVQSIsInNpZCI6IjVDMDg5MDQwRUNFQkIyOENERkVBNkExOEMyNUVFNzgwIiwic3ViIjoiOTA0ODY3MTItOGRkYy00YWM1LWJiYjMtODU2OGU0ZTI4MDFkIiwiYXV0aF90aW1lIjoxNjc4ODE2MzA2LCJpZHAiOiJsb2NhbCJ9.7Uz3ZN-119UzLS5sL0Ndz6PZpGB1BTRtg1kKmuCv-A8uqtd8fX8XqHosKcppesgXZ7MEBv_Gt1dGLhOWNS1ke9MhpW-7FAKYNFFvp-SYpMfkzO3PMnchDoXVSV51f9fgR4AU42sneDHBc9PYKuVC6VJB2VEE3Iva-sm4BrbiJoJkOCwX6a7gAT2hR7WDgg4oMtdKMsk7ofnYOJjz-1qd9r32x9R1IYFcdFG4IgTCKP94pKWJL_gZg5BDLLFTmYEzj2rKNFC0jZsg6i-Vu2JZOFVU-yyvyOAHrzqKcVlRZeNVBWlGMM-j1fDIi-VqPoqPUCBkl9bWquKf-gCf-k_ptA",
  access_token:
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IkRDQ0U3MDE0M0U2NkY0MzAwQzA5RTg1NTA2M0MyRUQ4NEQ2QzE1REZSUzI1NiIsIng1dCI6IjNNNXdGRDVtOURBTUNlaFZCand1MkUxc0ZkOCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucmVlZGV4cG8uY29tL3NlY3VyZSIsIm5iZiI6MTY3ODgxNzI5MSwiaWF0IjoxNjc4ODE3MjkxLCJleHAiOjE2Nzg4MTc1OTEsImF1ZCI6WyJyb2xlcyIsImh0dHBzOi8vYXV0aC5yZWVkZXhwby5jb20vc2VjdXJlL3Jlc291cmNlcyJdLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwicm9sZXMiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6IlJYLUFVVEgtQ0wtUGtjZTAxIiwic3ViIjoiOTA0ODY3MTItOGRkYy00YWM1LWJiYjMtODU2OGU0ZTI4MDFkIiwiYXV0aF90aW1lIjoxNjc4ODE2MzA2LCJpZHAiOiJsb2NhbCIsInJ4UGFydGljaXBhbnQiOiJwYXItZmFjMzg4ODQtNTdkMS00MGU1LTk4YmUtMDQyMGQ0MjdmY2ZmIiwicnhBdGxhc0VlIjoiZXZlLTMyZjgyMGZjLTU4OTktNDE5NC1hYzI1LTFlNDg1MzM2ZGE4MyIsInNpZCI6IjVDMDg5MDQwRUNFQkIyOENERkVBNkExOEMyNUVFNzgwIn0.POnvpz7JfG9IiabYhfp_C05_y5ypsWzEG_P86cD_4EVyVo6_0KZb0vxIqwhZPNT1JAV8ieOGFH9pB_WjRIrrs60jfkwqxOnmwNBS847Aj9RKQOPPOuuiRdmyGIwko0AU5s-nC4ZIrs3nQKBhN5v9kpVkV9MywR7IWJRHGMyAChrGVzjl4_LQkf8a8dw4Ge8jRXVOE1JvtoB4HZ6T4FvM-tPKcZP7vCv5ZNLryowsQc5LgSimyA_EtD_UT-7ELor38bbHv1UpwMq8tBAk8kR7hN5MomQb76-WKCIgiwOlPU4FtBBiJGEesJ7pdKJLM3UmUyPT49kGRehluBJSplBjoA",
  expires_in: 300,
  token_type: "Bearer",
  refresh_token:
    "E148BF87CE6E2866284743E36C01DA4836A6B2050D9EB4E62223B4B631107FC2-1",
  scope: "openid profile offline_access roles",
};

(async () => {
  //fetch participant identifiers
  var ids = await fetch(
    "https://api-f9b8414f-890d-44eb-aa5f-26f64d361813.sendbird.com/v3/users?token=&limit=20",
    {
      headers: {
        "Content-Type": "application/json",
        "Session-Key": "253a74e4decc85c89edb5bffe1828b66c4b9f572",
      },
    }
  );
  const data = await ids.json();

  // for each participant
  const promises = await Promise.allSettled(
    data.users.map(async (f) => {
      console.log("participantId", f.user_id);
      //get/referesh the token
      var token = await getToken(currentToken);

      if (!token) return null;

      // console.log(token);

      var personalData = await fetch("https://api.reedexpo.com/graphql/", {
        credentials: "include",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0",
          Accept: "application/json",
          "Accept-Language": "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3",
          Authorization: "Bearer " + token.access_token,
          "X-ClientId": "uhQVcmxLwXAjVtVpTvoerERiZSsNz0om",
          "Content-Type": "application/json",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
        },
        referrer: "https://www.mipim.com/",
        body:
          '{"query":"{\n      participation(participationId: \\"ptn-' +
          f.user_id +
          '\\") \\n      { \\n        id, firstName, lastName, middleName, phone, email, jobTitle, userId,\\n        showContactInformation,\\n        hideContactDetailsForEventEdition,\\n        countryCode, \\n        exhibitingOrganisationId, displayName, organisationId,\\n        photoKey,\\n        participantId,\\n        featureFilters { multilingualNames{ locale, name } },\\n        socialMedia {\\n          socialMediaType,\\n          url\\n        },\\n        profileResponses {\\n          questionId,\\n          questionText,\\n          questionShortDescription,\\n          answers {\\n            id,\\n            text\\n          }\\n        },\\n        groupedProfileResponses {\\n          type,\\n          profileResponse{\\n            answers {\\n              id,\\n              text\\n            }\\n          }\\n        },\\n        multilingual {\\n          locale,\\n          description\\n        }\\n      }\\n    }"}',
        method: "POST",
        mode: "cors",
      });
      console.log("personalData.status", personalData.status);
      const resp = await personalData.json();
      // console.log(resp);
      return resp;
    })
  );

  console.log(promises);
})();
