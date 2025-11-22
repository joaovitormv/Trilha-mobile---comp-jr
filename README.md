PAÍSES DO MUNDO

Um apicativo mobile desenvolvido em React Native para pesquisar, filtrar e visulizar informações detalhadas sobre países de todo o globo.

FUNCIONALIDADES:

Busca por texto;

Filtro por região;

Layout responsivo;

Detalhes completos;

Feedback Visual;

Deploy por apk feito;

TECNOLOGIAS USADAS

React Native e TypeScript: Escolhidos para criar uma aplicação nativa performática com a segurança de tipagem estática, essencial para lidar com os objetos complexos retornados pela API.

EXPO: Simplifica drasticamente o acesso a APIs nativas e o processo de build, eliminando a necessidade de configurações complexas no Android Studio ou Xcode.

EXPO Router: É a forma mais moderna e simples de realizar a navegação no ecossistema Expo. O roteamento baseado em arquivos (app/) torna a estrutura do projeto intuitiva e reduz o código boilerplate


API UTILIZADA:
REST Countries API: https://restcountries.com/

ESTRUTURA DO PROJETO

Como padrão, todos os arquivos de código fonte estão dentro da pasta src, com suas subpastas de API (onde estão os dados e onde será importada a api no futuro), assets (imagens do código. por enquanto, apenas as padrões do expo). Por fim, a pasta components.
A unica excessão foi a pasta "app", que tive que colocar fora do src pois estava ocorrendo um erro do expo não achar o caminho.


COMO RODAR

No android: baixar e instalar o apk: https://expo.dev/accounts/joaovitormv/projects/paises/builds/9763e3b8-b48a-4f99-8929-c10334783f0b#:~:text=APK-,Install,-Open%20with%20Orbit


Pré-requisitos: Node.js instalado

1 - Clone este repositório:
git clone https://github.com/joaovitormv/Trilha-mobile---comp-jr.git

2 - Instale as dependências
npm install

3 - Para iniciar o servidor de desenvolvimento (Metro Bundler), execute o comando abaixo. A flag --clear é recomendada para garantir que não haja cache antigo; A flag --tunnel é para conectar mesmo em redes distintas:
npx expo start --clear --tunnel

Após isso, para rodar no PC:
Pressione a tecla w no seu terminal. O app abrirá no seu navegador padrão.

No Celular: Baixe o app Expo Go (na Play Store ou App Store) e escaneie o QR Code exibido no terminal.




Desenvolvido por João Vitor Maximiano Vieira durante o processo trainee da Comp Junior, focado em desenvolvimento mobile.