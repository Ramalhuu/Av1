import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "./forminput";

interface Carro {
  marca: string;
  modelo: string;
  ano: string;
  quilometragem: string;
  preco: string;
  descricao: string;
}

interface Props {
  adicionarCarro: (carro: Carro) => void;
}

const FormularioCarro: React.FC<Props> = ({ adicionarCarro }) => {
  const [carro, setCarro] = useState<Carro>({
    marca: "",
    modelo: "",
    ano: "",
    quilometragem: "",
    preco: "",
    descricao: "",
  });

  // 👇 Adiciona tipo correto para evento de input/textarea
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCarro((prev) => ({ ...prev, [name]: value }));
  };

  // 👇 Adiciona tipo correto para evento de submit de formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarCarro(carro);
    setCarro({
      marca: "",
      modelo: "",
      ano: "",
      quilometragem: "",
      preco: "",
      descricao: "",
    });
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <div className="mt-20 mb-5 ml-25">
            <h1 className="text-4xl font-bold mt-20 mb-5 ">Adicionar Novo Carro</h1>
            <h2 className="">Preencha abaixo para adicionar o carro</h2>
        </div>
        <div className="p-25 border border-gray-500 rounded mb-4 gap-4 ml-25 mr-175">
            <h1 className="-mt-15 mb-15 -ml-8 text-3xl font-bold">Detalhes do carro</h1>
            <FormInput
                name="marca"
                value={carro.marca}
                onChange={handleChange}
                placeholder="Marca"
                label="Marca"
                required
            />
            <FormInput
                name="modelo"
                value={carro.modelo}
                onChange={handleChange}
                placeholder="Modelo"
                label="Modelo"
                required
            />
            <FormInput
                name="ano"
                value={carro.ano}
                onChange={handleChange}
                placeholder="Ano"
                type="number"
                label="Ano"
            />
            <FormInput
                name="quilometragem"
                value={carro.quilometragem}
                onChange={handleChange}
                placeholder="Quilometragem"
                type="number"
                label="Quilometragem"
            />
        </div>
        <div className="p-25 border border-gray-500 rounded mb-4 gap-4 ml-25 mr-175">
            <FormInput
                name="preco"
                value={carro.preco}
                onChange={handleChange}
                placeholder="Preço"
                type="number"
                label="Preço"
            />
            <FormInput
                name="descricao"
                value={carro.descricao}
                onChange={handleChange}
                placeholder="Descrição"
                label="Descrição"
                required
            />
        </div>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioCarro;
