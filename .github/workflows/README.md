# Automatic tests

After completing all the steps in the project, automatic tests will become available to you. Tests are run on each commit - once all tasks in the Hexlet interface are completed, make a commit, and the tests will run automatically.

The hexlet-check.yml file is responsible for running these tests - do not delete this file, edit it, or rename the repository.

Описание проекта:
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:
- Калькулятор. Арифметические выражения, которые необходимо вычислить (brain-calc).
- Прогрессия. Поиск пропущенных чисел в последовательности чисел (brain-progression).
- Определение четного числа (brain-even).
- Определение наибольшего общего делителя (brain-gcd).
- Определение простого числа (brain-prime).

Минимальные требования: 
1. Наличие установленного терминала;
2. Наличие установленного Node.js

Инструкция по установке и запуск:
1. Установите пакеты, необходимые для работы игры, при помощи команды npm install, которая скачает их в папку проекта node_modules в соответствии с конфигурацией в файле package.json;
2. Установите пакет с игрой в систему с помощью npm link;
3. Запустите игру командами: brain-even, brain-calc, brain-gcd, brain-progression, brain-prime.


Asciinema каждой игры:

brain-even: [![asciicast](https://asciinema.org/a/574664.svg)](https://asciinema.org/a/574664)
brain-calc: [![asciicast](https://asciinema.org/a/575556.svg)](https://asciinema.org/a/575556)
brain-gcd: [![asciicast](https://asciinema.org/a/576221.svg)](https://asciinema.org/a/576221)
brain-progression: [![asciicast](https://asciinema.org/a/576480.svg)](https://asciinema.org/a/576480)
brain-prime: [![asciicast](https://asciinema.org/a/576602.svg)](https://asciinema.org/a/576602)