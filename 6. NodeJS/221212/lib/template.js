const fs = require('fs')
const path = require('path')
const DEFAULT_DIR = '../views'

module.exports = (filename) => {
    const target = path.join(__dirname, DEFAULT_DIR, filename)
    // @TODO : filename 매개변수 안에있는 파일을 가져와서 HTML을 return함.
    // @TODO : 파일을 읽을수 있는가? 
    const readline = fs.readFileSync(target, 'utf8')
    return readline
    // /mnt/c/Users/pc-007/Documents/block8/6. NodeJS/221212/lib/views/list.html
    // /mnt/c/Users/pc-007/Documents/block8/6. NodeJS/221212/views/list.html
}

// http://localhost:3000/list