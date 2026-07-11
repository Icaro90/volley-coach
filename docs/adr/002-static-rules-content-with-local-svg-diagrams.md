# ADR 002 — Conteúdo estático de regras com diagramas SVG locais

## Status

Aceita.

## Contexto

A feature `002-rules` apresenta seis regras básicas de vôlei de quadra. O conteúdo é pequeno, não varia por pessoa usuária e não exige atualização em tempo real.

Também há necessidade de apoio visual. Imagens raster detalhadas ou uma integração com CMS aumentariam o custo de criação, revisão, desempenho e manutenção antes de validar se o formato de explicação é útil para iniciantes.

## Decisão

Manter as regras em um módulo TypeScript local, tipado e separado dos componentes. Cada regra terá metadados de fonte e revisão.

Usar diagramas SVG simples, armazenados localmente, para representar situações de quadra. Cada diagrama deve ter texto alternativo descritivo quando apresentado na interface.

As rotas serão `/rules` para a lista e `/rules/:ruleId` para o detalhe de cada regra.

## Consequências

### Positivas

- A feature pode ser entregue sem backend, CMS ou chamadas de rede.
- O modelo tipado reduz inconsistência entre as seis regras.
- SVG é leve, nítido em diferentes tamanhos e adequado para diagramas simples.
- Metadados de fonte tornam a revisão de conteúdo rastreável.

### Negativas

- Atualizações de regra exigem alteração e deploy do frontend.
- Diagramas SVG não simulam movimentos ou decisões complexas de arbitragem.
- A edição de conteúdo depende de pessoas desenvolvedoras enquanto não houver CMS.

## Alternativas consideradas

### Backend e banco de dados desde o início

Rejeitada. Não há necessidade de conteúdo dinâmico, autenticação ou edição administrativa nesta etapa.

### Imagens raster geradas para cada regra

Rejeitada para o MVP. Aumenta o esforço de produção e pode perder legibilidade em telas pequenas; diagramas vetoriais simples são suficientes para validar a proposta.

### Texto puro sem apoio visual

Rejeitada. Não atende ao objetivo do produto de ensinar regras de modo visual e intuitivo.
