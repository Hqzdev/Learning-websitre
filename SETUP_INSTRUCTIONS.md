# 🚀 Инструкции по настройке AI Model Builder

## ✅ Что уже настроено

- ✅ Бэкенд API на Node.js + Express
- ✅ База данных PostgreSQL (Supabase)
- ✅ JWT аутентификация
- ✅ Фронтенд React + TypeScript
- ✅ Интеграция фронтенда с бэкендом
- ✅ Защищенные роуты
- ✅ Реальные данные пользователя в интерфейсе

## 🔧 Запуск проекта

### 1. Запуск бэкенда

```bash
cd backend
npm install
cp env.example .env
# Отредактируйте .env файл с вашими данными
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run migrate
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run dev
```

Бэкенд будет доступен по адресу: `http://localhost:5001`

### 2. Запуск фронтенда

```bash
# В новом терминале
npm install
cp env.example .env
npm run dev
```

Фронтенд будет доступен по адресу: `http://localhost:3001`

## 🔑 Настройка переменных окружения

### Бэкенд (.env)
```env
DATABASE_URL=postgres://postgres.ofxdiznecktidzzwolfd:SfuHfDQ9tJcDTn5Y@aws-1-us-east-1.pooler.supabase.com:6543/postgres?sslmode=require&supa=base-pooler.x
JWT_SECRET=888a69dc2d3fe2b7090ca1f2d25651a6
PORT=5001
```

### Фронтенд (.env)
```env
VITE_API_URL=http://localhost:5001/api
```

## 🎯 Функциональность

### ✅ Реализовано
- **Регистрация**: username, email, password, fullName
- **Вход**: username + password
- **JWT токены**: автоматическое сохранение и использование
- **Защищенные роуты**: Dashboard доступен только авторизованным
- **Реальные данные**: имя и email пользователя отображаются в интерфейсе
- **Выход**: корректное удаление токена
- **Исправленное выравнивание**: сайдбар и контент теперь выровнены

### 🔄 API Endpoints

#### Аутентификация
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход
- `GET /api/auth/profile` - Профиль пользователя
- `PUT /api/auth/profile` - Обновление профиля
- `PUT /api/auth/change-password` - Смена пароля

#### Пример регистрации
```json
POST /api/auth/register
{
  "username": "testuser",
  "email": "test@example.com", 
  "password": "SecurePass123!",
  "fullName": "Test User"
}
```

## 🎨 Исправления интерфейса

### ✅ Что исправлено
1. **Убраны заглушки**: "Иван Петров" и "ivan@example.com" заменены на реальные данные
2. **Исправлено выравнивание**: сайдбар и основной контент теперь выровнены по высоте
3. **Добавлена функциональность выхода**: кнопка "Выйти" работает корректно
4. **Отображение плана**: показывается реальный план пользователя (basic/pro/enterprise)

## 🧪 Тестирование

### Проверка API
```bash
# Health check
curl http://localhost:5001/api/health

# Регистрация
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "SecurePass123!",
    "fullName": "Test User"
  }'
```

### Проверка фронтенда
1. Откройте `http://localhost:3001`
2. Перейдите на страницу регистрации
3. Создайте аккаунт
4. Войдите в систему
5. Проверьте, что в Dashboard отображаются ваши реальные данные

## 🔒 Безопасность

- Пароли хешируются с помощью bcrypt (12 раундов)
- JWT токены с истечением через 7 дней
- Rate limiting: 100 запросов в 15 минут
- Валидация входных данных
- CORS настроен для фронтенда

## 📱 Адаптивность

- Мобильное меню для сайдбара
- Адаптивная верстка
- Корректное отображение на всех устройствах

## 🚨 Важные заметки

1. **SSL Warning**: `NODE_TLS_REJECT_UNAUTHORIZED=0` нужен для Supabase
2. **Порт 5001**: Используется вместо 5000 (занят AirTunes на macOS)
3. **База данных**: Уже настроена и таблицы созданы
4. **Токены**: Автоматически сохраняются в localStorage

## 🎉 Готово к использованию!

Проект полностью настроен и готов к работе. Все основные функции аутентификации работают, интерфейс исправлен, и данные пользователя отображаются корректно.