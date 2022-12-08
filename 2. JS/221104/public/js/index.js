// URL좀 주셈!

// function Blog(url) {
//     this.blog = setBlog(url)
//     this.type = setType(url)

//     function setBlog(url) {
//         // if(url.indexOf("http") === -1)
//         //     return "https://" + url

//         return url.indexOf("http") === -1 ? "https://" + url : url
//     }

//     function setType(url) {
//         // hint 배열  반복문
//         if (url.indexOf("tistory.") >= 0) {
//             return "tistory"
//         }

//         if (url.indexOf("velog.") >= 0) {
//             return "velog"
//         }

//         return null
//     }
// }

class Blog {
    //ES7
    blog
    type
    name

    constructor(url) {
        this.setBlog = url
        this.setType = url
    }

    set setBlog(value) {
        let result = value
        if (value.indexOf("http") === -1) {
            // this.blog = 'https://'+value
            result = "https://" + value
        }
        this.blog = result

        // this.blog = value.indexOf("http") === -1 ? "https://" + value : value
    }

    set setType(value) {
        if (value.indexOf("tistory.") !== -1) {
            this.type = "tistory"
        }

        if (value.indexOf("velog.") !== -1) {
            this.type = "velog"
        }

        // this.type = value
    }
}

const a = new Blog("https://kimgunyoung2821.tistory.com")
const b = new Blog("kimgunyoung2821.tistory.com")
const c = new Blog("https://velog.io/@wrld_worthy")

console.log(a)
console.log(b)
console.log(c)

// https://kimgunyoung2821.tistory.com/
// kimgunyoung2821.tistory.com
