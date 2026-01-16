import { SEO } from '@/components/SEO';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO 
        title="Política de Privacidad - KyPaw"
        description="Conoce cómo KyPaw protege y gestiona tus datos personales y la información de tus mascotas."
      />
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidad
            </h1>
            <p className="text-gray-500 mb-8">
              Última actualización: 16 de enero de 2026
            </p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introducción</h2>
                <p className="text-gray-600 mb-4">
                  En KyPaw ("nosotros", "nuestro" o "la App"), nos comprometemos a proteger tu privacidad y la de tus mascotas. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestra aplicación móvil y sitio web.
                </p>
                <p className="text-gray-600">
                  Al utilizar KyPaw, aceptas las prácticas descritas en esta política. Si no estás de acuerdo con alguna parte, te recomendamos no utilizar nuestros servicios.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Información que Recopilamos</h2>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Información que nos proporcionas</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Datos de cuenta:</strong> Nombre, correo electrónico y contraseña al registrarte.</li>
                  <li><strong>Datos de mascotas:</strong> Nombre, especie, raza, fecha de nacimiento, peso, fotografías y número de chip.</li>
                  <li><strong>Información de salud:</strong> Historial médico, vacunas, medicamentos, visitas veterinarias y diagnósticos.</li>
                  <li><strong>Recordatorios:</strong> Fechas, horarios y descripciones de citas y tratamientos.</li>
                  <li><strong>Contenido multimedia:</strong> Fotos de recetas, documentos médicos y fotografías de tus mascotas.</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Información recopilada automáticamente</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                  <li><strong>Datos de ubicación:</strong> Solo cuando usas la función de paseos y con tu consentimiento explícito.</li>
                  <li><strong>Datos de uso:</strong> Cómo interactúas con la app (pantallas visitadas, funciones utilizadas).</li>
                  <li><strong>Información del dispositivo:</strong> Modelo, sistema operativo, identificadores únicos.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cómo Utilizamos tu Información</h2>
                <p className="text-gray-600 mb-4">Utilizamos tus datos para:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Proporcionar, mantener y mejorar los servicios de KyPaw.</li>
                  <li>Enviar recordatorios y notificaciones sobre el cuidado de tus mascotas.</li>
                  <li>Almacenar y sincronizar el historial médico de tus mascotas.</li>
                  <li>Registrar rutas de paseos cuando activas esta función.</li>
                  <li>Responder a tus consultas de soporte.</li>
                  <li>Enviar comunicaciones sobre actualizaciones importantes de la app.</li>
                  <li>Analizar el uso de la app para mejorar la experiencia de usuario.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Almacenamiento y Seguridad</h2>
                <p className="text-gray-600 mb-4">
                  Tus datos se almacenan de forma segura en servidores de Firebase (Google Cloud Platform), que cumple con los más altos estándares de seguridad y certificaciones internacionales.
                </p>
                <p className="text-gray-600 mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas, incluyendo:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Encriptación de datos en tránsito (HTTPS/TLS) y en reposo.</li>
                  <li>Autenticación segura con contraseñas hasheadas.</li>
                  <li>Acceso restringido a los datos solo a personal autorizado.</li>
                  <li>Copias de seguridad automáticas.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartición de Datos</h2>
                <p className="text-gray-600 mb-4">
                  <strong>No vendemos ni alquilamos tus datos personales a terceros.</strong> Solo compartimos información en los siguientes casos:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Proveedores de servicios:</strong> Firebase (almacenamiento), servicios de notificaciones push.</li>
                  <li><strong>Requerimientos legales:</strong> Cuando sea necesario para cumplir con obligaciones legales.</li>
                  <li><strong>Con tu consentimiento:</strong> Si decides compartir información con veterinarios u otros servicios.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Tus Derechos</h2>
                <p className="text-gray-600 mb-4">
                  Conforme al Reglamento General de Protección de Datos (RGPD) y otras leyes aplicables, tienes derecho a:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales.</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos.</li>
                  <li><strong>Eliminación:</strong> Solicitar la eliminación de tu cuenta y datos asociados.</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado.</li>
                  <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos para ciertos fines.</li>
                  <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento de tus datos.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Para ejercer estos derechos, contacta con nosotros en <a href="mailto:soporte@kypaw.app" className="text-primary hover:underline">soporte@kypaw.app</a>.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retención de Datos</h2>
                <p className="text-gray-600">
                  Conservamos tus datos mientras mantengas una cuenta activa en KyPaw. Si eliminas tu cuenta, borraremos tus datos personales en un plazo máximo de 30 días, salvo que debamos conservarlos por obligaciones legales.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Menores de Edad</h2>
                <p className="text-gray-600">
                  KyPaw no está dirigida a menores de 14 años. No recopilamos conscientemente información de menores de esta edad. Si eres padre/madre/tutor y descubres que tu hijo ha proporcionado datos sin tu consentimiento, contacta con nosotros para eliminarlos.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cambios en esta Política</h2>
                <p className="text-gray-600">
                  Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos cualquier cambio significativo a través de la app o por correo electrónico. La fecha de "última actualización" al inicio indica cuándo se realizaron los últimos cambios.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
                <p className="text-gray-600 mb-4">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre cómo tratamos tus datos, puedes contactarnos en:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 font-medium">KyPaw</p>
                  <p className="text-gray-600">Email: <a href="mailto:soporte@kypaw.app" className="text-primary hover:underline">soporte@kypaw.app</a></p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
