class Template {
    constructor(templates) {
        return this.create(templates)
    }

    create(templates) {
        let obj = {}
        for (const key in templates) {
            obj[key] = this.clone(templates[key])
        }
        return obj
    }

    clone(selector) {
        return () => {
            const template = document.querySelector(selector)
            const clone = document.importNode(template.content, true)
            return clone
        }
    }
}

const config = {
    row: "#commentRow",
    basic: "#content-baisc",
    update: "#content-update",
}

const template = new Template(config)

export default template
