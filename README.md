### Конфигурация Backend

1. Настрайка web сервера
   - Переходим в корневую папку веб сервера: `/var/www`
   - Клонируем проект ` git clone https://github.com/Konstantin9595/brandmesta-t.git`
   - Настраиваем веб сервер на `index.php` директории `server` расположенный по пути `/www/brandmesta-t/server`
2. Создание базы данных и настройка .env файла
   - Переходим в папку `/server`
   - Переименовываем файл `.env.example` в `.env`
   - Заполняем три переменные:
     ```
     DB_DATABASE="желаемое_название_базы_данных" # Напр: brandmesta_t
     DB_USERNAME="ваше_имя_пользователя_базы_данных"
     DB_PASSWORD="ваш_пароль_пользователя_базы_данных"
     ```
   - Создаем базу данных с аналогичным названием, которое указали выше в переменной `DB_DATABASE`
3. Установка composer пакетов
   - Находясь в папке `/www/brandmesta-t/server` запускаем `composer install`
4. Генерация Application key
   - Находясь в папке `/www/brandmesta-t/server` запускаем `php artisan key:generate`
5. Запуск миграций всех таблиц
   - Находясь в папке `/www/brandmesta-t/server` запускаем `php artisan winter:up`
6. Готово. Можем протестировать api роуты:

   ```
   Список Rest api роутов:

   Page:
   http://{your_domain.com}/api/page/{id}

   Service:
   http://{your_domain.com}/api/service/list-items
   http://{your_domain.com}/api/service/tab-items
   http://{your_domain.com}/api/service/tags
   http://{your_domain.com}/api/service/tab-options
   ```

### Конфигурация Frontend

1. Настройка .env файла

   - Переходим в папку `/www/brandmesta-t/client`
   - Переименовываем файл `.env.example` в `.env`
   - Устанавливаем значение переменной `NEXT_PUBLIC_API_URL` в соответствии с вашим локальным хостом.

     ```
     NEXT_PUBLIC_API_URL=http://{your_domain.com}/api

     Пример:
     NEXT_PUBLIC_API_URL=http://brandmesta-t.test/api
     ```

2. Установка npm пакетов
   - Находясь в папке `/www/brandmesta-t/client` запускаем `npm i`
3. Готово. Запускаем сервер `npm run dev` и переходим на `http://localhost:3000`

### Упрощенный вариант развертывания статического сайта без базы и миграций.

> В Папке `static_output` расположенной по пути `/www/brandmesta-t/client/static_output` находится статически сгенерированный вариант.

1. Настроить веб сервер на файл index.html `/client/static_output/index.html`
2. Запустить сервер и открыть сайт.
