# Plano de tarefas — Aplicativo Android

## Issue 1 — Definir o escopo Android

- **Status:** Concluída
- **Objetivo:** empacotar as rotas atuais do frontend em um contêiner Android e manter o projeto nativo separado.
- **Critérios de conclusão:** decisão Capacitor documentada; responsabilidades entre `frontend/` e `mobile/` definidas.

## Issue 2 — Configurar o contêiner Capacitor

- **Status:** Concluída
- **Objetivo:** configurar nome, identificador, versão e diretório de saída do frontend.
- **Critérios de conclusão:** `mobile/capacitor.config.json` aponta para `frontend/dist`; plataforma Android inicializada em `mobile/android`.

## Issue 3 — Documentar sincronização e uso

- **Status:** Concluída
- **Objetivo:** registrar instalação de dependências, build web, sincronização e abertura do projeto no Android Studio.
- **Critérios de conclusão:** instruções em `mobile/README.md` e README raiz; artefatos locais ignorados pelo Git.

## Issue 4 — Gerar e executar APK em dispositivo Android

- **Status:** APK de depuração recompilado com o novo launcher icon; validação em dispositivo pendente
- **Objetivo:** compilar e abrir o app em emulador ou dispositivo físico.
- **Critérios de conclusão:** build Gradle concluída; falta verificar as rotas atuais em Android.
- **Pré-requisito:** Android SDK instalado; este ambiente não tem emulador configurado.

## Issue 5 — Criar launcher icon de vôlei

- **Status:** Implementada; APK Android recompilado
- **Objetivo:** usar uma bola de vôlei como ícone adaptativo e fallback para versões anteriores do Android.
- **Critérios de conclusão:** recursos vetoriais versionados e APK recompilado.
