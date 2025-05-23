"use client";

import { useState } from 'react';

export default function TermsOfServicePage() {
  const [language, setLanguage] = useState('es'); // 'es' for Spanish, 'en' for English

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const spanishContent = (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Términos y Condiciones de Uso</h1>
      <p className="text-muted-foreground mb-8">Última actualización: 23 de mayo de 2025</p>

      <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
      <p className="mb-8">
        Al acceder o utilizar el sitio web de Eunoia (<a href="https://eunoia.click" className="text-primary hover:underline">eunoia.click</a>) o la plataforma Eunexus (en conjunto, el “Servicio”), aceptas estar sujeto a estos Términos y Condiciones y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con estos términos, por favor no utilices nuestro Servicio.
      </p>

      <h2 className="text-2xl font-bold mb-4">2. Definiciones</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Compañía:</strong> Eunoia.click, operadora del Servicio.</li>
        <li><strong>Usuario:</strong> Toda persona física o jurídica que acceda o utilice el Servicio.</li>
        <li><strong>Servicio:</strong> El sitio web de Eunoia y la plataforma de mensajería empresarial Eunexus.</li>
        <li><strong>Cuenta:</strong> El perfil de usuario necesario para acceder a ciertas funciones del Servicio.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">3. Registro de Cuenta</h2>
      <p className="mb-8">
        Para acceder a algunas funciones, es posible que debas registrarte y proporcionar información precisa y completa. Eres responsable de proteger tus credenciales de acceso y no compartir tus datos de inicio de sesión ni permitir que otros accedan a tu cuenta.
      </p>

      <h2 className="text-2xl font-bold mb-4">4. Uso Aceptable</h2>
      <p className="mb-4">
        Te comprometes a utilizar el Servicio solo para fines lícitos y de acuerdo con estos Términos. No debes:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Utilizar el Servicio para enviar spam, marketing no autorizado o mensajes abusivos.</li>
        <li>Violar leyes o regulaciones aplicables.</li>
        <li>Interferir o interrumpir el Servicio o sus servidores.</li>
        <li>Acceder o intentar acceder a cuentas o datos de otros usuarios sin autorización.</li>
        <li>Utilizar medios automatizados para interactuar con el Servicio, salvo autorización expresa.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">5. Disponibilidad y Cambios en el Servicio</h2>
      <p className="mb-8">
        Nos reservamos el derecho de modificar, suspender o descontinuar cualquier aspecto del Servicio en cualquier momento, con o sin previo aviso. No somos responsables por interrupciones o pérdida de acceso.
      </p>

      <h2 className="text-2xl font-bold mb-4">6. Integraciones de Terceros</h2>
      <p className="mb-8">
        La plataforma Eunexus se conecta con servicios de terceros (incluyendo WhatsApp Business, Instagram, Facebook Messenger, entre otros). El uso de estas integraciones está sujeto a los términos y políticas de los respectivos proveedores. No somos responsables por el contenido, la seguridad o las prácticas de privacidad de plataformas de terceros.
      </p>

      <h2 className="text-2xl font-bold mb-4">7. Propiedad Intelectual</h2>
      <p className="mb-8">
        El Servicio, incluyendo todo el software, contenido, marcas y logotipos, es propiedad de Eunoia.click o de sus licenciantes. No puedes copiar, modificar, distribuir ni crear obras derivadas sin autorización expresa.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Pagos (Si aplica)</h2>
      <p className="mb-8">
        Si el Servicio incluye funciones o suscripciones de pago, las condiciones serán indicadas al momento de la compra. Todas las tarifas son no reembolsables salvo lo requerido por ley.
      </p>

      <h2 className="text-2xl font-bold mb-4">9. Exención de Responsabilidad y Limitación de Responsabilidad</h2>
      <p className="mb-8">
        El Servicio se proporciona “tal cual” y “según disponibilidad”. No garantizamos que el Servicio sea ininterrumpido, libre de errores o seguro. En la máxima medida permitida por la ley, Eunoia.click no asume ninguna responsabilidad por daños derivados del uso del Servicio.
      </p>

      <h2 className="text-2xl font-bold mb-4">10. Terminación</h2>
      <p className="mb-8">
        Nos reservamos el derecho de suspender o cancelar tu cuenta o acceso al Servicio, a nuestra discreción y sin previo aviso, en caso de violación de estos Términos o conducta prohibida.
      </p>

      <h2 className="text-2xl font-bold mb-4">11. Ley Aplicable y Jurisdicción</h2>
      <p className="mb-8">
        Estos Términos se rigen por las leyes de la República del Ecuador. Cualquier disputa estará sujeta a la jurisdicción exclusiva de los tribunales ecuatorianos.
      </p>

      <h2 className="text-2xl font-bold mb-4">12. Modificaciones de los Términos</h2>
      <p className="mb-8">
        Podemos actualizar estos Términos y Condiciones periódicamente. Los cambios serán publicados en esta página con una nueva fecha de “última actualización”. El uso continuado del Servicio constituye aceptación de los cambios.
      </p>

      <h2 className="text-2xl font-bold mb-4">13. Contacto</h2>
      <p>
        Para preguntas relacionadas con estos Términos, contáctanos:<br/>
        Correo: <a href="mailto:contacto@eunoia.click" className="text-primary hover:underline">contacto@eunoia.click</a>
      </p>
    </>
  );

  const englishContent = (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last updated: May 23, 2025</p>

      <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-8">
        By accessing or using the Eunoia website (<a href="https://eunoia.click" className="text-primary hover:underline">eunoia.click</a>) or the Eunexus platform (collectively, the “Service”), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with these terms, please do not use our Service.
      </p>

      <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Company:</strong> Eunoia.click, operator of the Service.</li>
        <li><strong>User:</strong> Any individual or entity accessing or using the Service.</li>
        <li><strong>Service:</strong> The Eunoia website and the Eunexus business messaging platform.</li>
        <li><strong>Account:</strong> The user profile required to access certain features of the Service.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
      <p className="mb-8">
        To access some features, you may need to register for an account and provide accurate, complete information. You are responsible for safeguarding your account credentials. You agree not to share your login details or allow others to access your account.
      </p>

      <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
      <p className="mb-4">
        You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Use the Service to send spam, unauthorized marketing, or abusive messages.</li>
        <li>Violate applicable laws or regulations.</li>
        <li>Interfere with or disrupt the Service or servers.</li>
        <li>Access or attempt to access accounts or data of other users without authorization.</li>
        <li>Use automated means to interact with the Service except as expressly allowed.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">5. Service Availability and Changes</h2>
      <p className="mb-8">
        We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice. We are not liable for any interruption or loss of access.
      </p>

      <h2 className="text-2xl font-bold mb-4">6. Third-Party Integrations</h2>
      <p className="mb-8">
        The Eunexus platform connects with third-party services (including WhatsApp Business, Instagram, Facebook Messenger, and others). Your use of these integrations is subject to the terms and policies of the respective providers. We are not responsible for the content, security, or privacy practices of third-party platforms.
      </p>

      <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
      <p className="mb-8">
        The Service, including all software, content, trademarks, and logos, is the property of Eunoia.click or its licensors. You may not copy, modify, distribute, or create derivative works without express permission.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Payments (If Applicable)</h2>
      <p className="mb-8">
        If the Service includes paid features or subscriptions, payment terms will be provided at the time of purchase. All fees are non-refundable except as required by law.
      </p>

      <h2 className="text-2xl font-bold mb-4">9. Disclaimer & Limitation of Liability</h2>
      <p className="mb-8">
        The Service is provided “as is” and “as available”. We do not guarantee that the Service will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, Eunoia.click disclaims all warranties and liability for damages arising from your use of the Service.
      </p>

      <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
      <p className="mb-8">
        We reserve the right to suspend or terminate your account or access to the Service at our discretion, without notice, if you violate these Terms or engage in prohibited conduct.
      </p>

      <h2 className="text-2xl font-bold mb-4">11. Governing Law & Jurisdiction</h2>
      <p className="mb-8">
        These Terms are governed by the laws of the Republic of Ecuador. Any disputes will be subject to the exclusive jurisdiction of the courts of Ecuador.
      </p>

      <h2 className="text-2xl font-bold mb-4">12. Modifications to the Terms</h2>
      <p className="mb-8">
        We may update these Terms of Service from time to time. Changes will be posted on this page with a new “last updated” date. Continued use of the Service after such changes constitutes acceptance.
      </p>

      <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
      <p>
        For questions regarding these Terms, contact us:<br/>
        Email: <a href="mailto:contacto@eunoia.click" className="text-primary hover:underline">contacto@eunoia.click</a>
      </p>
    </>
  );

  return (
    <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 max-w-4xl text-sm">
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleLanguage}
          className="px-2 py-1 text-xs font-medium rounded-md border transition-colors duration-200
            text-primary border-primary hover:bg-primary/10"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
      {language === 'es' ? spanishContent : englishContent}
    </div>
  );
}
