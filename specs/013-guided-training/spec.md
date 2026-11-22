# Spec 013 — Treinos guiados

## Objetivo

Oferecer um catálogo curto de exercícios de vôlei, com instruções que a pessoa possa usar para organizar uma sessão de treino.

## Usuário e problema

Jogador iniciante ou técnico recreativo que sabe qual fundamento quer praticar, mas precisa de uma atividade clara, adequada ao grupo e ao tempo disponível.

## Fluxo principal

1. A pessoa abre **Treinos** e filtra exercícios por fundamento, nível ou duração.
2. Abre uma atividade e consulta objetivo, organização, passos e variações.
3. Marca a atividade como favorita ou inclui-a no diário após realizá-la (Spec 015).

## Critérios de aceite

- Catálogo inicial contém ao menos dois exercícios revisados para cada fundamento: saque, recepção, levantamento, ataque, bloqueio e defesa.
- Cada exercício informa objetivo, fundamento, nível, duração estimada, participantes, materiais, preparação, passos e variação adequada ao espaço ou grupo.
- Lista pode ser filtrada por fundamento, nível e duração; filtros ativos podem ser limpos.
- Detalhe possui instruções numeradas e texto legível em celular.
- Exercícios podem ser favoritados pela página de detalhe; favoritos aparecem junto às regras na Spec 012.
- Conteúdo é estático e disponível offline. Não se promete prescrição individual ou avaliação clínica.

## Conteúdo e segurança

Usar exercícios recreativos de baixo risco, com aviso para aquecer, adaptar intensidade/altura/volume ao grupo e interromper atividade com dor. Antes da implementação, revisar instruções com uma pessoa que conheça treinamento de vôlei. Evitar apresentar carga ou progressão como orientação médica.

## Fora do escopo

- Montagem automática de periodização, plano semanal ou prescrição por IA.
- Cronômetro, vídeo de demonstração, acompanhamento de desempenho ou plano pago.
- Conteúdo gerenciado por CMS ou carregado de API.

## Dependências

- Specs 001, 002 e 012.
- A integração com diário depende da Spec 015; o catálogo e os detalhes podem ser entregues antes dela.
