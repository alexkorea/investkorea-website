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
    ko: { title: "VISION 행정사사무소 - 외국인 투자·비자 전문 컨설팅", description: "외국인 투자법인 설립(FDI), D-8 기업투자비자, D-7 주재원비자, F-5 영주권까지 원스톱 종합 컨설팅 서비스를 제공합니다. 15년 경력의 전문 행정사가 투자신고에서 법인등기, 비자 발급을 책임지고 지원합니다." },
    en: { title: "VISION - Foreign Investment & Visa Consulting in Korea", description: "Expert one-stop consulting for FDI setup, D-8 investor visa, D-7 transfer, and F-5 permanent residency in Korea. Free consultation available." },
    zh: { title: "VISION行政士事务所 - 外国人投资·签证专业咨询", description: "提供外国人投资法人设立(FDI)、D-8企业投资签证、D-7驻在员签证、F-5永住权取得的一站式综合咨询服务。拥有15年以上丰富经验的专业行政士团队全程负责，提供从投资申报到法人登记和签证发放的全方位一条龙支援。欢迎随时申请免费咨询服务，为您量身定制最佳投资移民方案。" },
    ja: { title: "VISION行政書士事務所 - 外国人投資・ビザ専門コンサルティング", description: "外国人投資法人設立(FDI)、D-8企業投資ビザ、D-7駐在員ビザ、F-5永住権取得までのワンストップ総合コンサルティングサービスをご提供しております。15年以上の豊富な経験を持つ専門行政書士が投資届出から法人登記、ビザ発給まで責任を持ってサポートいたします。" },
  },
  companyFdi: {
    ko: { title: "외국인투자법인설립 (FDI) - VISION 행정사사무소", description: "외국인투자촉진법에 따른 한국 법인 설립을 전문 대행합니다. 1억 원 이상 투자 시 D-8 비자 자격 취득이 가능하며, 투자신고에서 법인등기·사업자등록까지 원스톱 지원. 세제 감면 등 외투기업 혜택도 안내해 드립니다." },
    en: { title: "Foreign Direct Investment (FDI) Company Setup - VISION", description: "Set up a foreign-invested company in Korea under FIPA. KRW 100M+ qualifies for D-8 visa. Full support from filing to registration, plus tax incentives." },
    zh: { title: "外国人投资法人设立 (FDI) - VISION行政士事务所", description: "根据韩国的外国人投资促进法设立外商投资法人的全程专业代办服务。投资1亿韩元以上即可获得D-8企业投资签证的资格。从投资申报到法人登记和营业执照办理均提供一站式全程服务，同时还将详细指导外资企业可享受的税收减免及政府补贴等各项优惠政策和措施。" },
    ja: { title: "外国人投資法人設立 (FDI) - VISION行政書士事務所", description: "外国人投資促進法に基づく韓国法人設立を専門的に代行いたします。1億ウォン以上の投資によりD-8ビザの資格取得が可能です。投資届出から法人登記や事業者登録までワンストップで対応するとともに、税制優遇や補助金など外国投資企業向けの各種特典についてもご案内します。" },
  },
  companyBranch: {
    ko: { title: "국내 지사 설치 (Branch Office) - VISION 행정사사무소", description: "외국 기업의 한국 지사 설치를 전문 대행합니다. 법인 설립과의 차이점, 구비서류, 법원 등기 절차, 세금 신고 의무, 영업활동 범위를 상세하게 안내해 드립니다. 지사 설치 후의 D-7·D-8 비자 연계 컨설팅도 제공합니다." },
    en: { title: "Branch Office Setup in Korea - VISION", description: "Register a branch office in Korea for your foreign company. We cover documents, court registration, tax obligations, and business scope. Visa consulting too." },
    zh: { title: "韩国国内分公司设立 - VISION行政士事务所", description: "专业代办外国企业在韩国设立分公司的全部流程和相关手续。详细说明与法人设立方式的区别、所需文件清单、法院登记手续、税务申报义务及可营业范围等各项关键事项。分公司设立完成后还可提供D-7和D-8签证的联动咨询服务，全程帮助企业顺利进入韩国市场。" },
    ja: { title: "韓国国内支社設立 - VISION行政書士事務所", description: "外国企業の韓国支社設立を専門的に代行いたします。法人設立との違いや必要書類一覧、裁判所での登記手続き、税務申告の義務、営業活動の範囲について詳しくご案内いたします。支社設立後のD-7やD-8ビザの連携コンサルティングにもしっかり対応します。" },
  },
  companyLiaison: {
    ko: { title: "연락사무소 설치 - VISION 행정사사무소", description: "외국 기업의 한국 연락사무소 설치를 전문 대행합니다. 시장조사, 업무연락, 정보수집 등 비영리 활동의 거점 마련에 최적입니다. 설립 요건·절차·비용부터 향후 지사나 법인으로의 전환 시 주의사항까지 종합적으로 안내해 드립니다." },
    en: { title: "Liaison Office Setup in Korea - VISION", description: "Set up a liaison office in Korea for market research and coordination. Non-profit base for foreign firms. We guide you on requirements, costs, and conversion." },
    zh: { title: "韩国联络事务所设立 - VISION行政士事务所", description: "专业代办外国企业在韩国设立联络事务所的全部流程和相关手续。联络事务所非常适用于市场调查、业务联络和信息收集等非营利活动，是外国企业考察和了解韩国市场的理想据点。从设立要件、流程和费用到未来转换为分公司或法人时的注意事项，提供全面综合指导服务。" },
    ja: { title: "韓国連絡事務所設立 - VISION行政書士事務所", description: "外国企業の韓国連絡事務所設立を専門的に代行いたします。市場調査や業務連絡、情報収集などの非営利活動のための拠点として非常に最適な選択肢です。設立の要件や手続き、費用面から将来の支社や法人への転換時における注意点まで、総合的にご案内いたします。" },
  },
  companyLiaisonProcess: {
    ko: { title: "연락사무소 설치 절차 및 구비서류 - VISION 행정사사무소", description: "연락사무소 설치를 위한 단계별 절차와 필요 서류를 상세히 안내합니다. 본사 서류의 공증·아포스티유 취득, 법원 등기 신청, 세무서 신고, 외국환 은행 지정까지 전 과정을 경험 풍부한 전문 행정사가 원스톱으로 대행합니다." },
    en: { title: "Liaison Office Setup Process & Documents - VISION", description: "Step-by-step liaison office registration guide for Korea. Covers HQ notarization, apostille, court registration, tax reporting, and FX bank designation." },
    zh: { title: "联络事务所设立流程及所需文件 - VISION行政士事务所", description: "详细介绍韩国联络事务所设立的分步详细流程和全部所需文件清单。涵盖总部文件公证及海牙认证（Apostille）、法院登记申请、税务机关申报和外汇银行指定等各个重要环节。经验丰富的专业行政士团队为您提供一站式全程代办服务，确保每一步手续顺利完成。" },
    ja: { title: "連絡事務所設立手続きと必要書類 - VISION行政書士事務所", description: "連絡事務所設立のためのステップ別手続きと必要書類について詳しくご案内いたします。本社書類の公証やアポスティーユの取得手続き、裁判所での登記、税務署届出、外国為替銀行の指定まで、全過程を経験豊富な専門の行政書士がワンストップで対応いたします。" },
  },
  visaD8: {
    ko: { title: "D-8 기업투자비자 - VISION 행정사사무소", description: "D-8 기업투자비자의 종류(가~라 유형), 자격요건, 체류기간, 가족 동반(F-3) 비자를 안내합니다. 외국인 투자법인 대표이사·경영자를 위한 비자로, 1억 원 이상 투자 시 신청 가능. 전문 행정사가 발급을 도와드립니다." },
    en: { title: "D-8 Corporate Investment Visa - VISION", description: "D-8 visa guide: categories, eligibility, stay periods, and F-3 family visas. For foreign investors and CEOs in Korea with KRW 100M+ investment. Expert help." },
    zh: { title: "D-8企业投资签证 - VISION行政士事务所", description: "D-8企业投资签证各类型(甲~丁)、资格要件、停留期限、家属随行(F-3)签证的全面指南。本签证适用于外商投资法人代表理事、经营者和核心技术人员，投资金额达到1亿韩元以上即可提出申请。我们的专业行政士团队将全程协助您顺利完成签证的申请手续。" },
    ja: { title: "D-8企業投資ビザ - VISION行政書士事務所", description: "D-8企業投資ビザの種類(イ~ニ)、資格要件、滞在期間、家族帯同(F-3)ビザまで総合的にご案内いたします。外国人投資法人の代表取締役や経営者を対象としたビザであり、1億ウォン以上の投資があれば申請が可能です。専門の行政書士が発給をサポート。" },
  },
  visaD8Process: {
    ko: { title: "D-8 비자 발급 대상·절차·구비서류 - VISION 행정사사무소", description: "D-8 기업투자비자의 발급 대상자 확인, 재외공관과 국내 출입국관리 신청 절차, 제출서류를 상세히 안내합니다. 사업계획서 작성과 투자금 송금 증빙서류, 법인등기부등본 등 핵심 서류의 준비를 전문 행정사가 도와드립니다." },
    en: { title: "D-8 Visa Application Process & Documents - VISION", description: "D-8 visa eligibility, embassy and in-country application steps, and full document list. We help with business plans, remittance proofs, and registration papers." },
    zh: { title: "D-8签证发放对象·流程·所需文件 - VISION行政士事务所", description: "详细说明D-8企业投资签证的发放对象确认方法、通过驻外使领馆及韩国国内出入国管理局的具体申请流程以及所需提交的文件清单。专业行政士全程协助您准备事业计划书、投资款汇款证明和法人登记簿謄本等核心申请文件，帮助确保签证申请能够顺利通过审批流程。" },
    ja: { title: "D-8ビザ発給対象・手続き・必要書類 - VISION行政書士事務所", description: "D-8企業投資ビザの発給対象者の確認方法、在外公館および韓国国内での申請手続きの流れ、必要な提出書類について詳しくご案内いたします。事業計画書の作成支援や投資金の送金証明書類、法人登記簿謄本などの重要書類の準備を専門家がサポートいたします。" },
  },
  visaD7: {
    ko: { title: "D-7 주재원비자 - VISION 행정사사무소", description: "D-7 주재원비자의 자격요건, 신청 절차, 필요서류를 종합 안내합니다. 해외 본사에서 한국 지사·법인으로 파견되는 필수전문인력을 위한 비자이며, 1년 이상 근무경력 요건의 충족 여부 확인부터 발급까지 전문가가 지원합니다." },
    en: { title: "D-7 Intra-Company Transfer Visa - VISION", description: "D-7 visa for staff transferred from overseas HQ to Korean branches. Covers eligibility, 1+ year work history, application steps, and required documents." },
    zh: { title: "D-7驻在员签证 - VISION行政士事务所", description: "D-7驻在员签证的资格要件、完整申请流程和所需文件的综合性指南。本签证适用于从海外总部派遣至韩国分公司或法人的必要专业人才，申请者需要满足1年以上的工作经历要件。从资格条件确认到签证发放的全部流程，均由我们的专业行政士团队提供全程专业支援。" },
    ja: { title: "D-7駐在員ビザ - VISION行政書士事務所", description: "D-7駐在員ビザの資格要件、申請手続き、必要書類を総合的にご案内いたします。海外本社から韓国の支社や法人へ派遣される必須専門人材を対象としたビザです。1年以上の勤務経歴の要件の確認からビザの発給完了まで専門家がしっかりとサポートいたします。" },
  },
  visaD7Details: {
    ko: { title: "D-7 비자 발급요건·제출서류 상세 - VISION 행정사사무소", description: "D-7 주재원비자의 발급요건과 제출서류를 상세하게 안내합니다. 본사·지사 관계 증빙, 파견명령서, 재직증명서, 경력증명서 등 핵심 서류의 전체 목록과 각 서류별의 작성 요령을 전문 행정사가 꼼꼼하게 안내해 드립니다." },
    en: { title: "D-7 Visa Requirements & Documents Detail - VISION", description: "Detailed D-7 visa requirements and document checklist. Covers HQ-branch relationship proof, dispatch orders, employment certificates, and preparation tips." },
    zh: { title: "D-7签证发放要件·提交文件详情 - VISION行政士事务所", description: "详细说明D-7驻在员签证的发放要件和需要提交的所有全部文件的清单。涵盖总部与分公司关系证明文件、派遣命令书、在职证明及经历证明书等核心文件清单以及各项文件的详细准备要领。专业行政士团队为您逐一指导每份文件的正确准备方法，确保申请材料齐全无误。" },
    ja: { title: "D-7ビザ発給要件・提出書類詳細 - VISION行政書士事務所", description: "D-7駐在員ビザの発給要件と提出書類について詳しくご案内いたします。本社と支社の関係を証明するための書類や派遣命令書、在職の証明書や経歴の証明書など重要書類のリストと各書類の作成のポイントを、専門の行政書士が一つひとつ丁寧にサポートします。" },
  },
  visaF5: {
    ko: { title: "F-5 영주권 및 고액투자비자 - VISION 행정사사무소", description: "F-5 영주권과 고액투자 이민비자의 취득 방법을 안내합니다. 5억 원 이상 투자 시 한국 영주권 신청 자격이 부여됩니다. 투자 유형별 요건과 심사 기준, 소요 기간, 가족 동반 영주권까지 전문 행정사가 상세히 컨설팅합니다." },
    en: { title: "F-5 Permanent Residency & High-Value Investment Visa - VISION", description: "Get F-5 Korean permanent residency via high-value investment of KRW 500M+. Covers investment types, eligibility, review process, timeline, and family PR." },
    zh: { title: "F-5永住权及高额投资签证 - VISION行政士事务所", description: "F-5永住权及高额投资移民签证的具体取得方法详细指南。在韩国投资5亿韩元以上即可获得永住权的正式申请资格。详细说明各类投资类型的具体申请要件和审查标准、所需审查时间以及家属随行永住权的申请方法，由专业行政士团队为您提供全面的咨询和指导服务。" },
    ja: { title: "F-5永住権・高額投資ビザ - VISION行政書士事務所", description: "F-5永住権と高額投資移民ビザの取得方法について詳しくご案内いたします。5億ウォン以上の投資で韓国永住権の申請資格が付与されます。投資類型別の要件や審査基準、所要期間、ご家族帯同での永住権の申請方法まで専門行政書士が丁寧にコンサルティング。" },
  },
  visaF5Strategies: {
    ko: { title: "영주권 전략 - VISION 행정사사무소", description: "한국 영주권 취득을 위한 최적의 투자 전략과 경로를 종합적으로 안내합니다. 부동산 투자이민, 공익사업 투자, 고액투자 등의 다양한 방법을 비교 분석하여 고객 상황에 맞는 맞춤형 영주권 취득 로드맵을 제시해 드립니다." },
    en: { title: "Permanent Residency Strategies - VISION", description: "Find the best investment path to Korean permanent residency. Compare real estate, public interest, and high-value options. Custom PR roadmap for your situation." },
    zh: { title: "永住权战略 - VISION行政士事务所", description: "为您全面规划取得韩国永住权的最佳投资战略和具体的实现路径。全面对比分析房地产投资移民、公益事业投资及高额投资等各种方法的各自特点与优势和劣势，根据每位客户的实际情况和预算制定个性化永住权路线图。专业团队全程助力您顺利实现韩国永久定居的目标。" },
    ja: { title: "永住権戦略 - VISION行政書士事務所", description: "韓国永住権取得のための最適な投資戦略とルートについて総合的にご案内をいたします。不動産投資移民や公益事業投資、高額投資などの多様な方法を比較分析したうえで、お客様のご状況に合わせたオーダーメイドの永住権の取得ロードマップをご提案いたします。" },
  },
  immigrationRealEstate: {
    ko: { title: "부동산 투자이민 - VISION 행정사사무소", description: "부동산 투자를 통한 한국 이민 및 F-5 영주권 취득 방법을 안내합니다. 제주도, 평창, 인천경제자유구역 등 투자이민 지정 지역별 투자 금액 조건과 체류자격 변경 절차를 상세히 설명합니다. 전문가 무료 상담 가능합니다." },
    en: { title: "Real Estate Investment Immigration - VISION", description: "Get F-5 residency through Korean real estate investment in designated zones like Jeju, Pyeongchang, and Incheon FEZ. Covers amounts, types, and visa conversion." },
    zh: { title: "房地产投资移民 - VISION行政士事务所", description: "通过房地产投资移民韩国并取得F-5永住权的详细指南。全面介绍济州岛、平昌和仁川经济自由区等投资移民指定地区的各最低投资金额条件及居留资格变更手续的详细流程说明。专业行政士随时提供免费咨询服务，全程协助您顺利完成房地产投资移民韩国的全部手续。" },
    ja: { title: "不動産投資移民 - VISION行政書士事務所", description: "不動産投資による韓国移民およびF-5永住権取得の方法を詳しくご案内いたします。済州島や平昌、仁川経済自由区域などの投資移民の指定地域ごとの投資金額の条件と在留資格変更手続きを丁寧にご説明いたします。専門家による無料相談を受け付けております。" },
  },
  immigrationPublicInterest: {
    ko: { title: "공익사업 투자이민 - VISION 행정사사무소", description: "공익사업 투자를 통한 한국 이민 및 F-5 영주권 취득 방법을 안내합니다. 정부 지정 공익사업(법무부 고시)에 5억 원 이상 투자하면 영주권 신청 자격이 부여됩니다. 투자 대상과 심사 절차, 유의사항을 전문가가 안내합니다." },
    en: { title: "Public Interest Investment Immigration - VISION", description: "Gain Korean PR by investing KRW 500M+ in government public interest projects. Covers eligible targets, MOJ requirements, review steps, and key considerations." },
    zh: { title: "公益事业投资移民 - VISION行政士事务所", description: "通过公益事业投资移民韩国并取得F-5永住权的详细方法指南。向韩国政府所指定的公益事业类别（法务部公告的项目）投资5亿韩元以上即可获得永住权的正式申请资格。投资对象的选择方法、审查流程详解和注意事项，由专业行政士为您进行全面详细的指导和咨询。" },
    ja: { title: "公益事業投資移民 - VISION行政書士事務所", description: "公益事業投資による韓国移民およびF-5永住権取得の方法を詳しくご案内いたします。政府指定の公益事業（法務部告示）に5億ウォン以上を投資することで永住権の申請資格が付与されます。投資対象や審査手続きなどの重要な注意事項を専門家がご案内します。" },
  },
  about: {
    ko: { title: "회사소개 - VISION 행정사사무소", description: "VISION 비전행정사사무소는 15년 이상 경력의 전문 행정사가 외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권 취득을 종합 지원하는 서울 소재의 전문 컨설팅 사무소입니다. 다국어 상담과 원스톱 서비스를 제공합니다." },
    en: { title: "About Us - VISION Administrative Office", description: "VISION is a Seoul-based consulting firm with 15+ years in foreign investment, D-8/D-7 visas, F-5 residency, and company setup. Multilingual one-stop service." },
    zh: { title: "公司介绍 - VISION行政士事务所", description: "VISION行政士事务所是位于首尔的专业咨询机构，拥有15年以上丰富实务经验的资深专家团队。提供外国人投资法人设立、D-8和D-7签证申请办理、F-5永住权取得等全面综合支援服务，支持韩语、英语、中文和日语的多语言咨询以及一站式全程代办服务。" },
    ja: { title: "会社紹介 - VISION行政書士事務所", description: "VISION行政書士事務所はソウルに所在する専門コンサルティング事務所です。15年以上の豊富な経験を持つベテラン行政書士が外国人投資法人設立やD-8・D-7ビザ申請、F-5永住権取得などを総合的に支援。多言語対応のワンストップサービスを提供します。" },
  },
  blog: {
    ko: { title: "블로그 - VISION 행정사사무소", description: "외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권, 부동산 투자이민에 관한 최신 법령 변경 사항과 실무 가이드를 제공하는 전문 블로그입니다. 전문 행정사가 직접 작성하는 신뢰할 수 있는 유용한 정보를 확인하세요." },
    en: { title: "Blog - VISION Administrative Office", description: "Latest regulatory updates and practical guides on foreign investment, D-8/D-7 visas, F-5 residency, and real estate immigration in Korea. Expert insights." },
    zh: { title: "博客 - VISION行政士事务所", description: "提供有关外国人投资法人设立、D-8和D-7签证、F-5永住权、房地产投资移民的最新法规变更动态和实务操作指南。所有文章均由拥有15年以上从业经验的资深专业行政士亲自撰写，内容可靠且权威，助您及时掌握韩国投资移民领域的最新政策变化和重要实用信息。" },
    ja: { title: "ブログ - VISION行政書士事務所", description: "外国人投資法人設立、D-8やD-7ビザ、F-5永住権、不動産投資移民に関する最新の法令改正の情報と実務ガイドをお届けする専門ブログです。15年以上の豊富な実務経験を持つ専門の行政書士が直接執筆した信頼性の高い有益な情報をぜひご確認ください。" },
  },
  contact: {
    ko: { title: "문의하기 - VISION 행정사사무소", description: "외국인 투자법인 설립, D-8·D-7 비자, F-5 영주권, 부동산 투자이민에 관한 무료 상담을 신청하세요. 한국어·영어·중국어·일본어로 대응 가능한 전문 행정사 팀이 접수 후 24시간 이내에 친절하게 답변해 드립니다." },
    en: { title: "Contact Us - VISION Administrative Office", description: "Request a free consultation on foreign investment, D-8/D-7 visas, F-5 residency, or real estate immigration. Multilingual team responds within 24 hours." },
    zh: { title: "联系我们 - VISION行政士事务所", description: "请申请有关外国人投资法人设立、D-8和D-7签证办理、F-5永住权和房地产投资移民的免费咨询服务。支持韩语、英语、中文和日语的多语言服务的专业行政士团队将在收到咨询后的24小时内为您提供热情且详细的解答，帮助您全面解决所有相关投资移民疑问。" },
    ja: { title: "お問い合わせ - VISION行政書士事務所", description: "外国人投資法人設立、D-8やD-7ビザ、F-5永住権、不動産投資移民に関する無料相談をお気軽にお申し込みください。韓国語・英語・中国語・日本語に対応する専門の行政書士チームが受付から24時間以内に丁寧にお答えいたします。お待ちしております。" },
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
