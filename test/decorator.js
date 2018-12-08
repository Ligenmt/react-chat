function hello() {
    console.log("hello")
}

function wrapHello(fn) {
    return function() {
        console.log("before fn")
        fn()
        console.log("after fn")
    }
}

const hello2 = wrapHello(hello)
hello()
hello2()
