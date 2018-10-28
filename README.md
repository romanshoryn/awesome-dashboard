# awesome-dashboard

#### How to install [WEB]:

Go to `./web` folder and run `yarn install` command to install all dependencies.

After that type `yarn start` to start the application.

#### How to install [API]:

Go to `./api` folder and run `python3 server.py` command to start the app.


#### Notes

- Я так и не разобрался, как правильно вычислить Average значение процента различных ошибок, поэтому я бы вовсе не отображал эту информацию до тех пор, пока бы это не выяснил.

- Есть сомнения по поводу Mobile & Web traffic, я взял данные из `web_pessimizer` и `mobile_pessimizer`, но опять таки я бы выяснил подробнее об этих полях, прежде чем их отображать, так как для меня не совсем ясно слово `pessimizer` как я не гуглил :) К тому же эти поля не содержат временного периода (last hour, today and etc.).

- Цвета errors bar не совпадают с теми, которые в дизайне, так как я генерирую цвета на основе кода ошибки.
Таким образом различные ошибоки всегда получат своей цвет без необходимости изменения кода. Я надеюсь это не проблема, но даже если так, то функцию можно немного подправить.
