# Spec 017 — Glossário de vôlei

## Objetivo

Explicar termos e expressões comuns usados em regras e treinos de vôlei.

## Usuário e problema

Pessoa iniciante que encontra uma palavra técnica em um treino ou regra e precisa entender o significado sem procurar em fontes dispersas.

## Fluxo principal

1. A pessoa abre **Glossário** e pesquisa um termo.
2. Consulta uma definição breve, um exemplo de uso e termos relacionados.
3. Segue um link para regra ou exercício relacionado, quando existir.

## Critérios de aceite

- Catálogo inicial tem pelo menos 30 termos revisados e agrupados por categoria.
- Cada termo possui identificador, termo principal, variantes/sinônimos, definição curta, exemplo opcional e links internos opcionais.
- Busca ignora caixa e acentos e encontra termo, sinônimo e texto explicativo.
- Há estados para vazio, nenhum resultado e termo inexistente.
- Termos relacionados apontam para rotas válidas; dados locais inválidos não geram links quebrados.
- Glossário está disponível offline e é navegável por teclado/leitor de tela.

## Conteúdo

Priorizar vocabulário de fundamentos, regras, posições e organização de treino. Definições devem ser originais, simples e consistentes com o regulamento/referências citadas; evitar copiar blocos longos de material protegido.

## Fora do escopo

- Tradução automática, áudio, pronúncia ou dicionário comunitário.
- Conteúdo editável por usuários ou dependente de servidor.
- Definições jurídicas de regras além do material didático já existente.

## Dependências

- Navegação e busca normalizada da feature 003.
- Regras existentes nas specs 002, 007 e 008; exercícios relacionados quando a Spec 013 estiver concluída.
