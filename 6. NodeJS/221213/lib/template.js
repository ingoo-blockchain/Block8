const fs = require('fs')
const path = require('path')

module.exports = (filename, obj={}, defaultDir='../views') => {
    // obj : { name:'ingoo',title:'메인페이지 입니다.' }
    const target = path.join(__dirname, defaultDir, filename) // /css/index.css
    let readline = fs.readFileSync(target,'utf8') // html 
    // javascript 스펙 
    // String.prototype.replaceAll(찾을단어, 바꿀단어)
    // let text = readline.replaceAll('{{name}}',obj.name)
    // text = text.replaceAll('{{title}}',obj.title)
    for (const key in obj) {
        readline = readline.replaceAll(`{{${key}}}`, obj[key])
    }

    return readline
}