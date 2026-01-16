import { Container } from '@/components/ui/Container';
import { Heart, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="mb-1 block">
              <img 
                src="/img/logoclaro.png" 
                alt="KyPaw - Cuida. Organiza. Recuerda." 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm mb-6">
              El mejor compañero para el cuidado de tu mascota. Historial médico, recordatorios y más.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:soporte@kypaw.app" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">KyPaw</h3>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-gray-500 hover:text-primary text-sm">Características</a></li>
              <li><a href="/#download" className="text-gray-500 hover:text-primary text-sm">Descargar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><Link to="/tutoriales" className="text-gray-500 hover:text-primary text-sm">Tutoriales</Link></li>
              <li><a href="/#faq" className="text-gray-500 hover:text-primary text-sm">Preguntas Frecuentes</a></li>
              <li><a href="mailto:soporte@kypaw.app" className="text-gray-500 hover:text-primary text-sm">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacidad" className="text-gray-500 hover:text-primary text-sm">Política de Privacidad</Link></li>
              <li><Link to="/terminos" className="text-gray-500 hover:text-primary text-sm">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} KyPaw. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>para las mascotas</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
