# Инструменты разработчика Go
| [English](README.md) | [Русский](README.ru.md) |

Обязательные компоненты:
  1. Компиляторы: [Официальный бинарный дистрибутив Go](https://golang.org/doc/install) для вашей ОС.
  2. Форматирование кода: встроенный `gofmt` или `goimports` (включает в себя `gofmt`)
  3. Линтеры: `golint`
  4. VCS - система контроля версий - [GitHub](https://github.com/), [Git](https://git-scm.com/), [GUI](https://desktop.github.com/)

Опциональные компоненты:
  1. IDE - редактор или среда разработки: [Atom](https://atom.io/) с пакетом [go-plus](https://atom.io/packages/go-plus), [Gogland](https://www.jetbrains.com/go/), [liteide](https://github.com/visualfc/liteide), [vim-go плагин](https://github.com/fatih/vim-go)
  2. CI - непрерывная интеграция - [TravisCI](https://travis-ci.org/), [пример конфигурации](examples/.travis.yml)
  3. Анализ кода: встроенный `go vet`, [Go Report Card](https://goreportcard.com/)
  4. Документация: встроенный `go doc` генерирует документацию из комментариев
