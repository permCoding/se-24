const log = console.log

let str1 = String.raw`<a href="https://link1.com">
    title1
</a>      <a href="https://link2.com">title2</a>`

let str2 = '<a href="https://link3.com">   title3 \n      </a>'

let ptn = /<a href="(.+?)">(.+?)<\/a>/sg

let arr = Array.from((str1+str2).matchAll(ptn))

log(arr.length)
arr.forEach(elm => log(
    elm
        .slice(1,)
        .map(e => e.replace(/\r?\n/, '').trim())
    )
)
