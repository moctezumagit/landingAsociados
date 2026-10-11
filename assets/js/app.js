/**
 * LANDING PAGE DE EMPRENDIMIENTO Y BIENESTAR MEXICO (es-MX)
 * Motor reactivo Vue 3 con validacion y optimizacion de conversion (CRO)
 * Mentora y Lider de Equipo: Maria de Jesus Vera | Contacto: +52 222 770 8716
 */

const { createApp, ref, reactive, computed, onMounted } = Vue;

const app = createApp({
  setup() {
    // Configuracion de consultora y canales oficiales
    const config = window.APP_CONFIG || {
      advisor: {
        name: "Mar\u00EDa de Jes\u00FAs Vera",
        role: "L\u00EDder de Equipo y Mentora de Emprendimiento",
        city: "Puebla, M\u00E9xico (Cobertura en toda la Rep\u00FAblica Mexicana)",
        email: "equilibrionutricion8@gmail.com",
        whatsappNumber: "522227708716",
        displayPhone: "222 770 8716",
        whatsappDefaultMessage: "Hola Mar\u00EDa de Jes\u00FAs, complet\u00E9 el formulario en la landing page. Me interesa conocer el plan de expansi\u00F3n en bienestar digital y la disponibilidad de paquetes de inicio."
      },
      socialLinks: {
        whatsappDirect: "https://wa.me/522227708716"
      },
      googleSheetsUrl: "",
      leadCaptureMethod: "whatsapp"
    };

    // Estado del Formulario de Postulacion / Registro
    const form = reactive({
      name: "",
      phone: "",
      city: "",
      goal: "Ingreso Alternativo ($10,000 - $25,000 MXN/mes)",
      timeAvailability: "Medio Tiempo (10 a 12 hrs a la semana)",
      experience: "Sin experiencia (deseo capacitaci\u00F3n desde cero)",
      message: ""
    });

    const errors = reactive({
      name: "",
      phone: ""
    });

    const isSubmitting = ref(false);
    const submitSuccess = ref(false);

    // Metas de emprendimiento en pesos mexicanos (MXN)
    const businessGoals = [
      { id: "extra", label: "Ingreso Extra ($5,000 - $15,000 MXN/mes)", desc: "Genera ingresos adicionales dedicando de 8 a 10 hrs semanales sin descuidar tu empleo actual" },
      { id: "alternativo", label: "Ingreso Alternativo ($15,000 - $35,000 MXN/mes)", desc: "Construye una segunda fuente de ingresos s\u00F3lida y en crecimiento constante" },
      { id: "libertad", label: "Libertad Financiera (+$50,000 MXN/mes)", desc: "Desarrolla una carrera de liderazgo con equipo y ganancias residuales escalables" },
      { id: "salud_pro", label: "Profesional de Salud o Deporte", desc: "Integra biotecnolog\u00EDa celular comprobada en tu pr\u00E1ctica o comunidad" }
    ];

    // Pesta\u00F1as de Audiencia: \u00BFPara qui\u00E9n es esta oportunidad?
    const activeAudienceTab = ref("empleados");

    const audienceTabs = [
      { id: "empleados", label: "Profesionistas & Empleados" },
      { id: "hogar", label: "Mam\u00E1s & Pap\u00E1s de Familia" },
      { id: "salud", label: "Profesionales de la Salud" },
      { id: "emprendedores", label: "Emprendedores con Visi\u00F3n" }
    ];

    const audienceData = {
      empleados: {
        tag: "Segunda Fuente de Ingresos en M\u00E9xico",
        title: "Genera un ingreso alternativo dedicando de 10 a 12 horas a la semana, sin descuidar tu empleo.",
        subtitle: "Un modelo digital y flexible que operas desde tu celular en tus ratos libres, apalanc\u00E1ndote en un sistema probado de capacitaci\u00F3n y acompa\u00F1amiento.",
        benefits: [
          "Sin horarios r\u00EDgidos: t\u00FA decides cu\u00E1ndo y d\u00F3nde conectar clientes",
          "Ingresos en pesos mexicanos depositados directamente a tu cuenta bancaria",
          "Acompa\u00F1amiento personalizado de Mar\u00EDa de Jes\u00FAs Vera paso a paso",
          "Cero gesti\u00F3n de inventarios o cobros: Drop-shipping oficial DHL/Estafeta en todo M\u00E9xico"
        ]
      },
      hogar: {
        tag: "Negocio Digital desde Casa",
        title: "Construye un activo rentable sin perderte los mejores momentos con tus hijos.",
        subtitle: "Monetiza tus redes y c\u00EDrculo social desde tu hogar, aportando significativamente al gasto familiar con suplementaci\u00F3n cient\u00EDfica de alta demanda.",
        benefits: [
          "100% compaginable con la vida familiar y las rutinas escolares",
          "Capacitaciones virtuales gratuitas y grabadas para avanzar a tu propio ritmo",
          "Comunidad c\u00E1lida de asociados que te impulsan y celebran cada logro",
          "Precios preferenciales con hasta 45% de descuento para el bienestar de tu familia"
        ]
      },
      salud: {
        tag: "Respaldo Cient\u00EDfico & Nutrici\u00F3n Celular",
        title: "Recomienda biotecnolog\u00EDa celular con evidencia cl\u00EDnica y publicaciones m\u00E9dicas internacionales.",
        subtitle: "Ideal para m\u00E9dicos, nutri\u00F3logos, terapeutas, entrenadores y profesionales que buscan respaldo cient\u00EDfico estricto y publicaciones en el PDR y CPS.",
        benefits: [
          "M\u00E1s de 45 a\u00F1os de investigaci\u00F3n cient\u00EDfica y decenas de estudios cl\u00EDnicos en humanos",
          "Presente en referencias m\u00E9dicas mundiales de prestigio (PDR de EE. UU. y CPS de Canad\u00E1)",
          "Donador de ciste\u00EDna enlazada patentado para la elevaci\u00F3n del glutati\u00F3n intracelular",
          "Alianzas \u00E9ticas y prestigio profesional para tu consulta o centro de salud"
        ]
      },
      emprendedores: {
        tag: "Activos Financieros & Escalabilidad",
        title: "Construye ingresos residuales y un negocio heredable a largo plazo.",
        subtitle: "Apal\u00E1ncate en un sistema comprobado de duplicaci\u00F3n y comercio electr\u00F3nico para crear una cartera de clientes en constante crecimiento.",
        benefits: [
          "Plan de compensaci\u00F3n de alto impacto que reparte hasta el 47% en comisiones",
          "Ingresos residuales continuos: gana comisiones crecientes mes con mes",
          "Negocio transferible y con visi\u00F3n de futuro para tu familia",
          "Reconocimientos, incentivos especiales y bonos por desarrollo de equipo"
        ]
      }
    };

    // Prueba Social: Testimonios de Asociados
    const testimonials = [
      {
        name: "Lic. Carlos Mendoza",
        city: "CDMX",
        role: "Profesionista (Tiempo Parcial)",
        text: "Trabajo en el sector financiero y buscaba una segunda fuente de ingresos seria. Con 10 horas a la semana y el apoyo de Mar\u00EDa de Jes\u00FAs, en 4 meses alcanc\u00E9 un ingreso que supera la mensualidad de mi auto sin descuidar mi trabajo.",
        badge: "Segunda Fuente de Ingresos"
      },
      {
        name: "Dra. Patricia Galindo",
        city: "Puebla, Pue.",
        role: "Especialista en Nutrici\u00F3n",
        text: "Como profesional de la salud soy muy rigurosa con la evidencia. Al revisar los m\u00E1s de 45 a\u00F1os de ciencia y las patentes del donador de ciste\u00EDna, integr\u00E9 el modelo con total confianza. Mis pacientes tienen resultados comprobados.",
        badge: "Respaldo Cient\u00EDfico"
      },
      {
        name: "Lorena V\u00E1zquez",
        city: "Guadalajara, Jal.",
        role: "Mam\u00E1 de 2 & Emprendedora",
        text: "No quer\u00EDa volver a un empleo de 9 horas para no perderme el crecimiento de mis hijos. El drop-shipping oficial resuelve todo el env\u00EDo y cobro. Yo solo conecto y asesoro desde mi tel\u00E9fono celular.",
        badge: "Libertad de Tiempo"
      }
    ];

    // Simulador de Ingresos Proyectados en M\u00E9xico (MXN)
    const simPartners = ref(3);
    const simCustomers = ref(5);

    const projectedMonthlyIncome = computed(() => {
      // Calculo estimado: margen venta directa promedio $550 MXN/cliente + comision residual/bono por socio $1,350 MXN
      const retailProfit = simCustomers.value * 550;
      const teamCommission = simPartners.value * 1350;
      const rankBonus = simPartners.value >= 4 ? 4000 : 0;
      return retailProfit + teamCommission + rankBonus;
    });

    // Preguntas Frecuentes (FAQ) para derribar objeciones
    const openFaqIndex = ref(0);

    const faqs = [
      {
        q: "\u00BFNecesito experiencia previa en ventas o negocios?",
        a: "No, para nada. La gran mayor\u00EDa inician desde cero. Al unirte al equipo de Mar\u00EDa de Jes\u00FAs Vera recibes inducci\u00F3n 1 a 1, acceso a grupos de apoyo en WhatsApp y entrenamientos semanales donde te ense\u00F1amos exactamente qu\u00E9 hacer paso a paso."
      },
      {
        q: "\u00BFC\u00F3mo funciona el modelo de log\u00EDstica y env\u00EDos en M\u00E9xico?",
        a: "Es un modelo 100% automatizado (Drop-shipping oficial). Tus clientes compran en tu plataforma digital, la compa\u00F1\u00EDa procesa el cobro con tarjeta o transferencia y despacha el pedido por paqueter\u00EDa oficial (DHL y Estafeta) con entrega r\u00E1pida y segura en el domicilio del cliente."
      },
      {
        q: "\u00BFC\u00F3mo y cu\u00E1ndo se pagan las comisiones en M\u00E9xico?",
        a: "Las comisiones se depositan mensualmente directo a tu cuenta bancaria en cualquier banco de M\u00E9xico (BBVA, Banorte, Santander, etc.), de forma puntual y con total transparencia fiscal."
      },
      {
        q: "\u00BFCu\u00E1l es la inversi\u00F3n para comenzar mi negocio en M\u00E9xico?",
        a: "Tu inicio se realiza adquiriendo un Paquete de Inicio con descuento preferencial mayorista (con hasta 45% de ahorro). En la llamada de orientaci\u00F3n por WhatsApp, Mar\u00EDa de Jes\u00FAs Vera te detallar\u00E1 exactamente las opciones disponibles seg\u00FAn tus metas."
      },
      {
        q: "\u00BFQu\u00E9 respaldo legal y cient\u00EDfico tiene este proyecto en M\u00E9xico?",
        a: "El proyecto opera legalmente en M\u00E9xico, cuenta con registro sanitario y aviso de funcionamiento ante COFEPRIS. Las f\u00F3rmulas cuentan con m\u00E1s de 45 a\u00F1os de investigaci\u00F3n cl\u00EDnica y figuran en prestigiosas referencias m\u00E9dicas internacionales como el PDR de EE. UU."
      },
      {
        q: "\u00BFQu\u00E9 apoyo directo recibir\u00E9 de Mar\u00EDa de Jes\u00FAs Vera?",
        a: "Mar\u00EDa de Jes\u00FAs Vera te brindar\u00E1 mentor\u00EDa directa 1 a 1: te ayuda en tus primeras presentaciones, te gu\u00EDa en la resoluci\u00F3n de dudas de tus prospectos y te integra a la comunidad para que nunca est\u00E9s solo en tu camino."
      }
    ];

    const toggleFaq = (index) => {
      openFaqIndex.value = openFaqIndex.value === index ? -1 : index;
    };

    // Validacion y envio del Formulario
    const validateForm = () => {
      let isValid = true;
      errors.name = "";
      errors.phone = "";

      if (!form.name.trim() || form.name.trim().length < 3) {
        errors.name = "Por favor escribe tu nombre completo.";
        isValid = false;
      }

      // Validacion de telefono de Mexico (minimo 10 digitos)
      const cleanPhone = form.phone.replace(/\D/g, "");
      if (!cleanPhone || cleanPhone.length < 10) {
        errors.phone = "Por favor ingresa un n\u00FAmero de celular v\u00E1lido a 10 d\u00EDgitos (ej. 222 770 8716).";
        isValid = false;
      }

      return isValid;
    };

    const submitApplication = async () => {
      if (!validateForm()) return;

      isSubmitting.value = true;

      const cleanPhone = form.phone.replace(/\D/g, "");
      const fullPhone = cleanPhone.startsWith("52") ? cleanPhone : `52${cleanPhone}`;

      const leadData = {
        fecha: new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" }),
        nombre: form.name.trim(),
        telefono: fullPhone,
        ciudad: form.city.trim() || "M\u00E9xico",
        meta: form.goal,
        disponibilidad: form.timeAvailability,
        experiencia: form.experience,
        mensaje: form.message.trim(),
        tipo: "Prospecto Emprendimiento y Bienestar",
        asesora: config.advisor.name,
        telefonoAsesora: config.advisor.whatsappNumber
      };

      // 1. Enviar a Google Sheets en segundo plano si la URL esta configurada
      if (config.googleSheetsUrl) {
        try {
          fetch(config.googleSheetsUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(leadData)
          }).catch(err => console.warn("Google Sheets background sync:", err));
        } catch (e) {
          console.warn("Error enviando a Sheets:", e);
        }
      }

      // 2. Preparar mensaje exacto y contextualizado para WhatsApp
      const waMsg = [
        `Hola Mar\u00EDa de Jes\u00FAs, complet\u00E9 el formulario en la landing page. Me interesa conocer el plan de expansi\u00F3n en bienestar digital y la disponibilidad de paquetes de inicio.`,
        ``,
        `\uD83D\uDC64 *Nombre:* ${leadData.nombre}`,
        `\uD83D\uDCF1 *Celular:* ${form.phone.trim()}`,
        `\uD83D\uDCCD *Ciudad:* ${leadData.ciudad}`,
        `\uD83C\uDFAF *Meta mensual:* ${leadData.meta}`,
        `\u23F0 *Tiempo disponible:* ${leadData.disponibilidad}`,
        `\uD83D\uDCA1 *Experiencia:* ${leadData.experiencia}`,
        form.message.trim() ? `\uD83D\uDCAC *Mensaje:* ${leadData.mensaje}` : ``
      ].filter(line => line !== null && line !== "").join("\n");

      const waUrl = `https://wa.me/${config.advisor.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

      submitSuccess.value = true;
      isSubmitting.value = false;

      // Abrir WhatsApp con la informacion precargada
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 700);
    };

    const contactAdvisorWhatsApp = (customText) => {
      const msg = customText || config.advisor.whatsappDefaultMessage;
      const url = `https://wa.me/${config.advisor.whatsappNumber}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    };

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
      testimonials,
      simPartners,
      simCustomers,
      projectedMonthlyIncome,
      faqs,
      openFaqIndex,
      toggleFaq,
      submitApplication,
      contactAdvisorWhatsApp
    };
  }
});

app.mount("#app");