# ADR 003 — Busca local com termo persistido na URL

## Status

Aceita.

## Contexto

A feature `003-search` pesquisa apenas as seis regras estáticas já carregadas no frontend. A pessoa usuária deve poder enviar uma dúvida pela Home e chegar a uma página de resultados que continue válida após atualização, compartilhamento de link ou uso de voltar/avançar.

Manter o termo somente em `useState` faria o resultado depender da sessão atual do componente e não representaria o estado da busca na URL.

## Decisão

Usar `/search?q=termo` como representação da busca. A página de resultados lê `q` com `useSearchParams` do React Router e calcula os resultados por uma função pura local.

A busca normaliza maiúsculas/minúsculas e acentos antes de comparar título, resumo e explicação das regras. O formulário mantém apenas o estado temporário de digitação; resultados não são armazenados em estado global.

## Consequências

### Positivas

- URLs podem ser atualizadas, compartilhadas e navegadas pelo histórico sem perder o termo.
- A lógica de busca é testável sem componentes React ou roteador.
- Não introduz backend, chamadas de rede ou dependências adicionais.
- A normalização atende dúvidas digitadas sem acentos.

### Negativas

- A busca é limitada ao conteúdo carregado no cliente.
- Não entende sinônimos, erros ortográficos ou intenção da pessoa usuária.
- O desempenho precisará ser reavaliado quando o catálogo crescer.

## Alternativas consideradas

### Estado global com Context ou biblioteca de estado

Rejeitada. O estado da busca pertence à URL e não precisa ser compartilhado fora da rota de resultados.

### API de busca e PostgreSQL full-text no MVP

Rejeitada. O catálogo atual é pequeno e estático; backend não oferece benefício proporcional neste momento.

### Manter o termo apenas em useState

Rejeitada. Atualizar ou compartilhar a página perderia o estado da busca.
