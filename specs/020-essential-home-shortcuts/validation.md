# Validação — Atalhos essenciais na Home

- [x] Home apresenta busca e quatro atalhos principais (coberto por teste de navegação).
- [x] Cabeçalho não repete a faixa de atalhos; existe uma única navegação principal com quatro destinos.
- [x] Navegação inferior abre Início, Buscar, Treinos e Mais; rota atual usa `aria-current`.
- [x] Página Mais contém os cinco destinos secundários definidos.
- [x] Busca sem consulta abre um formulário funcional e inicia resultados.
- [x] Espaço final e `env(safe-area-inset-bottom)` reservam a área da barra inferior no layout.
- [ ] Tema claro/escuro, teclado, leitor de tela e telas pequenas verificados.
- [x] Frontend: 22 arquivos / 76 testes; lint e build passaram.
- [x] APK debug sincronizado e compilado após a mudança.
- [ ] Teste funcional em aparelho/emulador Android realizado, se disponível.

## Execução em 2026-11-21

- `npm run test`: 22 arquivos e 76 testes passaram.
- `npm run lint`: passou; há dois avisos `react(only-export-components)` preexistentes nos providers de favoritos e scout.
- `npm run build`: passou.
- `mobile/android`: `gradlew.bat assembleDebug` passou; APK debug atualizado.
- Validação manual em aparelho/emulador continua pendente.
