# ADR 006 — Deploy Git na Vercel com CI no GitHub Actions

## Status

Aceita.

## Contexto

O MVP do Volley Coach é uma SPA Vite + React hospedada no subdiretório `frontend/`. O produto precisa de uma URL pública para validação com pessoas usuárias e de uma verificação automática de qualidade antes de mudanças chegarem à `main`.

O projeto não possui backend, secrets de aplicação ou requisitos de infraestrutura de produção nesta fase. A aplicação usa React Router, portanto rotas acessadas diretamente precisam retornar o `index.html` da SPA.

## Decisão

Usar a integração Git da Vercel para publicar o frontend: previews para branches e produção para `main`. Configurar `frontend/vercel.json` com rewrite de SPA para encaminhar rotas da aplicação a `index.html`.

Usar um workflow GitHub Actions independente para Pull Requests e pushes em `main`. O workflow executará em `frontend/` com Node 24, `npm ci`, cache npm, testes, lint e build. Ele terá somente permissão de leitura do conteúdo do repositório.

## Consequências

### Positivas

- A aplicação recebe HTTPS e URL pública sem infraestrutura própria.
- Rotas profundas do React Router continuam acessíveis após atualização de página ou acesso direto.
- Pull Requests recebem feedback automático antes do merge.
- `npm ci` usa o lockfile e torna a instalação do CI reproduzível.
- Deploy e CI não exigem tokens da Vercel no repositório.

### Negativas

- A pessoa proprietária precisa configurar a conexão inicial entre GitHub e Vercel fora do repositório.
- A publicação depende das plataformas GitHub e Vercel.
- O smoke test de produção permanece manual nesta etapa.

## Alternativas consideradas

### Deploy manual via Vercel CLI e token no GitHub Actions

Rejeitada. Exige gerenciar secrets e mistura deploy com validação de qualidade sem necessidade para um frontend estático.

### Usar apenas verificações automáticas da Vercel

Rejeitada. Um workflow explícito no GitHub torna testes, lint e build visíveis e independentes da hospedagem.

### Hospedar no GitHub Pages

Rejeitada para o MVP. Exigiria atenção adicional a `base` de subdiretório e configuração de fallback de SPA; a Vercel atende melhor ao fluxo de previews e produção planejado.
