# national-flag-image-api

Draw high-definition national flags by national-flag-api.

Support country:


# how to use?

Step1) Include library
<pre><code><script type="text/javascript"  src="js/national-flag-api-1.0.0.js"></script></code></pre>
or
<pre><code><script type="text/javascript"  src="https://raw.githubusercontent.com/sowon-project/national-flag-image-api/main/docs/js/national-flag-api-1.0.0.js"></script></code></pre>

Step2) Declare NationalFlagApi by NationalFlagApiBuilder
<pre><code>var flagImage = new NationalFlagApiBuilder()
    .setWidth(1000)
    .setCountry("us")
    .setCanvasId("#flag-canvas")
    .build();</code></pre>

Step3) Call set() method
<pre><code>flagImage.set();</code></pre>

# Caution

Be sure to use after html dom loading is complete. Below is an example.

<pre><code>window.onload=function() {

    var flagImage = new NationalFlagApiBuilder()
        .setWidth(1000)
        .setCountry("us")
        .setCanvasId("#flag-canvas")
        .build();

    flagImage.set();

}</code></pre>

