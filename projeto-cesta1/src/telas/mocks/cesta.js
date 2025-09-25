import logo from '../../assets/logo.png';
import topo from '../../assets/topo.png';

import tomate from '../../assets/frutas/Tomate.jpg';
import brocolis from '../../assets/frutas/Brocolis.jpg';
import batata from '../../assets/frutas/Batata.jpg';
import pepino from '../../assets/frutas/Pepino.jpg';
import abobora from '../../assets/frutas/Abobora.jpg';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
    imagem: topo,
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
