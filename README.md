PARA TESTAR O CODIGO:

npm install

npx expo start --clear

w (para testar no PC)

TECNOLOGIAS UTILIZADAS
Expo: Um framework e plataforma para construir aplicativos React Native. Ele simplifica o acesso a APIs nativas e o processo de build, além de ser mais prático que o Android Studio.

Expo router: é a forma mais simples de se fazer a navegação entre telas pelo expo.

API UTILIZADA:
A api utilizada será a REST Countries Api. Link: https://restcountries.com/
É uma API pública e gratuita que fornece informações detalhadas sobre os países do mundo, incluindo nome, capital, população, bandeira, região, entre outros.

ESTRUTURA DO PROJETO
como padrão, todos os arquivos de código fonte estão dentro da pasta src, com suas subpastas de API (onde estão os dados e onde será importada a api no futuro), assets (imagens do código. por enquanto, apenas as padrões do expo). Por fim, a pasta components.

A unica excessão foi a pasta "app", que tive que colocar fora do src pois estava ocorrendo um erro do expo não achar o caminho.