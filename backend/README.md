# AI Model Builder - Backend API

Backend API для платформы создания AI моделей с аутентификацией через PostgreSQL.

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
cd backend
npm install
```

### 2. Настройка базы данных

1. Установите PostgreSQL
2. Создайте базу данных:
```sql
CREATE DATABASE ai_model_builder;
```

3. Скопируйте файл конфигурации:
```bash
cp env.example .env
```

4. Отредактируйте `.env` файл:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/ai_model_builder
JWT_SECRET=your_super_secret_jwt_key_here
```

### 3. Создание таблиц

```bash
npm run migrate
```

### 4. Запуск сервера

```bash
# Режим разработки
npm run dev

# Продакшн режим
npm start
```

Сервер будет доступен по адресу: `http://localhost:5000`

## 📚 API Endpoints

### Аутентификация

- `POST /api/auth/register` - Регистрация пользователя
- `POST /api/auth/login` - Вход в систему
- `GET /api/auth/profile` - Получение профиля (требует токен)
- `PUT /api/auth/profile` - Обновление профиля (требует токен)
- `PUT /api/auth/change-password` - Смена пароля (требует токен)

### Примеры запросов

#### Регистрация
```json
POST /api/auth/register
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "SecurePass123!",
  "fullName": "Test User"
}
```

#### Вход
```json
POST /api/auth/login
{
  "username": "testuser",
  "password": "SecurePass123!"
}
```

#### Ответ при успешной аутентификации
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "username": "testuser",
      "email": "test@example.com",
      "fullName": "Test User",
      "plan": "basic"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## 🔒 Безопасность

- Пароли хешируются с помощью bcrypt (12 раундов)
- JWT токены с истечением через 7 дней
- Rate limiting: 100 запросов в 15 минут
- Валидация входных данных
- CORS настроен для фронтенда

## 🗄️ Структура базы данных

### Таблица users
- `id` - Уникальный идентификатор
- `username` - Имя пользователя (уникальное)
- `email` - Email (уникальный)
- `password_hash` - Хеш пароля
- `full_name` - Полное имя
- `plan` - Тарифный план (basic/pro/enterprise)
- `is_active` - Активен ли аккаунт
- `is_verified` - Подтвержден ли email
- `created_at` - Дата создания
- `updated_at` - Дата обновления

### Дополнительные таблицы
- `user_sessions` - Сессии пользователей
- `ai_models` - AI модели пользователей
- `training_logs` - Логи обучения
- `api_keys` - API ключи

## 🛠️ Разработка

### Структура проекта
```
backend/
├── config/
│   └── database.js          # Конфигурация БД
├── controllers/
│   └── authController.js    # Контроллеры аутентификации
├── middleware/
│   ├── auth.js             # JWT middleware
│   └── validation.js       # Валидация данных
├── routes/
│   └── auth.js             # Роуты аутентификации
├── scripts/
│   └── migrate.js          # Миграции БД
├── server.js               # Главный файл сервера
└── package.json
```

### Добавление новых endpoints

1. Создайте контроллер в `controllers/`
2. Добавьте валидацию в `middleware/validation.js`
3. Создайте роуты в `routes/`
4. Подключите роуты в `server.js`

## 📝 Логи

Сервер выводит логи в консоль:
- ✅ Успешные подключения к БД
- ❌ Ошибки подключения
- 🚀 Запуск сервера
- 📊 Health check endpoint

## 🔧 Переменные окружения

| Переменная | Описание | По умолчанию |
|------------|----------|--------------|
| `DATABASE_URL` | URL подключения к PostgreSQL | - |
| `JWT_SECRET` | Секретный ключ для JWT | - |
| `PORT` | Порт сервера | 5000 |
| `NODE_ENV` | Режим работы | development |
| `FRONTEND_URL` | URL фронтенда для CORS | http://localhost:3001 |
