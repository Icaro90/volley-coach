# Spec 009 — Homologação e navegação de retorno

## Objetivo

Estabelecer um fluxo de entrega com a branch `hom` para homologação e `main` para produção, evitando deploys da Vercel em branches de feature. Também padronizar os links de retorno das páginas em um botão simples, reconhecível e acessível.

## Problema

Hoje, cada branch conectada ao repositório pode gerar um Preview Deployment na Vercel. Isso produz deploys que não representam uma versão integrada e validável do produto. Além disso, os retornos entre páginas usam links com estilos repetidos e visual inconsistente, o que reduz a previsibilidade da navegação.

## Usuário

- Pessoa desenvolvedora, que precisa validar mudanças integradas antes de publicá-las.
- Pessoa responsável pela validação manual, que precisa de uma URL estável de homologação.
- Pessoa usuária do Volley Coach, que precisa retornar a uma tela anterior de forma clara e consistente.

## Fluxo principal

1. A pessoa desenvolvedora cria uma branch de feature a partir de `hom` e abre Pull Request para `hom`.
2. A cada commit enviado para qualquer branch, o GitHub Actions executa testes, lint e build; a Vercel não publica deploy automático para a branch de feature.
3. Após o merge em `hom`, a Vercel publica a versão de homologação para validação manual.
4. Após o merge em `hom`, o GitHub Actions abre automaticamente, caso não exista uma aberta, uma Pull Request de `hom` para `main`.
5. A pessoa responsável revisa a Pull Request e confirma a validação da homologação antes do merge em `main`.
6. Após o merge em `main`, a Vercel publica a versão de produção.
7. Em qualquer página que ofereça retorno, a pessoa usuária encontra um botão visualmente consistente e navega pelo React Router sem recarregar a SPA.

## Critérios de aceite

- A branch `main` continua sendo a fonte de deploy de produção na Vercel.
- A branch `hom` gera deploy automático de homologação na Vercel.
- Branches diferentes de `hom` e `main` não geram deploy automático na Vercel.
- O GitHub Actions executa testes, lint e build a cada `push`, independentemente da branch de destino.
- O workflow de qualidade não executa deploy nem depende de credenciais da Vercel.
- Após um push em `hom`, o workflow cria uma Pull Request de `hom` para `main` quando não houver outra Pull Request aberta com a mesma origem e destino.
- A Pull Request automática não é mesclada automaticamente e não ignora a revisão ou a validação manual de homologação.
- A documentação explica o fluxo `feature` → `hom` → `main`, incluindo a etapa de validação manual.
- As páginas de regras, busca, rodízio e quiz reutilizam um único componente de retorno quando houver navegação de volta.
- O componente de retorno usa um link semântico, possui foco visível por teclado e mantém o destino contextual de cada tela.
- A alteração não adiciona dependências, backend, API ou estado global.

## Fora do escopo

- Criar um segundo projeto Vercel, domínio personalizado ou ambientes de backend.
- Configurar proteção de branch, aprovação obrigatória, CODEOWNERS ou regras de Pull Request no GitHub.
- Fazer merge automático da Pull Request de `hom` para `main`.
- Criar Preview Deployments sob demanda para cada Pull Request.
- Alterar o botão Voltar do navegador ou implementar um histórico próprio de navegação.
- Redesenhar páginas que não possuem navegação de retorno.

## Dependências

- Integração existente entre o repositório GitHub e o projeto Vercel.
- `frontend/vercel.json`, responsável pela configuração versionada da Vercel.
- Workflow `.github/workflows/frontend-quality.yml`.
- React Router e as páginas atuais que usam links de retorno.

## Riscos

- Uma regra de branches configurada incorretamente pode impedir o deploy de homologação ou de produção.
- A URL estável de homologação pode exigir configurar a branch `hom` no painel da Vercel, fora do repositório.
- Transformar todos os links em botões sem preservar seus destinos pode prejudicar a orientação da pessoa usuária; o texto do retorno deve continuar contextual.
