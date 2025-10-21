import React, { useState } from "react";
import FormularioCarro from "../components/formulariocarro";
import Header from "../components/header";

export interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  quilometragem: string;
  preco: string;
  descricao: string;
  imagem: string;
}

const AddCarros: React.FC = () => {
  const [carro, setCarro] = useState<Carro>({
    marca: "",
    modelo: "",
    ano: 0,
    quilometragem: "",
    preco: "",
    descricao: "",
    imagem: "",
  });


  const adicionarCarro = (novoCarro: Omit<Carro, "id">) => {
    console.log("Recebi:", novoCarro);
  };

  return (
    <>
      <Header />
      <FormularioCarro
        carro={carro}
        setCarro={setCarro}
        adicionarCarro={adicionarCarro}
      />
    </>
  );
};

export default AddCarros;
