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
| 021 | Presença e disponibilidade | Especificada; desenvolvimento pendente |
| 022 | Ficha dos atletas | Especificada; desenvolvimento pendente |
| 023 | Avaliação por fundamento | Especificada; desenvolvimento pendente |
| 024 | Desafios da semana | Especificada; desenvolvimento pendente |
| 025 | Plano de jogo | Especificada; desenvolvimento pendente |
| 026 | Biblioteca de formações | Especificada; desenvolvimento pendente |
| 027 | Modo treino no ginásio | Especificada; desenvolvimento pendente |
| 028 | Exportação e backup | Especificada; desenvolvimento pendente |
| 029 | Acesso para comissão técnica | Especificada; desenvolvimento pendente |
| 030 | Adaptações por categoria | Especificada; desenvolvimento pendente |

### Sequência de dependências usada

1. **Base:** 012 Favoritos, 013 Treinos guiados e 014 Quiz por tema e nível.
2. **Dependentes:** 015 Diário (após 013) e 016 Consulta rápida (após 012).
3. **Paralelas:** 017 Glossário e 018 Scout.
4. **Integração final:** 019 Compartilhamento após os detalhes de exercícios e termos.
5. **Simplificação da navegação:** 020 Atalhos essenciais, com os destinos dos recursos definidos.

### Próxima etapa — Gestão do time e uso em quadra

| Spec | Feature | Dependências sugeridas |
| --- | --- | --- |
| 021 | Presença e disponibilidade | 022 Ficha dos atletas |
| 022 | Ficha dos atletas | Base para presença, avaliação e comissão |
| 023 | Avaliação por fundamento | 022 Ficha dos atletas |
| 024 | Desafios da semana | 022 Ficha dos atletas; opcionalmente 023 |
| 025 | Plano de jogo | 022 Ficha dos atletas |
| 026 | Biblioteca de formações | 022 Ficha dos atletas; integração com 004 Rodízio |
| 027 | Modo treino no ginásio | 013 Treinos guiados; otimização transversal de interface |
| 028 | Exportação e backup | Dados locais de 015 Diário e 018 Scout; evoluir para dados de 021–026 |
| 029 | Acesso para comissão técnica | 022 Ficha dos atletas; requer sincronização/serviço compartilhado |
| 030 | Adaptações por categoria | 013 Treinos guiados e 022 Ficha dos atletas |

Sugestão de execução: 022 primeiro; depois 021, 023, 024, 025 e 026 em paralelo conceitual; 027 pode ser desenvolvido independentemente; 028 deve começar com exportação/importação local e ampliar o formato conforme os dados evoluem; 029 depende de decisão e implementação de sincronização; 030 depende de conteúdo e perfis por categoria.

As funcionalidades permanecem offline-first e sem contas ou backend. Favoritos, diário e scout usam armazenamento local no navegador/WebView. A suíte frontend passou com 22 arquivos e 76 testes; lint e build passaram. O APK debug foi atualizado com as mudanças da Home, mas ainda falta teste em aparelho/emulador. Pendências funcionais específicas estão registradas nas specs 018 e 019.
