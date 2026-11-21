# Spec 011 — Aplicativo Android

## Objetivo

Disponibilizar o Volley Coach como aplicativo instalável para Android, reaproveitando as telas, o conteúdo e as interações já definidas nas specs 001–010.

## Usuário

Pessoa iniciante que consulta regras, rodízio e quiz pelo celular e quer abrir o Volley Coach pela tela inicial do Android.

## Decisão

O app usa Capacitor 8 como contêiner Android do frontend React existente. O projeto nativo fica em `mobile/android`; o código web permanece em `frontend/`. O conteúdo continua estático e local, sem conta, backend ou serviços remotos.

## Critérios de aceite

- O projeto Android é separado do diretório do frontend.
- O app tem nome `Volley Coach` e identificador `com.volleycoach.app`.
- O build Android carrega os arquivos gerados pelo frontend.
- As rotas Home, regras e detalhes, busca, rodízio e quiz permanecem disponíveis no app.
- A navegação e a preferência de tema existentes continuam sendo usadas.
- O repositório documenta como sincronizar e abrir o projeto no Android Studio.

## Fora do escopo

- Login, backend, sincronização de dados e notificações.
- Publicação na Play Store, assinatura de release e distribuição de APK.
- Criar uma interface Android independente da interface React.

## Dependências e limitações

- Node.js 22 ou superior, Android Studio e Android SDK são necessários para gerar e executar uma build Android local.
- O conteúdo web deve ser compilado em `frontend/dist` antes de sincronizar a plataforma nativa.
