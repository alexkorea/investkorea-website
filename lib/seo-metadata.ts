import type { Metadata } from "next"
import { type Locale } from "./translations"
import { getLocalePath } from "./locale-utils"

const BASE_URL = "https://investkorea.co.kr"

type PageKey =
  | "home" | "companyFdi" | "companyBranch" | "companyLiaison" | "companyLiaisonProcess"
  | "visaD8" | "visaD8Process" | "visaD7" | "visaD7Details" | "visaF5" | "visaF5Strategies"
  | "immigrationRealEstate" | "immigrationPublicInterest"
  | "about" | "blog" | "contact"

const seoData: Record<PageKey, Record<Locale, { title: string; description: string }>> = {
  home: {
    ko: { title: "VISION 행정사사무소 - 외국인 투자·비자 전문 컨설팅", description: "외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권 등 종합 컨설팅. 15년 이상 경력 전문 행정사가 상담합니다." },
    en: { title: "VISION - Foreign Investment & Visa Consulting in Korea", description: "Expert consulting for foreign investment company setup, D-8/D-7 visas, and F-5 permanent residency in South Korea. 15+ years of experience." },
    zh: { title: "VISION行政士事务所 - 外国人投资·签证专业咨询", description: "外国人投资法人设立、D-8·D-7签证、F-5永住权等综合咨询服务。15年以上经验的专业行政士为您服务。" },
    ja: { title: "VISION行政士事務所 - 外国人投資・ビザ専門コンサルティング", description: "外国人投資法人設立、D-8・D-7ビザ、F-5永住権など総合コンサルティング。15年以上の経験を持つ専門行政士がご相談いたします。" },
  },
  companyFdi: {
    ko: { title: "외국인투자법인설립 (FDI) - VISION 행정사사무소", description: "외국인 투자 촉진법에 따른 한국 법인 설립 절차, 요건, 혜택 안내. 1억 원 이상 투자로 D-8 비자 자격 취득." },
    en: { title: "Foreign Direct Investment (FDI) Company Setup - VISION", description: "Establish a foreign investment company in Korea under FIPA. Requirements, process, benefits, and D-8 visa eligibility with ₩100M+ investment." },
    zh: { title: "外国人投资法人设立 (FDI) - VISION行政士事务所", description: "根据外国人投资促进法在韩国设立法人。设立要件、流程、优惠及D-8签证资格指南。" },
    ja: { title: "外国人投資法人設立 (FDI) - VISION行政士事務所", description: "外国人投資促進法に基づく韓国法人設立。設立要件、手続き、優遇措置、D-8ビザ資格のご案内。" },
  },
  companyBranch: {
    ko: { title: "국내 지사 설치 (Branch Office) - VISION 행정사사무소", description: "외국 기업의 한국 지사 설치 절차와 구비서류. 법인 설립과의 차이점, 세금 신고, 영업활동 범위 안내." },
    en: { title: "Branch Office Setup in Korea - VISION", description: "How to establish a branch office in South Korea. Process, documents, comparison with FDI, tax obligations, and business scope." },
    zh: { title: "韩国国内分公司设立 - VISION行政士事务所", description: "外国企业在韩国设立分公司的流程和所需文件。与法人设立的区别、税务申报、营业范围指南。" },
    ja: { title: "韓国国内支社設立 - VISION行政士事務所", description: "外国企業の韓国支社設立手続きと必要書類。法人設立との違い、税務申告、営業活動範囲のご案内。" },
  },
  companyLiaison: {
    ko: { title: "연락사무소 설치 - VISION 행정사사무소", description: "외국 기업의 한국 연락사무소 설치 방법. 비영리 활동, 시장조사, 업무연락 등 연락사무소의 역할과 설립 절차." },
    en: { title: "Liaison Office Setup in Korea - VISION", description: "Establish a liaison office in South Korea for market research and business coordination. Non-profit activities, setup process, and requirements." },
    zh: { title: "韩国联络事务所设立 - VISION行政士事务所", description: "外国企业在韩国设立联络事务所。非营利活动、市场调查、业务联络等联络事务所的角色和设立流程。" },
    ja: { title: "韓国連絡事務所設立 - VISION行政士事務所", description: "外国企業の韓国連絡事務所設立。非営利活動、市場調査、業務連絡など連絡事務所の役割と設立手続き。" },
  },
  companyLiaisonProcess: {
    ko: { title: "연락사무소 설치 절차 및 구비서류 - VISION 행정사사무소", description: "연락사무소 설치를 위한 단계별 절차와 필요 서류 상세 안내. 법원 등기, 세무서 신고 등 전 과정." },
    en: { title: "Liaison Office Setup Process & Documents - VISION", description: "Step-by-step liaison office registration process and required documents. Court registration, tax office reporting, and more." },
    zh: { title: "联络事务所设立流程及所需文件 - VISION行政士事务所", description: "联络事务所设立的分步流程和所需文件详细指南。法院登记、税务机关申报等全过程。" },
    ja: { title: "連絡事務所設立手続きと必要書類 - VISION行政士事務所", description: "連絡事務所設立のステップ別手続きと必要書類の詳細案内。裁判所登記、税務署届出など全過程。" },
  },
  visaD8: {
    ko: { title: "D-8 기업투자비자 - VISION 행정사사무소", description: "D-8 기업투자비자의 종류, 자격요건, 체류기간 안내. 외국인 투자법인 대표이사 및 경영자를 위한 비자." },
    en: { title: "D-8 Corporate Investment Visa - VISION", description: "D-8 visa types, eligibility, and stay period. For foreign investors, CEOs, and managers of foreign-invested companies in Korea." },
    zh: { title: "D-8企业投资签证 - VISION行政士事务所", description: "D-8企业投资签证的种类、资格要件、停留期间指南。适用于外国人投资法人代表及经营者。" },
    ja: { title: "D-8企業投資ビザ - VISION行政士事務所", description: "D-8企業投資ビザの種類、資格要件、滞在期間案内。外国人投資法人の代表取締役・経営者向けビザ。" },
  },
  visaD8Process: {
    ko: { title: "D-8 비자 발급 대상·절차·구비서류 - VISION 행정사사무소", description: "D-8 기업투자비자 발급 대상자, 신청 절차, 필요 서류를 상세히 안내합니다." },
    en: { title: "D-8 Visa Application Process & Documents - VISION", description: "D-8 corporate investment visa eligibility, application process, and required documents explained in detail." },
    zh: { title: "D-8签证发放对象·流程·所需文件 - VISION行政士事务所", description: "D-8企业投资签证发放对象、申请流程、所需文件的详细指南。" },
    ja: { title: "D-8ビザ発給対象・手続き・必要書類 - VISION行政士事務所", description: "D-8企業投資ビザの発給対象者、申請手続き、必要書類を詳しくご案内します。" },
  },
  visaD7: {
    ko: { title: "D-7 주재원비자 - VISION 행정사사무소", description: "D-7 주재원비자 자격요건과 신청 안내. 해외 본사에서 한국 지사로 파견되는 직원을 위한 비자." },
    en: { title: "D-7 Intra-Company Transfer Visa - VISION", description: "D-7 visa for employees transferred from overseas headquarters to Korean branch. Eligibility and application guide." },
    zh: { title: "D-7驻在员签证 - VISION行政士事务所", description: "D-7驻在员签证资格要件和申请指南。适用于从海外总部派遣至韩国分公司的员工。" },
    ja: { title: "D-7駐在員ビザ - VISION行政士事務所", description: "D-7駐在員ビザの資格要件と申請案内。海外本社から韓国支社へ派遣される社員向けビザ。" },
  },
  visaD7Details: {
    ko: { title: "D-7 비자 발급요건·제출서류 상세 - VISION 행정사사무소", description: "주재원 파견 D-7 비자의 대상, 발급요건, 제출서류를 상세히 안내합니다." },
    en: { title: "D-7 Visa Requirements & Documents Detail - VISION", description: "Detailed D-7 intra-company transfer visa eligibility, requirements, and submission documents." },
    zh: { title: "D-7签证发放要件·提交文件详情 - VISION行政士事务所", description: "驻在员派遣D-7签证的对象、发放要件、提交文件的详细指南。" },
    ja: { title: "D-7ビザ発給要件・提出書類詳細 - VISION行政士事務所", description: "駐在員派遣D-7ビザの対象、発給要件、提出書類を詳しくご案内します。" },
  },
  visaF5: {
    ko: { title: "F-5 영주권 및 고액투자비자 - VISION 행정사사무소", description: "F-5 영주권과 고액투자 이민비자 안내. 5억 원 이상 투자로 한국 영주권 취득 방법." },
    en: { title: "F-5 Permanent Residency & High-Value Investment Visa - VISION", description: "F-5 permanent residency through high-value investment in Korea. ₩500M+ investment pathway to Korean permanent residency." },
    zh: { title: "F-5永住权及高额投资签证 - VISION行政士事务所", description: "F-5永住权和高额投资移民签证指南。5亿韩元以上投资获取韩国永住权的方法。" },
    ja: { title: "F-5永住権・高額投資ビザ - VISION行政士事務所", description: "F-5永住権と高額投資移民ビザ案内。5億ウォン以上の投資で韓国永住権を取得する方法。" },
  },
  visaF5Strategies: {
    ko: { title: "영주권 전략 - VISION 행정사사무소", description: "한국 영주권 취득을 위한 투자 전략과 경로 안내. 부동산, 공익사업, 고액투자 등 다양한 방법." },
    en: { title: "Permanent Residency Strategies - VISION", description: "Investment strategies for Korean permanent residency. Real estate, public interest projects, and high-value investment pathways." },
    zh: { title: "永住权战略 - VISION行政士事务所", description: "获取韩国永住权的投资战略和路径指南。房地产、公益事业、高额投资等多种方法。" },
    ja: { title: "永住権戦略 - VISION行政士事務所", description: "韓国永住権取得のための投資戦略とルート案内。不動産、公益事業、高額投資など様々な方法。" },
  },
  immigrationRealEstate: {
    ko: { title: "부동산 투자이민 - VISION 행정사사무소", description: "부동산 투자를 통한 한국 이민 안내. 제주도, 평창 등 투자이민 지정 지역과 투자 조건." },
    en: { title: "Real Estate Investment Immigration - VISION", description: "Immigration to Korea through real estate investment. Designated areas like Jeju, Pyeongchang, and investment requirements." },
    zh: { title: "房地产投资移民 - VISION行政士事务所", description: "通过房地产投资移民韩国指南。济州岛、平昌等投资移民指定地区和投资条件。" },
    ja: { title: "不動産投資移民 - VISION行政士事務所", description: "不動産投資による韓国移民案内。済州島、平昌など投資移民指定地域と投資条件。" },
  },
  immigrationPublicInterest: {
    ko: { title: "공익사업 투자이민 - VISION 행정사사무소", description: "공익사업 투자를 통한 한국 이민 안내. 정부 지정 공익사업 투자로 영주권 취득 방법." },
    en: { title: "Public Interest Investment Immigration - VISION", description: "Immigration through public interest project investment. How to obtain permanent residency via government-designated projects." },
    zh: { title: "公益事业投资移民 - VISION行政士事务所", description: "通过公益事业投资移民韩国指南。政府指定公益事业投资获取永住权的方法。" },
    ja: { title: "公益事業投資移民 - VISION行政士事務所", description: "公益事業投資による韓国移民案内。政府指定公益事業投資で永住権を取得する方法。" },
  },
  about: {
    ko: { title: "회사소개 - VISION 행정사사무소", description: "비전행정사사무소는 15년 이상 경력의 전문가가 외국인 투자, 비자, 법인설립을 종합 지원하는 전문 행정사사무소입니다." },
    en: { title: "About Us - VISION Administrative Office", description: "VISION is a professional administrative office with 15+ years of expertise in foreign investment, visa consulting, and company establishment in Korea." },
    zh: { title: "公司介绍 - VISION行政士事务所", description: "VISION行政士事务所是拥有15年以上经验的专家提供外国人投资、签证、法人设立综合支援的专业行政士事务所。" },
    ja: { title: "会社紹介 - VISION行政士事務所", description: "VISION行政士事務所は15年以上の経験を持つ専門家が外国人投資、ビザ、法人設立を総合支援する専門行政士事務所です。" },
  },
  blog: {
    ko: { title: "블로그 - VISION 행정사사무소", description: "외국인 투자, 비자, 법인설립 관련 최신 정보와 전문 가이드를 제공합니다." },
    en: { title: "Blog - VISION Administrative Office", description: "Latest information and expert guides on foreign investment, visas, and company establishment in Korea." },
    zh: { title: "博客 - VISION行政士事务所", description: "提供有关外国人投资、签证、法人设立的最新信息和专业指南。" },
    ja: { title: "ブログ - VISION行政士事務所", description: "外国人投資、ビザ、法人設立に関する最新情報と専門ガイドをお届けします。" },
  },
  contact: {
    ko: { title: "문의하기 - VISION 행정사사무소", description: "외국인 투자, 비자, 법인설립 관련 무료 상담을 신청하세요. 전문 행정사가 친절히 안내해 드립니다." },
    en: { title: "Contact Us - VISION Administrative Office", description: "Request a free consultation on foreign investment, visas, and company setup. Our expert team is ready to help." },
    zh: { title: "联系我们 - VISION行政士事务所", description: "请申请有关外国人投资、签证、法人设立的免费咨询。专业行政士为您热情服务。" },
    ja: { title: "お問い合わせ - VISION行政士事務所", description: "外国人投資、ビザ、法人設立に関する無料相談をお申し込みください。専門行政士が丁寧にご案内いたします。" },
  },
}

