# Spec 015 — Diário de treino

## Objetivo

Permitir que a pessoa registre sessões de vôlei e relembre o que praticou.

## Usuário e problema

Jogador recreativo que quer anotar treino, duração, exercícios e observações sem depender de uma planilha ou de uma conta.

## Fluxo principal

1. A pessoa cria um registro com data, duração e fundamentos praticados.
2. Pode selecionar exercícios do catálogo da Spec 013 e adicionar uma nota curta.
3. Consulta o histórico, abre um registro para edição ou inicia sua exclusão.

## Critérios de aceite

- Um registro tem ID estável, data, duração, fundamentos, exercícios opcionais, esforço percebido opcional de 1 a 5 e nota opcional.
- Data e duração são validadas; campos opcionais podem ficar vazios.
- A pessoa pode criar, editar e excluir um registro, com confirmação antes de excluir.
- A lista mostra sessões da mais recente para a mais antiga, com estado vazio e ação para criar a primeira.
- Registros continuam no mesmo dispositivo e instalação após fechar/reabrir; armazenamento inválido é tratado sem travar o app.
- A UI avisa que dados são locais e podem desaparecer ao limpar os dados do app; não há sincronização.
- O fluxo é acessível por teclado/leitor de tela e utilizável em celular.

## Dados e privacidade

Persistir localmente por meio de uma camada namespaced e versionada sobre `localStorage`. Não registrar dados pessoais sensíveis. Os registros não saem do dispositivo.

## Fora do escopo

- Contas, sincronização, backup remoto ou compartilhamento público do diário.
- Calendário avançado, gráficos de carga, recomendações automáticas ou gamificação.
- Registro de saúde, lesão ou prescrição física.

## Dependências

- Spec 013 para associar exercícios; diário manual de fundamentos deve continuar possível.
- Navegação e catálogo de fundamentos existentes.
