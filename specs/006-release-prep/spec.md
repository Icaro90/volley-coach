# Spec 006 — Preparação de release do MVP

## Objetivo

Disponibilizar o MVP do Volley Coach em um ambiente público confiável e criar verificações automatizadas básicas para que novas alterações sejam validadas antes de chegar à `main`.

## Problema

O MVP está funcional apenas no ambiente local. Sem uma URL pública, pessoas iniciantes não conseguem experimentar o produto em seus próprios dispositivos; sem integração contínua, testes e build dependem exclusivamente de execução manual antes de cada merge.

## Usuário

- Pessoa interessada em aprender regras de vôlei que acessa o produto pelo navegador.
- Pessoa desenvolvedora do projeto, que precisa de feedback automático sobre qualidade antes de integrar uma Pull Request.

## Fluxo principal

1. Uma alteração é enviada em uma Pull Request.
2. O GitHub Actions executa testes, lint e build do frontend.
3. Após aprovação e merge na `main`, a Vercel gera ou atualiza a publicação do frontend.
4. A pessoa desenvolvedora executa um smoke test pela URL pública.
5. A URL de produção e o processo de release ficam documentados no repositório.

## Critérios de aceite

- O frontend é publicado na Vercel com HTTPS e pode ser acessado por uma URL pública.
- A publicação carrega diretamente as rotas `/`, `/rules`, `/search`, `/rotation` e `/quiz` sem erro de página não encontrada.
- Um workflow do GitHub Actions executa `npm run test`, `npm run lint` e `npm run build` para Pull Requests direcionadas à `main`.
- O workflow usa a versão de Node definida pelo projeto e instalação reproduzível com `npm ci`.
- O workflow falha quando qualquer um dos comandos de qualidade falha.
- O README informa a URL de produção, os comandos locais e o processo de validação antes de uma Pull Request.
- Existe um roteiro de smoke test para confirmar Home, busca, regras, rodízio, quiz e rotas diretas no ambiente publicado.
- Nenhum segredo é versionado no repositório.
- A release não introduz backend, banco de dados, variáveis de ambiente obrigatórias, autenticação ou mudanças funcionais no MVP.

## Fora do escopo

- Backend NestJS, Prisma, PostgreSQL ou API pública.
- Domínio próprio, e-mail transacional, analytics, monitoramento, alertas ou observabilidade avançada.
- Deploy de preview customizado além do comportamento padrão da Vercel.
- Testes end-to-end com navegador automatizado.
- CDK, Terraform, Docker de produção ou qualquer infraestrutura de nuvem adicional.
- Publicação em lojas de aplicativos ou transformação em PWA.

## Dependências

- Repositório GitHub acessível pela pessoa proprietária do projeto.
- Conta Vercel conectada ao repositório GitHub.
- `frontend/package-lock.json` atualizado e scripts de qualidade funcionais localmente.
- Permissão para adicionar workflow em `.github/workflows/`.

## Riscos

- Uma configuração incorreta de SPA pode fazer rotas diretas retornarem 404 no ambiente publicado.
- Inconsistência entre versões locais e a versão do Node do CI pode causar falhas inesperadas.
- A publicação pode expor uma URL antes da validação manual; o smoke test precisa fazer parte do processo de release.
- Credenciais ou tokens adicionados indevidamente ao repositório seriam uma falha de segurança; integrações devem usar conexões e secrets gerenciados pelas plataformas.
