// Implement a URL shortener with the following methods:

// `shorten(url)`, which shortens the url into a six-character alphanumeric string, such as zLg6wl.

// `restore(short)`, which expands the shortened string into the original url. If no such shortened string exists, return null.

// Hint: What if we enter the same URL twice?

// restore would look up from dictionary

class UrlShortener {
    constructor() {
        this.dictionary = {}
    }

    shorten(url) {
        // check dictionary to see if url already present
        for (const [key, value] of Object.entries(this.dictionary)) {
            if (value === url) {
                return key
            }
          }
        // generate random 6-character string (Math.random())
        let randomString = this.generateRandomString()

        this.dictionary[randomString] = url
        return randomString
    }
    restore(randomString) {
        return this.dictionary[randomString]
    }
    generateRandomString() {
        const lowRange = 48
        const highRange = 122
        const range = highRange - lowRange + 1
        // from charCode => character, add to a string, once length == 6, we're done
        let string = ''
        for (let i = 0; i < 1; i++) {
            const randomNumber = Math.floor(Math.random() * 4) // 0 -> 0.99999 want 0 -> 75 
            const char = String.fromCharCode(randomNumber + 48)
            string += char
        }
        if (this.dictionary[string]) {
            return this.generateRandomString()
        }
        return string
    }
}

const shortener = new UrlShortener()
