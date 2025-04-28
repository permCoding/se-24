# Хеширование паролей в Node.js

Для безопасного хранения паролей в Node.js рекомендуется использовать специальные библиотеки для хеширования, такие как `bcrypt`, `argon2` или `scrypt`. Вот как это можно реализовать:

## 1. Использование bcrypt (наиболее популярный вариант)

```javascript
const bcrypt = require('bcrypt');
const saltRounds = 10; // Количество раундов соли (рекомендуется 10-12)

// Хеширование пароля
async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    throw err;
  }
}

// Проверка пароля
async function comparePassword(password, hash) {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (err) {
    throw err;
  }
}

// Пример использования
(async () => {
  const password = 'mySecurePassword123';
  const hash = await hashPassword(password);
  console.log('Hashed password:', hash);
  
  const isMatch = await comparePassword(password, hash);
  console.log('Password match:', isMatch);
})();
```

Некоторые комментарии по использованию библиотеки `bcrypt`:  

Salt (соль) в bcrypt - это случайные символы, которые добавляются к паролю перед его хешированием, - они нужны для безопасности и позволяют:  

- гарантировать, что одинаковые пароли будут иметь разные хеши  
- защищать от атак с использованием радужных таблиц (precomputed hash tables)  
- усложнять процесс подбора паролей методом brute-force  

Для надёжности рекомендуется использовать salt больше 10. Дело в том, что параметр salt rounds в bcrypt определяет вычислительную сложность хеширования, то есть количество итераций алгоритма (2^rounds). Например:  

- salt rounds = 10 → 2^10 = 1024 итерации  
- salt rounds = 12 → 2^12 = 4096 итераций  

Рекомендация использовать значение больше 10 связана с:  

- Ростом вычислительной мощности - современные компьютеры и GPU могут быстро взламывать слабые хеши  
- Балансом безопасности и производительности - значение 10-12 обеспечивает хороший баланс:  
  - Достаточно медленно для атакующего  
  - Достаточно быстро для легитимного использования  

Как выбрать правильное значение:  

- Для большинства современных приложений рекомендуется 12  
- Для особо критичных систем можно использовать 14-16  

Для того чтобы подобрать адекватный уровень salt протестируйте скорость работы приложения на вашем компьютере - хеширование не должно занимать больше 500 ms.  

---  

## 2. Использование argon2 (более современный и безопасный вариант)

```javascript
const argon2 = require('argon2');

async function hashPassword(password) {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (err) {
    throw err;
  }
}

async function comparePassword(password, hash) {
  try {
    const match = await argon2.verify(hash, password);
    return match;
  } catch (err) {
    throw err;
  }
}
```

---  

## 3. Использование встроенного модуля crypto (scrypt)

```javascript
const crypto = require('crypto');

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function comparePassword(password, storedHash) {
  const [salt, hash] = storedHash.split(':');
  const derivedHash = crypto.scryptSync(password, salt, 64).toString('hex');
  return hash === derivedHash;
}
```

## Рекомендации

1. **Всегда используйте соль (salt)** - это защищает от атак с использованием радужных таблиц.  
2. **Выбирайте достаточное количество итераций** - для bcrypt рекомендуется 10-12 раундов.  
3. **Не используйте быстрые хеш-функции** (например, SHA-256) для паролей - они не предназначены для этой цели.  
4. **Рассмотрите argon2** - это победитель конкурса Password Hashing Competition и считается самым безопасным вариантом.  

Для начала работы установите нужную библиотеку:  

```bash
npm install bcrypt
# или
npm install argon2
```
