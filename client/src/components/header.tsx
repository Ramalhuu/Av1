import React from "react";
import { Link } from "wouter";

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link href="/">
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AC</span>
                    </div>
                    <span className="font-bold text-lg">Av1 Automóveis</span>
                  </Link>
                </div>
    
                <nav className="hidden md:flex items-center gap-8 text-sm">
                  <a href="#" className="hover:text-green-600">
                    Não vejo
                  </a>
                  <a href="#" className="hover:text-green-600">
                    O meu
                  </a>
                  <a href="#" className="hover:text-green-600">
                    Testou jada
                  </a>
                  <a href="#" className="hover:text-green-600">
                    Sluhy
                  </a>
                  <a href="#" className="hover:text-green-600">
                    Carros
                  </a>
                  <a href="#" className="hover:text-green-600">
                    Contato
                  </a>
                  <a href="#" className="hover:text-green-600">
                    Saiba mais
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="hover:text-green-600">
                    Português
                  </a>
                </nav>
              </div>
            </div>
          </header>
    )
}