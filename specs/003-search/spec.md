# Spec 003 — Busca de regras

## Objetivo

Permitir que jogadores iniciantes encontrem rapidamente uma regra básica de vôlei a partir de uma dúvida ou termo de pesquisa.

## Problema

Uma lista de regras ajuda quem sabe qual tema procurar, mas durante treinos e jogos a dúvida costuma ser expressa em linguagem natural, como “pode segurar a bola?” ou “bola na linha vale?”. A pessoa precisa chegar ao conteúdo relevante sem percorrer todos os temas.

## Usuário

Jogador ou jogadora iniciante de vôlei, em treino ou partida recreativa, que tem uma dúvida pontual e quer localizar uma explicação rapidamente.

## Fluxo principal

1. A pessoa informa um termo no campo de busca da Home e envia a pesquisa.
2. O aplicativo navega para `/search?q=termo`.
3. A página de resultados procura o termo nos títulos, resumos e explicações das regras básicas disponíveis.
4. A pessoa vê os resultados correspondentes e seleciona uma regra.
5. O aplicativo abre o detalhe da regra em `/rules/:ruleId`.

## Critérios de aceite

- O campo de busca da Home pode ser enviado por teclado e aciona uma pesquisa.
- A rota `/search` mantém o termo pesquisado no parâmetro `q` da URL.
- A busca considera título, resumo e explicação das regras básicas.
- A comparação não diferencia maiúsculas de minúsculas nem acentos.
- A página de resultados mostra o termo pesquisado e a quantidade de resultados encontrados.
- Cada resultado apresenta título, resumo e link para o detalhe da regra.
- Uma pesquisa sem resultados apresenta uma mensagem clara e um caminho para consultar todas as regras.
- Uma pesquisa vazia não executa a busca e orienta a pessoa a informar um termo.
- A interface funciona em celular e desktop, e seus controles podem ser usados por teclado.
- A feature não introduz chamadas de rede, backend ou banco de dados.

## Fora do escopo

- Busca em conteúdo de rodízio, quiz ou futuras funcionalidades.
- Autocomplete, sugestões enquanto digita, correção ortográfica ou sinônimos.
- Filtros, ordenação, histórico e pesquisas salvas.
- Indexação no servidor, busca full-text no PostgreSQL ou TanStack Query.
- Analytics de termos pesquisados.

## Dependências

- Feature `001-home`, que disponibiliza o campo de busca.
- Feature `002-rules`, que disponibiliza as regras estáticas e as páginas de detalhe.
- React Router, para leitura e escrita do parâmetro de busca na URL.

## Riscos

- Termos com sinônimos não previstos podem não retornar a regra esperada.
- Uma busca textual simples pode encontrar resultados amplos demais quando houver mais conteúdo.
- A busca local precisará ser substituída ou complementada por uma solução de servidor quando o catálogo crescer.
- Mensagens vazias ou sem resultado pouco claras podem frustrar pessoas em uma dúvida urgente.
