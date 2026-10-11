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
        whatsappDefaultMessage: "\u00A1Hola Mar\u00EDa de Jes\u00FAs! Me interesa conocer los detalles del proyecto de negocio y c\u00F3mo iniciar con tu equipo."
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
      goal: "Ingreso Extra ($5,000 - $15,000 MXN/mes)",
      timeAvailability: "Medio Tiempo (5 a 10 hrs a la semana)",
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
      { id: "extra", label: "Ingreso Extra ($5,000 - $15,000 MXN/mes)", desc: "Genera ingresos adicionales sin descuidar tu empleo o actividades actuales" },
      { id: "medio", label: "Medio Tiempo ($15,000 - $35,000 MXN/mes)", desc: "Construye una segunda fuente de ingresos s\u00F3lida y en crecimiento constante" },
      { id: "libertad", label: "Libertad Financiera (+$50,000 MXN/mes)", desc: "Desarrolla una carrera de liderazgo con equipo y ganancias crecientes" },
      { id: "salud_pro", label: "Profesional de Salud o Deporte", desc: "Integra suplementaci\u00F3n cient\u00EDfica patentada en tu pr\u00E1ctica o comunidad" }
    ];

    // Pesta\u00F1as de Audiencia: \u00BFPara qui\u00E9n es esta oportunidad?
    const activeAudienceTab = ref("empleados");

    const audienceTabs = [
      { id: "empleados", label: "Profesionistas y Empleados" },
      { id: "hogar", label: "Mam\u00E1s y Pap\u00E1s de Familia" },
      { id: "salud", label: "Profesionales de la Salud" },
      { id: "emprendedores", label: "Emprendedores con Visi\u00F3n" }
    ];

    const audienceData = {
      empleados: {
        tag: "Segunda Fuente de Ingresos en M\u00E9xico",
        title: "Genera un ingreso extra en tus tiempos libres sin renunciar a tu empleo.",
        subtitle: "Un modelo flexible que puedes operar desde tu celular en tus ratos libres, apoy\u00E1ndote en un sistema probado de capacitaci\u00F3n y acompa\u00F1amiento.",
        benefits: [
          "Sin horarios r\u00EDgidos: t\u00FA decides cu\u00E1ntas horas dedicarle al d\u00EDa",
          "Ingresos en pesos mexicanos depositados directamente a tu cuenta bancaria",
          "Acompa\u00F1amiento personalizado de Mar\u00EDa de Jes\u00FAs Vera paso a paso",
          "Sin riesgos de inventario: los env\u00EDos se realizan directo a tus clientes por paqueter\u00EDa oficial"
        ]
      },
      hogar: {
        tag: "Trabaja desde Casa",
        title: "Monetiza tu tiempo desde el hogar sin perderte los mejores momentos con tus hijos.",
        subtitle: "Construye un negocio rentable y con prop\u00F3sito desde tu casa o tel\u00E9fono, aportando al gasto familiar con productos que mejoran la calidad de vida.",
        benefits: [
          "100% compaginable con la vida familiar y escolar",
          "Capacitaciones virtuales gratuitas y grabadas para ver a tu ritmo",
          "Comunidad c\u00E1lida de emprendedores que te impulsan a crecer",
          "Precios preferenciales con descuentos directos para toda tu familia"
        ]
      },
      salud: {
        tag: "Respaldo Cient\u00EDfico & Nutrici\u00F3n Celular",
        title: "Recomienda nutrac\u00E9uticos con grado cient\u00EDfico y evidencia cl\u00EDnica mundial.",
        subtitle: "Ideal para m\u00E9dicos, nutri\u00F3logos, terapeutas, entrenadores y profesionales que buscan respaldo m\u00E9dico comprobado y publicaci\u00F3n en el PDR y CPS.",
        benefits: [
          "M\u00E1s de 45 a\u00F1os de investigaci\u00F3n y decenas de estudios cl\u00EDnicos en humanos",
          "Presente en referencias m\u00E9dicas internacionales de prestigio (PDR y CPS)",
          "Donador de ciste\u00EDna enlazada patentado para la elevaci\u00F3n del glutati\u00F3n celular",
          "Alianzas \u00E9ticas y prestigio profesional para tu consulta o centro de salud"
        ]
      },
      emprendedores: {
        tag: "Activos Financieros & Escalabilidad",
        title: "Construye ingresos residuales y un negocio rentable a largo plazo.",
        subtitle: "Apal\u00E1ncate en un sistema probado de duplicaci\u00F3n y herramientas digitales para crear un modelo de negocio en constante crecimiento.",
        benefits: [
          "Plan de compensaci\u00F3n de alto impacto que reparte hasta el 47% en comisiones",
          "Ingresos residuales continuos: gana comisiones crecientes mes con mes",
          "Negocio transferible y con visi\u00F3n de futuro para tu familia",
          "Reconocimientos, incentivos especiales y bonos por desarrollo de equipo"
        ]
      }
    };

    // Simulador de Ingresos Proyectados en M\u00E9xico (MXN)
    const simPartners = ref(3);
    const simCustomers = ref(5);

    const projectedMonthlyIncome = computed(() => {
      // Calculo estimado: comision venta directa promedio $550 MXN/cliente + comision residual/bono por socio $1,350 MXN
      const retailProfit = simCustomers.value * 550;
      const teamCommission = simPartners.value * 1350;
      const rankBonus = simPartners.value >= 4 ? 4000 : 0;
      return retailProfit + teamCommission + rankBonus;
    });

    // Preguntas Frecuentes (FAQ) espec\u00EDficas para M\u00E9xico
    const openFaqIndex = ref(0);

    const faqs = [
      {
        q: "\u00BFNecesito experiencia previa en ventas o negocios?",
        a: "No, para nada. La gran mayor\u00EDa inician desde cero. Al unirte al equipo de Mar\u00EDa de Jes\u00FAs Vera recibes inducci\u00F3n 1 a 1, acceso a grupos de apoyo en WhatsApp y entrenamientos semanales donde te ense\u00F1amos exactamente qu\u00E9 hacer paso a paso."
      },
      {
        q: "\u00BFC\u00F3mo se entregan los productos a los clientes en M\u00E9xico?",
        a: "No necesitas comprar inventario ni repartir paquetes personalmente. La compa\u00F1\u00EDa cuenta con log\u00EDstica y env\u00EDos directos a todo M\u00E9xico mediante paqueter\u00EDa oficial (DHL y Estafeta) con entrega r\u00E1pida y segura en el domicilio del cliente."
      },
      {
        q: "\u00BFC\u00F3mo y cu\u00E1ndo se pagan las comisiones en M\u00E9xico?",
        a: "Las comisiones se depositan mensualmente directo a tu cuenta bancaria en cualquier banco de M\u00E9xico (BBVA, Banorte, Santander, etc.), de forma puntual y con total transparencia fiscal."
      },
      {
        q: "\u00BFCu\u00E1l es la inversi\u00F3n para comenzar mi negocio en M\u00E9xico?",
        a: "Tu inicio se realiza adquiriendo un Paquete de Inicio con descuento preferencial mayorista (con hasta 45% de ahorro). En la llamada de orientaci\u00F3n por WhatsApp, Mar\u00EDa de Jes\u00FAs Vera te detallar\u00E1 exactamente los pasos y opciones disponibles seg\u00FAn tu meta."
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

      // 2. Preparar mensaje de WhatsApp en formato es-MX (sin mencionar marca previa)
      const waMsg = [
        `\u00A1Hola ${config.advisor.name}! Me interesa conocer el proyecto de negocio.`,
        ``,
        `\uD83D\uDC64 *Nombre:* ${leadData.nombre}`,
        `\uD83D\uDCF1 *Celular:* ${form.phone.trim()}`,
        `\uD83D\uDCCD *Ciudad:* ${leadData.ciudad}`,
        `\uD83C\uDFAF *Mi Meta:* ${leadData.meta}`,
        `\u23F0 *Tiempo disponible:* ${leadData.disponibilidad}`,
        `\uD83D\uDCA1 *Experiencia:* ${leadData.experiencia}`,
        form.message.trim() ? `\uD83D\uDCAC *Comentarios:* ${leadData.mensaje}` : ``,
        ``,
        `\u00BFMe podr\u00EDas compartir los detalles y agendar una llamada de orientaci\u00F3n? \u00A1Gracias!`
      ].filter(line => line !== null).join("\n");

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