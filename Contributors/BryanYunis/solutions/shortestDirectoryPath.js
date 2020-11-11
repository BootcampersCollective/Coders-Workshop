const shortestDirectoryPath = path => {
    const paths = path.split('/')
    const absolutePaths = []
    paths.forEach((path) => {
        switch(path) {
            case '.':
            case '': 
                break
            case '..': 
                absolutePaths.pop()
                break
            default: 
                absolutePaths.push(path)
        }
    })
    return `/${absolutePaths.join('/')}/`
}

console.log(shortestDirectoryPath('/usr/bin/../bin/./scripts/../pub/local/dist/../app'))