# Приложение для управления семинарами

Это приложение для управления семинарами, разработанное с использованием React + Vite и json-server. Оно позволяет пользователям просматривать список семинаров, удалять или редактировать семинары и взаимодействовать с сервером через HTTP-запросы. Приложение простое, эффективное и легко понимаемое.

## Обзор задания

Проект реализует следующие функции:

1. **Получение данных семинаров**  
   Данные семинаров загружаются из локального json-server, который выполняет роль мок-API.

2. **Отображение списка семинаров**  
   Приложение отображает список семинаров, полученных с json-server.

3. **Удаление семинаров**  
   Рядом с каждым семинаром находится кнопка удаления. При клике на неё появляется окно подтверждения. Если пользователь подтверждает удаление, отправляется DELETE-запрос на сервер.

4. **Редактирование семинаров**  
   Для каждого семинара предусмотрена кнопка редактирования. При клике на неё открывается модальное окно, в котором можно изменить данные семинара. После редактирования обновленные данные отправляются на сервер.

5. **Репозиторий на GitHub**  
   Проект размещён на GitHub, где в одном репозитории находятся как приложение, так и json-server.

## Функции

- **Получение данных**: Приложение загружает данные о семинарах с json-server с использованием GET-запросов.
- **Удаление семинаров**: У каждого семинара есть кнопка удаления, которая вызывает диалог подтверждения и отправляет DELETE-запрос на сервер.
- **Редактирование семинаров**: Каждый семинар можно отредактировать в модальном окне, а изменения отправляются на сервер с помощью PUT-запроса.
- **React и json-server**: React используется для создания пользовательского интерфейса, а json-server предоставляет простой бэкэнд.

## Технологии

- **React**: Для построения пользовательского интерфейса.
  - React Hooks и функциональные компоненты.
- **json-server**: Простой фальшивый REST API для быстрого прототипирования.
- **CSS**: Основные стили для улучшения визуальной составляющей приложения.

## Настройка

Чтобы запустить проект локально, выполните следующие шаги:

### 1. Клонируйте репозиторий

git clone https://github.com/Abdulaziz6921/seminar.git

### 2. Перейдите в каталог проекта и установите необходимые пакеты:

cd seminar

npm install

### 3. Терминале запустите React-приложение и сразу вместо с json-server:

npm run dev:all
