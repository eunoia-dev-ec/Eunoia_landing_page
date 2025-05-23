"use client";

import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [language, setLanguage] = useState('es'); // 'es' for Spanish, 'en' for English

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const englishContent = (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: May 23, 2025</p>

      <p className="mb-4">
        This Privacy Policy describes how we collect, use, disclose, and protect your information when you interact with our website (Eunoia.click) and the Eunexus platform. It explains your privacy rights and how we comply with Ecuador’s Ley Orgánica de Protección de Datos Personales and other applicable laws.
      </p>

      <p className="mb-8">
        By using our website or Eunexus platform, you agree to the practices described in this Privacy Policy.
      </p>

      <h2 className="text-2xl font-bold mb-4">Definitions</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>“Company”, “We”, “Us”, “Our”</strong> refers to Eunoia.click, operator of both the website and Eunexus platform.</li>
        <li><strong>“Website”</strong> refers to Eunoia.click, including any web forms and landing pages.</li>
        <li><strong>“Eunexus Platform” or “Platform”</strong> refers to our business messaging software, integrating WhatsApp Business, Instagram DM, and Facebook Messenger APIs.</li>
        <li><strong>“Service”</strong> refers to both the Website and Eunexus Platform.</li>
        <li><strong>“Personal Data”</strong> means any information relating to an identified or identifiable individual.</li>
        <li><strong>“User” or “You”</strong> means anyone accessing or using our Website or Platform, whether as an individual or on behalf of a business.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">1. Data We Collect</h2>

      <h3 className="text-xl font-semibold mb-3">1.1 Information Collected via the Website (Lead Generation)</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Contact details:</strong> Name, email address, phone number, company name (if provided), and any other information submitted through our forms.</li>
        <li><strong>Usage data:</strong> IP address, browser type, device information, page visits, and form submission timestamps.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">1.2 Information Collected via Eunexus Platform (Business Messaging)</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Account details:</strong> Information required to create and manage business user accounts (email, name, business info, etc.).</li>
        <li><strong>Messaging data:</strong> Business messages sent and received through WhatsApp, Instagram DM, and Facebook Messenger APIs, including message content, sender/recipient info, timestamps, and attachments.</li>
        <li><strong>Integration data:</strong> Data necessary to connect and operate messaging APIs, such as API tokens, phone numbers, and platform-specific identifiers.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>

      <h3 className="text-xl font-semibold mb-3">2.1 Website/Lead Generation</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>To respond to your inquiries and contact you about our services.</li>
        <li>To qualify and generate business leads for Eunoia.click or Eunexus.</li>
        <li>To analyze website usage and improve user experience.</li>
      </ul>
      <p className="text-muted-foreground italic mb-8">
        We do not sell or share lead data with third parties for marketing or unrelated purposes.
      </p>

      <h3 className="text-xl font-semibold mb-3">2.2 Eunexus Platform (Business Messaging)</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>To provide, operate, and improve our messaging services for your business communications via WhatsApp, Instagram, and Facebook Messenger.</li>
        <li>To ensure message delivery and enable business automation (e.g., scheduling, order taking, responding to customer messages).</li>
        <li>To provide technical support and resolve issues.</li>
      </ul>
      <p className="text-muted-foreground italic mb-8">
        We do not use your message content for advertising or resell your information to third parties. Message content is processed only as needed to operate the platform, and may be shared with Meta services (WhatsApp, Instagram, Messenger) per their terms and privacy policies. We do not use this data for unrelated purposes.
      </p>

      <h2 className="text-2xl font-bold mb-4">3. Third-Party Integrations and Data Transfers</h2>
      <p className="mb-4">
        The Eunexus platform integrates with third-party messaging APIs (Meta/WhatsApp, Instagram, Facebook Messenger). When you use these features, relevant message and account data may be shared with these providers as required for functionality. These third parties process data under their own privacy policies. For more information, consult their respective documentation.
      </p>
      <p className="mb-8">
        Your data may be transferred and stored on servers outside Ecuador. We ensure such transfers are made lawfully and with adequate safeguards.
      </p>

      <h2 className="text-2xl font-bold mb-4">4. User Rights</h2>
      <p className="mb-4">
        In accordance with Ecuador’s Ley Orgánica de Protección de Datos Personales and applicable laws, you have the right to:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Request access to your personal data.</li>
        <li>Request correction of inaccurate or incomplete data.</li>
        <li>Request deletion of your data (except where retention is legally required).</li>
        <li>Restrict or object to certain processing of your data.</li>
        <li>Request data portability.</li>
      </ul>
      <p className="mb-8">
        To exercise your rights, contact us at <a href="mailto:contacto@eunoia.click" className="text-primary hover:underline">contacto@eunoia.click</a>.
      </p>

      <h2 className="text-2xl font-bold mb-4">5. Automated Decision-Making</h2>
      <p className="mb-8">
        Certain features of the Eunexus platform (such as chatbots or message routing) may involve automated responses or processing. These do not have legal or significant effects on users.
      </p>

      <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
      <p className="mb-8">
        We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no system can be guaranteed 100% secure.
      </p>

      <h2 className="text-2xl font-bold mb-4">7. Children’s Privacy</h2>
      <p className="mb-8">
        Our website and services are not directed to children under 13. We do not knowingly collect information from children under 13. If you believe a child has provided us data, contact us and we will remove it.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Data Breach Notification</h2>
      <p className="mb-8">
        If we become aware of a data breach affecting your personal data, we will notify you and the appropriate authorities in accordance with applicable law.
      </p>

      <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
      <p className="mb-8">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with a new “last updated” date. We encourage you to review this policy periodically.
      </p>

      <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or your data, contact us:<br />
        Email: <a href="mailto:contacto@eunoia.click" className="text-primary hover:underline">contacto@eunoia.click</a>
      </p>
    </>
  );

  const spanishContent = (
    <>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Política de Privacidad</h1>
      <p className="text-muted-foreground mb-8">Última actualización: 23 de mayo de 2025</p>

      <p className="mb-4">
        Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos tu información cuando interactúas con nuestro sitio web (Eunoia.click) y la plataforma Eunexus. Explica tus derechos de privacidad y cómo cumplimos con la Ley Orgánica de Protección de Datos Personales de Ecuador y otras leyes aplicables.
      </p>

      <p className="mb-8">
        Al utilizar nuestro sitio web o la plataforma Eunexus, aceptas las prácticas descritas en esta Política de Privacidad.
      </p>

      <h2 className="text-2xl font-bold mb-4">Definiciones</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>“Compañía”, “Nosotros”, “Nuestro”</strong>: se refiere a Eunoia.click, operadora tanto del sitio web como de la plataforma Eunexus.</li>
        <li><strong>“Sitio Web”</strong>: se refiere a Eunoia.click, incluyendo cualquier formulario web y página de aterrizaje.</li>
        <li><strong>“Plataforma Eunexus” o “Plataforma”</strong>: se refiere a nuestro software de mensajería empresarial, que integra las API de WhatsApp Business, Instagram DM y Facebook Messenger.</li>
        <li><strong>“Servicio”</strong>: se refiere tanto al Sitio Web como a la Plataforma Eunexus.</li>
        <li><strong>“Datos Personales”</strong>: significa cualquier información relacionada con una persona identificada o identificable.</li>
        <li><strong>“Usuario” o “Tú”</strong>: se refiere a cualquier persona que acceda o utilice nuestro Sitio Web o Plataforma, ya sea de forma individual o en representación de una empresa).
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">1. Datos que Recopilamos</h2>

      <h3 className="text-xl font-semibold mb-3">1.1 Información Recopilada a través del Sitio Web (Generación de Leads)</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Datos de contacto:</strong> Nombre, correo electrónico, número de teléfono, nombre de la empresa (si se proporciona) y cualquier otra información enviada a través de nuestros formularios.</li>
        <li><strong>Datos de uso:</strong> Dirección IP, tipo de navegador, información del dispositivo, páginas visitadas y fecha/hora del envío de formularios.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">1.2 Información Recopilada a través de la Plataforma Eunexus (Mensajería Empresarial)</h3>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Datos de cuenta:</strong> Información necesaria para crear y gestionar cuentas de usuario empresarial (correo electrónico, nombre, información de la empresa, etc.).</li>
        <li><strong>Datos de mensajería:</strong> Mensajes empresariales enviados y recibidos a través de las APIs de WhatsApp, Instagram DM y Facebook Messenger, incluyendo el contenido de los mensajes, información del remitente/destinatario, fecha/hora y archivos adjuntos.</li>
        <li><strong>Datos de integración:</strong> Datos necesarios para conectar y operar las APIs de mensajería, como tokens de API, números de teléfono e identificadores específicos de cada plataforma.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">2. Cómo Usamos tus Datos</h2>

      <h3 className="text-xl font-semibold mb-3">2.1 Sitio Web / Generación de Leads</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Para responder a tus consultas y contactarte sobre nuestros servicios.</li>
        <li>Para calificar y generar oportunidades de negocio para Eunoia.click o Eunexus.</li>
        <li>Para analizar el uso del sitio web y mejorar la experiencia de usuario.</li>
      </ul>
      <p className="text-muted-foreground italic mb-8">
        No vendemos ni compartimos los datos de leads con terceros para fines de marketing ni para propósitos no relacionados.
      </p>

      <h3 className="text-xl font-semibold mb-3">2.2 Plataforma Eunexus (Mensajería Empresarial)</h3>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Para proveer, operar y mejorar nuestros servicios de mensajería para tus comunicaciones empresariales mediante WhatsApp, Instagram y Facebook Messenger.</li>
        <li>Para asegurar la entrega de mensajes y habilitar automatizaciones empresariales (por ejemplo, agendar citas, tomar pedidos, responder mensajes de clientes).</li>
        <li>Para brindar soporte técnico y resolver incidencias.</li>
      </ul>
      <p className="text-muted-foreground italic mb-8">
        No utilizamos el contenido de tus mensajes para publicidad ni revendemos tu información a terceros. El contenido de los mensajes solo se procesa según sea necesario para operar la plataforma y puede ser compartido con los servicios de Meta (WhatsApp, Instagram, Messenger) conforme a sus propios términos y políticas de privacidad. No utilizamos estos datos para propósitos no relacionados.
      </p>

      <h2 className="text-2xl font-bold mb-4">3. Integraciones de Terceros y Transferencia de Datos</h2>
      <p className="mb-4">
        La plataforma Eunexus se integra con APIs de mensajería de terceros (Meta/WhatsApp, Instagram, Facebook Messenger). Al utilizar estas funciones, los datos relevantes de mensajes y cuentas pueden compartirse con estos proveedores según lo requiera la funcionalidad. Estos terceros procesan los datos bajo sus propias políticas de privacidad. Para más información, consulta la documentación respectiva.
      </p>
      <p className="mb-8">
        Tus datos pueden ser transferidos y almacenados en servidores fuera de Ecuador. Garantizamos que dichas transferencias se realicen legalmente y con las salvaguardas adecuadas.
      </p>

      <h2 className="text-2xl font-bold mb-4">4. Derechos del Usuario</h2>
      <p className="mb-4">
        De acuerdo con la Ley Orgánica de Protección de Datos Personales de Ecuador y otras leyes aplicables, tienes derecho a:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Solicitar acceso a tus datos personales.</li>
        <li>Solicitar la corrección de datos inexactos o incompletos.</li>
        <li>Solicitar la eliminación de tus datos (excepto cuando la retención sea obligatoria por ley).</li>
        <li>Restringir u oponerte a ciertos tratamientos de tus datos.</li>
        <li>Solicitar la portabilidad de tus datos.</li>
      </ul>
      <p className="mb-8">
        Para ejercer tus derechos, contáctanos en <a href="mailto:contacto@eunoia.click" className="text-primary hover:underline">contacto@eunoia.click</a>.
      </p>

      <h2 className="text-2xl font-bold mb-4">5. Toma de Decisiones Automatizada</h2>
      <p className="mb-8">
        Ciertas funciones de la plataforma Eunexus (como chatbots o enrutamiento de mensajes) pueden involucrar respuestas o procesamiento automatizado. Estos procesos no tienen efectos legales ni significativos sobre los usuarios.
      </p>

      <h2 className="text-2xl font-bold mb-4">6. Seguridad de los Datos</h2>
      <p className="mb-8">
        Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos contra acceso, alteración, divulgación o destrucción no autorizada. Sin embargo, ningún sistema puede garantizar seguridad absoluta. 
      </p>

      <h2 className="text-2xl font-bold mb-4">7. Privacidad de los Menores</h2>
      <p className="mb-8">
        Nuestro sitio web y servicios no están dirigidos a menores de 13 años. No recopilamos intencionalmente información de menores de 13 años. Si consideras que un menor nos ha proporcionado datos, contáctanos y los eliminaremos.
      </p>

      <h2 className="text-2xl font-bold mb-4">8. Notificación de Brechas de Seguridad</h2>
      <p className="mb-8">
        Si llegamos a detectar una brecha de seguridad que afecte tus datos personales, te notificaremos y notificaremos a las autoridades pertinentes conforme a la legislación vigente.
      </p>

      <h2 className="text-2xl font-bold mb-4">9. Cambios en Esta Política de Privacidad</h2>
      <p className="mb-8">
        Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios serán publicados en esta página con una nueva fecha de “última actualización”. Te recomendamos revisarla periódicamente.
      </p>

      <h2 className="text-2xl font-bold mb-4">10. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta Política de Privacidad o sobre tus datos, contáctanos:<br />
        Correo electrónico: <a href="mailto:contacto@eunoia.click" className="text-primary hover:underline">contacto@eunoia.click</a>
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
