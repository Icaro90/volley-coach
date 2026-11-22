# Validação — Compartilhar conteúdo

- [ ] Metadados de regras, exercícios e termos revisados.
- [ ] Folha nativa testada em aparelho Android.
- [ ] Web Share API testada em navegador compatível.
- [ ] Fallback de copiar link e feedback acessível verificados.
- [ ] Cancelar compartilhamento mantém a tela e o estado.
- [ ] Links canônicos abrem a rota correspondente no site e no app.
- [ ] Dados pessoais de diário, scout e favoritos não são incluídos.
- [ ] Fallback quando Web Share/Capacitor Share falha e links canônicos testados.
- [x] Suite geral, lint e build executados: 22 arquivos / 76 testes passaram; testes específicos de compartilhamento pendentes.
## Execução em 2026-11-21

- Botões e APIs base implementados; falha de API sem cópia e URL não canônica estão anotadas na spec.
- Suite frontend: 22 arquivos / 76 testes passaram.
- APK debug compilado e sincronizado com Capacitor Share; teste manual em dispositivo/emulador Android continua pendente.
