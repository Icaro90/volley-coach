# ADR 001 — Frontend-first com dados estáticos no MVP inicial

## Status

Aceita.

## Contexto

A primeira funcionalidade é a Home, uma tela de entrada com busca visual e atalhos para regras, rodízio e quiz. Ela ainda não precisa consultar dados persistidos, identificar pessoas usuárias ou executar regras de negócio no servidor.

Criar NestJS, Prisma e PostgreSQL agora aumentaria o número de decisões, ambientes e pontos de falha antes de validar a experiência principal do produto.

## Decisão

Implementar a Home inicialmente apenas no frontend React, usando dados estáticos locais para seus atalhos. A busca será apresentada como interface, mas seu comportamento de consulta não será implementado nesta feature.

As rotas das áreas futuras serão planejadas desde já para manter a navegação consistente.

## Consequências

### Positivas

- Permite validar a usabilidade da Home com menor custo e menor complexidade.
- Mantém a primeira feature focada na experiência da pessoa usuária.
- Evita infraestrutura, API e banco de dados sem necessidade concreta.

### Negativas

- O conteúdo é temporariamente limitado a dados locais.
- A busca não retorna resultados neste estágio.
- Uma futura integração com API exigirá substituir ou adaptar os dados estáticos.

## Alternativas consideradas

### Criar o backend completo antes da Home

Rejeitada. Não há requisito da Home que justifique API, persistência ou autenticação neste momento.

### Usar um serviço externo de CMS imediatamente

Rejeitada. Introduz dependência externa e modelagem de conteúdo antes de validar quais informações e fluxos são mais úteis para iniciantes.
