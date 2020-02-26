# Vuejs

### vue-webpack 模板

Webpack 是一個開源的前端打包工具,Webpack 提供了前端開發缺乏的模組化開發方式,將各種靜態資源視為模組

#### 安裝

##### nvm
ubuntu 及 centos 都可以使用
```bash
# nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

##### nodejs
前提為先安裝好 nvm
```bash
nvm install v9.8.0
```

##### vue cli
```bash
npm install vue-cli -g
```

#### 啟動

完成 vue cli 的安裝後，就可以使用 vue-webpack 模板創建項目了 <br>
切換到欲新增專案的目錄，輸入：
```bash
vue init webpack project-name
```
接著會需要輸入關於 project 的設定
```
? Project name (project-name)
? Project description (A Vue.js project)
? Author (yun0615)
? Vue build
❯ Runtime + Compiler: recommended for most users
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere
? Install vue-router? (Y/n)
? Use ESLint to lint your code? (Y/n)
```

如果選擇使用 ESLint 工具統一程式碼結構 <br>
會有如下所示的選項
```
? Use ESLint to lint your code? Yes
? Pick an ESLint preset (Use arrow keys)
❯ Standard (https://github.com/standard/standard)
  Airbnb (https://github.com/airbnb/javascript)
  none (configure it yourself)
```

接著會需要選擇是否要建立 unit test

```bash
? Set up unit tests (Y/n)

# YES
? Set up unit tests Yes
? Pick a test runner
  Jest
❯ Karma and Mocha
  none (configure it yourself)
```


```
? Setup e2e tests with Nightwatch?
? Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
❯ Yes, use NPM
  Yes, use Yarn
  No, I will handle that myself
```

專案已經創建完成
```
Running eslint --fix to comply with chosen preset rules...
# ========================


> project-name@1.0.0 lint /home/icl/brahma/project-name
> eslint --ext .js,.vue src test/unit test/e2e/specs "--fix"


# Project initialization finished!
# ========================

To get started:

  cd project-name
  npm run dev

Documentation can be found at https://vuejs-templates.github.io/webpack
```

切換目錄
```
cd project-name
```

執行專案
```
npm run dev
```
將專案發布為靜態檔
```
npm run build
```
