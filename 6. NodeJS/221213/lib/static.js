const fs = require('fs')
const path = require('path')

const root = 'public'
const rootDir = path.join(__dirname,'../',root) 

let result = {}
const find = (currentPath) => {
    // index.css
    const directory = fs.readdirSync(currentPath)
    for (const index in directory) { 
        const findPath = path.join(currentPath, directory[index])
        const isFile = fs.statSync(findPath).isFile() // file: true, diretory : false

        
        if (!isFile) { // 디렉토리일경우
            find(findPath)
        } else { // 파일경우 
            const key = (currentPath === rootDir) 
            ? '/' 
            : currentPath.replaceAll(rootDir,"")
            const httpPath = path.join(key, directory[index]) // /css/index.css
            result[httpPath] = directory[index]
        }
    }

    return result
}

module.exports = find(rootDir) // { }