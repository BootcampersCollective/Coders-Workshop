const input = {
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
}

// should return
const output = {
    "key": 3,
    "foo.a": 5,
    "foo.bar.baz": 8
}

const flatten = (dict) => {
    const entries = []
    for (const [key, val] of Object.entries(dict)) {
        if (typeof val === object) {
            return flatten(key)
        }
    }
}