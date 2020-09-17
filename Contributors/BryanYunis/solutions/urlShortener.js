
// Implement a URL shortener with the following methods:

// `shorten(url)`, which shortens the url into a six-character alphanumeric string, such as zLg6wl.

// `restore(short)`, which expands the shortened string into the original url. If no such shortened string exists, return null.


class UrlShortener {
    constructor() {
        this.shortToUrl = {}
        this.urlToShort = {}
    }
    generateRandomString(length) {
        let string = ''

        while (string.length <= length) {
            const random = Math.floor(Math.random() * 122)
            if (random < 11) {
                string += random
            } else if ((random > 64 && random < 91) || random > 96){
                string += String.fromCharCode(random)
            }
        }
        return string
    }

    shorten(url) {
        let randomString = this.generateRandomString(6)
        while (this.shortToUrl[randomString]) {
        randomString = this.generateRandomString(6)
        }
        if (this.urlToShort[url]) {
            return this.shortToUrl[this.urlToShort[url]]
        }
        this.shortToUrl[randomString] = url
        return randomString
    }

    restore (string) {
        return this.shortToUrl[string]
    }
}

const shortener = new UrlShortener() 
const shortened = shortener.shorten('http://www.hotmail.com')
const shortened2 = shortener.shorten('http://www.hotmail.com')
const restored = shortener.restore(shortened)
console.log(shortened, restored)
