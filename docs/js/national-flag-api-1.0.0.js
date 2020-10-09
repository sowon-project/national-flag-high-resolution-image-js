class NationalFlagApi {

    constructor(builder) {
        this.width = builder.width;
        this.country = builder.country;
        this.canvasId = builder.canvasId;
    }

    set() {

        var setWidth = this.width;
        var setCountry = this.country;
        var setCanvasId = this.canvasId;

        var widthParam = (setWidth.length  > 0 ? setWidth : "500");
        var countryParam = (setCountry.length > 0 ? setCountry : "kr");

        var width = Number.parseInt(widthParam, 10);
        var country = countryParam.toLowerCase();


        fetch('https://sowon-project.github.io/national-flag-image-api/files/' + country + '.svg')
            .then(response => response.text())
            .then((data) => {

                var checkRatio = new Image();
                checkRatio.onload = function() {
                    var ratio = checkRatio.naturalWidth / checkRatio.naturalHeight;

                    var canvas = document.querySelector(setCanvasId);
                    var ctx = canvas.getContext('2d');

                    ctx.canvas.height = width;
                    ctx.canvas.width = width * ratio;
                    var img1 = new Image();
                    img1.onload = function() {
                        ctx.drawImage(img1, 0, 0);

                    }
                    img1.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);

                }
                checkRatio.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);
            });
    }
}

class NationalFlagApiBuilder {
    constructor() {}
    setWidth(v) {
        this.width = v;
        return this;
    }

    setCountry(v) {
        this.country = v;
        return this;
    }

    setCanvasId(v) {
        this.canvasId = v;
        return this;
    }
    build() {
        return new NationalFlagApi(this);
    }
}