// Map URL paths to page keys
const pathToPageKey: Record<string, PageKey> = {
  "/": "home",
  "/company/fdi": "companyFdi",
  "/company/branch": "companyBranch",
  "/company/liaison": "companyLiaison",
  "/company/liaison-process": "companyLiaisonProcess",
  "/visa/d8": "visaD8",
  "/visa/d8-process": "visaD8Process",
  "/visa/d7": "visaD7",
  "/visa/d7-details": "visaD7Details",
  "/visa/f5": "visaF5",
  "/visa/f5-strategies": "visaF5Strategies",
  "/immigration/real-estate": "immigrationRealEstate",
  "/immigration/public-interest": "immigrationPublicInterest",
  "/about": "about",
  "/blog": "blog",
  "/contact": "contact",
}

const localeToOgLocale: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
}

export function getPageMetadata(pageKey: PageKey, locale: Locale): Metadata {
  const data = seoData[pageKey]?.[locale] ?? seoData[pageKey]?.ko
  const path = Object.entries(pathToPageKey).find(([, key]) => key === pageKey)?.[0] ?? "/"
  const canonicalUrl = `${BASE_URL}${getLocalePath(locale, path)}`

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ko: `${BASE_URL}${getLocalePath("ko", path)}`,
        en: `${BASE_URL}${getLocalePath("en", path)}`,
        zh: `${BASE_URL}${getLocalePath("zh", path)}`,
        ja: `${BASE_URL}${getLocalePath("ja", path)}`,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: canonicalUrl,
      siteName: "VISION 행정사사무소",
      locale: localeToOgLocale[locale],
      type: "website",
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: data.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [`${BASE_URL}/og-image.png`],
    },
  }
}

export { seoData, pathToPageKey, type PageKey }
