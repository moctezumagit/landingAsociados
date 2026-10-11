/**
 * LANDING PAGE DE EMPRENDIMIENTO Y BIENESTAR DIGITAL
 * Motor reactivo Vue 3 con Video Funnel Interactivo (M1 a M5)
 * Mentora y Lider de Equipo: Maria de Jesus Vera | Contacto Oficial: +52 222 770 8716
 */

(function () {
  if (typeof Vue === "undefined") {
    console.error("Vue 3 no esta disponible.");
    return;
  }

  const { createApp, ref, reactive, computed, onMounted } = Vue;

  const app = createApp({
    setup() {
      // 1. Configuracion oficial
      const config = window.APP_CONFIG || {
        advisor: {
          name: "Mar\u00EDa de Jes\u00FAs Vera",
          role: "L\u00EDder de Equipo y Mentora de Emprendimiento Internacional",
          city: "Cobertura y Mentor\u00EDa en Pa\u00EDses Hispanohablantes",
          email: "equilibrionutricion8@gmail.com",
          whatsappNumber: "522227708716",
          displayPhone: "+52 222 770 8716",
          image: "assets/img/consultation.jpg",
          whatsappDefaultMessage: "Hola Mar\u00EDa de Jes\u00FAs, complet\u00E9 el formulario en la landing page. Me interesa conocer el plan de expansi\u00F3n internacional en bienestar digital y c\u00F3mo iniciar con el modelo en mi pa\u00EDs."
        },
        socialLinks: {
          whatsappDirect: "https://wa.me/522227708716"
        },
        googleSheetsUrl: "https://script.google.com/macros/s/AKfycbx9eZqg145tH7e0u0n1n4UnOOcNN42YDEqu7_PXp9Kay2F1YPcCLKGCcch4PFuVDRvD/exec",
        leadCaptureMethod: "whatsapp"
      };

      // 2. Filtro de Perfiles
      const activeProfile = ref("profesionistas");
      const activeAudienceTab = activeProfile;

      const profiles = [
        {
          id: "profesionistas",
          icon: "\uD83D\uDCBC",
          title: "Profesionistas & Empleados",
          badge: "Segunda Fuente de Ingresos",
          headline: "Genera un ingreso alternativo de 10 a 12 horas a la semana sin descuidar tu empleo",
          description: "Un modelo digital y flexible que operas desde tu celular en tus ratos libres, apalanc\u00E1ndote en un sistema probado de capacitaci\u00F3n y acompa\u00F1amiento directo.",
          benefits: [
            "Sin horarios r\u00EDgidos: t\u00FA decides cu\u00E1ndo y desde d\u00F3nde operar",
            "Ingresos depositados directamente a tu cuenta bancaria local en tu pa\u00EDs",
            "Acompa\u00F1amiento 1 a 1 de Mar\u00EDa de Jes\u00FAs Vera paso a paso",
            "Cero gesti\u00F3n de inventarios o cobros: Drop-shipping oficial con env\u00EDos directos a domicilio"
          ]
        },
        {
          id: "mamas",
          icon: "\uD83C\uDFE1",
          title: "Mam\u00E1s & Pap\u00E1s de Familia",
          badge: "Negocio Digital desde Casa",
          headline: "Construye un activo rentable sin perderte los mejores momentos con tus hijos",
          description: "Monetiza tus redes y c\u00EDrculo social desde tu hogar, aportando significativamente a tu econom\u00EDa con bienestar celular de alta demanda.",
          benefits: [
            "100% compaginable con la vida familiar y las rutinas del hogar",
            "Capacitaciones virtuales gratuitas y grabadas para avanzar a tu propio ritmo",
            "Comunidad c\u00E1lida de asociados en diversos pa\u00EDses que te impulsan en cada etapa",
            "Precios preferenciales mayoristas con hasta 45% de descuento para tu familia"
          ]
        },
        {
          id: "salud",
          icon: "\uD83E\uDE7A",
          title: "Profesionales de la Salud",
          badge: "Respaldo Cient\u00EDfico de +45 A\u00F1os",
          headline: "Recomienda biotecnolog\u00EDa celular con evidencia cl\u00EDnica y publicaciones m\u00E9dicas",
          description: "Ideal para m\u00E9dicos, nutri\u00F3logos, terapeutas y entrenadores que buscan respaldo cient\u00EDfico estricto y publicaciones en compendios internacionales.",
          benefits: [
            "M\u00E1s de 45 a\u00F1os de investigaci\u00F3n cient\u00EDfica y decenas de estudios cl\u00EDnicos en humanos",
            "Presente en compendios m\u00E9dicos internacionales de prestigio (PDR y CPS)",
            "Donador de ciste\u00EDna enlazada patentado para la elevaci\u00F3n del glutati\u00F3n intracelular",
            "Alianzas \u00E9ticas y prestigio profesional para tu pr\u00E1ctica o consulta"
          ]
        },
        {
          id: "emprendedores",
          icon: "\uD83D\uDE80",
          title: "Emprendedores con Visi\u00F3n",
          badge: "Activos Residuales y Escalabilidad",
          headline: "Construye ingresos residuales y un negocio heredable a largo plazo",
          description: "Apal\u00E1ncate en un sistema comprobado de duplicaci\u00F3n y comercio electr\u00F3nico para crear una red de clientes en constante expansi\u00F3n internacional.",
          benefits: [
            "Plan de compensaci\u00F3n de alto impacto con comisiones residuales crecientes",
            "Ingresos continuos: gana mes tras mes por la recompra habitual de clientes",
            "Negocio transferible y con visi\u00F3n patrimonial global para tu familia",
            "Bonos de avance de rango y duplicaci\u00F3n de liderazgo"
          ]
        }
      ];

      const currentProfile = computed(() => {
        return profiles.find(p => p.id === activeProfile.value) || profiles[0];
      });

      // 3. Prueba Social: Testimonios de Asociados
      const testimonials = [
        {
          name: "Lic. Carlos Mendoza",
          city: "Comunidad Hispana (Tiempo Parcial)",
          role: "Profesionista en Finanzas",
          initials: "CM",
          quote: "Trabajo en el sector corporativo y buscaba una segunda fuente de ingresos seria. Con 10 horas semanales y la orientaci\u00F3n de Mar\u00EDa de Jes\u00FAs, en pocos meses alcanc\u00E9 un ingreso constante sin descuidar mi empleo principal.",
          text: "Trabajo en el sector corporativo y buscaba una segunda fuente de ingresos seria. Con 10 horas semanales y la orientaci\u00F3n de Mar\u00EDa de Jes\u00FAs, en pocos meses alcanc\u00E9 un ingreso constante sin descuidar mi empleo principal."
        },
        {
          name: "Dra. Patricia Galindo",
          city: "Consulta & Nutrici\u00F3n Cl\u00EDnica",
          role: "Especialista en Salud",
          initials: "PG",
          quote: "Como profesional de la salud soy muy rigurosa con la evidencia. Al revisar los m\u00E1s de 45 a\u00F1os de ciencia y las patentes m\u00E9dicas, integr\u00E9 el modelo con total confianza. Mis consultantes tienen resultados comprobados.",
          text: "Como profesional de la salud soy muy rigurosa con la evidencia. Al revisar los m\u00E1s de 45 a\u00F1os de ciencia y las patentes m\u00E9dicas, integr\u00E9 el modelo con total confianza. Mis consultantes tienen resultados comprobados."
        },
        {
          name: "Lorena V\u00E1zquez",
          city: "Emprendedora Digital",
          role: "Mam\u00E1 de 2 & L\u00EDder de Equipo",
          initials: "LV",
          quote: "No quer\u00EDa un empleo r\u00EDgido de oficina para no perderme el crecimiento de mis hijos. El drop-shipping oficial resuelve todo el env\u00EDo y cobro en cada pa\u00EDs. Yo solo asesoro y comparto desde mi tel\u00E9fono celular.",
          text: "No quer\u00EDa un empleo r\u00EDgido de oficina para no perderme el crecimiento de mis hijos. El drop-shipping oficial resuelve todo el env\u00EDo y cobro en cada pa\u00EDs. Yo solo asesoro y comparto desde mi tel\u00E9fono celular."
        }
      ];

      // 4. Simulador Interactivo de Ingresos ($ USD o moneda equivalente)
      const simCustomers = ref(8);
      const simPartners = ref(3);

      const estimatedEarnings = computed(() => {
        return (simCustomers.value * 45) + (simPartners.value * 160);
      });

      const projectedMonthlyIncome = estimatedEarnings;

      // 5. Preguntas Frecuentes (FAQ)
      const openFaqIndex = ref(0);

      const faqs = [
        {
          q: "\u00BFNecesito experiencia previa en ventas o negocios?",
          a: "No, para nada. La gran mayor\u00EDa inician desde cero. Al unirte al equipo de Mar\u00EDa de Jes\u00FAs Vera recibes inducci\u00F3n 1 a 1, acceso a grupos de apoyo en WhatsApp y entrenamientos virtuales semanales donde te ense\u00F1amos exactamente qu\u00E9 hacer paso a paso."
        },
        {
          q: "\u00BFC\u00F3mo funciona el modelo de log\u00EDstica y env\u00EDos?",
          a: "Es un modelo 100% automatizado (Drop-shipping internacional). Tus clientes compran a trav\u00E9s de tu tienda virtual oficial, la compa\u00F1\u00EDa procesa el cobro con tarjeta o m\u00E9todos de pago autorizados y despacha el pedido por paqueter\u00EDa oficial directamente al domicilio del cliente con entrega r\u00E1pida y segura en su pa\u00EDs."
        },
        {
          q: "\u00BFC\u00F3mo y cu\u00E1ndo se pagan las comisiones?",
          a: "Las comisiones se depositan puntualmente mes con mes directo a tu cuenta bancaria en tu pa\u00EDs de residencia o mediante transferencia internacional autorizada, con total transparencia fiscal y respaldo legal."
        },
        {
          q: "\u00BFCu\u00E1l es la inversi\u00F3n para comenzar mi negocio?",
          a: "La inversi\u00F3n inicial es sumamente accesible y se realiza directamente con la compa\u00F1\u00EDa con descuento preferencial mayorista en tu moneda o d\u00F3lares. En la orientaci\u00F3n personalizada por WhatsApp, Mar\u00EDa de Jes\u00FAs Vera te detallar\u00E1 exactamente las alternativas y promociones vigentes para tu pa\u00EDs."
        },
        {
          q: "\u00BFQu\u00E9 respaldo legal y cient\u00EDfico tiene este proyecto?",
          a: "El proyecto opera legalmente con registros sanitarios y avales regulatorios oficiales en cada pa\u00EDs donde tiene presencia. Las f\u00F3rmulas cuentan con m\u00E1s de 45 a\u00F1os de investigaci\u00F3n cl\u00EDnica y figuran en prestigiosos compendios m\u00E9dicos internacionales como el PDR de EE. UU. y el CPS de Canad\u00E1."
        },
        {
          q: "\u00BFQu\u00E9 apoyo directo recibir\u00E9 de Mar\u00EDa de Jes\u00FAs Vera?",
          a: "Mar\u00EDa de Jes\u00FAs Vera te brindar\u00E1 mentor\u00EDa directa 1 a 1 por videoconferencia y WhatsApp: te ayuda en tus primeras presentaciones, te gu\u00EDa en la resoluci\u00F3n de dudas de tus prospectos y te integra a la comunidad para que nunca est\u00E9s solo en tu camino."
        }
      ];

      const toggleFaq = (index) => {
        openFaqIndex.value = openFaqIndex.value === index ? -1 : index;
      };

      // 6. Estado del Formulario Principal
      const form = reactive({
        name: "",
        phone: "",
        countryCity: "",
        incomeGoal: "$800 - $1,500 USD / mes",
        timeAvailability: "10 a 15 horas semanales",
        message: ""
      });

      const isSubmitting = ref(false);
      const submitSuccess = ref(false);

      const submitForm = () => {
        if (!form.name.trim() || !form.phone.trim()) {
          alert("Por favor completa tu nombre y telefono de WhatsApp.");
          return;
        }

        isSubmitting.value = true;

        const leadData = {
          nombre: form.name.trim(),
          telefono: form.phone.trim(),
          paisCiudad: form.countryCity.trim() || "Pa\u00EDs hispanohablante",
          meta: form.incomeGoal,
          disponibilidad: form.timeAvailability,
          mensaje: form.message ? form.message.trim() : "",
          tipo: "Prospecto Internacional Emprendimiento y Bienestar",
          asesora: config.advisor.name,
          telefonoAsesora: config.advisor.whatsappNumber,
          fecha: new Date().toISOString()
        };

        if (config.googleSheetsUrl) {
          try {
            fetch(config.googleSheetsUrl, {
              method: "POST",
              mode: "no-cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(leadData)
            }).catch(e => console.warn("Google Sheets sync:", e));
          } catch (err) {
            console.warn("Sheets error:", err);
          }
        }

        const waMsg = [
          `Hola Mar\u00EDa de Jes\u00FAs, complet\u00E9 el formulario en la landing page. Me interesa conocer el plan de expansi\u00F3n internacional en bienestar digital y c\u00F3mo iniciar con el modelo en mi pa\u00EDs.`,
          ``,
          `\uD83D\uDC64 *Nombre:* ${leadData.nombre}`,
          `\uD83D\uDCF1 *WhatsApp:* ${leadData.telefono}`,
          `\uD83D\uDCCD *Pa\u00EDs y Ciudad:* ${leadData.paisCiudad}`,
          `\uD83C\uDFAF *Meta mensual:* ${leadData.meta}`,
          `\u23F0 *Tiempo disponible:* ${leadData.disponibilidad}`,
          leadData.mensaje ? `\uD83D\uDCAC *Mensaje:* ${leadData.mensaje}` : ``
        ].filter(Boolean).join("\n");

        const waUrl = `https://wa.me/${config.advisor.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

        submitSuccess.value = true;
        isSubmitting.value = false;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 500);
      };

      const submitApplication = submitForm;

      // 7. Accion de Enlace directo a WhatsApp
      const contactAdvisorWhatsApp = (customText) => {
        const msg = customText || config.advisor.whatsappDefaultMessage;
        const url = `https://wa.me/${config.advisor.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank");
      };

      // ========================================================
      // 8. EMBUDO DE VIDEO INTERACTIVO AUTOMATICO (M1 a M5)
      // ========================================================
      const funnelSteps = {
        1: {
          id: 1,
          title: "Paso 1: Presentaci\u00F3n & Calificaci\u00F3n",
          subtitle: "Evaluaci\u00F3n inicial de bienestar y negocio digital",
          badge: "Paso 1 de 4",
          progress: 25,
          videoSrc: "assets/video/M1.mp4",
          questionTitle: "Pregunta de Calificaci\u00F3n 1",
          questionDesc: "\u00BFDeseas conocer c\u00F3mo generar un ingreso alternativo y mejorar tu bienestar celular?",
          yesText: "S\u00ED, continuar",
          yesSubtext: "Pasa al video 2",
          noText: "No en este momento",
          noSubtext: "Finalizar consulta",
          nextYes: 2,
          nextNo: 5
        },
        2: {
          id: 2,
          title: "Paso 2: Respaldo Cient\u00EDfico & Log\u00EDstica",
          subtitle: "Profundizando en el modelo automatizado",
          badge: "Paso 2 de 4",
          progress: 50,
          videoSrc: "assets/video/M2.mp4",
          questionTitle: "Pregunta de Calificaci\u00F3n 2",
          questionDesc: "\u00BFTe hace sentido apalancarte en biotecnolog\u00EDa comprobada con env\u00EDos y cobros 100% automatizados?",
          yesText: "S\u00ED, me interesa",
          yesSubtext: "Pasa al video 3",
          noText: "No por ahora",
          noSubtext: "Finalizar consulta",
          nextYes: 3,
          nextNo: 5
        },
        3: {
          id: 3,
          title: "Paso 3: Mentor\u00EDa & Plan de Expansi\u00F3n",
          subtitle: "Acompa\u00F1amiento 1 a 1 personalizado",
          badge: "Paso 3 de 4",
          progress: 75,
          videoSrc: "assets/video/M3.mp4",
          questionTitle: "Pregunta de Calificaci\u00F3n 3",
          questionDesc: "\u00BFTe gustar\u00EDa recibir una llamada de orientaci\u00F3n 1 a 1 sin costo con la mentora Mar\u00EDa de Jes\u00FAs Vera?",
          yesText: "S\u00ED, quiero hablar con Mar\u00EDa de Jes\u00FAs",
          yesSubtext: "Pasa a elegir horario de llamada",
          noText: "No por ahora",
          noSubtext: "Finalizar consulta",
          nextYes: 4,
          nextNo: 5
        },
        4: {
          id: 4,
          title: "Paso 4: Coordinaci\u00F3n de Llamada",
          subtitle: "Selecciona tu momento preferido",
          badge: "Paso Final",
          progress: 100,
          videoSrc: "assets/video/M4.mp4",
          questionTitle: "\u00BFCu\u00E1ndo prefieres que hablemos?",
          questionDesc: "Elige la alternativa que mejor se adapte a tu horario y pa\u00EDs para coordinar con Mar\u00EDa de Jes\u00FAs Vera:"
        },
        5: {
          id: 5,
          title: "Agradecimiento & Comunidad",
          subtitle: "Recursos y contenido gratuito",
          badge: "Finalizado",
          progress: 100,
          videoSrc: "assets/video/M5.mp4",
          isDisqualified: true,
          messageTitle: "Gracias por tu sinceridad",
          messageDesc: "En este momento nuestro modelo podr\u00EDa no adaptarse a lo que buscas, pero te invitamos a seguir nuestro contenido en redes sociales y explorar nuestra comunidad."
        }
      };

      const videoFunnel = reactive({
        isOpen: true,
        currentStep: 1,
        isPlaying: false,
        isMuted: true,
        isPausedForAnswer: false,
        hasEnded: false,
        autoplayBlocked: false,
        selectedSlotOption: null,
        bookingSubmitted: false,
        immediateSubmitted: false,
        whatsappImmediateUrl: "",
        calendarUrl: "",
        whatsappBookingUrl: "",
        bookingForm: {
          name: "",
          phone: "",
          timeSlot: "Ma\u00F1ana (9:00 AM - 12:00 PM)",
          date: new Date().toISOString().split("T")[0],
          time: "11:00",
          notes: ""
        },
        bookingErrors: {
          name: "",
          phone: ""
        }
      });

      const currentFunnelStepData = computed(() => {
        return funnelSteps[videoFunnel.currentStep] || funnelSteps[1];
      });

      const canCloseFunnelModal = computed(() => {
        if (videoFunnel.currentStep === 5) return true;
        if (videoFunnel.currentStep === 4 && (videoFunnel.bookingSubmitted || videoFunnel.immediateSubmitted)) return true;
        return false;
      });

      const openVideoFunnelModal = (step = null) => {
        videoFunnel.isOpen = true;
        const targetStep = step || videoFunnel.currentStep || 1;
        playFunnelStep(targetStep);
      };

      const closeVideoFunnelModal = (force = false) => {
        if (!force && !canCloseFunnelModal.value) {
          console.log("[Video Funnel] Cierre guiado: completa el flujo para continuar.");
          return;
        }
        videoFunnel.isOpen = false;
        const vid = document.getElementById("funnelVideoPlayer");
        if (vid) {
          vid.pause();
        }
      };

      const playFunnelStep = (stepId) => {
        videoFunnel.currentStep = stepId;
        videoFunnel.isPausedForAnswer = false;
        videoFunnel.hasEnded = false;
        videoFunnel.selectedSlotOption = null;
        videoFunnel.bookingSubmitted = false;
        videoFunnel.immediateSubmitted = false;

        const stepData = funnelSteps[stepId];
        if (!stepData) return;

        const attemptPlay = () => {
          const vid = document.getElementById("funnelVideoPlayer");
          if (!vid) return;

          vid.pause();
          vid.currentTime = 0;
          if (vid.src !== stepData.videoSrc) {
            vid.src = stepData.videoSrc;
            vid.load();
          }

          if (!videoFunnel.isMuted) {
            vid.muted = false;
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise.then(() => {
                videoFunnel.isPlaying = true;
                videoFunnel.isMuted = false;
                videoFunnel.autoplayBlocked = false;
              }).catch(() => {
                vid.muted = true;
                videoFunnel.isMuted = true;
                vid.play().then(() => {
                  videoFunnel.isPlaying = true;
                  videoFunnel.autoplayBlocked = false;
                }).catch(() => {
                  videoFunnel.autoplayBlocked = true;
                  videoFunnel.isPlaying = false;
                });
              });
            }
          } else {
            vid.muted = true;
            videoFunnel.isMuted = true;
            const playPromise = vid.play();
            if (playPromise !== undefined) {
              playPromise.then(() => {
                videoFunnel.isPlaying = true;
                videoFunnel.autoplayBlocked = false;
              }).catch(() => {
                videoFunnel.autoplayBlocked = true;
                videoFunnel.isPlaying = false;
              });
            }
          }
        };

        setTimeout(attemptPlay, 60);
      };

      const unmuteVideo = () => {
        const vid = document.getElementById("funnelVideoPlayer");
        if (vid) {
          vid.muted = false;
          videoFunnel.isMuted = false;
          videoFunnel.autoplayBlocked = false;
          if (vid.currentTime < 4) {
            vid.currentTime = 0;
          }
          vid.play().then(() => {
            videoFunnel.isPlaying = true;
          }).catch(e => console.warn("[Video Funnel] Audio unmuting:", e));
        }
      };

      const handleVideoClick = () => {
        if (videoFunnel.isMuted) {
          unmuteVideo();
        }
      };

      const answerFunnelQuestion = (isYes) => {
        const stepData = currentFunnelStepData.value;
        if (!stepData) return;

        if (isYes) {
          if (stepData.nextYes) {
            playFunnelStep(stepData.nextYes);
          }
        } else {
          if (stepData.nextNo) {
            playFunnelStep(stepData.nextNo);
          }
        }
      };

      const restartFunnel = () => {
        playFunnelStep(1);
      };

      const replayCurrentFunnelVideo = () => {
        const vid = document.getElementById("funnelVideoPlayer");
        if (vid) {
          vid.currentTime = 0;
          videoFunnel.isPausedForAnswer = false;
          videoFunnel.hasEnded = false;
          vid.play().then(() => {
            videoFunnel.isPlaying = true;
          }).catch(() => {
            unmuteVideo();
          });
        }
      };

      const onFunnelVideoEnded = () => {
        videoFunnel.isPlaying = false;
        videoFunnel.hasEnded = true;
        videoFunnel.isPausedForAnswer = true;
      };

      const onFunnelVideoPlay = () => {
        videoFunnel.isPlaying = true;
        videoFunnel.isPausedForAnswer = false;
      };

      const onFunnelVideoPause = () => {
        videoFunnel.isPlaying = false;
      };

      // Opcion A: En la proxima hora con Maria de Jesus Vera
      const selectOptionA_ProximaHora = () => {
        videoFunnel.selectedSlotOption = "proxima_hora";

        const customMessage = `\u00A1Hola Mar\u00EDa de Jes\u00FAs! Acabo de ver el video interactivo y solicito una llamada en la pr\u00F3xima hora para mi orientaci\u00F3n personalizada en bienestar digital.`;
        const waUrl = `https://wa.me/${config.advisor.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
        videoFunnel.whatsappImmediateUrl = waUrl;

        if (config.googleSheetsUrl) {
          try {
            fetch(config.googleSheetsUrl, {
              method: "POST",
              mode: "no-cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: "Interesado en llamada urgente (Paso 4)",
                phone: "",
                tipo: "Llamada Urgente Video Funnel",
                asesora: config.advisor.name,
                fecha: new Date().toISOString()
              })
            }).catch(e => console.warn("Sheets sync:", e));
          } catch (e) {}
        }

        videoFunnel.immediateSubmitted = true;

        try {
          window.open(waUrl, "_blank");
        } catch (e) {
          console.warn("Popup blocked:", e);
        }
      };

      // Opcion B: Hoy durante el dia
      const selectOptionB_HoyDia = () => {
        videoFunnel.selectedSlotOption = "hoy_dia";
        videoFunnel.bookingSubmitted = false;
      };

      // Opcion C: Elegir dia y hora
      const selectOptionC_ElegirFecha = () => {
        videoFunnel.selectedSlotOption = "elegir_fecha";
        videoFunnel.bookingSubmitted = false;
      };

      // Creador de enlace a Google Calendar
      const createGoogleCalendarUrl = ({ title, details, dateStr, timeStr }) => {
        try {
          const [year, month, day] = dateStr.split("-").map(Number);
          const [hour, minute] = timeStr.split(":").map(Number);
          const startDate = new Date(year, month - 1, day, hour, minute);
          const endDate = new Date(startDate.getTime() + 30 * 60000);

          const pad = n => String(n).padStart(2, "0");
          const formatCalTime = d => `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;

          const datesParam = `${formatCalTime(startDate)}/${formatCalTime(endDate)}`;
          return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${datesParam}&details=${encodeURIComponent(details)}&add=${encodeURIComponent(config.advisor.email)}`;
        } catch (e) {
          return "https://calendar.google.com/";
        }
      };

      // Envio de reserva de cita (Opciones B y C)
      const submitBookingFunnel = async () => {
        videoFunnel.bookingErrors.name = "";
        videoFunnel.bookingErrors.phone = "";

        if (!videoFunnel.bookingForm.name.trim()) {
          videoFunnel.bookingErrors.name = "Por favor ingresa tu nombre completo.";
          return;
        }
        if (!videoFunnel.bookingForm.phone.trim()) {
          videoFunnel.bookingErrors.phone = "Por favor ingresa tu WhatsApp con c\u00F3digo de pa\u00EDs.";
          return;
        }

        const isHoy = videoFunnel.selectedSlotOption === "hoy_dia";
        const slotText = isHoy ? videoFunnel.bookingForm.timeSlot : `${videoFunnel.bookingForm.date} a las ${videoFunnel.bookingForm.time} hrs`;

        let dateForCalendar = videoFunnel.bookingForm.date;
        let timeForCalendar = videoFunnel.bookingForm.time || "11:00";
        if (isHoy) {
          dateForCalendar = new Date().toISOString().split("T")[0];
          if (videoFunnel.bookingForm.timeSlot.includes("Ma\u00F1ana")) timeForCalendar = "10:30";
          else if (videoFunnel.bookingForm.timeSlot.includes("Mediod\u00EDa") || videoFunnel.bookingForm.timeSlot.includes("Tarde")) timeForCalendar = "14:00";
          else timeForCalendar = "18:00";
        }

        const eventTitle = `Orientaci\u00F3n Bienestar Digital con Mar\u00EDa de Jes\u00FAs Vera - ${videoFunnel.bookingForm.name.trim()}`;
        const eventDetails = `Cita de orientaci\u00F3n 1 a 1 de bienestar celular con Mar\u00EDa de Jes\u00FAs Vera (${config.advisor.displayPhone}).\nCliente: ${videoFunnel.bookingForm.name.trim()}\nWhatsApp: ${videoFunnel.bookingForm.phone.trim()}\nHorario seleccionado: ${slotText}`;

        const calUrl = createGoogleCalendarUrl({
          title: eventTitle,
          details: eventDetails,
          dateStr: dateForCalendar,
          timeStr: timeForCalendar
        });
        videoFunnel.calendarUrl = calUrl;

        const waMessage = `\u00A1Hola Mar\u00EDa de Jes\u00FAs! Acabo de registrar mi cita en el video interactivo:\n\n\uD83D\uDC64 *Nombre:* ${videoFunnel.bookingForm.name.trim()}\n\uD83D\uDCF1 *WhatsApp:* ${videoFunnel.bookingForm.phone.trim()}\n\uD83D\uDCC5 *Horario preferido:* ${slotText}\n\nQuedo a la espera de la llamada para mi orientaci\u00F3n personalizada.`;
        videoFunnel.whatsappBookingUrl = `https://wa.me/${config.advisor.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

        if (config.googleSheetsUrl) {
          try {
            fetch(config.googleSheetsUrl, {
              method: "POST",
              mode: "no-cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: videoFunnel.bookingForm.name.trim(),
                phone: videoFunnel.bookingForm.phone.trim(),
                meta: `Cita Video Funnel: ${slotText}`,
                tipo: `Cita Video Funnel (${videoFunnel.selectedSlotOption})`,
                asesora: config.advisor.name,
                telefonoAsesora: config.advisor.whatsappNumber,
                fecha: new Date().toISOString()
              })
            }).catch(e => console.warn("Sheets sync:", e));
          } catch (e) {}
        }

        videoFunnel.bookingSubmitted = true;

        try {
          window.open(calUrl, "_blank");
        } catch (e) {}
      };

      // Inicializacion automÃ¡tica al cargar
      onMounted(() => {
        setTimeout(() => {
          openVideoFunnelModal(1);
        }, 300);
      });

      return {
        config,
        profiles,
        activeProfile,
        activeAudienceTab,
        currentProfile,
        testimonials,
        simCustomers,
        simPartners,
        estimatedEarnings,
        projectedMonthlyIncome,
        faqs,
        openFaqIndex,
        toggleFaq,
        form,
        isSubmitting,
        submitSuccess,
        submitForm,
        submitApplication,
        contactAdvisorWhatsApp,
        // Funciones y datos del Video Funnel Interactivo
        funnelSteps,
        videoFunnel,
        currentFunnelStepData,
        canCloseFunnelModal,
        openVideoFunnelModal,
        closeVideoFunnelModal,
        playFunnelStep,
        unmuteVideo,
        handleVideoClick,
        answerFunnelQuestion,
        restartFunnel,
        replayCurrentFunnelVideo,
        onFunnelVideoEnded,
        onFunnelVideoPlay,
        onFunnelVideoPause,
        selectOptionA_ProximaHora,
        selectOptionB_HoyDia,
        selectOptionC_ElegirFecha,
        submitBookingFunnel
      };
    }
  });

  app.mount("#app");
})();