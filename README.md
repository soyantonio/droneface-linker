# Droneface Linker

It is required to have firebase-tools installed and with the correct setup

## Firebase

To resolve to different domain/subdomain. Add the following code to your `firebase.json`

```json
{
// ...
  "hosting": {
    "site": "customtoyourproject",
    "public": "functions/lib",
    "rewrites": [ {
      "source": "**",
      "function": "linker"
    } ]
  },
// ...
}
```

The above code will resolve to `https://customtoyourproject.web.app/`.  The `**` of the source means it will resolve all after the previous address, to the **function** `linker`

It can be changed to `otherpath/**`, in consecuence it will response for `https://customtoyourproject.web.app/otherpath/**`

## Demo

https://vlinker2020.web.app/