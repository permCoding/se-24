console.log(
    require('fs')
        .readFileSync(0, 'utf8')
        .split('\n')[0]
        .split(' ')
        .map(x => +x)
        .filter(x => x%2 == 0)
        .at(-1)
)