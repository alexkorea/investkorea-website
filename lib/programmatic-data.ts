export const countries = [
  { slug: 'china', name: '중국', nameEn: 'China', nameLocal: '中国', flag: '🇨🇳' },
  { slug: 'vietnam', name: '베트남', nameEn: 'Vietnam', nameLocal: 'Việt Nam', flag: '🇻🇳' },
  { slug: 'japan', name: '일본', nameEn: 'Japan', nameLocal: '日本', flag: '🇯🇵' },
  { slug: 'usa', name: '미국', nameEn: 'USA', nameLocal: 'United States', flag: '🇺🇸' },
  { slug: 'india', name: '인도', nameEn: 'India', nameLocal: 'भारत', flag: '🇮🇳' },
  { slug: 'philippines', name: '필리핀', nameEn: 'Philippines', nameLocal: 'Pilipinas', flag: '🇵🇭' },
  { slug: 'thailand', name: '태국', nameEn: 'Thailand', nameLocal: 'ไทย', flag: '🇹🇭' },
  { slug: 'indonesia', name: '인도네시아', nameEn: 'Indonesia', nameLocal: 'Indonesia', flag: '🇮🇩' },
  { slug: 'taiwan', name: '대만', nameEn: 'Taiwan', nameLocal: '台灣', flag: '🇹🇼' },
  { slug: 'singapore', name: '싱가포르', nameEn: 'Singapore', nameLocal: 'Singapore', flag: '🇸🇬' },
  { slug: 'hongkong', name: '홍콩', nameEn: 'Hong Kong', nameLocal: '香港', flag: '🇭🇰' },
  { slug: 'malaysia', name: '말레이시아', nameEn: 'Malaysia', nameLocal: 'Malaysia', flag: '🇲🇾' },
  { slug: 'germany', name: '독일', nameEn: 'Germany', nameLocal: 'Deutschland', flag: '🇩🇪' },
  { slug: 'uk', name: '영국', nameEn: 'UK', nameLocal: 'United Kingdom', flag: '🇬🇧' },
  { slug: 'france', name: '프랑스', nameEn: 'France', nameLocal: 'France', flag: '🇫🇷' },
  { slug: 'canada', name: '캐나다', nameEn: 'Canada', nameLocal: 'Canada', flag: '🇨🇦' },
  { slug: 'australia', name: '호주', nameEn: 'Australia', nameLocal: 'Australia', flag: '🇦🇺' },
  { slug: 'russia', name: '러시아', nameEn: 'Russia', nameLocal: 'Россия', flag: '🇷🇺' },
  { slug: 'mongolia', name: '몽골', nameEn: 'Mongolia', nameLocal: 'Монгол', flag: '🇲🇳' },
  { slug: 'uzbekistan', name: '우즈베키스탄', nameEn: 'Uzbekistan', nameLocal: "O'zbekiston", flag: '🇺🇿' },
]

export const visaTypes = [
  {
    slug: 'd8',
    code: 'D-8',
    name: '투자비자',
    nameEn: 'Investment Visa',
    minInvestment: '1억원 이상',
    duration: '최대 2년 (연장 가능)',
    keyBenefit: 'F-5 영주권 전환 가능',
    description: '외국인이 한국에 1억원 이상 투자하여 법인을 설립하고 경영하는 경우 발급',
  },
  {
    slug: 'd7',
    code: 'D-7',
    name: '주재원비자',
    nameEn: 'Intra-company Transfer Visa',
    minInvestment: '해당 없음',
    duration: '최대 2년 (연장 가능)',
    keyBenefit: '가족 동반 체류 가능 (F-3)',
    description: '해외 본사에서 1년 이상 근무 후 한국 지사로 파견되는 경우 발급',
  },
]

export type Country = (typeof countries)[number]
export type VisaType = (typeof visaTypes)[number]

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug)
}

export function getVisaType(slug: string): VisaType | undefined {
  return visaTypes.find((v) => v.slug === slug)
}
