export type Language = "en" | "nl" | "es" | "zh"

export const translations = {
  en: {
    nav: {
      companies: "Companies",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Next-Level Construction Platform",
      title1: "Building the",
      title2: "Future Together",
      description:
        "Alpha Group unites three pioneering construction and staffing companies under one vision, delivering excellence in building, renovation, and workforce solutions across Europe.",
      explore: "Explore Our Companies",
      learnMore: "Learn More",
    },
    hierarchy: {
      title: "One Vision, Three Pillars",
      description:
        "Alpha Group serves as the strategic umbrella, empowering each company to excel while maintaining unified direction in construction and staffing excellence.",
      parentLabel: "Parent Corporation",
      goTeam: "Staffing Division",
      sword: "Technical Services Division",
      alphaBouw: "Construction Division",
    },
    companies: {
      title: "Our Companies",
      description:
        "Three distinct companies, one shared mission: delivering excellence in construction, staffing, and technical services.",
      goTeam: {
        name: "GO-TEAM",
        tagline: "Your Workforce Partner",
        description:
          "GO-TEAM specializes in providing skilled temporary staffing solutions for the construction and industrial sectors. We connect talented professionals with leading companies across the Netherlands and Belgium.",
        features: ["Construction Staffing", "Industrial Workers", "Technical Personnel", "Project-Based Teams"],
      },
      sword: {
        name: "SWORD BV",
        tagline: "Precision Engineering Solutions",
        description:
          "SWORD BV delivers specialized technical services and engineering solutions for complex construction projects. From structural analysis to MEP installations, we ensure every detail meets the highest standards.",
        features: ["Structural Engineering", "MEP Installations", "Technical Consulting", "Quality Assurance"],
      },
      alphaBouw: {
        name: "Alphabouw",
        tagline: "Building Excellence",
        description:
          "ALPHABouw is a full-service construction company specializing in residential and commercial building projects. From new constructions to renovations, we deliver quality craftsmanship with innovative building techniques.",
        features: ["New Construction", "Renovations", "Commercial Projects", "Sustainable Building"],
      },
      viewProfile: "View Full Profile",
    },
    cta: {
      badge: "Ready to Get Started?",
      title: "Build Your Future With Us",
      description:
        "Partner with Alpha Group and gain access to a network of expertise, resources, and opportunities in construction and staffing excellence.",
      contact: "Contact Us Today",
      opportunities: "View Opportunities",
    },
    footer: {
      description:
        "Uniting excellence across construction, staffing, and technical services for a built environment that lasts.",
      companiesTitle: "Our Companies",
      resources: "Resources",
      legal: "Legal",
      aboutUs: "About Us",
      careers: "Careers",
      news: "News & Press",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      copyright: "Alpha Group. All rights reserved.",
      tagline: "Building excellence through unified vision.",
    },
    chatbot: {
      title: "Alpha Assistant",
      subtitle: "How can we help you today?",
      placeholder: "Type your message...",
      send: "Send",
      typing: "Typing...",
      online: "Online",
      welcomeMessage:
        "Hello! Welcome to Alpha Group. I'm here to help you learn about our companies and services. What would you like to know?",
      quickActions: {
        companies: "Our Companies",
        services: "Services",
        contact: "Contact Info",
        careers: "Careers",
        getQuote: "Get a Quote",
      },
      form: {
        startForm: "I'd be happy to help you get started! Let me collect some information to better assist you.",
        step1: "What's your name?",
        step2: "What's your email address?",
        step3: "What's your phone number?",
        step4: "Which company are you interested in?",
        step5: "What service do you need?",
        step6: "Tell me about your project or requirements:",
        step7: "What's your budget range?",
        step8: "When do you need this completed?",
        submitting: "Submitting your information...",
        success: "Perfect! I've received your information. Our team will contact you within 24 hours. Is there anything else I can help you with?",
        skip: "Skip",
        next: "Next",
        back: "Back",
        submit: "Submit",
        cancel: "Cancel",
        companyOptions: {
          goTeam: "GO-TEAM (Staffing)",
          sword: "SWORD BV (Technical Services)",
          alphaBouw: "ALPHABouw (Construction)",
          multiple: "Multiple Companies",
        },
        serviceOptions: {
          staffing: "Staffing Solutions",
          technical: "Technical Engineering",
          construction: "Construction Services",
          consulting: "Consulting",
          other: "Other",
        },
        budgetOptions: {
          under10k: "Under €10,000",
          "10-50k": "€10,000 - €50,000",
          "50-100k": "€50,000 - €100,000",
          "100k+": "€100,000+",
        },
        timelineOptions: {
          immediate: "Immediately",
          "1-month": "Within 1 Month",
          "2-3-months": "2-3 Months",
          "3-6-months": "3-6 Months",
          "6-months+": "6+ Months",
        },
      },
      responses: {
        companies:
          "Alpha Group consists of three specialized companies:\n\n**GO-TEAM** - Staffing solutions for construction & industry\n**SWORD BV** - Technical engineering services\n**Alphabouw** - Full-service construction\n\nWhich company would you like to learn more about?",
        goTeam:
          "**GO-TEAM** is our staffing division, specializing in providing skilled temporary workers for construction and industrial sectors. We connect talented professionals with leading companies across the Netherlands and Belgium.\n\nVisit: https://go-teamnl.nl",
        sword:
          "**SWORD BV** delivers specialized technical services and engineering solutions for complex construction projects. From structural analysis to MEP installations, we ensure every detail meets the highest standards.\n\nVisit: https://swordbv.nl",
        alphaBouw:
          "**Alphabouw** is our full-service construction company specializing in residential and commercial building projects. From new constructions to renovations, we deliver quality craftsmanship.\n\nVisit: https://v0-modern-website-design-zeta-three.vercel.app/",
        services:
          "We offer a comprehensive range of services:\n\n• **Staffing Solutions** - Temporary & permanent placement\n• **Technical Engineering** - Structural analysis & consulting\n• **Construction** - New builds & renovations\n• **Project Management** - End-to-end oversight\n\nWhat specific service interests you?",
        contact:
          "You can reach Alpha Group through:\n\n📧 Email: info@alphagroup.nl\n📞 Phone: +31 85 401 5937\n💬 WhatsApp: +31 6 3465 7014\n📍 Address:\nAlpha Group B.V.\nMarktplein 36\n7311 LR Apeldoorn\nNetherlands\n\nOr visit any of our company websites for specific inquiries.",
        careers:
          "We're always looking for talented professionals!\n\nCurrent opportunities exist across all three companies in:\n• Construction & Engineering\n• Project Management\n• Technical Services\n• Administrative Roles\n\nVisit our careers page or contact HR for more information.",
        default:
          "Thank you for your message. I'd be happy to help you with information about Alpha Group, our companies (GO-TEAM, SWORD BV, Alphabouw), services, or career opportunities. What would you like to know?",
      },
    },
  },
  nl: {
    nav: {
      companies: "Bedrijven",
      about: "Over Ons",
      contact: "Contact",
      getStarted: "Aan de Slag",
    },
    hero: {
      badge: "Next-Level Bouwplatform",
      title1: "Samen Bouwen",
      title2: "aan de Toekomst",
      description:
        "Alpha Group verenigt drie toonaangevende bouw- en personeelsbedrijven onder één visie, met uitmuntendheid in bouw, renovatie en personeelsoplossingen in heel Europa.",
      explore: "Ontdek Onze Bedrijven",
      learnMore: "Meer Informatie",
    },
    hierarchy: {
      title: "Eén Visie, Drie Pijlers",
      description:
        "Alpha Group fungeert als strategische paraplu en stelt elk bedrijf in staat om uit te blinken met behoud van uniforme richting in bouw- en personeelsexpertise.",
      parentLabel: "Moedermaatschappij",
      goTeam: "Personeelsdivisie",
      sword: "Technische Diensten Divisie",
      alphaBouw: "Bouwdivisie",
    },
    companies: {
      title: "Onze Bedrijven",
      description:
        "Drie verschillende bedrijven, één gedeelde missie: excellentie leveren in bouw, personeel en technische diensten.",
      goTeam: {
        name: "GO-TEAM",
        tagline: "Uw Personeelspartner",
        description:
          "GO-TEAM is gespecialiseerd in het leveren van gekwalificeerde uitzendoplossingen voor de bouw- en industriële sectoren. Wij verbinden getalenteerde professionals met toonaangevende bedrijven in Nederland en België.",
        features: ["Bouwpersoneel", "Industriële Medewerkers", "Technisch Personeel", "Projectteams"],
      },
      sword: {
        name: "SWORD BV",
        tagline: "Precisie Engineering Oplossingen",
        description:
          "SWORD BV levert gespecialiseerde technische diensten en engineering oplossingen voor complexe bouwprojecten. Van constructieanalyse tot installaties, wij zorgen dat elk detail aan de hoogste normen voldoet.",
        features: ["Constructie Engineering", "Installaties", "Technisch Advies", "Kwaliteitsborging"],
      },
      alphaBouw: {
        name: "Alphabouw",
        tagline: "Bouwen aan Excellentie",
        description:
          "ALPHABouw is een full-service bouwbedrijf gespecialiseerd in residentiële en commerciële bouwprojecten. Van nieuwbouw tot renovaties, wij leveren vakmanschap met innovatieve bouwtechnieken.",
        features: ["Nieuwbouw", "Renovaties", "Commerciële Projecten", "Duurzaam Bouwen"],
      },
      viewProfile: "Bekijk Volledig Profiel",
    },
    cta: {
      badge: "Klaar om te Beginnen?",
      title: "Bouw Uw Toekomst Met Ons",
      description:
        "Partner met Alpha Group en krijg toegang tot een netwerk van expertise, middelen en kansen in bouw- en personeelsexcellentie.",
      contact: "Neem Vandaag Contact Op",
      opportunities: "Bekijk Mogelijkheden",
    },
    footer: {
      description:
        "Excellentie verenigen in bouw, personeel en technische diensten voor een gebouwde omgeving die duurt.",
      companiesTitle: "Onze Bedrijven",
      resources: "Bronnen",
      legal: "Juridisch",
      aboutUs: "Over Ons",
      careers: "Carrières",
      news: "Nieuws & Pers",
      contact: "Contact",
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      cookies: "Cookiebeleid",
      copyright: "Alpha Group. Alle rechten voorbehouden.",
      tagline: "Bouwen aan excellentie door uniforme visie.",
    },
    chatbot: {
      title: "Alpha Assistent",
      subtitle: "Hoe kunnen we u vandaag helpen?",
      placeholder: "Typ uw bericht...",
      send: "Verzenden",
      typing: "Aan het typen...",
      online: "Online",
      welcomeMessage:
        "Hallo! Welkom bij Alpha Group. Ik help u graag meer te leren over onze bedrijven en diensten. Wat wilt u weten?",
      quickActions: {
        companies: "Onze Bedrijven",
        services: "Diensten",
        contact: "Contactgegevens",
        careers: "Vacatures",
        getQuote: "Offerte Aanvragen",
      },
      responses: {
        companies:
          "Alpha Group bestaat uit drie gespecialiseerde bedrijven:\n\n**GO-TEAM** - Personeelsoplossingen voor bouw & industrie\n**SWORD BV** - Technische engineering diensten\n**Alphabouw** - Full-service bouw\n\nOver welk bedrijf wilt u meer weten?",
        goTeam:
          "**GO-TEAM** is onze personeelsdivisie, gespecialiseerd in het leveren van gekwalificeerde uitzendkrachten voor de bouw- en industriële sectoren. Wij verbinden professionals met toonaangevende bedrijven in Nederland en België.\n\nBezoek: https://go-teamnl.nl",
        sword:
          "**SWORD BV** levert gespecialiseerde technische diensten en engineering oplossingen voor complexe bouwprojecten. Van constructieanalyse tot installaties, elk detail voldoet aan de hoogste normen.\n\nBezoek: https://swordbv.nl",
        alphaBouw:
          "**Alphabouw** is ons full-service bouwbedrijf gespecialiseerd in residentiële en commerciële projecten. Van nieuwbouw tot renovaties, wij leveren kwaliteitsvakmanschap.\n\nBezoek: https://v0-modern-website-design-zeta-three.vercel.app/",
        services:
          "Wij bieden een uitgebreid dienstenpakket:\n\n• **Personeelsoplossingen** - Tijdelijke & vaste plaatsing\n• **Technische Engineering** - Constructieanalyse & advies\n• **Bouw** - Nieuwbouw & renovaties\n• **Projectmanagement** - Complete begeleiding\n\nWelke dienst interesseert u?",
        contact:
          "U kunt Alpha Group bereiken via:\n\n📧 E-mail: info@alphagroup.nl\n📞 Telefoon: +31 85 401 5937\n💬 WhatsApp: +31 6 3465 7014\n📍 Adres:\nAlpha Group B.V.\nMarktplein 36\n7311 LR Apeldoorn\nNederland\n\nOf bezoek een van onze bedrijfswebsites voor specifieke vragen.",
        careers:
          "Wij zijn altijd op zoek naar getalenteerde professionals!\n\nHuidige vacatures bij alle drie bedrijven in:\n• Bouw & Engineering\n• Projectmanagement\n• Technische Diensten\n• Administratieve Functies\n\nBezoek onze vacaturepagina of neem contact op met HR.",
        default:
          "Bedankt voor uw bericht. Ik help u graag met informatie over Alpha Group, onze bedrijven (GO-TEAM, SWORD BV, Alphabouw), diensten of carrièremogelijkheden. Wat wilt u weten?",
      },
      form: {
        startForm: "Ik help u graag op weg! Laat me wat informatie verzamelen om u beter te kunnen helpen.",
        step1: "Wat is uw naam?",
        step2: "Wat is uw e-mailadres?",
        step3: "Wat is uw telefoonnummer?",
        step4: "Welk bedrijf interesseert u?",
        step5: "Welke dienst heeft u nodig?",
        step6: "Vertel me over uw project of vereisten:",
        step7: "Wat is uw budget?",
        step8: "Wanneer heeft u dit nodig?",
        submitting: "Uw informatie wordt verzonden...",
        success: "Perfect! Ik heb uw informatie ontvangen. Ons team neemt binnen 24 uur contact met u op. Kan ik u nog ergens anders mee helpen?",
        skip: "Overslaan",
        next: "Volgende",
        back: "Terug",
        submit: "Verzenden",
        cancel: "Annuleren",
        companyOptions: {
          goTeam: "GO-TEAM (Personeel)",
          sword: "SWORD BV (Technische Diensten)",
          alphaBouw: "ALPHABouw (Bouw)",
          multiple: "Meerdere Bedrijven",
        },
        serviceOptions: {
          staffing: "Personeelsoplossingen",
          technical: "Technische Engineering",
          construction: "Bouwdiensten",
          consulting: "Advies",
          other: "Anders",
        },
        budgetOptions: {
          under10k: "Onder €10.000",
          "10-50k": "€10.000 - €50.000",
          "50-100k": "€50.000 - €100.000",
          "100k+": "€100.000+",
        },
        timelineOptions: {
          immediate: "Onmiddellijk",
          "1-month": "Binnen 1 Maand",
          "2-3-months": "2-3 Maanden",
          "3-6-months": "3-6 Maanden",
          "6-months+": "6+ Maanden",
        },
      },
    },
  },
  es: {
    nav: {
      companies: "Empresas",
      about: "Nosotros",
      contact: "Contacto",
      getStarted: "Empezar",
    },
    hero: {
      badge: "Plataforma de Construcción de Siguiente Nivel",
      title1: "Construyendo el",
      title2: "Futuro Juntos",
      description:
        "Alpha Group une tres empresas pioneras de construcción y personal bajo una visión, entregando excelencia en construcción, renovación y soluciones de fuerza laboral en toda Europa.",
      explore: "Explorar Nuestras Empresas",
      learnMore: "Más Información",
    },
    hierarchy: {
      title: "Una Visión, Tres Pilares",
      description:
        "Alpha Group sirve como paraguas estratégico, capacitando a cada empresa para sobresalir mientras mantiene una dirección unificada en excelencia de construcción y personal.",
      parentLabel: "Corporación Matriz",
      goTeam: "División de Personal",
      sword: "División de Servicios Técnicos",
      alphaBouw: "División de Construcción",
    },
    companies: {
      title: "Nuestras Empresas",
      description:
        "Tres empresas distintas, una misión compartida: entregar excelencia en construcción, personal y servicios técnicos.",
      goTeam: {
        name: "GO-TEAM",
        tagline: "Tu Socio de Personal",
        description:
          "GO-TEAM se especializa en proporcionar soluciones de personal temporal calificado para los sectores de construcción e industrial. Conectamos profesionales talentosos con empresas líderes en los Países Bajos y Bélgica.",
        features: ["Personal de Construcción", "Trabajadores Industriales", "Personal Técnico", "Equipos de Proyecto"],
      },
      sword: {
        name: "SWORD BV",
        tagline: "Soluciones de Ingeniería de Precisión",
        description:
          "SWORD BV ofrece servicios técnicos especializados y soluciones de ingeniería para proyectos de construcción complejos. Desde análisis estructural hasta instalaciones, aseguramos que cada detalle cumpla los más altos estándares.",
        features: ["Ingeniería Estructural", "Instalaciones", "Consultoría Técnica", "Garantía de Calidad"],
      },
      alphaBouw: {
        name: "Alphabouw",
        tagline: "Construyendo Excelencia",
        description:
          "ALPHABouw es una empresa de construcción de servicio completo especializada en proyectos de construcción residencial y comercial. Desde nuevas construcciones hasta renovaciones, entregamos artesanía de calidad con técnicas innovadoras.",
        features: ["Nueva Construcción", "Renovaciones", "Proyectos Comerciales", "Construcción Sostenible"],
      },
      viewProfile: "Ver Perfil Completo",
    },
    cta: {
      badge: "¿Listo para Empezar?",
      title: "Construye Tu Futuro Con Nosotros",
      description:
        "Asóciate con Alpha Group y obtén acceso a una red de experiencia, recursos y oportunidades en excelencia de construcción y personal.",
      contact: "Contáctanos Hoy",
      opportunities: "Ver Oportunidades",
    },
    footer: {
      description:
        "Uniendo excelencia en construcción, personal y servicios técnicos para un entorno construido que perdura.",
      companiesTitle: "Nuestras Empresas",
      resources: "Recursos",
      legal: "Legal",
      aboutUs: "Sobre Nosotros",
      careers: "Carreras",
      news: "Noticias y Prensa",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      cookies: "Política de Cookies",
      copyright: "Alpha Group. Todos los derechos reservados.",
      tagline: "Construyendo excelencia a través de una visión unificada.",
    },
    chatbot: {
      title: "Asistente Alpha",
      subtitle: "¿Cómo podemos ayudarte hoy?",
      placeholder: "Escribe tu mensaje...",
      send: "Enviar",
      typing: "Escribiendo...",
      online: "En línea",
      welcomeMessage:
        "¡Hola! Bienvenido a Alpha Group. Estoy aquí para ayudarte a conocer nuestras empresas y servicios. ¿Qué te gustaría saber?",
      quickActions: {
        companies: "Nuestras Empresas",
        services: "Servicios",
        contact: "Contacto",
        careers: "Empleos",
        getQuote: "Solicitar Cotización",
      },
      responses: {
        companies:
          "Alpha Group consta de tres empresas especializadas:\n\n**GO-TEAM** - Soluciones de personal para construcción e industria\n**SWORD BV** - Servicios de ingeniería técnica\n**Alphabouw** - Construcción integral\n\n¿Sobre cuál empresa te gustaría saber más?",
        goTeam:
          "**GO-TEAM** es nuestra división de personal, especializada en proporcionar trabajadores calificados para los sectores de construcción e industrial. Conectamos profesionales con empresas líderes en los Países Bajos y Bélgica.\n\nVisita: https://go-teamnl.nl",
        sword:
          "**SWORD BV** ofrece servicios técnicos especializados y soluciones de ingeniería para proyectos de construcción complejos. Desde análisis estructural hasta instalaciones, cada detalle cumple los más altos estándares.\n\nVisita: https://swordbv.nl",
        alphaBouw:
          "**Alphabouw** es nuestra empresa de construcción integral especializada en proyectos residenciales y comerciales. Desde nuevas construcciones hasta renovaciones, entregamos artesanía de calidad.\n\nVisita: https://v0-modern-website-design-zeta-three.vercel.app/",
        services:
          "Ofrecemos una gama completa de servicios:\n\n• **Soluciones de Personal** - Colocación temporal y permanente\n• **Ingeniería Técnica** - Análisis estructural y consultoría\n• **Construcción** - Nuevas obras y renovaciones\n• **Gestión de Proyectos** - Supervisión integral\n\n¿Qué servicio te interesa?",
        contact:
          "Puedes contactar a Alpha Group a través de:\n\n📧 Email: info@alphagroup.nl\n📞 Teléfono: +31 85 401 5937\n💬 WhatsApp: +31 6 3465 7014\n📍 Dirección:\nAlpha Group B.V.\nMarktplein 36\n7311 LR Apeldoorn\nPaíses Bajos\n\nO visita cualquiera de nuestros sitios web para consultas específicas.",
        careers:
          "¡Siempre buscamos profesionales talentosos!\n\nOportunidades actuales en las tres empresas:\n• Construcción e Ingeniería\n• Gestión de Proyectos\n• Servicios Técnicos\n• Roles Administrativos\n\nVisita nuestra página de empleos o contacta a RRHH.",
        default:
          "Gracias por tu mensaje. Estoy encantado de ayudarte con información sobre Alpha Group, nuestras empresas (GO-TEAM, SWORD BV, Alphabouw), servicios u oportunidades de carrera. ¿Qué te gustaría saber?",
      },
      form: {
        startForm: "¡Estaré encantado de ayudarte a comenzar! Déjame recopilar información para ayudarte mejor.",
        step1: "¿Cuál es tu nombre?",
        step2: "¿Cuál es tu dirección de correo electrónico?",
        step3: "¿Cuál es tu número de teléfono?",
        step4: "¿Qué empresa te interesa?",
        step5: "¿Qué servicio necesitas?",
        step6: "Cuéntame sobre tu proyecto o requisitos:",
        step7: "¿Cuál es tu rango de presupuesto?",
        step8: "¿Cuándo necesitas que esto se complete?",
        submitting: "Enviando tu información...",
        success: "¡Perfecto! He recibido tu información. Nuestro equipo te contactará en 24 horas. ¿Hay algo más en lo que pueda ayudarte?",
        skip: "Omitir",
        next: "Siguiente",
        back: "Atrás",
        submit: "Enviar",
        cancel: "Cancelar",
        companyOptions: {
          goTeam: "GO-TEAM (Personal)",
          sword: "SWORD BV (Servicios Técnicos)",
          alphaBouw: "ALPHABouw (Construcción)",
          multiple: "Múltiples Empresas",
        },
        serviceOptions: {
          staffing: "Soluciones de Personal",
          technical: "Ingeniería Técnica",
          construction: "Servicios de Construcción",
          consulting: "Consultoría",
          other: "Otro",
        },
        budgetOptions: {
          under10k: "Menos de €10,000",
          "10-50k": "€10,000 - €50,000",
          "50-100k": "€50,000 - €100,000",
          "100k+": "€100,000+",
        },
        timelineOptions: {
          immediate: "Inmediatamente",
          "1-month": "Dentro de 1 Mes",
          "2-3-months": "2-3 Meses",
          "3-6-months": "3-6 Meses",
          "6-months+": "6+ Meses",
        },
      },
    },
  },
  zh: {
    nav: {
      companies: "公司",
      about: "关于我们",
      contact: "联系方式",
      getStarted: "开始合作",
    },
    hero: {
      badge: "新一代建筑平台",
      title1: "携手共建",
      title2: "美好未来",
      description:
        "Alpha集团汇聚三家领先的建筑和人力资源公司，以统一的愿景，在整个欧洲提供卓越的建筑、装修和劳动力解决方案。",
      explore: "探索我们的公司",
      learnMore: "了解更多",
    },
    hierarchy: {
      title: "一个愿景，三大支柱",
      description: "Alpha集团作为战略伞形公司，赋能旗下每家公司追求卓越，同时在建筑和人力资源领域保持统一的发展方向。",
      parentLabel: "母公司",
      goTeam: "人力资源部门",
      sword: "技术服务部门",
      alphaBouw: "建筑部门",
    },
    companies: {
      title: "我们的公司",
      description: "三家独特的公司，一个共同的使命：在建筑、人力资源和技术服务领域追求卓越。",
      goTeam: {
        name: "GO-TEAM",
        tagline: "您的人力资源合作伙伴",
        description:
          "GO-TEAM专注于为建筑和工业领域提供专业的临时人力解决方案。我们将优秀人才与荷兰和比利时的领先企业对接。",
        features: ["建筑人员", "工业工人", "技术人员", "项目团队"],
      },
      sword: {
        name: "SWORD BV",
        tagline: "精密工程解决方案",
        description:
          "SWORD BV为复杂建筑项目提供专业的技术服务和工程解决方案。从结构分析到机电安装，我们确保每个细节都达到最高标准。",
        features: ["结构工程", "机电安装", "技术咨询", "质量保证"],
      },
      alphaBouw: {
        name: "Alphabouw",
        tagline: "卓越建筑",
        description:
          "ALPHABouw是一家全方位服务的建筑公司，专注于住宅和商业建筑项目。从新建到翻新，我们以创新的建筑技术提供优质工艺。",
        features: ["新建工程", "翻新工程", "商业项目", "可持续建筑"],
      },
      viewProfile: "查看完整资料",
    },
    cta: {
      badge: "准备好开始了吗？",
      title: "与我们共建未来",
      description: "与Alpha集团合作，获得建筑和人力资源领域的专业知识网络、资源和机会。",
      contact: "立即联系我们",
      opportunities: "查看机会",
    },
    footer: {
      description: "在建筑、人力资源和技术服务领域汇聚卓越，打造持久的建筑环境。",
      companiesTitle: "我们的公司",
      resources: "资源",
      legal: "法律信息",
      aboutUs: "关于我们",
      careers: "招聘信息",
      news: "新闻媒体",
      contact: "联系方式",
      privacy: "隐私政策",
      terms: "服务条款",
      cookies: "Cookie政策",
      copyright: "Alpha集团。保留所有权利。",
      tagline: "以统一愿景构建卓越。",
    },
    chatbot: {
      title: "Alpha智能助手",
      subtitle: "今天有什么可以帮您？",
      placeholder: "输入您的消息...",
      send: "发送",
      typing: "正在输入...",
      online: "在线",
      welcomeMessage: "您好！欢迎来到Alpha集团。我可以帮您了解我们的公司和服务。您想了解什么？",
      quickActions: {
        companies: "我们的公司",
        services: "服务内容",
        contact: "联系方式",
        careers: "招聘信息",
        getQuote: "获取报价",
      },
      responses: {
        companies:
          "Alpha集团由三家专业公司组成：\n\n**GO-TEAM** - 建筑和工业人力资源解决方案\n**SWORD BV** - 技术工程服务\n**Alphabouw** - 全方位建筑服务\n\n您想了解哪家公司的更多信息？",
        goTeam:
          "**GO-TEAM**是我们的人力资源部门，专注于为建筑和工业领域提供专业临时工人。我们将优秀人才与荷兰和比利时的领先企业对接。\n\n访问: https://v0-sword-bv-website-design.vercel.app/",
        sword:
          "**SWORD BV**为复杂建筑项目提供专业技术服务和工程解决方案。从结构分析到机电安装，每个细节都符合最高标准。\n\n访问: https://v0-sword-bv-website.vercel.app/",
        alphaBouw:
          "**Alphabouw**是我们的全方位建筑公司，专注于住宅和商业项目。从新建到翻新，我们提供优质工艺。\n\n访问: https://v0-modern-website-design-zeta-three.vercel.app/",
        services:
          "我们提供全面的服务：\n\n• **人力资源解决方案** - 临时和长期人员配置\n• **技术工程** - 结构分析和咨询\n• **建筑服务** - 新建和翻新\n• **项目管理** - 全程监督\n\n您对哪项服务感兴趣？",
        contact:
          "您可以通过以下方式联系Alpha集团：\n\n📧 邮箱: info@alphagroup.nl\n📞 电话: +31 85 401 5937\n💬 WhatsApp: +31 6 3465 7014\n📍 地址:\nAlpha Group B.V.\nMarktplein 36\n7311 LR Apeldoorn\n荷兰\n\n或访问我们各公司网站进行具体咨询。",
        careers:
          "我们一直在寻找优秀人才！\n\n三家公司目前的职位空缺：\n• 建筑与工程\n• 项目管理\n• 技术服务\n• 行政岗位\n\n请访问我们的招聘页面或联系人力资源部门。",
        default:
          "感谢您的消息。我很乐意为您提供有关Alpha集团、我们的公司（GO-TEAM、SWORD BV、Alphabouw）、服务或职业机会的信息。您想了解什么？",
      },
      form: {
        startForm: "我很乐意帮助您开始！让我收集一些信息以便更好地为您服务。",
        step1: "您叫什么名字？",
        step2: "您的电子邮件地址是什么？",
        step3: "您的电话号码是什么？",
        step4: "您对哪家公司感兴趣？",
        step5: "您需要什么服务？",
        step6: "请告诉我您的项目或需求：",
        step7: "您的预算范围是多少？",
        step8: "您什么时候需要完成？",
        submitting: "正在提交您的信息...",
        success: "完美！我已收到您的信息。我们的团队将在24小时内与您联系。还有什么我可以帮助您的吗？",
        skip: "跳过",
        next: "下一步",
        back: "返回",
        submit: "提交",
        cancel: "取消",
        companyOptions: {
          goTeam: "GO-TEAM（人力资源）",
          sword: "SWORD BV（技术服务）",
          alphaBouw: "ALPHABouw（建筑）",
          multiple: "多家公司",
        },
        serviceOptions: {
          staffing: "人力资源解决方案",
          technical: "技术工程",
          construction: "建筑服务",
          consulting: "咨询服务",
          other: "其他",
        },
        budgetOptions: {
          under10k: "低于€10,000",
          "10-50k": "€10,000 - €50,000",
          "50-100k": "€50,000 - €100,000",
          "100k+": "€100,000+",
        },
        timelineOptions: {
          immediate: "立即",
          "1-month": "1个月内",
          "2-3-months": "2-3个月",
          "3-6-months": "3-6个月",
          "6-months+": "6个月以上",
        },
      },
    },
  },
}

export function getTranslations(lang: Language) {
  return translations[lang]
}
