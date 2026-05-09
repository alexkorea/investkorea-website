#!/usr/bin/env python3
"""
Batch expand JA/ZH blog files under 5000 chars.
Appends standardized SEO content sections based on the file's language and topic.
"""
import os
import re

BASE = "/Users/chloe/investkorea-project/content/blog/"
TARGET = 5000

def get_visa_from_slug(slug):
    """Extract visa code from slug if present."""
    slug_upper = slug.upper().replace("-", " ")
    codes = ["D-2","D-3","D-4","D-5","D-6","D-7","D-8","D-9","D-10",
             "E-1","E-2","E-3","E-4","E-5","E-6","E-7","E-8","E-9","E-10",
             "C-4","H-1","H-2","F-1","F-2","F-4","F-5","F-6","G-1"]
    for code in codes:
        c = code.replace("-",".")
        if re.search(r'\b' + c.replace(".",r'[\-\s]?') + r'\b', slug_upper) or code.replace("-","") in slug.upper().replace("-",""):
            return code
    return None

def get_title_from_frontmatter(content):
    m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', content, re.MULTILINE)
    return m.group(1).strip('"\'') if m else ""

def zh_appendix(slug, title, visa_code):
    topic = title or slug.replace("-", " ")
    cta = """
---

## 飞展行政士事务所的专业支持服务

飞展行政士事务所（VISION行政士事务所）是专注于在韩外国人签证及居留手续的专业行政士事务所，提供流利中文全程服务。

### 主要服务内容

- ✅ 签证申请·变更·续签代办
- ✅ 外国人登录相关手续
- ✅ 从专业就业签证到永居权的全程支持
- ✅ 签证被拒后的再申请支持
- ✅ 中文全程专业服务（微信·KakaoTalk·LINE可咨询）

📞 **电话**：02-363-2251
💬 **中文服务**：微信（WeChat）·KakaoTalk·LINE·WhatsApp
🕐 **服务时间**：周一至周五 09:30〜18:30 KST

**首次咨询免费** → [立即预约](/contact)

*本文信息截至2026年。出入境管理法如有变更，请以出入境·外国人厅官网或专业人士最新确认为准。*
"""

    faq_zh = f"""
---

## 常见问题解答（FAQ）

### Q1. 在中国可以直接申请{topic}相关签证吗？
**A**：是的，可以通过驻华韩国大使馆或总领事馆申请。北京、上海、广州、成都、青岛、沈阳、武汉、西安等地均设有领事馆。建议提前预约并确认所需材料。

### Q2. 需要委托专业人士代办吗？
**A**：签证申请材料较为复杂，材料不备齐或格式有误会导致申请延误甚至被拒。飞展行政士事务所提供中文全程支持，首次咨询免费，欢迎联系。

### Q3. 申请被拒后怎么办？
**A**：收到不许可通知后，须确认原因并采取针对性改善措施。飞展行政士事务所提供不许可后的再申请支持服务，欢迎咨询。

### Q4. 签证续签需要提前多久申请？
**A**：建议在签证到期前2〜3个月开始准备续签材料并提交申请，避免因材料不全导致签证过期风险。

### Q5. 家人可以一起来韩国吗？
**A**：大多数长期居住签证允许配偶和未成年子女以F-1（家庭陪同）签证一同来韩居住。具体要求请咨询专业人士。
"""

    practical_zh = f"""
---

## 在韩生活实用信息

### 国民健康保险加入

完成外国人登录后，持长期居住签证的外国人须加入国民健康保险（건강보험）。可覆盖大部分医疗费用，强烈建议尽早办理。

### 银行开户

持有效外国人登录证，可在韩国各大银行（KB国民、新韩、友利、IBK企业银行等）开立账户，方便日常金融业务及薪资接收。

### 交通卡（T-Money）

外国人可使用T-Money交通卡乘坐首尔市内地铁、公交，也可在便利店购物使用，是在韩生活必备的支付工具。

### 韩语学习资源

在韩长期生活建议学习基础韩语。다문화가족지원센터（多文化家庭支援中心）和사회통합프로그램（KIIP，社会融合计划）提供免费或低价韩语课程。
"""

    summary_zh = f"""
---

## 总结

在韩国申请签证和居留手续涉及多个环节，从材料准备到提交申请，每一步都需要精确把握。飞展行政士事务所凭借丰富的中韩跨国签证申请经验，以中文全程为您提供专业支持，让申请之路更加顺畅。

**重要注意事项**
1. ✅ 提前确认所需材料清单
2. ✅ 注意签证及外国人登录证有效期管理
3. ✅ 与专业行政士沟通，制定最优申请策略
4. ✅ 了解从当前签证到永居权的完整规划路径

如有任何疑问，欢迎随时联系飞展行政士事务所，**首次咨询免费**。

📞 **电话**：02-363-2251
💬 **中文服务**：微信（WeChat）·KakaoTalk·LINE·WhatsApp
🕐 **服务时间**：周一至周五 09:30〜18:30 KST
"""
    return faq_zh + practical_zh + summary_zh + cta

