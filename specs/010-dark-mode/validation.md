# Validação — Modo noturno

## Status

**Concluída — verificações automatizadas e roteiro visual aprovados.**

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Tema escuro padrão | `index.html` usa `data-theme="dark"`; bootstrap e provider usam `dark` sem preferência válida | Aprovado por teste e inspeção |
| Alternância acessível | `ThemeToggle` é um botão com nome acessível, `aria-pressed`, foco visível e suporte a teclado nativo | Aprovado por teste e inspeção |
| Troca sem recarregar | Provider atualiza `data-theme` em resposta ao clique do botão | Aprovado por teste de componente |
| Persistência local | `themeStorage` salva a escolha em `localStorage`; provider restaura tema salvo | Aprovado por testes unitários e de componente |
| Paleta coerente | Componentes React usam tokens semânticos para canvas, superfície, texto, borda, destaque, informação, sucesso e erro | Aprovado por inspeção e validação manual nos dois temas |
| Estados didáticos | Cenários de posição e feedback de quiz preservam cores semânticas de sucesso, erro e informação | Aprovado por inspeção e validação manual nos dois temas |
| Sem backend ou dependências | Implementação usa CSS, React Context, React Router e Vitest já presentes | Aprovado por inspeção |

## Verificações automatizadas

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Lint | Aprovado | `npm run lint` executado com sucesso na Issue 6. |
| Testes | Aprovado | 19 arquivos e 68 testes aprovados na Issue 6. |
| Build de produção | Aprovado | `npm run build` executado com sucesso na Issue 6. |

## Roteiro de validação manual executado

1. A aplicação foi aberta sem preferência salva e iniciou em tema escuro, sem flash claro.
2. Em celular e desktop, o controle do cabeçalho funcionou por mouse, toque e `Tab` + `Enter`, com foco e descrição acessível.
3. Tema claro e escuro foram alternados e restaurados corretamente após atualizar a página.
4. Home, busca, lista, detalhes de regras, rota inexistente e busca sem resultado foram validadas nos dois temas.
5. Rodízio, avanço, reinício, quadra e cenários de posição foram validados nos dois temas.
6. Quiz, alternativas, feedback correto/incorreto, resultado e reinício foram validados nos dois temas.
7. Textos, botões, cartões, bordas, links, foco, erro e estados de sucesso/erro permaneceram legíveis e com contraste adequado.
8. Diagramas SVG das regras foram conferidos sobre a superfície dos dois temas e permaneceram legíveis.

## Limitações conhecidas

- A preferência do sistema operacional não é usada; o escuro é o padrão intencional do produto.
- A preferência é local ao navegador e não é sincronizada entre dispositivos.
- Diagramas SVG continuam estáticos, com paleta didática própria; não recebem troca de tema dinâmica nesta versão.
