# Spec 016 — Consulta rápida

## Objetivo

Dar acesso rápido a respostas curtas sobre situações comuns de vôlei, para consulta durante uma atividade.

## Usuário e problema

Pessoa que está na quadra e precisa conferir uma regra sem ler uma explicação longa ou percorrer várias telas.

## Fluxo principal

1. A pessoa abre **Consulta rápida** pela Home ou navegação principal.
2. Escolhe uma situação frequente ou encontra uma por busca/filtro curto.
3. Lê a decisão resumida e pode abrir a regra completa.

## Critérios de aceite

- Rota `/quick-reference` abre diretamente e funciona offline.
- Conteúdo inicial cobre ao menos dez situações frequentes selecionadas a partir do catálogo existente.
- Cada cartão mostra pergunta/situação, resposta curta, consequência principal e link para a regra completa.
- Conteúdo resumido mantém precisão e referência à regra correspondente; não cria versões conflitantes com as páginas detalhadas.
- Página prioriza leitura rápida em celular: texto curto, alvos de toque amplos, contraste e pouca navegação aninhada.
- Favoritos da Spec 012 podem ser alcançados por atalho, sem duplicar o modelo de dados.

## Fora do escopo

- Interpretar uma jogada por vídeo, câmera ou IA.
- Substituir regulamento oficial ou criar arbitragem para casos ambíguos.
- Conteúdo específico de torneio, federação ou regra local.

## Dependências

- Catálogo de regras das specs 002, 007 e 008.
- Spec 012 para o atalho de favoritos.
