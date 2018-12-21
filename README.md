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
