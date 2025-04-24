const crypto = require('crypto');

const getHash = (password) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${hash}`;
}

const comparePassword = (password, storedHash) => {
    const [salt, hash] = storedHash.split(':');
    const currentHash = crypto.scryptSync(password, salt, 64).toString('hex');
    return hash === currentHash;
}


let pass = 'truePass2025';
let hash = getHash(pass);
console.log(hash);

console.log(comparePassword('falsePass2025', hash));
console.log(comparePassword('truePass2025', hash));
