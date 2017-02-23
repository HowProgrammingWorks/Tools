# Инструменты разработчика Java
| [English](README.md) | [Русский](README.ru.md) |

Обязательные компоненты:
  1. Компиляторы: javac, содержащийся в [jdk](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html)
  2. Линтеры: Checkstyle (смотреть секцию Опциональных компонентов), [linter-javac](https://atom.io/packages/linter-javac) для [Atom](https://atom.io)
  3. VCS - система контроля версий - [GitHub](https://github.com/), [Git](https://git-scm.com/), [GUI](https://desktop.github.com/)

Опциональные компоненты:
  1. IDE - редактор или среда разработки: [IntelliJ IDEA](https://www.jetbrains.com/idea/), [Eclipse](https://eclipse.org)
  2. Code analysis: [PMD](https://pmd.github.io/), [Checkstyle](http://checkstyle.sourceforge.net/), [FindBugs](http://findbugs.sourceforge.net/), [Find Security Bugs (plugin for FindBugs)](http://find-sec-bugs.github.io/).
    Можете использовать вручную (с помощью консольного интерфейса) или добавить к своей IDE: 
    * Intellij Idea плагины (просто установите через Plugins в настройках Idea): [QAPlug](https://plugins.jetbrains.com/idea/plugin/4594-qaplug), [QAPlug - Checkstyle](https://plugins.jetbrains.com/idea/plugin/4595-qaplug--checkstyle), [QAPlug - PMD](https://plugins.jetbrains.com/idea/plugin/4596-qaplug--pmd), [FindBugs-IDEA](https://plugins.jetbrains.com/idea/plugin/3847-findbugs-idea)
    * Eclipse плагины: [PMD](http://pmd.sourceforge.net/pmd-4.3.0/integrations.html#eclipse), [Checkstyle](http://eclipse-cs.sourceforge.net/#!/), [FindBugs](http://www.vogella.com/tutorials/Findbugs/article.html)
  3. CI - непрерывная интеграция: [TravisCI](https://travis-ci.org/)
