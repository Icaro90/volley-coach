# Roadmap do produto

## Visão

O Volley Coach ajuda jogadores iniciantes de vôlei de quadra a compreender regras e situações comuns de treino por meio de conteúdo simples, visual e acessível em celular.

## MVP

| Ordem | Feature | Estado |
| --- | --- | --- |
| 001 | Home | Concluída |
| 002 | Regras básicas | Concluída |
| 003 | Busca de regras | Concluída |
| 004 | Rodízio | Concluída |
| 005 | Quiz rápido | Concluída |

O MVP está concluído: as cinco features acima permitem consultar regras, pesquisar conteúdo, visualizar diagramas, entender o rodízio e responder perguntas curtas.

## Release do MVP

| Ordem | Iniciativa | Estado |
| --- | --- | --- |
| 006 | Preparação de release | Concluída |

## Evolução pós-MVP

| Ordem | Feature | Estado |
| --- | --- | --- |
| 007 | Regras adicionais | Concluída |
| 008 | Faltas de posição e ordem de saque | Concluída |
| 009 | Homologação e navegação de retorno | Concluída |
| 010 | Modo noturno | Concluída |
| 011 | Aplicativo Android | APK de depuração gerado; validação em dispositivo pendente |

## Funcionalidades pós-MVP implementadas

| Ordem | Feature | Estado |
| --- | --- | --- |
| 012 | Favoritos | Implementado; revisão visual, testes próprios e teste Android pendentes |
| 013 | Treinos guiados | Implementado; revisão de conteúdo, testes próprios e teste Android pendentes |
| 014 | Quiz por tema e nível | Implementado; testes automatizados passam; revisão visual/Android pendente |
| 015 | Diário de treino | Implementado; testes CRUD próprios e teste Android pendentes |
| 016 | Consulta rápida | Implementada; validação editorial, busca e revisão móvel pendentes |
| 017 | Glossário de vôlei | Implementado; revisão editorial, testes próprios e teste Android pendentes |
| 018 | Scout simples de partida | Parcial; falta confirmação ao excluir; cobertura de cenários e teste Android pendentes |
| 019 | Compartilhar conteúdo | Parcial; falta fallback quando compartilhamento falha e validar URL canônica |
| 020 | Atalhos essenciais na Home | Implementada; APK debug atualizado, teste manual Android pendente |

### Sequência de dependências usada

1. **Base:** 012 Favoritos, 013 Treinos guiados e 014 Quiz por tema e nível.
2. **Dependentes:** 015 Diário (após 013) e 016 Consulta rápida (após 012).
3. **Paralelas:** 017 Glossário e 018 Scout.
4. **Integração final:** 019 Compartilhamento após os detalhes de exercícios e termos.
5. **Simplificação da navegação:** 020 Atalhos essenciais, com os destinos dos recursos definidos.

As funcionalidades permanecem offline-first e sem contas ou backend. Favoritos, diário e scout usam armazenamento local no navegador/WebView. A suíte frontend passou com 22 arquivos e 76 testes; lint e build passaram. O APK debug foi atualizado com as mudanças da Home, mas ainda falta teste em aparelho/emulador. Pendências funcionais específicas estão registradas nas specs 018 e 019.
