# national-flag-image-api

🏁 national-flag-image-api is a JavaScript library for drawing raw high-definition national flags.

#

# Support country

..

# how to use?

Step1) Include library
```js
<script type="text/javascript"  src="js/national-flag-api-1.0.0.js"></script>
```
or
```js
<script type="text/javascript"  src="https://cdn.jsdelivr.net/gh/sowon-project/national-flag-image-api@main/docs/js/national-flag-api-1.0.0.js"></script>
```

Step2) Declare NationalFlagApi by NationalFlagApiBuilder
```
var flagImage = new NationalFlagApiBuilder()
    .setWidth(1000)
    .setCountry("us")
    .setCanvasId("#flag-canvas")
    .build();</code></pre>
```

Step3) Call set() method
```js
flagImage.set();
```
# Caution

Be sure to use after html dom loading is complete. Below is an example.

```js
window.onload=function() {
    var flagImage = new NationalFlagApiBuilder()
        .setWidth(1000)
        .setCountry("us")
        .setCanvasId("#flag-canvas")
        .build();
    flagImage.set();
}

