# Volley Coach para Android

Este diretório contém o projeto Android nativo empacotado com Capacitor. A interface, o conteúdo e as regras de navegação continuam no frontend existente em `../frontend`.

## Requisitos

- Node.js 24 ou superior (Node 24.11.0 é usado na CI);
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

Para gerar um APK debug, depois de sincronizar, execute em `mobile/android`:

```bash
./gradlew assembleDebug
```

O arquivo fica em `mobile/android/app/build/outputs/apk/debug/app-debug.apk`.

Na implementação das features 021–032, uma cópia gerada foi colocada em `C:\Users\pilpa\Documents\Codex\2026-11-21\queri\outputs\Volley-Coach-debug-021-032.apk`.

As features locais 021–028 e 031–032 usam o frontend compartilhado e armazenamento do WebView; gere o build web e sincronize novamente antes de compilar o APK para incorporar essas telas. O placar e os vínculos de histórico/scout são locais e o vínculo é opcional. Features 029 e 030 não estão disponíveis no APK até a definição de backend/revisão de conteúdo correspondente.

O Android Studio abre o projeto em `mobile/android`. Selecione um dispositivo ou emulador e use **Run** para instalar e abrir o app. O identificador Android é `com.volleycoach.app`.

O launcher icon usa um vetor de bola de vôlei nos formatos adaptativo e fallback. Edite os recursos em `android/app/src/main/res/`.
