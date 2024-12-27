const data = require("./data/data.js")
const log = console.log

log(data.colors[0])
log(data.argb[0])

log(
    data
        .argb[0]
        .slice(0, -1)
        .reduce((acc, cur) => acc + cur.toString(16), "")
)

data.argb
    .map(x => x.slice(0, -1)
        .reduce((acc, cur) => acc + cur.toString(16), "")
    )
    .forEach(x => log(x))
// при таком выводе есть неточности
// пример: 00cd
// должно быть по 2 разряда на цвет, всего 6 символов