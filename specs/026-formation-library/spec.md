# Spec 026 — Biblioteca de formações

## Objetivo

Permitir salvar formações próprias do time e aplicá-las ao visualizador de rodízio para preparar escalações reutilizáveis.

## Usuários

Treinadores que montam escalações e ajustam rotações.

## Escopo

- Criar formação com nome, categoria, atletas por posição, titulares, reservas e observações.
- Mostrar quadra visual com seis posições e rotação coerente com a feature 004.
- Salvar, editar, duplicar e arquivar formações.
- Validar posições obrigatórias e sinalizar lacunas sem impedir rascunho.
- Persistir localmente e funcionar offline.

## Fora de escopo

Substituições em tempo real, regras oficiais específicas de competição e sincronização multiusuário.

## Critérios de aceite

1. Formação representa seis posições sem confundir posição tática com ordem de saque.
2. Rotacionar move os atletas conforme a lógica já existente em 004.
3. Rascunhos incompletos podem ser salvos e mostram as lacunas.
4. Arquivar atleta ou formação preserva registros históricos e evita referências inválidas.
5. Diagrama oferece alternativa textual acessível.

## Dependências

Spec 022 (ficha dos atletas) e integração com 004 (rodízio).

## Dados e privacidade

Escalações permanecem privadas no dispositivo e entram no escopo da futura exportação 028.
