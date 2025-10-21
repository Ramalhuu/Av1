import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import App from './addcarros';
import Header from "../components/header";
import CarrosCards from "../components/cardcarro";
import AddCarros from "./addcarros"

export default function Home() {

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carros, setCarros] = useState<Carro[]>([]);

    const adicionarCarro = (novoCarro: Carro) => {
    setCarros(prev => [...prev, { ...novoCarro, id: prev.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}


      <section className="relative h-96 bg-gradient-to-b from-blue-300 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <img
            src="/src/img/98-3219-still-tiguan-24-r-line-300tsi-ps2-3-4-frente-esq-2T2T-mystik-amb-acao-adv_br_-iAMNg9q85j.jpg"
            alt="Land Rover Discovery"
            className="absolute right-10 h-full w-full object-cover  "
          />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-10">
          <h1 className="text-5xl font-bold text-white mb-4 max-w-lg">
            Seu próximo carro está aqui — fácil, rápido e seguro
          </h1>
          <p className="text-white text-lg mb-8 max-w-lg">
            O lugar mais seguro para comprar seu carro.
          </p>
          <Link href="/addcarros">
            <button className="bg-white text-gray-800 px-6 py-3 rounded font-semibold w-fit hover:bg-gray-100 transition">
              Saiba mais
            </button>
          </Link>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Carros Disponíveis</h2>
        <AddCarros adicionarCarro={adicionarCarro} />
      <CarrosCards carros={carros} />
      </div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12"> Diferencial</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚗</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Veículos inspecionados e aprovados</h3>
              <p className="text-sm text-gray-600">Cada carro passa por uma rigorosa avaliação mecânica e estética antes de ser anunciado.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Qualidade mecânica garantida</h3>
              <p className="text-sm text-gray-600">Segurança e desempenho que você pode confiar.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Transparência em cada detalhe</h3>
              <p className="text-sm text-gray-600">Fotos autênticas, histórico completo e valores atualizados — sem surpresas na hora da compra.</p>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
              </div>
              <h3 className="font-semibold mb-2">Negociação segura e facilitada</h3>
              <p className="text-sm text-gray-600">Sua compra é protegida do início ao fim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Společnost</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    O nás
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kariéra
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tisk
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Nákup</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Nové vozy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ojeté vozy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Financování
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Podpora</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Zásady ochrany
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-sm text-gray-300 mb-2">
                Email: info@albioncars.com
              </p>
              <p className="text-sm text-gray-300">
                Telefon: +420 123 456 789
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400">
              &copy; 2024 Albion Cars. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

