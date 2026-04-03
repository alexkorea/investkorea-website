export type Locale = "ko" | "en" | "zh" | "ja";

export const locales: Locale[] = ["ko", "en", "zh", "ja"];
export const defaultLocale: Locale = "ko";

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
};

export type Translations = typeof translations.ko;

export const translations = {
  ko: {
    nav: {
      home: "홈",
      companySetup: "회사설립",
      fdi: "외국인투자법인설립 (FDI)",
      branch: "국내 지사 설치",
      liaison: "연락사무소 설치",
      liaisonProcess: "연락사무소 설치 절차 및 구비서류",
      d8Visa: "D-8 비자",
      d8Detail: "D-8 기업투자비자",
      d8Process: "D-8 비자 발급 대상/절차/구비서류",
      d7Visa: "D-7 비자",
      d7Detail: "D-7 주재원비자",
      d7Details: "주재원 파견 D-7 비자 대상/발급요건/제출서류",
      f5Investment: "F-5 고액투자",
      f5Visa: "F-5 영주권 및 고액투자비자",
      f5Strategies: "영주권전략",
      realEstate: "부동산이민",
      publicInterest: "공익이민",
      about: "회사소개",
      blog: "블로그",
      contact: "문의하기",
      consultation: "상담 신청",
      // legacy keys for backward compatibility
      companyEstablishment: "법인설립",
      branchOffice: "외국회사 국내지사 설립",
      liaisonOffice: "연락사무소 설립",
      liaisonOfficeProcedure: "연락사무소 설립 절차 및 필요서류",
      d8Eligibility: "D-8 비자 자격요건, 절차 및 필요서류",
      d7Eligibility: "D-7 주재원 비자 자격요건 및 필요서류",
      permanentResidency: "영주권 전략",
      aboutUs: "회사소개",
      bookConsultation: "상담 예약",
      language: "언어",
    },
    hero: {
      badge: "대한민국 외국인 투자 전문 파트너",
      titleLine1: "외국인 투자의 성공 파트너",
      titleLine2: "VISION 행정사사무소",
      subtitle:
        "외국인 투자법인 설립부터 비자 취득까지, 다국어 원스톱 종합 컨설팅 서비스를 제공합니다.",
      trustBadges: ["연간 200건+ 처리", "다국어 지원", "원스톱 서비스"],
      bookConsultation: "상담 예약",
      viewServices: "서비스 보기",
      orContactMessenger: "또는 메신저로 연락주세요",
    },
    slider: {
      slides: [
        {
          title: "외국인 투자의 성공 파트너",
          subtitle: "외국인 투자법인 설립부터 사업자 등록까지, VISION 행정사사무소가 한국 진출의 모든 과정을 함께합니다.",
          cta: "회사설립 알아보기",
        },
        {
          title: "D-8 · D-7 비자 전문 처리",
          subtitle: "기업투자비자(D-8)와 주재원비자(D-7) 발급을 위한 전문 컨설팅과 서류 대행 서비스를 제공합니다.",
          cta: "비자 상담 신청",
        },
        {
          title: "F-5 영주권 · 투자이민",
          subtitle: "고액투자, 부동산투자, 공익사업을 통한 영주권 취득 전략을 맞춤 설계해 드립니다.",
          cta: "영주권 전략 보기",
        },
        {
          title: "10년 이상의 전문 행정사 경험",
          subtitle: "연간 200건 이상의 성공 사례와 다국어 지원으로 신뢰받는 외국인 투자 전문 파트너입니다.",
          cta: "무료 상담 예약",
        },
      ],
    },
    trustStats: {
      stats: [
        { value: "200+", label: "연간 처리 건수", description: "매년" },
        { value: "6", label: "전문 행정사", description: "행정사 자격 보유" },
        { value: "3", label: "사무 관리팀", description: "지원 인력" },
        { value: "3", label: "지원 언어", description: "영어 / 중국어 / 일본어" },
      ],
    },
    messenger: {
      badge: "즉시 연락",
      title: "메신저로 바로 연결하세요",
      subtitle:
        "선호하는 메신저를 선택하여 즉시 상담을 시작하세요. 다국어 전문팀이 대기하고 있습니다.",
      items: [
        {
          name: "카카오톡",
          description:
            "대한민국 대표 메신저. 빠른 답변을 보장합니다.",
        },
        {
          name: "WeChat",
          description: "중국어 전문 상담사가 직접 상담해 드립니다.",
        },
        {
          name: "LINE",
          description: "일본어 상담 가능. LINE 메신저로 편리하게.",
        },
        {
          name: "WhatsApp",
          description: "해외 문의 환영. 24시간 연락 가능합니다.",
        },
      ],
      contactNow: "지금 연락",
    },
    services: {
      badge: "서비스 안내",
      title: "종합 비즈니스 & 비자 솔루션",
      subtitle:
        "법인 설립부터 영주권 취득까지, 한국 진출을 위한 원스톱 서비스를 제공합니다.",
      items: [
        {
          title: "외국인투자법인 설립 (FDI)",
          description:
            "외국인 투자 등록 및 한국 법인 설립을 위한 종합 서비스.",
        },
        {
          title: "지사 및 연락사무소 설립",
          description:
            "외국 기업의 한국 지사 또는 연락사무소 설립 및 규정 준수 지원.",
        },
        {
          title: "D-8 비자 신청",
          description:
            "외국인 투자자 및 경영진을 위한 기업투자 비자 처리.",
        },
        {
          title: "D-7 비자 신청",
          description:
            "한국 사무소로 전근하는 직원을 위한 주재원 비자 처리.",
        },
        {
          title: "영주권 전략 (F-5)",
          description:
            "장기 체류 및 F-5 비자 취득을 위한 전략적 계획 수립.",
        },
        {
          title: "F-5 고액투자 이민",
          description:
            "적격 투자자를 위한 고액 투자 이민 경로 안내.",
        },
        {
          title: "부동산 투자 이민",
          description:
            "부동산 투자를 통한 이민 솔루션 및 비자 지원.",
        },
        {
          title: "공익사업 이민",
          description:
            "공익 프로젝트 기여를 통한 투자 비자 취득 지원.",
        },
      ],
      learnMore: "자세히 보기",
    },
    team: {
      badge: "전문가 팀",
      title: "전문 행정사 팀 소개",
      subtitle:
        "다국어 역량과 한국 행정절차 및 출입국법 전문 지식을 갖춘 경험 풍부한 전문가들입니다.",
      specialistsLabel: "전문 행정사",
      supportLabel: "사무 관리 및 지원",
      languagesLabel: "언어",
      specialtiesLabel: "전문분야",
      specialists: [
        {
          name: "이원중",
          role: "대표행정사",
          languages: ["한국어", "영어", "중국어", "일본어"],
          specialties: ["FDI 등록", "법인 설립"],
        },
        {
          name: "정유선",
          role: "행정사",
          languages: ["한국어", "영어"],
          specialties: ["D-8 비자", "F-5 투자"],
        },
        {
          name: "한경택",
          role: "행정사",
          languages: ["한국어", "영어"],
          specialties: ["지사 설립", "연락사무소"],
        },
        {
          name: "김정은",
          role: "행정사",
          languages: ["한국어", "영어", "중국어", "일본어"],
          specialties: ["D-7 비자", "체류 연장"],
        },
        {
          name: "이시정",
          role: "행정사",
          languages: ["한국어", "영어"],
          specialties: ["부동산 이민", "투자 전략"],
        },
        {
          name: "정희정",
          role: "행정사",
          languages: ["한국어", "영어"],
          specialties: ["서류 처리", "규정 준수"],
        },
      ],
      support: [
        {
          name: "백승수",
          role: "사무장",
          languages: ["한국어", "영어"],
          specialties: ["고객 관리", "운영"],
        },
        {
          name: "김영주",
          role: "실장",
          languages: ["한국어", "영어"],
          specialties: ["서류 관리", "번역"],
        },
        {
          name: "허경",
          role: "실장",
          languages: ["한국어", "영어", "중국어"],
          specialties: ["일정 관리", "커뮤니케이션"],
        },
      ],
    },
    whyChoose: {
      badge: "왜 VISION인가",
      title: "한국 비즈니스 진출의 믿음직한 파트너",
      subtitle:
        "깊은 현지 전문성과 국제적 서비스 기준을 결합합니다. 외국인 투자자가 직면하는 도전을 이해하고 실질적이고 효율적인 솔루션을 제공합니다.",
      keyPoints: [
        "2010년부터 외국인 투자 및 법인 설립 전문",
        "선호하는 언어로 직접 소통 가능",
        "투명한 진행 과정과 정기적인 업데이트",
      ],
      features: [
        {
          title: "다국어 지원",
          description:
            "영어, 중국어, 일본어 완벽 지원. 모든 단계에서 명확한 소통.",
        },
        {
          title: "풍부한 경험",
          description:
            "연간 200건 이상의 성공 사례. 외국인 법인 고객 및 복잡한 비자 신청에 대한 깊은 전문성.",
        },
        {
          title: "전문가 팀",
          description:
            "6명의 전문 행정사와 3명의 전담 사무관리자가 지원합니다.",
        },
        {
          title: "원스톱 서비스",
          description:
            "초기 상담부터 최종 승인까지. 법인 설립, 비자 처리, 정착 지원까지 한 곳에서.",
        },
        {
          title: "실무 지원",
          description:
            "서류 준비, 관공서 연락, 모든 절차의 실행을 위한 실질적 사무 지원.",
        },
        {
          title: "규정 준수 보장",
          description:
            "한국 규정의 완벽한 준수. 비즈니스에 영향을 미치는 정책 변경 정기 업데이트.",
        },
      ],
    },
    process: {
      badge: "진행 절차",
      title: "업무 진행 방식",
      subtitle:
        "한국 비즈니스 진출을 최대한 원활하고 효율적으로 만들기 위해 설계된 체계적인 접근 방식.",
      steps: [
        {
          number: "01",
          title: "초기 상담",
          description:
            "사업 목표, 투자 계획, 비자 요건을 파악하기 위한 무료 상담.",
        },
        {
          number: "02",
          title: "서류 검토",
          description: "서류의 종합적인 검토 및 필요 자료 준비.",
        },
        {
          number: "03",
          title: "신청 전략",
          description:
            "법인 설립 또는 비자 신청을 위한 맞춤 전략과 명확한 일정 제시.",
        },
        {
          number: "04",
          title: "접수 및 후속관리",
          description:
            "관공서에 전문적 접수 및 승인까지 지속적인 후속 관리.",
        },
      ],
    },
    testimonials: {
      badge: "고객 후기",
      title: "국제 비즈니스의 신뢰받는 파트너",
      subtitle: "한국에서 성공적으로 사업을 시작한 고객들의 이야기를 들어보세요.",
      items: [
        {
          quote:
            "법인 등록부터 D-8 비자 취득까지 모든 과정이 전문적이고 효율적으로 처리되었습니다.",
          author: "마이클 첸",
          role: "대표, Tech Innovations Ltd",
          country: "싱가포르",
        },
        {
          quote:
            "영어와 중국어로 뛰어난 서비스를 제공받았습니다. 저희의 니즈를 완벽하게 이해하고 기대 이상의 결과를 가져다주었습니다.",
          author: "류 웨이",
          role: "대표이사, Golden Trade Co.",
          country: "중국",
        },
        {
          quote:
            "서울 지사 설립이 아무 문제 없이 완료되었습니다. 일본어 지원이 본사와의 소통에 큰 도움이 되었습니다.",
          author: "다나카 유키",
          role: "한국사업부장, Yamato Industries",
          country: "일본",
        },
      ],
      whoWeHelp: "누구를 돕나요",
      clientTypes: [
        {
          title: "외국인 투자자",
          description: "한국 시장에 진출하는 기업인 및 투자자.",
        },
        {
          title: "해외 본사",
          description: "한국 지사, 자회사 또는 연락사무소를 개설하는 글로벌 기업.",
        },
        {
          title: "전근 임원",
          description:
            "한국 법인으로 이동하는 기업 대표 및 핵심 인력.",
        },
        {
          title: "장기 체류자",
          description: "한국에서의 장기 체류 또는 영주를 계획하는 가족 및 개인.",
        },
      ],
    },
    cta: {
      title: "한국 비즈니스 여정을 시작할 준비가 되셨나요?",
      subtitle:
        "법인 설립, 사업 비자 신청, 장기 체류 계획 등 무엇이든 저희 팀이 모든 단계를 안내해 드립니다.",
      bookConsultation: "무료 상담 예약",
      messengerInquiry: "메신저 문의",
      viewAllServices: "전체 서비스 보기",
    },
    footer: {
      description:
        "외국인 투자, 법인 설립, 비자 컨설팅 서비스를 제공하는 대한민국의 신뢰받는 파트너.",
      companyEstablishment: "법인설립",
      fdi: "외국인투자법인 (FDI)",
      branchOffice: "지사 설립",
      liaisonOffice: "연락사무소 설립",
      visaGuide: "비자 안내",
      d8Visa: "D-8 기업투자 비자",
      d7Visa: "D-7 주재원 비자",
      permanentResidency: "영주권 전략",
      f5Investment: "F-5 고액투자",
      investmentImmigration: "투자이민",
      realEstate: "부동산 투자 이민",
      publicInterest: "공익사업 이민",
      aboutUs: "회사소개",
      copyright: "VISION 행정사사무소. All rights reserved.",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      phone: "02-363-2251",
      email: "5000meter@gmail.com",
      address: "서울 중구 퇴계로 324 광희동",
    },
  },
  en: {
    nav: {
      home: "Home",
      companySetup: "Company Setup",
      fdi: "Foreign-Invested Corp. (FDI)",
      branch: "Korean Branch Office",
      liaison: "Liaison Office Setup",
      liaisonProcess: "Liaison Office Process & Documents",
      d8Visa: "D-8 Visa",
      d8Detail: "D-8 Corporate Investment Visa",
      d8Process: "D-8 Visa Eligibility/Process/Documents",
      d7Visa: "D-7 Visa",
      d7Detail: "D-7 Intra-company Transfer Visa",
      d7Details: "D-7 Visa Requirements/Eligibility/Documents",
      f5Investment: "F-5 Investment",
      f5Visa: "F-5 Permanent Residency & Investment Visa",
      f5Strategies: "Permanent Residency Strategy",
      realEstate: "Real Estate Immigration",
      publicInterest: "Public Interest Immigration",
      about: "About Us",
      blog: "Blog",
      contact: "Contact",
      consultation: "Book Consultation",
      // legacy keys
      companyEstablishment: "Company Establishment",
      branchOffice: "Korean Branch Office Setup",
      liaisonOffice: "Liaison Office Setup",
      liaisonOfficeProcedure: "Liaison Office Procedure & Documents",
      d8Eligibility: "D-8 Visa Eligibility & Documents",
      d7Eligibility: "D-7 Transferee Visa Eligibility & Documents",
      permanentResidency: "Permanent Residency Strategy",
      aboutUs: "About Us",
      bookConsultation: "Book Consultation",
      language: "Language",
    },
    hero: {
      badge: "Korea's Trusted Foreign Investment Partner",
      titleLine1: "Your Gateway to",
      titleLine2: "Korea Business Success",
      subtitle:
        "Expert consulting for foreign investors entering Korea. From company establishment to visa processing, we provide comprehensive multilingual support for your business journey.",
      trustBadges: ["200+ Cases Annually", "Multilingual Support", "One-Stop Service"],
      bookConsultation: "Book Consultation",
      viewServices: "View Services",
      orContactMessenger: "Or contact us via messenger",
    },
    slider: {
      slides: [
        {
          title: "Your Partner for Foreign Investment Success",
          subtitle: "From company establishment to business registration, VISION guides you through every step of entering the Korean market.",
          cta: "Explore Company Setup",
        },
        {
          title: "D-8 & D-7 Visa Specialists",
          subtitle: "Expert consulting and document processing for Corporate Investment (D-8) and Intra-company Transfer (D-7) visas.",
          cta: "Apply for Visa Consultation",
        },
        {
          title: "F-5 Permanent Residency & Investment Immigration",
          subtitle: "Tailored strategies for permanent residency through high-value investment, real estate, and public interest programs.",
          cta: "View PR Strategies",
        },
        {
          title: "10+ Years of Professional Experience",
          subtitle: "200+ successful cases annually with multilingual support — your trusted partner for foreign investment in Korea.",
          cta: "Book Free Consultation",
        },
      ],
    },
    trustStats: {
      stats: [
        { value: "200+", label: "Successful Cases", description: "Every year" },
        { value: "6", label: "Professional Specialists", description: "Administrative experts" },
        { value: "3", label: "Office Managers", description: "Support staff" },
        { value: "3", label: "Languages Supported", description: "EN / CN / JP" },
      ],
    },
    messenger: {
      badge: "Instant Contact",
      title: "Connect With Us Instantly",
      subtitle:
        "Choose your preferred messenger for immediate consultation. Our multilingual team is ready to assist you.",
      items: [
        {
          name: "KakaoTalk",
          description: "Korea's most popular messenger. Quick response guaranteed.",
        },
        {
          name: "WeChat",
          description: "Connect with our Chinese-speaking consultants directly.",
        },
        {
          name: "LINE",
          description: "Japanese language support available via LINE messenger.",
        },
        {
          name: "WhatsApp",
          description: "International inquiries welcome. Available 24/7.",
        },
      ],
      contactNow: "Contact Now",
    },
    services: {
      badge: "Our Services",
      title: "Comprehensive Business & Visa Solutions",
      subtitle:
        "From company establishment to permanent residency, we provide end-to-end support for your Korea business journey.",
      items: [
        {
          title: "Foreign-Invested Corporation Setup",
          description: "Complete FDI registration and Korean company establishment for foreign investors.",
        },
        {
          title: "Branch & Liaison Office Setup",
          description: "Establish your Korean branch or liaison office with full compliance support.",
        },
        {
          title: "D-8 Visa Processing",
          description: "Corporate investment visa for foreign investors and executives in Korea.",
        },
        {
          title: "D-7 Visa Processing",
          description: "Intra-company transferee visa for employees relocating to Korean offices.",
        },
        {
          title: "Permanent Residency Strategy",
          description: "Strategic planning for long-term residence and F-5 visa qualification.",
        },
        {
          title: "F-5 High Amount Investment",
          description: "High-value investment immigration pathway for qualified investors.",
        },
        {
          title: "Real Estate Immigration Visa",
          description: "Property investment-based immigration solutions and visa support.",
        },
        {
          title: "Public Interest Immigration",
          description: "Investment visa through public interest projects and contributions.",
        },
      ],
      learnMore: "Learn More",
    },
    team: {
      badge: "Our Team",
      title: "Our Team of Specialists",
      subtitle:
        "Experienced professionals with multilingual capabilities and deep expertise in Korean administrative procedures and immigration law.",
      specialistsLabel: "Professional Administrative Specialists",
      supportLabel: "Office Management & Support",
      languagesLabel: "Languages",
      specialtiesLabel: "Specialties",
      specialists: [
        {
          name: "Lee Won-jung",
          role: "Chief Administrative Specialist",
          languages: ["Korean", "English", "Chinese", "Japanese"],
          specialties: ["FDI Registration", "Corporate Setup"],
        },
        {
          name: "Jung Yu-sun",
          role: "Administrative Specialist",
          languages: ["Korean", "English"],
          specialties: ["D-8 Visa", "F-5 Investment"],
        },
        {
          name: "Han Kyung-taek",
          role: "Administrative Specialist",
          languages: ["Korean", "English"],
          specialties: ["Branch Office", "Liaison Setup"],
        },
        {
          name: "Kim Jung-eun",
          role: "Administrative Specialist",
          languages: ["Korean", "English", "Chinese", "Japanese"],
          specialties: ["D-7 Visa", "Extensions"],
        },
        {
          name: "Lee Si-jung",
          role: "Administrative Specialist",
          languages: ["Korean", "English"],
          specialties: ["Real Estate Immigration", "Investment Strategy"],
        },
        {
          name: "Jung Hee-jung",
          role: "Administrative Specialist",
          languages: ["Korean", "English"],
          specialties: ["Document Processing", "Compliance"],
        },
      ],
      support: [
        {
          name: "Baek Seung-su",
          role: "Office Manager",
          languages: ["Korean", "English"],
          specialties: ["Client Relations", "Operations"],
        },
        {
          name: "Kim Young-ju",
          role: "Administrative Assistant",
          languages: ["Korean", "English"],
          specialties: ["Document Management", "Translation"],
        },
        {
          name: "Heo Kyung",
          role: "Client Coordinator",
          languages: ["Korean", "English", "Chinese"],
          specialties: ["Scheduling", "Communication"],
        },
      ],
    },
    whyChoose: {
      badge: "Why Choose Us",
      title: "Your Trusted Partner for Korea Business Entry",
      subtitle:
        "We combine deep local expertise with international service standards. Our team understands the challenges foreign investors face and provides practical, efficient solutions at every step.",
      keyPoints: [
        "Specialized in foreign investment and corporate setup since 2010",
        "Direct communication in your preferred language",
        "Transparent process with regular progress updates",
      ],
      features: [
        {
          title: "Multilingual Support",
          description: "Full service in English, Chinese, and Japanese. Clear communication at every step of your journey.",
        },
        {
          title: "Trusted Experience",
          description: "200+ successful cases annually. Deep expertise with foreign corporate clients and complex visa applications.",
        },
        {
          title: "Specialist Team",
          description: "6 professional administrative specialists and 3 dedicated office managers to support your needs.",
        },
        {
          title: "One-Stop Service",
          description: "From initial consultation to final approval. Company setup, visa processing, and settlement support all in one place.",
        },
        {
          title: "Practical Support",
          description: "Hands-on office support for document preparation, government liaison, and execution of all procedures.",
        },
        {
          title: "Compliance Assured",
          description: "Full compliance with Korean regulations. Regular updates on policy changes affecting your business.",
        },
      ],
    },
    process: {
      badge: "How We Work",
      title: "Our Process",
      subtitle:
        "A streamlined approach designed to make your Korea business entry as smooth and efficient as possible.",
      steps: [
        {
          number: "01",
          title: "Initial Consultation",
          description: "Free consultation to understand your business goals, investment plans, and visa requirements.",
        },
        {
          number: "02",
          title: "Document Review",
          description: "Comprehensive review of your documents and preparation of all required materials.",
        },
        {
          number: "03",
          title: "Application Strategy",
          description: "Customized strategy for your company establishment or visa application with clear timelines.",
        },
        {
          number: "04",
          title: "Filing & Follow-up",
          description: "Professional filing with government agencies and continuous follow-up until approval.",
        },
      ],
    },
    testimonials: {
      badge: "Client Success",
      title: "Trusted by International Businesses",
      subtitle: "Hear from our clients who have successfully established their business in Korea.",
      items: [
        {
          quote: "The team made our Korea market entry seamless. From company registration to obtaining our D-8 visas, everything was handled professionally and efficiently.",
          author: "Michael Chen",
          role: "CEO, Tech Innovations Ltd",
          country: "Singapore",
        },
        {
          quote: "Exceptional service in both English and Chinese. They understood our needs perfectly and delivered results faster than we expected.",
          author: "Liu Wei",
          role: "Managing Director, Golden Trade Co.",
          country: "China",
        },
        {
          quote: "Our branch office setup in Seoul was completed without any issues. The Japanese language support was invaluable for our headquarters communication.",
          author: "Tanaka Yuki",
          role: "Korea Division Head, Yamato Industries",
          country: "Japan",
        },
      ],
      whoWeHelp: "Who We Help",
      clientTypes: [
        {
          title: "Foreign Investors",
          description: "Entrepreneurs and investors establishing presence in the Korean market.",
        },
        {
          title: "Overseas Headquarters",
          description: "Global companies opening Korean branches, subsidiaries, or liaison offices.",
        },
        {
          title: "Relocating Executives",
          description: "Business leaders and key personnel transferring to Korean operations.",
        },
        {
          title: "Long-term Residents",
          description: "Families and individuals planning extended stays or permanent residence in Korea.",
        },
      ],
    },
    cta: {
      title: "Ready to Start Your Korea Business Journey?",
      subtitle:
        "Whether you're establishing a company, applying for a business visa, or planning long-term residence, our team is here to guide you every step of the way.",
      bookConsultation: "Book Free Consultation",
      messengerInquiry: "Messenger Inquiry",
      viewAllServices: "View All Services",
    },
    footer: {
      description:
        "Korea's trusted partner for foreign investment, company establishment, and visa consulting services.",
      companyEstablishment: "Company Establishment",
      fdi: "Foreign-Invested Corporation (FDI)",
      branchOffice: "Branch Office Setup",
      liaisonOffice: "Liaison Office Setup",
      visaGuide: "Visa Guide",
      d8Visa: "D-8 Corporate Investment Visa",
      d7Visa: "D-7 Intra-company Transfer Visa",
      permanentResidency: "Permanent Residency Strategy",
      f5Investment: "F-5 High Amount Investment",
      investmentImmigration: "Investment Immigration",
      realEstate: "Real Estate Immigration Visa",
      publicInterest: "Public Interest Immigration",
      aboutUs: "About Us",
      copyright: "VISION Administrative Office. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      phone: "02-363-2251",
      email: "5000meter@gmail.com",
      address: "324 Toegyero, Gwanghui-dong, Jung-gu, Seoul",
    },
  },
  zh: {
    nav: {
      home: "首页",
      companySetup: "公司设立",
      fdi: "外商投资法人设立 (FDI)",
      branch: "韩国分公司设立",
      liaison: "联络事务所设立",
      liaisonProcess: "联络事务所设立程序及所需文件",
      d8Visa: "D-8签证",
      d8Detail: "D-8企业投资签证",
      d8Process: "D-8签证发放对象/程序/所需文件",
      d7Visa: "D-7签证",
      d7Detail: "D-7驻在员签证",
      d7Details: "驻在员D-7签证对象/发放要件/提交文件",
      f5Investment: "F-5高额投资",
      f5Visa: "F-5永住权及高额投资签证",
      f5Strategies: "永住权战略",
      realEstate: "房地产移民",
      publicInterest: "公益移民",
      about: "关于我们",
      blog: "博客",
      contact: "联系我们",
      consultation: "预约咨询",
      // legacy keys
      companyEstablishment: "公司设立",
      branchOffice: "外国企业韩国分公司设立",
      liaisonOffice: "联络事务所设立",
      liaisonOfficeProcedure: "联络事务所设立程序及所需文件",
      d8Eligibility: "D-8签证资格条件、程序及所需文件",
      d7Eligibility: "D-7驻在员签证资格条件及所需文件",
      permanentResidency: "永住权战略",
      aboutUs: "关于我们",
      bookConsultation: "预约咨询",
      language: "语言",
    },
    hero: {
      badge: "韩国值得信赖的外商投资伙伴",
      titleLine1: "外国人投资的成功伙伴",
      titleLine2: "VISION行政士事务所",
      subtitle:
        "从外商投资法人设立到签证取得，提供多语言一站式综合咨询服务。",
      trustBadges: ["年处理200+件", "多语言支持", "一站式服务"],
      bookConsultation: "预约咨询",
      viewServices: "查看服务",
      orContactMessenger: "或通过即时通讯联系我们",
    },
    slider: {
      slides: [
        {
          title: "外国人投资的成功伙伴",
          subtitle: "从外商投资法人设立到营业登记，VISION行政士事务所为您的韩国市场进入全程护航。",
          cta: "了解公司设立",
        },
        {
          title: "D-8·D-7签证专业办理",
          subtitle: "提供企业投资签证(D-8)和驻在员签证(D-7)的专业咨询和文件代办服务。",
          cta: "申请签证咨询",
        },
        {
          title: "F-5永住权·投资移民",
          subtitle: "通过高额投资、房地产投资、公益事业等途径，为您量身定制永住权取得战略。",
          cta: "查看永住权战略",
        },
        {
          title: "10年以上专业行政士经验",
          subtitle: "每年200件以上成功案例，多语言支持，值得信赖的外国人投资专业伙伴。",
          cta: "预约免费咨询",
        },
      ],
    },
    trustStats: {
      stats: [
        { value: "200+", label: "年处理案件", description: "每年" },
        { value: "6", label: "专业行政士", description: "持证专家" },
        { value: "3", label: "办公管理人员", description: "支持人员" },
        { value: "3", label: "支持语言", description: "英语 / 中文 / 日语" },
      ],
    },
    messenger: {
      badge: "即时联系",
      title: "立即与我们联系",
      subtitle: "选择您偏好的即时通讯工具进行即时咨询。我们的多语言团队随时为您服务。",
      items: [
        {
          name: "KakaoTalk",
          description: "韩国最受欢迎的即时通讯。保证快速回复。",
        },
        {
          name: "微信",
          description: "直接与我们的中文顾问沟通。",
        },
        {
          name: "LINE",
          description: "可通过LINE进行日语咨询服务。",
        },
        {
          name: "WhatsApp",
          description: "欢迎国际咨询。全天候24小时在线。",
        },
      ],
      contactNow: "立即联系",
    },
    services: {
      badge: "服务介绍",
      title: "综合商务与签证解决方案",
      subtitle: "从公司设立到永住权取得，为您的韩国商务之旅提供全方位支持。",
      items: [
        {
          title: "外商投资法人设立",
          description: "为外国投资者提供完整的FDI注册及韩国公司设立服务。",
        },
        {
          title: "分公司及联络事务所设立",
          description: "协助设立韩国分公司或联络事务所，确保完全合规。",
        },
        {
          title: "D-8签证办理",
          description: "为外国投资者和高管提供企业投资签证办理。",
        },
        {
          title: "D-7签证办理",
          description: "为调任韩国办事处的员工提供驻在员签证办理。",
        },
        {
          title: "永住权战略 (F-5)",
          description: "为长期居留和F-5签证资格提供战略规划。",
        },
        {
          title: "F-5高额投资移民",
          description: "为合格投资者提供高价值投资移民途径指导。",
        },
        {
          title: "房地产投资移民",
          description: "基于房地产投资的移民解决方案及签证支持。",
        },
        {
          title: "公益事业移民",
          description: "通过公益项目贡献获取投资签证支持。",
        },
      ],
      learnMore: "了解更多",
    },
    team: {
      badge: "我们的团队",
      title: "专业行政士团队介绍",
      subtitle: "拥有多语言能力和韩国行政程序及出入境法专业知识的经验丰富的专业人员。",
      specialistsLabel: "专业行政士",
      supportLabel: "办公管理与支持",
      languagesLabel: "语言",
      specialtiesLabel: "专长领域",
      specialists: [
        {
          name: "李元重",
          role: "首席行政士",
          languages: ["韓国語", "英語", "中国語", "日本語"],
          specialties: ["FDI注册", "公司设立"],
        },
        {
          name: "郑有善",
          role: "行政士",
          languages: ["韩语", "英语"],
          specialties: ["D-8签证", "F-5投资"],
        },
        {
          name: "韩庆泽",
          role: "行政士",
          languages: ["韩语", "英语"],
          specialties: ["分公司设立", "联络事务所"],
        },
        {
          name: "金正恩",
          role: "行政士",
          languages: ["韓国語", "英語", "中国語", "日本語"],
          specialties: ["D-7签证", "签证延期"],
        },
        {
          name: "李时政",
          role: "行政士",
          languages: ["韩语", "英语"],
          specialties: ["房地产移民", "投资战略"],
        },
        {
          name: "郑熙晶",
          role: "行政士",
          languages: ["韩语", "英语"],
          specialties: ["文件处理", "合规管理"],
        },
      ],
      support: [
        {
          name: "白胜秀",
          role: "办公室主任",
          languages: ["韩语", "英语"],
          specialties: ["客户关系", "运营管理"],
        },
        {
          name: "金英珠",
          role: "行政助理",
          languages: ["韓国語", "英語"],
          specialties: ["文件管理", "翻译"],
        },
        {
          name: "许京",
          role: "客户协调员",
          languages: ["韩语", "英语", "中文"],
          specialties: ["日程管理", "沟通协调"],
        },
      ],
    },
    whyChoose: {
      badge: "为什么选择我们",
      title: "您进入韩国市场的可靠伙伴",
      subtitle:
        "我们将深厚的本地专业知识与国际服务标准相结合。我们的团队了解外国投资者面临的挑战，并在每一步提供实用、高效的解决方案。",
      keyPoints: [
        "自2010年起专注外商投资和公司设立",
        "以您偏好的语言直接沟通",
        "透明的流程和定期进度更新",
      ],
      features: [
        {
          title: "多语言支持",
          description: "提供英语、中文和日语的全面服务。旅程中每一步都能清晰沟通。",
        },
        {
          title: "丰富经验",
          description: "每年200+成功案例。在外国企业客户和复杂签证申请方面拥有深厚专业知识。",
        },
        {
          title: "专业团队",
          description: "6名专业行政士和3名专职办公管理人员为您提供支持。",
        },
        {
          title: "一站式服务",
          description: "从初次咨询到最终批准。公司设立、签证处理和定居支持一站搞定。",
        },
        {
          title: "实务支持",
          description: "提供文件准备、政府联络和所有程序执行的实际办公支持。",
        },
        {
          title: "合规保障",
          description: "完全遵守韩国法规。定期更新影响您业务的政策变化。",
        },
      ],
    },
    process: {
      badge: "工作流程",
      title: "我们的流程",
      subtitle: "旨在使您进入韩国市场尽可能顺利和高效的系统化方法。",
      steps: [
        {
          number: "01",
          title: "初次咨询",
          description: "免费咨询以了解您的商业目标、投资计划和签证需求。",
        },
        {
          number: "02",
          title: "文件审查",
          description: "全面审查您的文件并准备所有所需材料。",
        },
        {
          number: "03",
          title: "申请策略",
          description: "为您的公司设立或签证申请定制策略，并提供明确的时间表。",
        },
        {
          number: "04",
          title: "提交与跟进",
          description: "向政府机构专业提交申请，并持续跟进直至获批。",
        },
      ],
    },
    testimonials: {
      badge: "客户好评",
      title: "受国际企业信赖",
      subtitle: "听听在韩国成功创业的客户怎么说。",
      items: [
        {
          quote: "团队使我们进入韩国市场的过程无缝衔接。从公司注册到获得D-8签证，一切都处理得专业而高效。",
          author: "陈迈克尔",
          role: "CEO, Tech Innovations Ltd",
          country: "新加坡",
        },
        {
          quote: "英语和中文服务都非常出色。他们完全理解我们的需求，并比我们预期更快地交付了结果。",
          author: "刘伟",
          role: "董事总经理, Golden Trade Co.",
          country: "中国",
        },
        {
          quote: "首尔分公司的设立没有任何问题。日语支持对我们与总部的沟通非常有价值。",
          author: "田中优希",
          role: "韩国事业部长, Yamato Industries",
          country: "日本",
        },
      ],
      whoWeHelp: "我们帮助谁",
      clientTypes: [
        {
          title: "外国投资者",
          description: "在韩国市场建立业务的企业家和投资者。",
        },
        {
          title: "海外总部",
          description: "开设韩国分公司、子公司或联络事务所的全球企业。",
        },
        {
          title: "调任高管",
          description: "转移到韩国运营的企业领导和关键人员。",
        },
        {
          title: "长期居民",
          description: "计划在韩国长期居留或永久居住的家庭和个人。",
        },
      ],
    },
    cta: {
      title: "准备好开始您的韩国商务之旅了吗？",
      subtitle:
        "无论您是设立公司、申请商务签证还是规划长期居留，我们的团队都将在每一步为您提供指导。",
      bookConsultation: "预约免费咨询",
      messengerInquiry: "即时通讯咨询",
      viewAllServices: "查看全部服务",
    },
    footer: {
      description: "韩国值得信赖的外商投资、公司设立和签证咨询服务伙伴。",
      companyEstablishment: "公司设立",
      fdi: "外商投资法人 (FDI)",
      branchOffice: "分公司设立",
      liaisonOffice: "联络事务所设立",
      visaGuide: "签证指南",
      d8Visa: "D-8企业投资签证",
      d7Visa: "D-7驻在员签证",
      permanentResidency: "永住权战略",
      f5Investment: "F-5高额投资",
      investmentImmigration: "投资移民",
      realEstate: "房地产投资移民",
      publicInterest: "公益事业移民",
      aboutUs: "关于我们",
      copyright: "VISION行政士事务所。保留所有权利。",
      privacy: "隐私政策",
      terms: "服务条款",
      phone: "02-363-2251",
      email: "5000meter@gmail.com",
      address: "首尔市中区退溪路324 光熙洞",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      companySetup: "会社設立",
      fdi: "外国人投資法人設立 (FDI)",
      branch: "韓国支社設立",
      liaison: "連絡事務所設立",
      liaisonProcess: "連絡事務所設立手続き及び必要書類",
      d8Visa: "D-8ビザ",
      d8Detail: "D-8企業投資ビザ",
      d8Process: "D-8ビザ発給対象/手続き/必要書類",
      d7Visa: "D-7ビザ",
      d7Detail: "D-7駐在員ビザ",
      d7Details: "駐在員D-7ビザ対象/発給要件/提出書類",
      f5Investment: "F-5高額投資",
      f5Visa: "F-5永住権及び高額投資ビザ",
      f5Strategies: "永住権戦略",
      realEstate: "不動産移民",
      publicInterest: "公益移民",
      about: "会社案内",
      blog: "ブログ",
      contact: "お問い合わせ",
      consultation: "相談申請",
      // legacy keys
      companyEstablishment: "法人設立",
      branchOffice: "外国企業韓国支社設立",
      liaisonOffice: "連絡事務所設立",
      liaisonOfficeProcedure: "連絡事務所設立手続き及び必要書類",
      d8Eligibility: "D-8ビザ資格要件・手続き・必要書類",
      d7Eligibility: "D-7駐在員ビザ資格要件及び必要書類",
      permanentResidency: "永住権戦略",
      aboutUs: "会社案内",
      bookConsultation: "相談予約",
      language: "言語",
    },
    hero: {
      badge: "韓国の信頼できる外国人投資パートナー",
      titleLine1: "外国人投資の成功パートナー",
      titleLine2: "VISION行政士事務所",
      subtitle:
        "外国人投資法人設立からビザ取得まで、多言語ワンストップ総合コンサルティングサービスを提供します。",
      trustBadges: ["年間200件以上処理", "多言語サポート", "ワンストップサービス"],
      bookConsultation: "相談予約",
      viewServices: "サービス一覧",
      orContactMessenger: "またはメッセンジャーでお問い合わせください",
    },
    slider: {
      slides: [
        {
          title: "外国人投資の成功パートナー",
          subtitle: "外国人投資法人設立から事業者登録まで、VISION行政士事務所が韓国進出の全プロセスをサポートします。",
          cta: "会社設立について",
        },
        {
          title: "D-8・D-7ビザ専門処理",
          subtitle: "企業投資ビザ(D-8)と駐在員ビザ(D-7)の発給に向けた専門コンサルティングと書類代行サービスを提供します。",
          cta: "ビザ相談申請",
        },
        {
          title: "F-5永住権・投資移民",
          subtitle: "高額投資、不動産投資、公益事業を通じた永住権取得戦略をオーダーメイドで設計いたします。",
          cta: "永住権戦略を見る",
        },
        {
          title: "10年以上の専門行政士経験",
          subtitle: "年間200件以上の成功事例と多言語サポートで信頼される外国人投資専門パートナーです。",
          cta: "無料相談予約",
        },
      ],
    },
    trustStats: {
      stats: [
        { value: "200+", label: "年間処理件数", description: "毎年" },
        { value: "6", label: "専門行政士", description: "資格保有専門家" },
        { value: "3", label: "事務管理チーム", description: "サポートスタッフ" },
        { value: "3", label: "対応言語", description: "英語 / 中国語 / 日本語" },
      ],
    },
    messenger: {
      badge: "即時連絡",
      title: "メッセンジャーで今すぐ連絡",
      subtitle: "お好みのメッセンジャーを選択して即座にご相談ください。多言語専門チームが対応いたします。",
      items: [
        {
          name: "カカオトーク",
          description: "韓国で最も人気のメッセンジャー。迅速な回答を保証します。",
        },
        {
          name: "WeChat",
          description: "中国語対応のコンサルタントと直接繋がります。",
        },
        {
          name: "LINE",
          description: "LINEメッセンジャーで日本語サポートが利用可能です。",
        },
        {
          name: "WhatsApp",
          description: "海外からのお問い合わせ歓迎。24時間対応可能です。",
        },
      ],
      contactNow: "今すぐ連絡",
    },
    services: {
      badge: "サービス案内",
      title: "総合ビジネス＆ビザソリューション",
      subtitle: "法人設立から永住権取得まで、韓国進出のためのワンストップサービスを提供します。",
      items: [
        {
          title: "外国人投資法人設立",
          description: "外国人投資者のための完全なFDI登録及び韓国法人設立サービス。",
        },
        {
          title: "支社及び連絡事務所設立",
          description: "韓国支社または連絡事務所の設立と完全なコンプライアンスサポート。",
        },
        {
          title: "D-8ビザ申請",
          description: "外国人投資者及び経営陣のための企業投資ビザ処理。",
        },
        {
          title: "D-7ビザ申請",
          description: "韓国オフィスに転勤する従業員のための駐在員ビザ処理。",
        },
        {
          title: "永住権戦略 (F-5)",
          description: "長期滞在及びF-5ビザ取得のための戦略的計画立案。",
        },
        {
          title: "F-5高額投資移民",
          description: "適格投資者のための高額投資移民経路のご案内。",
        },
        {
          title: "不動産投資移民",
          description: "不動産投資を通じた移民ソリューション及びビザサポート。",
        },
        {
          title: "公益事業移民",
          description: "公益プロジェクトへの貢献を通じた投資ビザ取得サポート。",
        },
      ],
      learnMore: "詳細を見る",
    },
    team: {
      badge: "私たちのチーム",
      title: "専門行政士チームのご紹介",
      subtitle: "多言語能力と韓国行政手続き及び出入国法の専門知識を持つ経験豊富なプロフェッショナルです。",
      specialistsLabel: "専門行政士",
      supportLabel: "事務管理＆サポート",
      languagesLabel: "言語",
      specialtiesLabel: "専門分野",
      specialists: [
        {
          name: "李元重",
          role: "代表行政士",
          languages: ["韓国語", "英語"],
          specialties: ["FDI登録", "法人設立"],
        },
        {
          name: "鄭有善",
          role: "行政士",
          languages: ["韓国語", "英語"],
          specialties: ["D-8ビザ", "F-5投資"],
        },
        {
          name: "韓慶澤",
          role: "行政士",
          languages: ["韓国語", "英語"],
          specialties: ["支社設立", "連絡事務所"],
        },
        {
          name: "金正恩",
          role: "行政士",
          languages: ["韓国語", "英語", "中国語"],
          specialties: ["D-7ビザ", "滞在延長"],
        },
        {
          name: "李時政",
          role: "行政士",
          languages: ["韓国語", "英語"],
          specialties: ["不動産移民", "投資戦略"],
        },
        {
          name: "鄭熙晶",
          role: "行政士",
          languages: ["韓国語", "英語"],
          specialties: ["書類処理", "コンプライアンス"],
        },
      ],
      support: [
        {
          name: "白勝秀",
          role: "事務長",
          languages: ["韓国語", "英語"],
          specialties: ["顧客管理", "運営"],
        },
        {
          name: "金英珠",
          role: "事務員",
          languages: ["韓国語", "中国語"],
          specialties: ["書類管理", "翻訳"],
        },
        {
          name: "許京",
          role: "クライアントコーディネーター",
          languages: ["韓国語", "英語", "中国語"],
          specialties: ["スケジュール管理", "コミュニケーション"],
        },
      ],
    },
    whyChoose: {
      badge: "選ばれる理由",
      title: "韓国ビジネス進出の信頼できるパートナー",
      subtitle:
        "深い現地専門知識と国際的なサービス基準を融合。外国人投資者が直面する課題を理解し、実践的で効率的なソリューションを提供します。",
      keyPoints: [
        "2010年から外国人投資及び法人設立を専門",
        "お好みの言語で直接コミュニケーション",
        "透明なプロセスと定期的な進捗報告",
      ],
      features: [
        {
          title: "多言語サポート",
          description: "英語、中国語、日本語での完全なサービス。あらゆる段階で明確なコミュニケーション。",
        },
        {
          title: "豊富な経験",
          description: "年間200件以上の成功事例。外国企業クライアントと複雑なビザ申請に対する深い専門知識。",
        },
        {
          title: "専門家チーム",
          description: "6名の専門行政士と3名の専任事務管理者がサポートします。",
        },
        {
          title: "ワンストップサービス",
          description: "初回相談から最終承認まで。法人設立、ビザ処理、定住サポートをすべて一箇所で。",
        },
        {
          title: "実務サポート",
          description: "書類準備、官公庁連絡、すべての手続きの実行のための実践的なオフィスサポート。",
        },
        {
          title: "コンプライアンス保証",
          description: "韓国の規制を完全に遵守。ビジネスに影響する政策変更の定期的な更新。",
        },
      ],
    },
    process: {
      badge: "業務プロセス",
      title: "私たちのプロセス",
      subtitle: "韓国ビジネス進出を可能な限りスムーズかつ効率的にするための体系的なアプローチ。",
      steps: [
        {
          number: "01",
          title: "初回相談",
          description: "ビジネス目標、投資計画、ビザ要件を理解するための無料相談。",
        },
        {
          number: "02",
          title: "書類審査",
          description: "書類の包括的な審査と必要資料の準備。",
        },
        {
          number: "03",
          title: "申請戦略",
          description: "法人設立またはビザ申請のためのカスタマイズされた戦略と明確なスケジュール。",
        },
        {
          number: "04",
          title: "提出＆フォローアップ",
          description: "政府機関への専門的な提出と承認までの継続的なフォローアップ。",
        },
      ],
    },
    testimonials: {
      badge: "お客様の声",
      title: "国際ビジネスから信頼されて",
      subtitle: "韓国で成功裏にビジネスを立ち上げたお客様の声をお聞きください。",
      items: [
        {
          quote: "韓国市場への参入がシームレスになりました。会社登記からD-8ビザの取得まで、すべてプロフェッショナルかつ効率的に処理されました。",
          author: "マイケル・チェン",
          role: "CEO, Tech Innovations Ltd",
          country: "シンガポール",
        },
        {
          quote: "英語と中国語の両方で卓越したサービスでした。私たちのニーズを完璧に理解し、期待以上の結果を出してくれました。",
          author: "リュウ・ウェイ",
          role: "マネージングディレクター, Golden Trade Co.",
          country: "中国",
        },
        {
          quote: "ソウル支社の設立が問題なく完了しました。日本語サポートは本社とのコミュニケーションに非常に貴重でした。",
          author: "田中優希",
          role: "韓国事業部長, Yamato Industries",
          country: "日本",
        },
      ],
      whoWeHelp: "誰をサポートするか",
      clientTypes: [
        {
          title: "外国人投資者",
          description: "韓国市場でプレゼンスを確立する起業家や投資家。",
        },
        {
          title: "海外本社",
          description: "韓国支社、子会社、または連絡事務所を開設するグローバル企業。",
        },
        {
          title: "転勤幹部",
          description: "韓国法人に移動するビジネスリーダーとキーパーソン。",
        },
        {
          title: "長期居住者",
          description: "韓国での長期滞在または永住を計画する家族や個人。",
        },
      ],
    },
    cta: {
      title: "韓国ビジネスの旅を始める準備はできましたか？",
      subtitle:
        "法人設立、ビジネスビザの申請、長期滞在の計画など、私たちのチームがあらゆるステップでガイドします。",
      bookConsultation: "無料相談を予約",
      messengerInquiry: "メッセンジャーで問い合わせ",
      viewAllServices: "全サービスを見る",
    },
    footer: {
      description: "外国人投資、法人設立、ビザコンサルティングサービスを提供する韓国の信頼されるパートナー。",
      companyEstablishment: "法人設立",
      fdi: "外国人投資法人 (FDI)",
      branchOffice: "支社設立",
      liaisonOffice: "連絡事務所設立",
      visaGuide: "ビザガイド",
      d8Visa: "D-8企業投資ビザ",
      d7Visa: "D-7駐在員ビザ",
      permanentResidency: "永住権戦略",
      f5Investment: "F-5高額投資",
      investmentImmigration: "投資移民",
      realEstate: "不動産投資移民",
      publicInterest: "公益事業移民",
      aboutUs: "会社案内",
      copyright: "VISION行政士事務所。All rights reserved.",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      phone: "02-363-2251",
      email: "5000meter@gmail.com",
      address: "ソウル市中区退渓路324 光熙洞",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.ko;
}
