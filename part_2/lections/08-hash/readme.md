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