const { readdirSync, statSync } = require('fs');

const get_list = (dir) => {
    const get_list_rec = (dir) => {
        let items = readdirSync(dir, 'utf8');
        items.forEach(item => {
            let path = dir + '/' + item;
            let stats = statSync(path);
            if (stats.isFile()) {
                dir_list.push([path, stats.size]);
            } else {
                get_list_rec(path);
            }
        });
    };

    let dir_list = [];
    get_list_rec(dir);
    return dir_list;
};

console.log(get_list('./'));
