# Volley Coach para Android

Este diretório contém o projeto Android nativo empacotado com Capacitor. A interface, o conteúdo e as regras de navegação continuam no frontend existente em `../frontend`.

## Requisitos

- Node.js 22 ou superior;
- Android Studio com Android SDK instalado.

## Preparar e abrir o app

No primeiro uso após clonar o repositório, a partir da raiz:

```bash
cd mobile
npm ci
cd ../frontend
npm ci
npm run build
cd ../mobile
npm run android:sync
npm run android:open
```

`npm run android:add` só é necessário se a pasta `android/` tiver sido removida e precisar ser recriada.

Para atualizar o conteúdo web empacotado depois de alterações no frontend:

```bash
cd ../frontend
npm run build
cd ../mobile
npm run android:sync
```

O Android Studio abre o projeto em `mobile/android`. Selecione um dispositivo ou emulador e use **Run** para instalar e abrir o app. O identificador Android é `com.volleycoach.app`.
