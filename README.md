# Setup typescript blank project

```bash
npx create-expo-app@latest app --template blank
```

## Installing react, react-dom for web, and react-native

```bash
npm i expo@latest expo-status-bar@latest react@latest react-dom@latest react-native@latest react-native-web@latest expo@latest expo-status-bar@latest
```

## Installing babel core,  typescript and react types as dev

```bash
npm i @babel/core@latest typescript@latest @types/react@latest -D
```

## Config typescript

```bash
npx tsc --init
```

Add `"extends": "expo/tsconfig.base"` on **tsconfig.json** after **compileOptions**
