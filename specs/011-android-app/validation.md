# Validação — Aplicativo Android

- **Projeto nativo:** `mobile/android` gerado pelo Capacitor 8.
- **Build web:** `npm run build` executado em `frontend/`; saída criada em `frontend/dist`.
- **Sincronização inicial:** assets web copiados para `mobile/android/app/src/main/assets/public` durante `npm run android:add`.
- **SDK:** command-line tools, Platform Tools, API 36 e Build Tools 36.0.0 instalados em `C:\Users\pilpa\AppData\Local\Android\Sdk`; licenças aceitas após autorização da pessoa usuária.
- **Launcher icon:** vetor de bola de vôlei configurado para ícone adaptativo (Android 8+) e fallback vetorial.
- **Build Android:** `gradlew.bat assembleDebug` concluído com sucesso após a atualização do ícone.
- **Navegação inferior:** assets do frontend sincronizados; barra Início/Buscar/Treinos/Mais e tela `/more` incluídas no build.
- **Features locais 021–028 e 031–032:** fichas/chamadas, avaliações, desafios, plano, formações, modo de quadra, backup, placar e integração opt-in sincronizados com Capacitor.
- **APK de depuração:** `mobile/android/app/build/outputs/apk/debug/app-debug.apk`; cópia desta implementação em `C:\Users\pilpa\Documents\Codex\2026-11-21\queri\outputs\Volley-Coach-debug-021-032.apk`.
- **Fluxo funcional em emulador/dispositivo:** pendente; não há emulador configurado ou aparelho conectado.
