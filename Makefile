install: # Установка зависимостей
	npm ci

dev: # Запуск проекта в режиме разработки
	bash ./config/bin/dev

build: # Сборка проекта для публикации
	bash ./config/bin/build

lint: # Запуск линтера
	npx eslint .
