# Imóvel Guide - Frontend Test Project

## Overview

Este projeto foi desenvolvido como parte de um processo seletivo para a vaga de estágio em frontend na Imóvel Guide. O objetivo é demonstrar habilidades práticas na construção de componentes React, estilização com Tailwind CSS e implementação de funcionalidades interativas e visuais.

O projeto consiste em uma aplicação simples que reúne diversos componentes como cartões de informações, calculadora, e elementos interativos com animações.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e consistente.
- **ShadcnUI**: Biblioteca de componentes React com estilos modernos e personalizáveis.
- **HTML2Canvas**: Biblioteca utilizada para capturar e salvar screenshots de elementos DOM como imagens.

## Estrutura do Projeto

- **App Component**: Componente principal que organiza e renderiza os subcomponentes dentro da aplicação.

```tsx
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RuleOfThreeCalculator } from './components/RuleOfThreeCalculator'
import { PeopleCard } from './components/PeopleCard'
import { SendMessageCard } from './components/SendMessageCard'
import { HouseCard } from './components/HouseCard'
import { DownloadImageCard } from './components/DownloadImageCard'
import { AnimatedHouseCard } from './components/AnimatedHouseCard'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PeopleCard />
            <SendMessageCard />
            <RuleOfThreeCalculator />
            <HouseCard />
            <DownloadImageCard />
            <AnimatedHouseCard />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

### Componentes Principais

1. **Header**: Exibe o cabeçalho da aplicação, incluindo a logo da empresa.
2. **Footer**: Exibe o rodapé com informações relevantes.
3. **PeopleCard**: Componente que mostra informações sobre pessoas, usado para demonstrar a manipulação de dados e exibição dinâmica.
4. **SendMessageCard**: Um cartão com funcionalidade de envio de mensagens, simula uma interação típica em formulários.
5. **RuleOfThreeCalculator**: Calculadora de regra de três que permite o cálculo baseado em três valores, com resultado exibido dinamicamente.
6. **HouseCard**: Componente visual que exibe uma imagem de um imóvel, simulando um cartão de anúncio.
7. **DownloadImageCard**: Componente que permite baixar a imagem do cartão como um arquivo PNG, utilizando a biblioteca html2canvas.
8. **AnimatedHouseCard**: Componente que exibe um cartão com uma imagem de imóvel, aplicando um efeito de "zoom out" na imagem ao carregar a página.

## Projeto no Ar

Você pode acessar a versão ao vivo deste projeto através do seguinte link:

[Imóvel Guide - Projeto](https://imovel-guide-blond.vercel.app/)

## Justificativa de Uso de Assets

- **Imagens de Pexels**: A maioria das imagens utilizadas para simular conteúdo foram obtidas do site Pexels, que fornece imagens gratuitas para uso não comercial.
- **Assets da Imóvel Guide**: Dois assets foram retirados diretamente do site da empresa Imóvel Guide:
  - **Logo da Imóvel Guide (PNG)**
  - **Favicon da Imóvel Guide**

Esses assets foram utilizados para garantir a identidade visual e coesão com o branding da empresa durante o desenvolvimento deste projeto.

## Como Rodar o Projeto

1. Clone este repositório:

```bash
 git clone https://github.com/gafanhotoalexandre/imovel-guide.git
```

2. Navegue até o diretório do projeto:

```bash
  cd imovel-guide
```

3. Instale as dependências:

```bash
  npm install
```

4. Rode a aplicação em modo de desenvolvimento:

```bash
  npm run dev
```

5. Acesse a aplicação em http://localhost:3000
