import React from "react";

interface Carro {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  quilometragem: string;
  preco: string;
  descricao?: string;
  imagem?: string;
}

interface Props {
  carros: Carro[];
}

const CarrosCards: React.FC<Props> = ({ carros }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {carros.map((carro: Carro) => (
        <div key={carro.id} className="border rounded shadow p-4">
          <img
            src={carro.imagem || "https://via.placeholder.com/300x200"}
            alt={`${carro.marca} ${carro.modelo}`}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-lg font-bold">{carro.marca} {carro.modelo} </h2>
          <p>Ano: {carro.ano}</p>
          <p>Km: {carro.quilometragem}</p>
          <p>Preço: R$ {carro.preco}</p>
          {carro.descricao && <p className="text-gray-600">{carro.descricao}</p>}
        </div>
      ))}
    </div>
  );
};

export default CarrosCards;
