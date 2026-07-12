# ADR 008 — Tema escuro com tokens semânticos e preferência local

## Status

Aceita.

## Contexto

O Volley Coach será usado com frequência em celulares e pode ser consultado em ambientes com pouca luz. O produto adotará modo escuro como padrão, mas precisa respeitar quem prefere uma interface clara.

As telas atuais usam classes de cores concretas do Tailwind em diversos componentes. Duplicar cada classe com variantes `dark:` aumentaria a repetição e tornaria fácil esquecer estados como bordas, foco, cartões, diagramas e mensagens de feedback. A preferência de tema é visual, local ao navegador e deve sobreviver a recarregamentos, sem exigir conta ou backend.

## Decisão

Usar `data-theme="dark"` ou `data-theme="light"` no elemento `<html>` como fonte de verdade visual.

- O tema escuro será o padrão quando não existir preferência salva.
- `frontend/src/index.css` definirá variáveis CSS semânticas para canvas, superfície, superfície elevada, texto principal, texto secundário, borda, destaque e estados de foco.
- O Tailwind CSS v4 mapeará os tokens para utilitários por `@theme inline`. Componentes usarão nomes semânticos, como `bg-canvas` e `text-foreground`, em vez de conhecer a paleta de cada tema.
- Um `ThemeProvider` e um hook de tema viverão em `frontend/src/shared/theme/`, pois são infraestrutura transversal e não pertencem a uma feature de negócio.
- `ThemeToggle`, em `shared/components`, consumirá esse contexto e será renderizado no `AppHeader`.
- A preferência será salva sob a chave `volley-coach.theme` no `localStorage`. O acesso será protegido para que falhas de armazenamento mantenham o modo escuro como fallback.
- Um script pequeno no `index.html` aplicará o atributo antes da inicialização do React, usando a preferência salva ou `dark` como padrão. O provider apenas sincronizará estado React, atributo e armazenamento após a aplicação iniciar.
- A preferência do sistema operacional (`prefers-color-scheme`) não será usada nesta versão.

## Consequências

### Positivas

- O tema padrão atende melhor a ambientes escuros sem remover a escolha de tema claro.
- Tokens semânticos concentram a paleta e tornam a revisão visual mais completa e previsível.
- O estado de tema é pequeno, testável e não exige biblioteca de estado global ou backend.
- O bootstrap elimina a troca visual perceptível entre o carregamento do HTML e a montagem do React.
- A mesma paleta pode ser aplicada a componentes atuais e futuros sem reproduzir condicionais de tema.

### Negativas

- Classes de cor existentes precisarão ser migradas para papéis semânticos, o que é uma refatoração visual abrangente.
- `localStorage` precisa de tratamento defensivo em testes e em navegadores que bloqueiem armazenamento.
- O script no `index.html` adiciona uma pequena lógica fora do TypeScript, mas é necessário para evitar flash de tema.
- A preferência explícita do produto pode divergir da configuração do sistema da pessoa usuária.

## Alternativas consideradas

### Duplicar todas as cores com variantes `dark:`

Rejeitada. Funciona para telas pequenas, mas aumenta a repetição e deixa a coerência entre superfícies e estados dependente de cada componente.

### Usar somente a preferência do sistema operacional

Rejeitada. O requisito do produto é iniciar em modo escuro e permitir uma escolha explícita, independente do sistema.

### Persistir o tema no backend

Rejeitada. O MVP não possui autenticação nem servidor; sincronização entre dispositivos não justifica essa complexidade.
