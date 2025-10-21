import React from "react";

interface Carro {
  marca: string;
  modelo: string;
  ano: number;
  quilometragem: string;
  preco: string;
  descricao: string;
}

interface Props {
  carro: Carro;
}

const PreviewCarro: React.FC<Props> = ({ carro }) => {
  return (
    <div className="p-15 border border-gray-500 rounded mb-4 gap-4 ml-300 mr-15 -mt-259 pt-100">
      <h2 className="text-2xl font-bold mb-4 -mt-90 text-gray-800">Pré-visualização</h2>

      {carro.marca || carro.modelo || carro.preco ? (
        <div>
          <p className="text-lg">
            <strong>Marca:</strong> {carro.marca || "—"}
          </p>
          <p className="text-lg">
            <strong>Modelo:</strong> {carro.modelo || "—"}
          </p>
          <p className="text-lg">
            <strong>Ano:</strong> {carro.ano || "—"}
          </p>
          <p className="text-lg">
            <strong>Km:</strong> {carro.quilometragem || "—"}
          </p>
          <p className="text-lg">
            <strong>Preço:</strong>{" "}
            {carro.preco ? `R$ ${carro.preco}` : "—"}
          </p>
          <p className="mt-4">
            <strong>Descrição:</strong>
          </p>
          <p className="text-gray-700 whitespace-pre-line">
            {carro.descricao || "Sem descrição ainda..."}
          </p>
        </div>
      ) : (
        <p className="text-gray-500 italic mt-10">
          Comece a preencher o formulário para ver a pré-visualização aqui.
        </p>
      )}
    </div>
  );
};

export default PreviewCarro;
