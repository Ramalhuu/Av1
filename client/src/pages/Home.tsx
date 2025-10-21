import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import App from './addcarros';
import Header from "../components/header";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cars = [
    {
      id: 1,
      name: "Land Rover Range Rover P565 AUTOBIOGRAPHY DYNAMIC",
      price: "4 349 000 Kč",
      priceOld: "4 749 000 Kč",
      year: 2022,
      mileage: "88 km",
      fuel: "Diesel",
      image: "https://via.placeholder.com/300x200?text=Range+Rover+P565",
      badge: "NOVIDADE",
    },
    {
      id: 2,
      name: "Jaguar F-Type P75 CABRIOLET R AWD AUT",
      price: "3 379 000 Kč",
      priceOld: "3 799 000 Kč",
      year: 2021,
      mileage: "180 km",
      fuel: "Gasolina",
      image: "https://via.placeholder.com/300x200?text=Jaguar+F-Type",
      badge: "DESTAQUE",
    },
    {
      id: 3,
      name: "Land Rover Range Rover P565 SV ULTIMATE EDITION",
      price: "5 199 000 Kč",
      priceOld: "5 599 000 Kč",
      year: 2023,
      mileage: "5 km",
      fuel: "Diesel",
      image: "https://via.placeholder.com/300x200?text=Range+Rover+SV",
      badge: "NOVO",
    },
    {
      id: 4,
      name: "Jaguar XE SV Project 8 1 of 300",
      price: "3 999 000 Kč",
      priceOld: "4 299 000 Kč",
      year: 2020,
      mileage: "2 100 km",
      fuel: "Gasolina",
      image: "https://via.placeholder.com/300x200?text=Jaguar+XE+SV",
      badge: "RARO",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cars.length) % cars.length);
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

      {/* Cars Catalog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Disponíveis</h2>
            <a href="#" className="text-green-600 text-sm font-semibold hover:underline">
              Více vozů v katalogu →
            </a>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {cars.map((car, index) => (
                <div
                  key={car.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ${
                    index !== currentSlide ? "md:block hidden" : ""
                  }`}
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                    {car.badge && (
                      <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold">
                        {car.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-3 line-clamp-2">
                      {car.name}
                    </h3>

                    <div className="mb-4">
                      <div className="text-green-600 font-bold text-lg">
                        {car.price}
                      </div>
                      <div className="text-gray-400 text-sm line-through">
                        {car.priceOld}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-600 border-t pt-3">
                      <div>
                        <div className="font-semibold">Rok</div>
                        <div>{car.year}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Km</div>
                        <div>{car.mileage}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Palivo</div>
                        <div>{car.fuel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition md:flex hidden items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition md:flex hidden items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
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

