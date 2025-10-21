import React, { useState, ChangeEvent, FormEvent, Dispatch, SetStateAction } from "react";
import FormInput from "./forminput";
import PreviewCarro from "./previewcarro";

interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  quilometragem: string;
  preco: string;
  descricao: string;
}

interface Props {
  adicionarCarro: (carro: Carro) => void;
  carro: Carro;
  setCarro: Dispatch<SetStateAction<Carro>>;
}

const FormularioCarro: React.FC<Props> = ({ adicionarCarro, carro, setCarro }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCarro((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarCarro(carro);
    setCarro({
      marca: "",
      modelo: "",
      ano: 0,
      quilometragem: "",
      preco: "",
      descricao: "",    
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-20 mb-5 ml-25">
        <h1 className="text-4xl font-bold mt-20 mb-5">Adicionar Novo Carro</h1>
        <h2>Preencha abaixo para adicionar o carro</h2>
      </div>

      <div className="p-15 border border-gray-500 rounded mb-4 gap-4 ml-25 mr-175">
        <h1 className="-mt-5 mb-15 -ml-8 text-3xl font-bold">Detalhes do carro</h1>
        <FormInput name="marca" value={carro.marca} onChange={handleChange} placeholder="Marca" label="Marca" required />
        <FormInput name="modelo" value={carro.modelo} onChange={handleChange} placeholder="Modelo" label="Modelo" required />
        <FormInput name="ano" value={carro.ano} onChange={handleChange} placeholder="Ano" type="number" label="Ano" />
        <FormInput name="quilometragem" value={carro.quilometragem} onChange={handleChange} placeholder="km" type="number" label="Quilometragem" />
      </div>

      <div className="p-15 border border-gray-500 rounded mb-4 gap-4 ml-25 mr-175">
        <h1 className="-mt-5 mb-15 -ml-8 text-3xl font-bold">Preço e Descrição</h1>
        <FormInput name="preco" value={carro.preco} onChange={handleChange} placeholder="R$" type="number" label="Preço" />
        <FormInput name="descricao" value={carro.descricao} onChange={handleChange} placeholder="Descrição" label="Descrição" required multiline rows={6} />
      </div>

      <div >
        <PreviewCarro carro={carro}/>
      </div>

      <div>
        <button type="submit">Adicionar</button>
      </div>
    </form>
  );
};

export default FormularioCarro;
