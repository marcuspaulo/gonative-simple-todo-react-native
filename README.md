# Módulo 1 - GoReact Native

# Passo 1, Instalando o React-Native-cli

´´´sh
\$ yarn global add react-native-cli
´´´

# Passo 2, Criando um projeto com o react-native-cli

´´´sh
\$ react-native init goNativeModulo1
´´´

# Executando o projeto no iOS (Primeira vez ou só é para rodar novamente, se linkar com alguma dependência nativa)

´´´sh
\$ react-native run-ios
´´´

# Executando o projeto no Android (Primeira vez ou só é para rodar novamente, se linkar com alguma dependência nativa)

´´´sh
\$ react-native run-android
´´´

# Executando o projeto no iOS (Device específico)

´´´sh
\$ react-native run-ios --simulator="iPhone XS Max"
´´´

# Executando o projeto

´´´sh
\$ react-native start
´´´

# Executando o projeto sem cache

´´´sh
\$ react-native start --reset-cache
´´´

Sugestão de organização do projeto, colocar renomear o arquivo App.js para index.js.
Colocar o index.js dentro da pasta /src

# Definição das PropsType

```js
$ yarn add prop-types
```

---

# Erro ao executar no ios

```
react-native run-ios --simulator="iPhone XS Max"
Found Xcode project goNativeModulo1.xcodeproj
xcrun: error: unable to find utility "instruments", not a developer tool or in PATH

Command failed: xcrun instruments -s
xcrun: error: unable to find utility "instruments", not a developer tool or in PATH


Error: Command failed: xcrun instruments -s
xcrun: error: unable to find utility "instruments", not a developer tool or in PATH

    at checkExecSyncError (child_process.js:611:11)
    at Object.execFileSync (child_process.js:629:13)
    at Object.runIOS [as func] (
```

# Correção do Erro:

```
Abrir as preferências do XCode, em locations, definir a Command Line Tools

Check out this link: https://github.com/facebook/react-native/issues/7965. It appears to be a problem with the location of Command line tools.

In Xcode, select Xcode menu, then Preferences, then Locations tab. Select your Xcode version from the dropdown and exit Xcode.

https://stackoverflow.com/questions/39778607/error-running-react-native-app-from-terminal-ios

```

# Erro: When I run a react-native project, I get a error no bundle URL present , but I don't know what mistakes I do, I was very confused.

```

Correção: ..I ran the following command:

$ sudo xcodebuild -license
It works now.

https://stackoverflow.com/questions/42610070/what-is-the-meaning-of-no-bundle-url-present-in-react-native
```

#Links FlexBox
https://github.com/rocketseat/react-native-styling-cheat-sheet

Configurando o editorconfig
1 - Criar na raiz: .editorconfig

```js
root = true // Sinaliza que é o arquivo principal

[*] // vale para todas as extensões
charset = utf-8 // charset do projeto
indent_style = space // estilo de identação: espaço
indent_size = 2 // tamanho da identação
end_of_line = lf // final de linha igual para os sistemas operacionais
insert_final_newline = true // adiciona uma linha ao final do arquivo
trim_trailing_whitespace = true // retira os espaços em branco, ao final de uma linha de código.
```

```js
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

# Instalando o Reactotron

```js
$ yarn add reactotron-react-native
```

https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md

# Configuração do ReactotronConfig.js

```js
import Reactotron from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
```

# Configurando o ESLint

```sh
$ yarn add eslint -D
```

#Iniciando a configuração do ESlint

```sh
$ yarn eslint --init
```

Selecione as opções:
1- Use a popular style guide
2 - Airbnb (https://github.com/airbnb/javascript)
3 - Do you use React? Yes
4 - What format do you want your config file to be in? (Use arrow keys)
JSON
5 - Would you like to install them now with npm? Yes

# Instalando mais dois plugins para o ESLint

```sh
$ yarn add babel-eslint eslint-plugin-react-native -D
```

# Plugin para imports

```sh
$ yarn add babel-plugin-root-import -D
```

#Configuração do Babel Root Import

```js
{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "babel-plugin-root-import", {
        "rootPathSuffix": "src"
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        "babel-plugin-root-import", {
          "rootPathSuffix": "src"
        }
      ]
    }
  }
}

```

# Para que o ESLint entenda o import (root import)

```sh
$ yarn add  eslint-import-resolver-babel-plugin-root-import -D
```

# Configuração do .eslintrc.json

```js
{
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react-native/all"],
  "plugins": ["react-native", "jsx-a11y", "import"],
  "env": {
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extesion": [
      "error",
      {
        "extensions": [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off"
  },
  "globals": {
    "__DEV__": true
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {}
    }
  }
}

```

# Para o VSCode reconhecer o root-import, precisa criar o arquivo

jsconfig.json

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

# Debug react-dev-tools

```sh
$ yarn add react-devtools --dev
```

# Criar o arquivo de Configuração, dentro da pasta src/config/DevToolsConfig.js

```js
if (__DEV__) {
  require("react-devtools");
}
```

Em seguida, faça o import no App.js (ou index.js)

```js
import "./config/DevToolsConfig";
```

No package.json, adicionar a seguinte linha do react-devtools

```js
"scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "react-devtool": "react-devtools"
  },
```

# Executando o react-devtool

```sh
$ yarn run react-devtool
```

# Escolhendo uma implementação ou estilo para uma plataforma específica

\$ Código

```js
const Todo = ({ title }) => (
  <View>
    {Platform.OS === "ios" ? (
      <Text style={styles.text}>iOS</Text>
    ) : (
      <Text>{title}</Text>
    )}
  </View>
);
```

\$ Estilo

```js
const styles = StyleSheet.create({
  ...Platform.select({
    ios: {
      fontSize: 10
    },
    android: {
      fontSize: 14
    }
  })
});
```

3 - A outra forma, é renomear os arquivos para

- Todo.ios.js
- Todo.android.js
