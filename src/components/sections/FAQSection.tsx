import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "¿KyPaw es gratis?",
    answer: "Sí, KyPaw es completamente gratuita. No hay costes ocultos ni suscripciones para usar las funcionalidades principales de gestión de mascotas.",
    icon: "💸"
  },
  {
    question: "¿Mis datos están seguros?",
    answer: "Absolutamente. Tus datos se almacenan de forma segura en la nube con encriptación. Solo tú tienes acceso a la información sensible de tus mascotas.",
    icon: "🔒"
  },
  {
    question: "¿Puedo añadir varias mascotas?",
    answer: "¡Por supuesto! Puedes gestionar todas las mascotas que quieras (perros, gatos, conejos, etc.) desde una sola cuenta y cambiar entre sus perfiles fácilmente.",
    icon: "🐾"
  },
  {
    question: "¿Funciona sin internet?",
    answer: "Necesitas conexión para sincronizar datos en la nube y asegurar que no se pierdan, pero puedes consultar la información previamente cargada (como historial médico) sin conexión en muchos casos.",
    icon: "📡"
  },
  {
    question: "¿En qué dispositivos funciona?",
    answer: "KyPaw está disponible tanto para iOS (iPhone) como para dispositivos Android. Puedes descargarla desde la App Store o Google Play Store.",
    icon: "📱"
  },
  {
    question: "¿Cómo reporto un problema?",
    answer: "Si encuentras algún error o tienes una duda, puedes escribirnos directamente a soporte@kypaw.app y nuestro equipo te ayudará lo antes posible.",
    icon: "🆘"
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Resolvemos tus dudas principales para que empieces a cuidar a tu mascota sin preocupaciones.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={index * 0.1}
                className="w-full"
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-2 shadow-sm data-[state=open]:shadow-md data-[state=open]:border-primary/20 transition-all duration-300"
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline text-left">
                    <span className="flex items-center gap-4 text-lg font-medium text-gray-900 dark:text-white">
                      <span className="text-2xl bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">{faq.icon}</span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pl-[4.5rem] text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
