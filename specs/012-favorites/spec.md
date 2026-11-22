# Spec 012 — Favoritos

## Objetivo

Permitir que a pessoa salve regras e exercícios importantes e volte a eles rapidamente.

## Usuário e problema

Jogador iniciante que consulta as mesmas regras durante treinos ou partidas e não quer refazer a busca toda vez.

## Fluxo principal

1. A pessoa marca ou desmarca uma regra na lista/detalhe ou um exercício no detalhe do exercício.
2. Abre a página **Favoritos** pelo menu principal.
3. Consulta regras e exercícios salvos ou remove um item da lista.

## Critérios de aceite

- Regras podem ser adicionadas ou removidas pela lista e página de detalhe; exercícios podem ser favoritados no detalhe.
- A página `/favorites` lista regras e exercícios salvos, oferece estado vazio e links para os detalhes correspondentes.
- Favoritos sobrevivem a atualização e fechamento do app no mesmo dispositivo e navegador.
- Identificadores inexistentes ou dados locais inválidos não interrompem a aplicação; itens obsoletos são ignorados ou removidos com segurança.
- Ações possuem nome acessível, estado anunciado e funcionamento por teclado.
- A funcionalidade opera offline e mantém a arquitetura sem conta, API ou servidor.

## Dados e privacidade

Salvar o tipo (`rule` ou `exercise`), identificador estável e data de inclusão, usando a chave namespaced `volley-coach.favorites.v1` e leitura/escrita defensiva em `localStorage`. Os favoritos ficam neste navegador ou instalação Android; não são sincronizados. Limpar os dados do app pode apagá-los.

## Fora do escopo

- Sincronização entre dispositivos, login ou backup na nuvem.
- Histórico automático de visualizações.

## Dependências

- Catálogo estático e identificadores de regras das specs 002 e 007.
- Navegação e componentes compartilhados atuais.
