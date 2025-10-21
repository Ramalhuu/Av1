import React from "react";
import FormularioCarro from "../components/carrosapi";
import Header from "../components/header";


const CarrosApi: React.FC = () => {
  const adicionarCarro = (carro: any) => {
    console.log("Recebi:", carro);

  };

  return (
    <>
      <Header />
      <FormularioCarro adicionarCarro={adicionarCarro} />
    </>
  );
};

export default CarrosApi;