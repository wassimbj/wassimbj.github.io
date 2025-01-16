---
title: "Refresh tokens"
date: "2025-01-15T17:09:12Z"
---

**Today's blog is about refresh tokens: what they are, their use cases, and the critical security concerns you should consider before implementing them.**

Recently, while working on a project at my company, I was tasked with implementing a refresh token mechanism. While I successfully completed the task, I had several questions along the way. This blog is my attempt to share what I’ve learned during that process.

## TL;DR

- Refresh tokens are great for UX, preventing users from needing to log in repeatedly.
- Refresh tokens are powerful but dangerous if compromised — **they can lead to account takeover**
- Luckily, there are a few things you can do to make it secure, like **Refresh token rotation**, **Safe storage**, **Rate limiting**, **Tie it to user context**

## What is a refresh token ?

It's simply a token that's used to obtain a new access token, and it always have a longer life time then the access token.

## How it works ?

![How refresh tokens works](/blog/refresh-token-how-it-works.png)

How it works technically, is you will have a separate endpoint `/refresh-token` where you will send the refresh token and get a new access token, then **retry** the request that the user tried in the first place.

Here is a pseudo code, to show you how you can handle it

```js
http.intercetors.response((resp) => {
  const rt = getRefreshToken();
  // if a 401 (unauthorized) code is returned and the user has a refresh token
  // go ahead and request a new access token and retry the request
  if (resp.status === 401 && rt) {
    try {
      // access token is invalid, request a new one
      const { newAccessToken, newRt } = http.get("/refresh-token", {
        params: {
          rt,
        },
      });

      // You should update the new returned tokens
      updateToken(newAccessToken, newRt);

      // retry request
      const originalRequest = resp.config;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      http(originalRequest);
    } catch (err) {
      // refreshing token failed, probably it's invalid, log the user out
      logout(); // remove stored refresh and access tokens
      redirect("/login");
    }
  }
});
```

## Do you need it ?

Well, it depends, and you need a lot to handle as i'll tell you why.

Refresh tokens enhance user experience by keeping users logged in without requiring them to enter credentials repeatedly. They also help maintain app security by ensuring access tokens aren’t valid indefinitely.

However, refresh tokens come with significant risks. If an attacker obtains a refresh token, they can request new access tokens and effectively take over the account.

For critical apps (e.g., payment systems), requiring users to log in repeatedly might be a safer approach. but if you want a better UX, you will need to handle the associated security concerns.

## Addressing security concerns

**A refresh token is like a master key, it grants access to your app as long as it’s valid. If compromised, it can lead to significant security issues.**

Here are some best practices for implementing a secure refresh token mechanism:

1. **Short TTL:** First thing is giving the refresh token a short time to live, _like access token time + 5 minutes_
2. **Refresh token rotation:** Generate a new refresh token and revoke the old ones, whenever a new access token is requested.
3. **Reuse detection:** using an already invalidated refresh token is a sign that the user tokens are compromised, and there for you need to revoke all the users tokens.
4. **Safe storage:** Store the refresh token in a safe place, like a cookie with `httpOnly`, `sameSite=Strict` and `secure=true`
5. **Rate limiting:** Rate limit the number of times an access token is requested
6. **User context:** Tie the refresh token to the user's context, e.g: IP Address, Browser (User Agent), deviceId.. to be able to know which token is related to which client

> [!NOTE]
> These are the security measures I’ve learned and understood through research. If you think something is missing or incorrect, please feel free to reach out. I’d love to learn more from your feedback.

---

If you want to share your thoughts or discuss this topic, feel free to message me, open a GitHub issue, or reach out in any way that works for you.

Salam ✌.
