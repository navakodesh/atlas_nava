export class Contery {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.common = _item.name.common;
        this.population = _item.population;
        this.region = _item.region;
        this.languages = Object.keys(_item.languages);
        this.coin = Object.keys(_item.currencies);
        this.coinD = Object.values(_item.currencies)[0].name;
        this.capital = _item.capital;
        this.svg = _item.flags.svg;
        this.googleMaps = _item.maps.googleMaps;
        this.borders = _item.borders;
        this.latlng = _item.capitalInfo.latlng;
    }


    render() {
        let div = document.createElement("div");
        document.querySelector(this.parent).append(div)
        div.innerHTML = `
        <div class="col-12">
        <img class="col-md-6 m-5 float-start" src="${this.svg}" alt="flag">
        <div class="p col-12 col-md-6 mt-5 float-end">
        <h2>${this.common}</h2>
        <p>pop: ${this.population}<br>
        region: ${this.region} <br>
        languages: ${this.languages}<br>
        Coin: ${this.coin}, ${this.coinD}<br>
        Capital: ${this.capital}</p>
        </div>
        </div>

        <div class="myD col-12">

        <iframe class="col-md-6 m-5" src="https://maps.google.com/maps?q=${this.latlng}&z=7&output=embed"width="300" height="350" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" floar-start m-2></iframe>
        <h5 class="col-12 col-md-4 mt-5 float-end">States with borders:<div class="b_d"></div></h5>

        </div>

        `
        let b_d = div.querySelector(".b_d")
        this.borders.forEach(item => {
            let span = document.createElement("span")
            span.innerHTML += `<a class="float-start p-1 list-group-item" href="index.html?name=${item}">${item}. </a>`
            b_d.append(span)
        });
    }



}






