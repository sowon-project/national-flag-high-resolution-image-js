# national-flag-high-resolution-image-js

🏁 national-flag-image-api is a JavaScript library for drawing raw high-resolution national flags.

## how to use?

**Step1)** Include library
You can download the [latest release script](https://github.com/sowon-project/national-flag-high-resolution-image-js/blob/main/docs/js/national-flag-api-1.0.0.js). 
```js
<script type="text/javascript"  src="js/national-flag-api-1.0.0.js"></script>
```
or you can load directly from jsdelivr cdn.
```js
<script type="text/javascript"  src="https://cdn.jsdelivr.net/gh/sowon-project/national-flag-high-resolution-image-js@main/docs/js/national-flag-api-1.0.0.js"></script>
```

**Step2)** Create canvas element
```html
<canvas id="flag-canvas"></canvas>
```

**Step3)** Setup by NationalFlagApiBuilder
You can delcare NationalFlagApi by NationalFlagApiBuilder. You must set width, country, canvasId.

- width : Set the horizontal length(px). The vertical length is automatically set according to the ratio of the national flag.
- country : Set a country code based on ISO_3166-1. For example, in the United States, type "US".
- canvasId : Registers the canvas ID declared in the body tag. Canvas ID must be unique.

```js
var flagImage = new NationalFlagApiBuilder()
    .setWidth(1000)
    .setCountry("us")
    .setCanvasId("#flag-canvas")
    .build();
```

**Step4)** Call set() method
```js
flagImage.set();
```
## Caution

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
```

## License
[MIT license](https://github.com/sowon-project/national-flag-image-api/blob/main/LICENSE)

