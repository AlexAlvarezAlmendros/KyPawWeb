import { SEO } from '@/components/SEO';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      <SEO 
        title="Términos y Condiciones - KyPaw"
        description="Lee los términos y condiciones de uso de la aplicación KyPaw para la gestión del cuidado de mascotas."
      />
      <Header />

      <main className="flex-grow pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Última actualización: 16 de enero de 2026
            </p>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Aceptación de los Términos</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Bienvenido a KyPaw. Al descargar, instalar o utilizar nuestra aplicación móvil y/o sitio web ("Servicio"), aceptas quedar vinculado por estos Términos y Condiciones ("Términos"). Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al Servicio.
                </p>
                <p className="text-gray-600">
                  Estos Términos se aplican a todos los usuarios, visitantes y cualquier persona que acceda o utilice el Servicio.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
                <p className="text-gray-600 mb-4">
                  KyPaw es una aplicación móvil diseñada para ayudar a los dueños de mascotas a:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Gestionar perfiles de una o múltiples mascotas.</li>
                  <li>Mantener un historial médico digital (visitas veterinarias, diagnósticos, tratamientos).</li>
                  <li>Registrar y controlar el calendario de vacunación.</li>
                  <li>Configurar recordatorios para medicamentos, citas y cuidados.</li>
                  <li>Registrar paseos con seguimiento de ruta, distancia y tiempo.</li>
                  <li>Almacenar documentos y recetas médicas digitalizadas.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Registro y Cuenta de Usuario</h2>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Creación de cuenta</h3>
                <p className="text-gray-600 mb-4">
                  Para utilizar ciertas funciones de KyPaw, deberás crear una cuenta proporcionando información veraz, precisa y actualizada. Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Requisitos de edad</h3>
                <p className="text-gray-600 mb-4">
                  Debes tener al menos 14 años para crear una cuenta en KyPaw. Si eres menor de 18 años, declaras que tienes el consentimiento de tu padre, madre o tutor legal.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">3.3 Seguridad de la cuenta</h3>
                <p className="text-gray-600">
                  Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta o cualquier otra violación de seguridad. KyPaw no será responsable de las pérdidas causadas por el uso no autorizado de tu cuenta.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Uso Aceptable</h2>
                <p className="text-gray-600 mb-4">Te comprometes a no utilizar KyPaw para:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Violar cualquier ley o regulación aplicable.</li>
                  <li>Subir contenido ilegal, ofensivo, difamatorio o que infrinja derechos de terceros.</li>
                  <li>Intentar acceder sin autorización a sistemas o datos de otros usuarios.</li>
                  <li>Distribuir virus, malware u otro código malicioso.</li>
                  <li>Interferir con el funcionamiento normal del Servicio.</li>
                  <li>Utilizar la app para fines comerciales sin autorización previa.</li>
                  <li>Crear cuentas falsas o suplantar la identidad de terceros.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contenido del Usuario</h2>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">5.1 Propiedad</h3>
                <p className="text-gray-600 mb-4">
                  Conservas todos los derechos sobre el contenido que subas a KyPaw (fotos, documentos, información de tus mascotas). Al subir contenido, nos otorgas una licencia limitada para almacenar, procesar y mostrar dicho contenido únicamente con el propósito de proporcionarte el Servicio.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">5.2 Responsabilidad</h3>
                <p className="text-gray-600">
                  Eres el único responsable del contenido que subas. Garantizas que tienes los derechos necesarios sobre dicho contenido y que no infringe derechos de terceros.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
                <p className="text-gray-600 mb-4">
                  El Servicio y todo su contenido original (excluyendo el contenido proporcionado por usuarios), características y funcionalidad son y seguirán siendo propiedad exclusiva de KyPaw y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas y otras leyes.
                </p>
                <p className="text-gray-600">
                  Nuestras marcas y diseño no pueden utilizarse en conexión con ningún producto o servicio sin el consentimiento previo por escrito de KyPaw.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Exención de Responsabilidad Médica</h2>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-4">
                  <p className="text-yellow-800 font-medium">⚠️ Aviso Importante</p>
                </div>
                <p className="text-gray-600 mb-4">
                  KyPaw es una herramienta de organización y registro. <strong>No proporciona asesoramiento médico veterinario.</strong> La información almacenada en la app no sustituye en ningún caso la consulta con un veterinario profesional.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Los recordatorios son orientativos; siempre consulta con tu veterinario las pautas de tratamiento.</li>
                  <li>No somos responsables de decisiones médicas basadas en la información de la app.</li>
                  <li>Ante cualquier emergencia o síntoma de tu mascota, acude inmediatamente a un veterinario.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
                <p className="text-gray-600 mb-4">
                  En la máxima medida permitida por la ley aplicable, KyPaw no será responsable de:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Daños indirectos, incidentales, especiales, consecuentes o punitivos.</li>
                  <li>Pérdida de datos, beneficios, ingresos o uso.</li>
                  <li>Interrupciones del servicio o fallos técnicos.</li>
                  <li>Acciones de terceros o contenido de otros usuarios.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  El Servicio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" sin garantías de ningún tipo.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Precio y Suscripciones</h2>
                <p className="text-gray-600 mb-4">
                  Actualmente, KyPaw es un servicio gratuito. En el futuro, podríamos introducir funciones premium de pago. En ese caso:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Te informaremos con antelación de cualquier cargo.</li>
                  <li>Los precios se mostrarán claramente antes de la compra.</li>
                  <li>Las suscripciones se renovarán automáticamente salvo cancelación.</li>
                  <li>Podrás cancelar en cualquier momento desde la configuración de tu cuenta.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Terminación</h2>
                <p className="text-gray-600 mb-4">
                  Podemos suspender o terminar tu acceso al Servicio inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo el incumplimiento de estos Términos.
                </p>
                <p className="text-gray-600">
                  Puedes eliminar tu cuenta en cualquier momento desde la configuración de la app o contactando a soporte. Tras la eliminación, tus datos serán borrados conforme a nuestra <Link to="/privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificaciones</h2>
                <p className="text-gray-600">
                  Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos cambios significativos por correo electrónico o mediante un aviso en la app. El uso continuado del Servicio después de dichas modificaciones constituye tu aceptación de los nuevos Términos.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Ley Aplicable y Jurisdicción</h2>
                <p className="text-gray-600">
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Cualquier disputa se someterá a la jurisdicción exclusiva de los tribunales de España.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contacto</h2>
                <p className="text-gray-600 mb-4">
                  Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos en:
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 font-medium">KyPaw</p>
                  <p className="text-gray-600">Email: <a href="mailto:soporte@kypaw.app" className="text-primary hover:underline">soporte@kypaw.app</a></p>
                </div>
              </section>

              <section className="bg-primary/5 p-6 rounded-xl">
                <p className="text-gray-700 text-center">
                  Al utilizar KyPaw, confirmas que has leído, entendido y aceptado estos Términos y Condiciones, así como nuestra <Link to="/privacidad" className="text-primary hover:underline font-medium">Política de Privacidad</Link>.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
