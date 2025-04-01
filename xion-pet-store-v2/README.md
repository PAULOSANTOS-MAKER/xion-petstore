# 🐾 Xion Pet Store

## 💡 Descrição

A **Xion Pet Store** é uma aplicação Web3 construída sobre a blockchain XION que permite aos usuários registrar e visualizar seus pets utilizando **contratos inteligentes**, **login via e-mail (Meta Accounts)** e **transações sem taxas (tesouraria)**. O projeto tem como objetivo demonstrar como é possível criar uma experiência Web3 simples, intuitiva e sem fricção para usuários comuns.

## 👥 Público-alvo

- Donos de animais de estimação que desejam registrar seus pets em blockchain
- ONGs e plataformas de adoção de animais
- Usuários Web2 curiosos para testar experiências Web3 com login via e-mail
- Entusiastas de Web3 e desenvolvedores que querem explorar o ecossistema XION

## ⚙️ Funcionalidades

- Login via e-mail com **Meta Accounts (Web3Auth)**
- Integração com contrato inteligente em **Rust/CosmWasm**
- Transações sem gas via **Tesouraria XION**
- Funções:
  - `register_pet`: registra um novo pet
  - `get_pets`: lista todos os pets registrados
  - `remove_pet`: remove um pet (futuramente)

## 🌐 Como acessar

```
http://localhost:3002
```

```
https://auth.testnet.burnt.com/?treasury=xion1hyg5rj7pntuyrvp9p3vz2mcnzah6ycjf4h7wfmx8ws6cyslayxhsf5vdem&grantee=xion1xww38d2d48md059k6hdr9prdkweheg24chhcl5&redirect_uri=http://localhost:3002/
```

## 🧠 Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- @burnt-labs/abstraxion
- @burnt-labs/ui
- CosmWasm (contrato em Rust)

## 📈 Plano de Negócios

- **Fase 1 - MVP**: registro e listagem de pets (testnet, sem imagens)
- **Fase 2**: upload de imagens, identificação por raça, idade e dono
- **Fase 3**: emissão de NFTs dos pets e criação de um mini marketplace
- **Fase 4**: integração com ONGs e sistema de doações via stablecoins

## 🗺️ Roadmap

| Etapa | Status |
|-------|--------|
| Login com Meta Accounts | ✅ |
| Deploy do contrato CosmWasm | ✅ |
| Registro de pets via `register_pet` | 🟡 Em desenvolvimento |
| Listagem de pets via `get_pets` | 🟡 Em desenvolvimento |
| Interface visual interativa | 🟡 Em desenvolvimento |
| Upload de imagens e NFTs | 🔜 |
| Deploy em produção (com domínio) | 🔜 |

## 🔗 Endereços importantes

- 📦 Tesouraria: `xion1hyg5rj7pntuyrvp9p3vz2mcnzah6ycjf4h7wfmx8ws6cyslayxhsf5vdem`
- 📜 Contrato: `xion16el5gfdcdpcjwyu2dd5ka8rudsql2ant0hl6qdp2wj5xle25agvqpvrns4`

## 👨‍💻 Autor

**Paulo Santos**  
💼 Desenvolvedor Web3  
📫 [https://github.com/PAULOSANTOS-MAKER](https://github.com/PAULOSANTOS-MAKER)

## ✅ Como contribuir

Sinta-se livre para clonar o repositório, executar localmente e sugerir melhorias via pull request ou issues!

## ⚠️ Observação

Este projeto é parte de um desafio oficial da Burnt/XION, e foi construído com fins educativos, demonstrando como criar um produto Web3 funcional com foco na experiência do usuário.

### 🔥 Let’s bring your pet to the blockchain!
