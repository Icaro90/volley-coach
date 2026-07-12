# Validação — Modo noturno

## Status

**Em validação — verificações automatizadas aprovadas; roteiro visual pendente.**

## Critérios de aceite

| Critério | Evidência | Resultado |
| --- | --- | --- |
| Tema escuro padrão | `index.html` usa `data-theme="dark"`; bootstrap e provider usam `dark` sem preferência válida | Aprovado por teste e inspeção |
| Alternância acessível | `ThemeToggle` é um botão com nome acessível, `aria-pressed`, foco visível e suporte a teclado nativo | Aprovado por teste e inspeção |
| Troca sem recarregar | Provider atualiza `data-theme` em resposta ao clique do botão | Aprovado por teste de componente |
| Persistência local | `themeStorage` salva a escolha em `localStorage`; provider restaura tema salvo | Aprovado por testes unitários e de componente |
| Paleta coerente | Componentes React usam tokens semânticos para canvas, superfície, texto, borda, destaque, informação, sucesso e erro | Aprovado por inspeção; pendente revisão visual |
| Estados didáticos | Cenários de posição e feedback de quiz preservam cores semânticas de sucesso, erro e informação | Aprovado por inspeção; pendente revisão visual |
| Sem backend ou dependências | Implementação usa CSS, React Context, React Router e Vitest já presentes | Aprovado por inspeção |

## Verificações automatizadas

| Verificação | Resultado | Evidência |
| --- | --- | --- |
| Lint | Aprovado | `npm run lint` executado com sucesso na Issue 6. |
| Testes | Aprovado | 19 arquivos e 68 testes aprovados na Issue 6. |
| Build de produção | Aprovado | `npm run build` executado com sucesso na Issue 6. |

## Roteiro de validação manual

1. Abra a aplicação em uma janela anônima e confirme que inicia em tema escuro, sem flash claro.
2. Em celular e desktop, acione o controle no cabeçalho com mouse, toque e `Tab` + `Enter`; confirme ícone, foco e texto/descrição acessível.
3. Ative o tema claro, atualize a página e confirme que ele é restaurado; repita retornando ao tema escuro.
4. Confira Home, busca, lista e detalhe de regras, inclusive rota inexistente e busca sem resultado.
5. Confira rodízio, avanço, reinício, quadra, cenários válidos e cenários de falta.
6. Confira quiz na introdução, seleção de alternativa, feedback correto/incorreto, resultado e reinício.
7. Em ambos os temas, confirme leitura confortável de textos, contraste de botões, cartões, bordas, links, foco visível, mensagens de erro e estados de sucesso/erro.
8. Confira os diagramas SVG das regras sobre a nova superfície; eles devem permanecer legíveis e não parecer desconectados da interface.

## Limitações conhecidas

- A preferência do sistema operacional não é usada; o escuro é o padrão intencional do produto.
- A preferência é local ao navegador e não é sincronizada entre dispositivos.
- Diagramas SVG continuam estáticos, com paleta didática própria; não recebem troca de tema dinâmica nesta versão.
