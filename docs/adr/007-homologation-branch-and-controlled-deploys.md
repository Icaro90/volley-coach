# ADR 007 — Branch de homologação e deploys controlados

## Status

Aceita.

## Contexto

A ADR 006 definiu deploys de preview para branches e produção na `main`. Com o crescimento do projeto, publicar um Preview Deployment para cada commit de feature deixa de representar uma versão integrada para validação e gera ruído operacional.

O time precisa validar todo commit com testes, lint e build, mas publicar apenas versões candidatas à homologação e à produção. Também precisa de um caminho repetível para promover uma versão homologada sem criar manualmente a Pull Request entre branches a cada entrega.

## Decisão

Adotar `hom` como branch de homologação e manter `main` como branch de produção.

- O GitHub Actions executará qualidade em cada `push` de qualquer branch.
- A Vercel será configurada para criar deploy automático apenas para `hom` e `main`.
- Após um push em `hom`, o GitHub Actions criará uma Pull Request de `hom` para `main` somente se ainda não houver uma aberta com a mesma origem e destino.
- A PR automática não será mesclada automaticamente. A validação manual da homologação e a revisão continuam necessárias antes do merge em `main`.
- O job de criação da PR receberá `pull-requests: write`; os demais jobs manterão apenas `contents: read`.
- Nas configurações do repositório, GitHub Actions deverá estar autorizado a criar Pull Requests com `GITHUB_TOKEN`.

O fluxo esperado é `feature/*` → `hom` → `main`. Novas features devem partir de `hom`, para que integrem a versão que será homologada.

## Consequências

### Positivas

- Todo commit recebe feedback de qualidade sem depender de deploy.
- A URL de homologação representa uma versão integrada e estável para testes manuais.
- A produção continua limitada a mudanças aprovadas na `main`.
- A promoção de `hom` para `main` ganha um passo repetível, sem remover a decisão humana de publicar.
- A Vercel deixa de criar deploys desnecessários para branches de feature.

### Negativas

- A pessoa desenvolvedora precisa manter `hom` atualizada e abrir Pull Requests de feature para ela.
- A configuração do projeto Vercel precisa associar a branch `hom` ao ambiente de homologação.
- O workflow precisa de uma permissão adicional e limitada para criar Pull Requests.
- A pessoa proprietária precisa habilitar essa capacidade nas configurações de Actions do repositório antes da primeira promoção.
- Uma PR de promoção pode ficar desatualizada se novos commits chegarem em `hom` durante a revisão; ela deverá ser revisada novamente antes do merge.

## Alternativas consideradas

### Manter deploy de preview para toda branch

Rejeitada. É útil em equipes que revisam cada mudança por URL isolada, mas não atende ao objetivo de reduzir deploys e validar uma versão integrada em homologação.

### Executar CI somente em `hom` e `main`

Rejeitada. Um erro em uma feature seria descoberto tardiamente, após a integração. Executar CI a cada push aproxima o feedback do momento da alteração.

### Fazer merge automático de `hom` para `main`

Rejeitada. A homologação manual e a revisão de produção são pontos de controle importantes para este projeto de aprendizado.
