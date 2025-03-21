const log = console.log

const text = `That said, Kolade, you don't have to forget to take home things you buy at the store again. Do you understand?

I just said that to show you that the pattern really matches punctuation marks. I don't forget things at the store. Here are other punctuation marks:! " # $ % & ' ( ) * + , - . / : ; | < = > { } ? @ [ \ ] ^ _ `;

let regex1 = /\p{P}/gu;
let regex2 = /[^\w\s]+/g;

log(regex1.test(text)) //true
log(regex2.test(text)) //true

log(regex1.exec(text))
log(regex2.exec(text))

let ms = text.matchAll(regex1) // Iterator => not Array
// ms.forEach(m => log(m.index, text[m.index], m[0])) // not is Array, not forEach
// for (let m of ms) log(m.index, text[m.index], m[0])
Array.from(ms).forEach(m => log(m.index, text[m.index], m[0]))