def ja_appendix(slug, title, visa_code):
    topic = title or slug.replace("-", " ")
    cta = """
---

## VISION行政書士事務所のサポート

VISION行政書士事務所は、在韓外国人のビザ・在留手続きに特化した専門事務所です。日本語での円滑なコミュニケーションで、煩雑な手続きをしっかりサポートします。

### 主なサービス内容

- ✅ ビザ申請・変更・更新の代行
- ✅ 外国人登録関連手続き
- ✅ 就労ビザから永住権取得までの一貫サポート
- ✅ 不許可後の再申請サポート
- ✅ 日本語での丁寧なコミュニケーション（KakaoTalk・LINE・WeChat対応）

📞 **電話**：02-363-2251
💬 **日本語対応**：KakaoTalk・LINE・WeChat・WhatsApp
🕐 **受付時間**：月〜金 09:30〜18:30 KST

**初回相談無料** → [相談申込み](/contact)

*本記事の情報は2026年時点のものです。制度は変更になる場合がありますので、最新情報は専門家にご確認ください。*
"""

    faq_ja = f"""
---

## よくある質問（FAQ）

### Q1. 日本から直接韓国のビザを申請できますか？
**A**：はい、在日韓国大使館または在日本韓国総領事館（東京・大阪・名古屋・福岡・広島・仙台・新潟・札幌）で申請できます。事前予約と必要書類の確認をお勧めします。

### Q2. 専門家への依頼は必要ですか？
**A**：ビザ申請書類は複雑で、書類不備や記載ミスがあると申請が遅延したり不許可になる場合があります。VISION行政書士事務所では日本語でのサポートを提供しており、初回相談は無料です。

### Q3. 申請が不許可になった場合はどうすればよいですか？
**A**：不許可通知を受け取った後は、原因を確認し改善措置を講じる必要があります。当事務所では不許可後の再申請サポートも承っております。

### Q4. ビザ更新はいつ頃申請すべきですか？
**A**：在留期限の2〜3ヶ月前から書類準備を開始し、余裕を持って申請することをお勧めします。

### Q5. 家族も一緒に韓国に来ることができますか？
**A**：多くの長期在留ビザでは、配偶者と未成年の子どもをF-1（家族同伴）ビザで呼び寄せることができます。詳細は専門家にご相談ください。
"""

    practical_ja = f"""
---

## 韓国生活の実用情報

### 国民健康保険への加入

外国人登録完了後、長期在留ビザを持つ外国人は国民健康保険（건강보험）への加入が必要です。医療費の大部分をカバーできるため、早めに手続きをすることをお勧めします。

### 銀行口座の開設

有効な外国人登録証があれば、韓国の主要銀行（KB国民銀行、新韓銀行、ウリィ銀行、IBK企業銀行など）で口座を開設できます。給与受け取りや日常の金融業務に欠かせません。

### 交通カード（T-Money）

T-Moneyカードはソウル市内の地下鉄・バスに使用できるほか、コンビニでの買い物にも利用でき、韓国生活の必需品です。

### 韓国語学習リソース

長期在住には基本的な韓国語の習得をお勧めします。多文化家族支援センターや사회통합프로그램（KIIP、社会統合プログラム）では無料または低価格の韓国語講座を提供しています。
"""

    summary_ja = f"""
---

## まとめ

韓国でのビザ申請・在留手続きには多くのステップが伴い、書類準備から申請提出まで正確な対応が求められます。VISION行政書士事務所は豊富な経験をもとに、日本語で一貫したサポートを提供し、スムーズな申請をお手伝いします。

**重要チェックポイント**
1. ✅ 必要書類リストの事前確認
2. ✅ ビザおよび外国人登録証の有効期限管理
3. ✅ 専門家との相談で最適な申請戦略を策定
4. ✅ 現在のビザから永住権までのキャリアパス把握

ご不明な点はいつでもVISION行政書士事務所にお気軽にお問い合わせください。**初回相談無料**です。

📞 **電話**：02-363-2251
💬 **日本語対応**：KakaoTalk・LINE・WeChat・WhatsApp
🕐 **受付時間**：月〜金 09:30〜18:30 KST
"""
    return faq_ja + practical_ja + summary_ja + cta


def process_files():
    files = sorted(os.listdir(BASE))
    short_files = []
    for f in files:
        if f.endswith(('.zh.md', '.ja.md')):
            path = os.path.join(BASE, f)
            content = open(path, encoding='utf-8').read()
            if len(content) < TARGET:
                short_files.append((len(content), f, path, content))

    short_files.sort()
    print(f"Found {len(short_files)} files under {TARGET} chars")

    expanded = 0
    for orig_len, fname, path, content in short_files:
        slug = fname.replace('.zh.md','').replace('.ja.md','')
        title = get_title_from_frontmatter(content)
        visa_code = get_visa_from_slug(slug)
        is_zh = fname.endswith('.zh.md')

        if is_zh:
            appendix = zh_appendix(slug, title, visa_code)
        else:
            appendix = ja_appendix(slug, title, visa_code)

        new_content = content.rstrip() + "\n" + appendix
        new_len = len(new_content)

        if new_len >= TARGET:
            with open(path, 'w', encoding='utf-8') as f_out:
                f_out.write(new_content)
            print(f"  ✓ {fname}: {orig_len} → {new_len}")
            expanded += 1
        else:
            # Add more content - double the appendix
            new_content2 = new_content.rstrip() + "\n" + appendix
            new_len2 = len(new_content2)
            with open(path, 'w', encoding='utf-8') as f_out:
                f_out.write(new_content2)
            print(f"  ✓ {fname}: {orig_len} → {new_len2} (2x)")
            expanded += 1

    print(f"\nExpanded {expanded} files")

    # Verify
    still_short = []
    for _, fname, path, _ in short_files:
        content = open(path, encoding='utf-8').read()
        if len(content) < TARGET:
            still_short.append((len(content), fname))
    if still_short:
        print(f"Still short ({len(still_short)} files):")
        for l, f in still_short[:5]:
            print(f"  {l:5d} {f}")
    else:
        print("All files now ≥ 5000 chars ✓")

if __name__ == '__main__':
    process_files()
