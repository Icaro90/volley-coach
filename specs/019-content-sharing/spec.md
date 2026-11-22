# Spec 019 — Compartilhar conteúdo

## Objetivo

Permitir compartilhar uma regra, exercício ou termo do glossário com outra pessoa.

## Usuário e problema

Jogador ou técnico que quer enviar uma explicação útil a alguém do time, sem copiar e reescrever o conteúdo.

## Fluxo principal

1. A pessoa abre uma regra, exercício ou termo.
2. Aciona **Compartilhar**.
3. O Android abre a folha nativa de compartilhamento; na web usa compartilhamento do navegador quando disponível.
4. Se não houver integração, a pessoa copia o link e recebe confirmação acessível.

## Critérios de aceite

- Páginas de detalhe de regras, exercícios e termos oferecem ação de compartilhar.
- Título e resumo curtos são enviados junto ao link canônico da página publicada.
- Android usa folha nativa via plugin Capacitor Share; navegador usa Web Share API se disponível.
- Se compartilhamento não estiver disponível ou falhar, há fallback para copiar URL e mensagem de sucesso/erro.
- URLs abrem rota válida no site e no app; página atual não perde o estado ao cancelar a folha de compartilhamento.
- Conteúdo compartilhado não inclui dados privados do diário, scout ou favoritos.
- Controle tem nome acessível, foco visível e retorno anunciado.

## Fora do escopo

- Compartilhar progresso, partidas, notas ou dados pessoais.
- Gerar imagem/cartão social personalizado ou convite com deep link universal.
- Rede social própria, comentários ou chat.

## Dependências

- Spec 013 (detalhe de exercício) e Spec 017 (detalhe de termo).
- Página de detalhe de regra já existente.
- Plugin `@capacitor/share` no contêiner Android, com fallback web.

## Estado da implementação em 2026-11-21

O botão está integrado aos três tipos de detalhe, com Capacitor Share no Android, Web Share API e cópia quando a API não está disponível. A URL é montada a partir da origem atual, sem garantia do domínio canônico de produção; falhas das APIs exibem erro sem tentar copiar o link. Testes de plataforma/cancelamento e validação manual continuam pendentes.
