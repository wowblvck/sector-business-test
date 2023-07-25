<h1 align="center">Тестовое задание</h1>
<p>
  <a href="https://github.com/wowblvck/sector-business-test/actions/workflows/production.yml">
    <img alt="Production" src="https://github.com/wowblvck/sector-business-test/actions/workflows/production.yml/badge.svg" />
  </a>
  <a href="https://github.com/wowblvck/sector-business-test/actions/workflows/development.yml">
    <img alt="develop" src="https://github.com/wowblvck/sector-business-test/actions/workflows/development.yml/badge.svg" />
  </a>
</p>

> Данное приложение разработано в рамках выполнения тестового задания на позицию Frontend-разработчика

<details>
  <summary>Описание задания</summary>
  
  [Перейти по ссылке (Google Docs)](https://docs.google.com/document/d/1c3O9IfSIb_LLWFGH13_P-EKgfth6-crahUTDC5qOqAg/edit#heading=h.v6qv7ud4802e)

</details>

<details>
  <summary>Выполненные требования</summary>
  
  #### Общие требования
  - [x] В приложении используется архитектура SPA.
  - [x] Приложение работает в Chrome и Firefox.
  - [x] В качестве дизайн-системы используется Ant Design.
  - [x] Код чистый и читабельный.
  - [x] Отсутствует дублирование кода, приложение разбито на компоненты, отформатировано в едином стиле.
  - [x] Вёрстка совпадает с макетом в [Figma](https://www.figma.com/file/amcWeZhjaZ0eSyYiSNG6vN/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B?type=design&node-id=0-1&mode=design&t=PSzQdhXGSRq95H9R-0).
  - [x] Приложение написано с использованием React и Redux (RTK Toolkit).
  - [x] Приложение адаптировано под различные устройства.  
  
  #### Описание приложения
  - [x] При входе на страницу отображается таблица с данными.
  - [x] На одной странице таблицы показывается только 10 записей.
  - [x] Под таблицей располагаются элементы, показывающие количество страниц таблицы.
  - [x] Кнопки “Назад” и “Далее” переключают страницы таблицы.
  - [x] Переключение между страницами происходит без перезагрузки.
  - [x] При нажатии на заголовки столбцов происходит сортировка записей (от большего к меньшему или по алфавиту).
  - [x] В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение присутствует. Поиск по всем столбцам.
  - [x] Страница таблицы должна отображаться в URL браузера.

  #### Дополнительный функционал
  - [x] В адресной строке браузера можно указать количество записей на странице.
  - [x] Написаны unit-тесты.
  - [x] Настроен CI/CD pipeline для development и для production.

</details>

---
Приложение написано с использованием следующего *JavaScript* стека.

- [React](https://reactjs.org/) 
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React Router](https://github.com/remix-run/react-router#readme)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Дизайн система
- [Ant Design](https://ant.design/)

В качестве источника данных используется API:
- [JSON Placeholder](https://jsonplaceholder.typicode.com/)

Unit-тесты написаны с использованием:
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [msw](https://mswjs.io/)

## Настройка приложения

1. Для работы приложения требуется NodeJS версии `>= 18.17`
2. В корневом каталоге создать файл `.env` и указать ключ:
```
VITE_API=https://jsonplaceholder.typicode.com
```

## Запуск приложения

1. Для запуска приложения в режиме разработчика использовать `npm run dev`
2. Для запуска тестов использовать `npm run test` и `npm run coverage`
3. Для сборки использовать `npm run build`

---

## ✨ [Превью](https://test-sector-business.netlify.app)

## Автор

👤 Разработчик **Indar Basto** ([@wowblvck](https://github.com/wowblvck))
