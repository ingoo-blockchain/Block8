const fs = require('fs')
const path = require('path')

const findFile = root => {
    const rootDir = path.join(__dirname, root)
    let result = {}
    const find = (currentPath) => {
        const diretory = fs.readdirSync(currentPath)
        for (const index in diretory) {
            const findPath = path.join(currentPath, diretory[index])
            const stat = fs.statSync(findPath)

            //디렉토리 일경우
            if(!stat.isFile()) {
                find(findPath)
            } else {
                const key = currentPath === rootDir ? "/" : currentPath.replaceAll(rootDir,"")
                const HttpPath = path.join(key, diretory[index])
                result[HttpPath] = diretory[index]
            }
        }

        return result
    }

    return find(rootDir)
}


const result = findFile('../public')
console.log(result)
module.exports = findFile