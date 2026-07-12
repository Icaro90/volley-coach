# ADR 004 — Estado local de rodízio com diagrama de quadra em HTML/CSS

## Status

Aceita.

## Contexto

A feature `004-rotation` precisa ensinar uma sequência fixa de seis posições. A pessoa usuária deve avançar a formação para observar a próxima rotação e poder reiniciar o exemplo.

Essa interação não representa uma escalação real, não precisa ser compartilhada por URL e não traz valor ao sobreviver a uma atualização de página. Também é necessário que os números das posições continuem legíveis e acessíveis em celular e desktop.

## Decisão

Modelar a formação e a ordem de avanço em dados TypeScript locais. Implementar o avanço de uma rotação como função pura e armazenar apenas o índice da formação exibida em `useState` dentro de `RotationPage`.

Renderizar a quadra com elementos HTML e CSS responsivo. As posições terão texto real e rótulos acessíveis; o diagrama não dependerá de SVG, canvas ou biblioteca de animação.

## Consequências

### Positivas

- A regra de transformação pode ser testada isoladamente, de modo semelhante a um método puro de domínio em uma aplicação Java.
- O estado de interface é pequeno e possui dono claro, sem Context, store global ou persistência.
- O texto das posições permanece selecionável, escalável e disponível para tecnologias assistivas.
- A solução não adiciona dependências, chamadas de rede ou custo de infraestrutura.

### Negativas

- A formação volta ao início ao atualizar a página ou sair da rota.
- O layout CSS exige cuidado para preservar a noção de frente, fundo, direita e esquerda em diferentes tamanhos de tela.
- A solução não serve para simular movimentações táticas durante um rally.

## Alternativas consideradas

### Persistir a formação na URL ou em localStorage

Rejeitada. A formação é apenas um exemplo de aprendizagem momentâneo; URLs e persistência não trazem benefício proporcional nesta etapa.

### Usar estado global com Context ou biblioteca dedicada

Rejeitada. Nenhuma outra rota consome o estado do diagrama. Um estado local mantém a dependência próxima de quem a utiliza.

### Criar uma animação com SVG, canvas ou biblioteca externa

Rejeitada para o MVP. Um diagrama HTML/CSS com avanço por botão já comunica a ordem de rodízio e é mais simples de manter e testar.
