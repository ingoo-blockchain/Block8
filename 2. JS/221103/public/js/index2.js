function Student(name, birthday, blog, area) {
    this._fullname = name
    this._birthday = birthday
    this.area = area
    
    // Object.defineProperty(this, "age", {
    //     get() {
    //         let todayYear = new Date().getFullYear()
    //         return todayYear - this.birthday.getFullYear()
    //     },
    // })
}

function Blog(url) {
    this.blog = setBlogURL(url)
    this.type = setBlogType(this.blog)

    function setBlogURL(url) {
        const link = url.indexOf("http") ? "http://" + url : url
        return link
    }

    function setBlogType(blog) {
        if (blog.indexOf("tistory.") !== -1) {
            return "tistory"
        }

        if (blog.indexOf("velog.") !== -1) {
            return "velog."
        }

        return null
    }
}

const a = new Blog("kimgunyoung2821.tistory.com")
console.log(a)
