/**
 * IMMUNOTEC LANDING PAGE DE ASOCIADOS & RECLUTAMIENTO - VUE 3 APPLICATION
 * CRO (Conversion Rate Optimization) & Tracking Engine
 * Líder y Mentora: María de Jesús Vera
 */

const { createApp, ref, reactive, computed, onMounted } = Vue;

const app = createApp({
  setup() {
    // Configuración global cargada desde config.js
    const config = window.APP_CONFIG || {
      advisor: {
        name: María de Jesús Vera,
        role: Líder y Consultora Independiente de Immunotec,
        city: Puebla, México / Cobertura Internacional,
        email: equilibrionutricion8@gmail.com,
        whatsappNumber: 522227708716,
        whatsappDefaultMessage: ¡Hola María de Jesús Vera! Quiero conocer la oportunidad de negocio y cómo asociarme a tu equipo de Immunotec.
      },
      socialLinks: {
        whatsappDirect: https://wa.me/522227708716
      },
      googleSheetsUrl: '',
      leadCaptureMethod: 'whatsapp',
      pixels: {}
    };

    // Estado del Formulario de Postulación
    const form = reactive({
      name: '',
      phone: '',
      city: '',
      goal: 'Ingreso Extra (,000 - ,000 MXN)',
      timeAvailability: 'Medio Tiempo (5 a 10 hrs/semana)',
      experience: 'Sin experiencia previa (quiero aprender)',
      message: ''
    });

    const errors = reactive({
      name: '',
      phone: ''
    });

    const isSubmitting = ref(false);
    const submitSuccess = ref(false);

    // Metas de emprendimiento para selección rápida
    const businessGoals = [
      { id: 'ingreso_extra', label: 'Ingreso Extra (,000 - ,000 MXN)', icon: '💵', desc: 'Complementar tus ingresos actuales sin dejar tu empleo' },
      { id: 'medio_tiempo', label: 'Medio Tiempo (,000 - ,000 MXN)', icon: '🚀', desc: 'Construir una segunda fuente de ingresos sólida y estable' },
      { id: 'libertad', label: 'Libertad Financiera (+ ,000 MXN)', icon: '👑', desc: 'Carrera de liderazgo, red internacional y libertad de tiempo' },
      { id: 'salud_pro', label: 'Profesional de Salud / Deporte', icon: '🩺', desc: 'Recomendar ciencia patentada a pacientes, atletas y clientes' }
    ];

    // SECCIÓN AUDIENCIA: Para quién es esta oportunidad
    const activeAudienceTab = ref('empleados');

    const audienceTabs = [
      { id: 'empleados', label: 'Profesionales & Empleados', icon: '💼' },
      { id: 'hogar', label: 'Madres & Padres de Familia', icon: '🏡' },
      { id: 'salud', label: 'Sector Salud & Fitness', icon: '🩺' },
      { id: 'visionarios', label: 'Emprendedores & Líderes', icon: '🚀' }
    ];

    const audienceData = {
      empleados: {
        tag: 'Segunda Fuente de Ingresos',
        title: 'Genera ingresos adicionales en tus tiempos libres sin renunciar a tu empleo actual.',
        subtitle: 'Un modelo flexible que puedes operar desde tu teléfono móvil por las tardes o fines de semana, apalancándote en nuestro sistema probado de duplicación.',
        features: [
          'No requiere jefes ni horarios fijos; tú defines el ritmo.',
          'Aprende habilidades digitales de prospección y ventas de alto impacto.',
          'Construye un fondo de ahorro o colchón financiero que crece mes tras mes.',
          'Capacitaciones grabadas y en vivo para que estudies a tu propio horario.'
        ],
        stats: [
          { number: '1-2 hrs', label: 'Dedicación al día' },
          { number: '100%', label: 'Operable por celular' },
          { number: '0%', label: 'Riesgo de empleo' }
        ],
        ctaText: 'Quiero generar ingresos extra con María de Jesús Vera'
      },
      hogar: {
        tag: 'Trabajo desde Casa con tu Familia',
        title: 'Monetiza tu tiempo y atiende a tus hijos sin descuidar tu independencia económica.',
        subtitle: 'Miles de mamás y papás en nuestro equipo han encontrado el equilibrio perfecto: generar ingresos significativos mientras están presentes en cada momento importante de su familia.',
        features: [
          'Trabaja 100% desde casa mediante redes sociales, WhatsApp y Zoom.',
          'Comunidad cálida de apoyo mutuo y desarrollo personal.',
          'Lleva bienestar y salud celular a tu propio hogar y seres queridos.',
          'Posibilidad de generar ingresos superiores a un salario promedio de oficina.'
        ],
        stats: [
          { number: '100%', label: 'Home Office real' },
          { number: 'Flexible', label: 'Horarios familiares' },
          { number: '+14', label: 'Países para expandirte' }
        ],
        ctaText: 'Quiero emprender desde casa con mi familia'
      },
      salud: {
        tag: 'Ética, Ciencia & Prestigio Clínico',
        title: 'Recomienda el único precursor de glutatión con grado farmacéutico y avales en el PDR.',
        subtitle: 'Para médicos, enfermeros, nutriólogos, terapeutas y entrenadores que desean brindar soluciones biológicas reales con más de 85 estudios científicos en PubMed.',
        features: [
          'Listado en el PDR (EE.UU.) y CPS (Canadá) como producto natural de referencia.',
          'Sin competencia en el mercado: patente mundial de cisteína bioactiva enlazada.',
          'Altísima tasa de recompra: tus pacientes y asesorados lo consumen mes tras mes.',
          'Monetiza tu recomendación profesional con ética y respaldo institucional.'
        ],
        stats: [
          { number: '+45', label: 'Años de investigación' },
          { number: '+85', label: 'Estudios en PubMed' },
          { number: 'PDR/CPS', label: 'Avales médicos oficiales' }
        ],
        ctaText: 'Quiero información para profesionales de la salud'
      },
      visionarios: {
        tag: 'Liderazgo & Red Internacional',
        title: 'Construye un patrimonio de ingresos residuales en más de 14 países.',
        subtitle: 'Si tienes experiencia en redes, ventas o negocios, Immunotec te ofrece el plan de compensación más generoso y sostenible de la industria, con retención récord.',
        features: [
          'Plan híbrido unilevel de hasta 8 generaciones con compresión dinámica.',
          'Bonos de desarrollo de negocio de hasta el 20% en primera línea.',
          'Bonos de ascenso acelerado desde ,500 hasta más de ,000 MXN.',
          'Viajes de incentivo Xcelerator a resorts de lujo en el Caribe y Europa.'
        ],
        stats: [
          { number: 'Hasta 47%', label: 'Reparto a la red' },
          { number: '14+ Países', label: 'Mercado global abierto' },
          { number: 'Residual', label: 'Ingreso heredable' }
        ],
        ctaText: 'Quiero liderar un equipo internacional'
      }
    };

    // CALCULADORA DE POTENCIAL DE INGRESOS
    const selectedRank = ref('oro');
    const teamMembers = ref(15);

    const ranksList = [
      { id: 'asociado', name: 'Asociado', minPts: '2,000', incomeRange: ',500 - ,000 MXN', desc: 'Tus primeras recomendaciones y clientes directos.', color: 'border-slate-300' },
      { id: 'plata', name: 'Plata', minPts: '6,000', incomeRange: ',000 - ,000 MXN', desc: 'Tu primer equipo base de 3 a 5 personas activas.', color: 'border-slate-400' },
      { id: 'oro', name: 'Oro', minPts: '30,000', incomeRange: ',000 - ,000 MXN', desc: 'Liderazgo consolidado con 15 a 25 asociados en tu red.', color: 'border-amber-400' },
      { id: 'diamante', name: 'Diamante', minPts: '120,000', incomeRange: ',000 - ,000 MXN', desc: 'Libertad financiera y equipo en crecimiento autónomo.', color: 'border-blue-400' },
      { id: 'diamante_ejecutivo', name: 'D. Ejecutivo', minPts: '400,000', incomeRange: ',000 - ,000 MXN', desc: 'Líder internacional con múltiples Diamantes en tu equipo.', color: 'border-indigo-400' },
      { id: 'platino', name: 'Platino', minPts: '1,500,000', incomeRange: '+,000 MXN al mes', desc: 'Máximo rango de Immunotec con impacto mundial.', color: 'border-purple-400' }
    ];

    const currentRankInfo = computed(() => {
      return ranksList.find(r => r.id === selectedRank.value) || ranksList[2];
    });

    // PAQUETES DE ASOCIACIÓN DE INICIO
    const packagesList = [
      {
        id: 'exito',
        name: 'Paquete Éxito Total',
        tag: 'El Más Recomendado para Negocio',
        discount: '45% Descuento Oficial',
        points: '2,000 Puntos de Calificación',
        contents: [
          '4 Cajas de Immunocal Platinum (salud ósea e inflamación)',
          '3 Cajas de Immunocal Regular (inmunidad y glutatión puro)',
          'Membresía Internacional de Negocio incluida de por vida',
          'Acceso inmediato a la plataforma digital y tienda online',
          'Mentoría personalizada 1 a 1 con María de Jesús Vera',
          'Vaso mezclador oficial e instructivo de inicio rápido'
        ],
        highlight: true,
        badge: 'Mayor Rentabilidad'
      },
      {
        id: 'salud_familiar',
        name: 'Paquete Bienestar Familiar',
        tag: 'Ideal para Consumo & Primeros Clientes',
        discount: '43% Descuento Oficial',
        points: '2,000 Puntos de Calificación',
        contents: [
          '3 Cajas de Immunocal Regular (cisteína bioactiva)',
          '2 Cajas de Immunocal Platinum (CMP y RMF)',
          '1 Booster Optimizer Verde (activa gen Nrf2)',
          'Membresía de Consultor Independiente incluida',
          'Tienda virtual personalizada en 14 países sin costo extra',
          'Integración al grupo privado de WhatsApp del equipo'
        ],
        highlight: false,
        badge: 'Popular'
      },
      {
        id: 'deporte_energia',
        name: 'Paquete Alto Rendimiento',
        tag: 'Para Deportistas y Personas Activas',
        discount: '42% Descuento Oficial',
        points: '2,000 Puntos de Calificación',
        contents: [
          '3 Cajas de Immunocal Sport (óxido nítrico y fuerza)',
          '2 Cajas de Immunocal Platinum',
          '2 Booster Energy (energía limpia de té verde y guaraná)',
          'Certificación Informed-Sport libre de dopaje',
          'Membresía y kit de bienvenida oficial',
          'Capacitaciones semanales de negocio y producto'
        ],
        highlight: false,
        badge: 'Rendimiento'
      }
    ];

    // PREGUNTAS FRECUENTES (FAQ)
    const openFaq = ref(0);
    const toggleFaq = (index) => {
      openFaq.value = openFaq.value === index ? -1 : index;
    };

    const faqs = [
      {
        q: '¿Necesito experiencia previa en ventas o redes de mercadeo?',
        a: 'No, en lo absoluto. Más del 70% de las personas que ingresan a nuestro equipo nunca antes habían emprendido. Al asociarte con María de Jesús Vera recibes un sistema paso a paso que te enseña exactamente qué decir, cómo presentar el producto y cómo atraer prospectos por redes sociales y WhatsApp.'
      },
      {
        q: '¿Cuánto tiempo tengo que dedicarle a la semana?',
        a: 'Tú eres dueño de tu tiempo. La mayoría de los nuevos consultores inician dedicando entre 5 y 10 horas semanales (1 a 2 horas al día), aprovechando sus tiempos libres, sin descuidar su empleo, familia o estudios.'
      },
      {
        q: '¿Cómo y cuándo me paga Immunotec mis comisiones?',
        a: 'Immunotec realiza los pagos de manera formal y puntual mediante transferencia bancaria directa a tu cuenta cada mes. Además, los bonos por desarrollo de nuevos clientes y asociados se liquidan con frecuencia semanal.'
      },
      {
        q: '¿Tengo que comprar inventario obligatorio todos los meses?',
        a: 'No estás obligado a almacenar cajas en tu casa. El modelo de Immunotec funciona con comercio electrónico directo: tus clientes compran en tu enlace virtual de Immunotec, la empresa les cobra, les envía el producto a su domicilio y a ti te deposita la comisión.'
      },
      {
        q: '¿En qué países puedo expandir mi negocio?',
        a: 'Tu membresía es internacional. Desde el primer día puedes registrar clientes y asociar nuevos consultores en más de 14 países, incluidos México, Estados Unidos, Canadá, Colombia, Perú, España, Guatemala, Ecuador, Reino Unido y más.'
      },
      {
        q: '¿Qué respaldo tiene María de Jesús Vera para apoyarme?',
        a: 'María de Jesús Vera es una Consultora y Líder Independiente comprometida con el éxito de su equipo. Al integrarte con ella tendrás acceso a mentoría directa, grupo exclusivo de WhatsApp para resolución de dudas en tiempo real y reuniones virtuales semanales.'
      }
    ];

    // ENVÍO DE FORMULARIO A GOOGLE SHEETS Y WHATSAPP
    const submitForm = async () => {
      errors.name = '';
      errors.phone = '';

      if (!form.name.trim()) {
        errors.name = 'Por favor ingresa tu nombre completo.';
        return;
      }

      const cleanPhone = form.phone.replace(/\D/g, '');
      if (!cleanPhone || cleanPhone.length < 10) {
        errors.phone = 'Por favor ingresa un número de WhatsApp válido (mínimo 10 dígitos).';
        return;
      }

      isSubmitting.value = true;

      // Mensaje detallado para WhatsApp de María de Jesús Vera
      const waMessage = 
        ¡Hola María de Jesús Vera! Vengo de tu página web de Oportunidad Immunotec y quiero postularme a tu equipo.\n\n +
        👤 *Nombre:* \n +
        📱 *WhatsApp:* \n +
        📍 *Ciudad:* \n +
        🎯 *Meta de Ingresos:* \n +
        ⏰ *Tiempo Disponible:* \n +
        💼 *Experiencia:* \n\n +
        ¿Podrías agendar una breve llamada o darme detalles para iniciar?;

      // 1. Guardar en Google Sheets en segundo plano si está configurado
      if (config.googleSheetsUrl) {
        try {
          const payload = {
            fecha: new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' }),
            nombre: form.name.trim(),
            telefono: form.phone.trim(),
            ciudad: form.city.trim() || 'No especificada',
            meta: form.goal,
            tiempoDisponible: form.timeAvailability,
            experiencia: form.experience,
            tipo: 'Postulación a Asociado de Negocio'
          };

          fetch(config.googleSheetsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }).catch(e => console.warn('[Sheets Sync Error]', e));
        } catch (e) {
          console.warn('[Sheets Sync]', e);
        }
      }

      // 2. Tracking de Píxeles
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', { content_name: 'Postulacion Asociado', value: 1.00, currency: 'USD' });
      }
      if (typeof ttq === 'object' && typeof ttq.track === 'function') {
        ttq.track('SubmitForm');
      }

      isSubmitting.value = false;
      submitSuccess.value = true;

      // 3. Redirección a WhatsApp oficial
      const targetPhone = config.advisor.whatsappNumber || '522227708716';
      const waUrl = https://wa.me/?text=;

      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 500);
    };

    // FUNCIÓN DE CONTACTO DIRECTO POR WHATSAPP
    const openWhatsAppDirect = (customText = null) => {
      const targetPhone = config.advisor.whatsappNumber || '522227708716';
      const text = customText || config.advisor.whatsappDefaultMessage || 
        ¡Hola María de Jesús Vera! Vi tu página y quiero información para asociarme a tu equipo de Immunotec.;
      
      if (typeof fbq === 'function') {
        fbq('track', 'Contact', { content_name: 'WhatsApp Directo' });
      }
      if (typeof ttq === 'object' && typeof ttq.track === 'function') {
        ttq.track('Contact');
      }

      window.open(https://wa.me/?text=, '_blank');
    };

    onMounted(() => {
      console.log('🚀 Landing de Oportunidad Immunotec cargada para María de Jesús Vera.');
    });

    return {
      config,
      form,
      errors,
      isSubmitting,
      submitSuccess,
      businessGoals,
      activeAudienceTab,
      audienceTabs,
      audienceData,
      ranksList,
      selectedRank,
      currentRankInfo,
      teamMembers,
      packagesList,
      faqs,
      openFaq,
      toggleFaq,
      submitForm,
      openWhatsAppDirect
    };
  }
});

app.mount('#app');
