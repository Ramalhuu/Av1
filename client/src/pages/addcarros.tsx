import React, { useState } from "react";
import FormularioCarro from "../components/formulariocarro";
import Header from "../components/header";

const AddCarros: React.FC = () => {
  const [carro, setCarro] = useState({
    marca: "",
    modelo: "",
    ano: "",
    quilometragem: "",
    preco: "",
    descricao: "",
  });

  const adicionarCarro = (novoCarro: typeof carro) => {
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
