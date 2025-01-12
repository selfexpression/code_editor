### Go to App-> [Code Editor](https://code-editor-react-app-project.vercel.app/)

### Installation Guide:

- `$ git clone: https://github.com/selfexpression/code_editor`
- `$ npm i`
- `$ npm start`

### Приложение запустится на http://localhost:3000

## Ограничения

Редактор работает со статичными мокированными данными.
"Мок-сервер" реализован в виде функции `mockFetch` имитирующей работу стандартной `fetch`.

При успешном запросе возвращается статичный ответ результата функции.
Для того, чтобы получить ошибку, необходимо удалить любой символ из редактора.

Приложение корректно работает с языками JS и TS.
