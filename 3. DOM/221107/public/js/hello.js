console.log(this)

const obj = {
    sub: function () {
        console.log(this)
    },
}

obj.sub()
