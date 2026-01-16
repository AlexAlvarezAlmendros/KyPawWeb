import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { 
  ClipboardList, 
  Syringe, 
  Bell, 
  PawPrint, 
  Camera, 
  MapPin 
} from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: "Historial Médico",
    description: "Registra visitas veterinarias con fotos de recetas y diagnósticos, todo organizado cronológicamente.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Syringe,
    title: "Control de Vacunas",
    description: "Calendario de vacunación completo con alertas automáticas para que nunca olvides un refuerzo.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Bell,
    title: "Recordatorios",
    description: "Configura notificaciones personalizadas para medicamentos, citas, desparasitaciones y cuidados.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: PawPrint,
    title: "Gestión Multi-Mascota",
    description: "Perros, gatos, conejos... Gestiona los perfiles de todos tus peludos desde una sola cuenta.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Camera,
    title: "Digitalización",
    description: "Olvídate de los papeles. Guarda recetas, cartillas y documentos importantes fotografiándolos.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: MapPin,
    title: "Registro de Paseos",
    description: "Registra las rutas, distancia y tiempo de tus paseos diarios para mantenerlos activos.",
    color: "bg-cyan-100 text-cyan-600"
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Todo lo que necesitas, en tu bolsillo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              KyPaw reúne todas las herramientas esenciales para el cuidado de tu mascota en una interfaz simple y potente.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.1} 
              direction="up"
              className="h-full"
            >
              <div className="group h-full p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
