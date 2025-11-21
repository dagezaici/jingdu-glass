import { AuditItem, Product } from '../types';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      catalog: 'Products',
      strength: 'Factory Strength',
      process: 'Process',
      ai: 'AI Consultant',
      audit: 'Site Analysis',
      quote: 'Get Quote',
    },
    mobile: {
      call: 'Call',
      email: 'Email',
      inquiry: 'Inquiry Now'
    },
    hero: {
      iso: 'ISO 9001 & BSCI Verified Manufacturer',
      title1: 'Crafting Clarity,',
      title2: 'Delivering Warmth',
      subtitle: 'Your premier partner for high-borosilicate glassware. From concept design to mass production, we supply global brands with heat-resistant cups, teapots, and storage solutions.',
      cta_catalog: 'View 2025 Catalog',
      cta_ai: 'Start OEM Project',
      stats: {
        quality: 'Lead-Free / BPA Free',
        export: 'Export to 40+ Countries',
        production: 'Daily Output 15,000+'
      }
    },
    strength: {
      title: 'Why Brands Choose Jingdu Glass',
      subtitle: 'We don\'t just manufacture glass; we provide supply chain security.',
      items: [
        { title: 'Mass Production', desc: '15,000㎡ facility with 5 automatic lines ensures stability for large orders.' },
        { title: 'R&D Innovation', desc: '10+ years experience in mold opening. We launch 20+ new designs monthly.' },
        { title: 'Quality Control', desc: 'Strict annealing process eliminates internal stress to prevent breakage.' },
        { title: 'Global Logistics', desc: 'Experienced in color-box packaging and drop-test standards for Amazon sellers.' }
      ]
    },
    audit: {
      title: 'Website Conversion Analysis',
      subtitle: 'How this redesign improves your Paid Ads (ROI) performance:',
      problem: 'Old Site Weakness',
      solution: 'New Site Strength',
      items: [
        {
          id: '1',
          title: 'Trust & Credibility',
          issue: 'Simple/Sparse designs make buyers worry about "Ghost Factories".',
          solution: 'Added "Top Bar" with contacts & "Factory Strength" data to prove authenticity.',
          impact: 'High'
        },
        {
          id: '2',
          title: 'Emotional Connection',
          issue: 'Cold/Dark colors feel like industrial machinery, not lifestyle products.',
          solution: 'Warm Amber & Teal colors evoke the feeling of a cozy tea time.',
          impact: 'High'
        },
         {
          id: '3',
          title: 'Information Density',
          issue: 'Lack of details leads to high bounce rates from paid ads.',
          solution: 'Added "Craftsmanship" steps and visual metrics to hold attention.',
          impact: 'Medium'
        },
        {
          id: '4',
          title: 'Call to Action',
          issue: 'Hard-to-find contact info kills conversion.',
          solution: 'Sticky navigation with a prominent "Get Quote" button.',
          impact: 'High'
        }
      ] as AuditItem[]
    },
    products: {
      title: 'Signature Collections',
      subtitle: 'High-margin products designed for Coffee Shops, Hotels, and Retail.',
      request: 'Inquire MOQ & Price',
      items: [
        {
          id: '1',
          title: 'Double Wall Glass',
          category: 'Best Seller',
          description: 'The market favorite. Insulated design keeps drinks hot without burning hands. Mouth-blown borosilicate glass.',
          image: 'https://images.unsplash.com/photo-1595981266688-97e92f170ccf?q=80&w=2000&auto=format&fit=crop',
          specs: ['Capacity: 80ml - 450ml', 'Safety: Microwave Safe', 'Logo: High-temp Decal'],
        },
        {
          id: '2',
          title: 'Borosilicate Teapot',
          category: 'Premium Tea Sets',
          description: 'Elegant transparency with stainless steel or glass infusers. Perfect for blooming teas and loose leaf.',
          image: 'https://images.unsplash.com/photo-1578859048632-5075297d7488?q=80&w=2000&auto=format&fit=crop',
          specs: ['Resist: -20°C to 150°C', 'Feature: Non-drip Spout', 'Set: Pot + Warmer + Cups'],
        },
        {
          id: '3',
          title: 'Minimalist Pitcher',
          category: 'Dining & Hospitality',
          description: 'Large capacity water carafes with tight-seal lids. Fits perfectly in refrigerator doors.',
          image: 'https://images.unsplash.com/photo-1585889675362-4e76d62f9d28?q=80&w=1974&auto=format&fit=crop',
          specs: ['Lid: Bamboo / SS304', 'Type: Mouth Blown', 'Test: LFGB / FDA'],
        },
      ] as Product[]
    },
    ai: {
      title: '24/7 Sales Consultant',
      desc: 'Ask about customization, pricing, or shipping immediately.',
      placeholder: 'e.g., I need 1000pcs double wall cups with my logo.',
      suggestions: ['What is your MOQ?', 'Do you offer DDP shipping?', 'Can you make custom molds?'],
      offline: 'System offline. Please email us.',
      ask_another: 'New Inquiry',
      try_asking: 'Try asking:',
    },
    contact: {
      title: 'Start Your Order',
      name: 'Name',
      email: 'Email',
      details: 'Product details...',
      submit: 'Send Request',
      addr: 'Jingdu Glass Ind. Zone, Hejian, Hebei, China',
      email_addr: 'sales@jingduglassfactory.com',
      phone_num: '+86-317-555-8888'
    }
  },
  zh: {
    nav: {
      home: '首页',
      catalog: '产品中心',
      strength: '工厂实力',
      process: '工艺流程',
      ai: 'AI 顾问',
      audit: '改版分析',
      quote: '获取报价',
    },
    mobile: {
      call: '拨打电话',
      email: '发送邮件',
      inquiry: '立即询价'
    },
    hero: {
      iso: '源头工厂 · ISO9001 / BSCI 认证',
      title1: '不仅是玻璃',
      title2: '更是生活的艺术',
      subtitle: '20年专注高硼硅耐热玻璃制造。从双层杯到耐热茶具，为全球品牌提供从设计、开模到出口的一站式解决方案。',
      cta_catalog: '查看2025新品目录',
      cta_ai: 'OEM/ODM 定制咨询',
      stats: {
        quality: '食品级安全材质',
        export: '出口欧美40+国家',
        production: '日产 15,000+ 只'
      }
    },
    strength: {
      title: '为什么选择京度玻璃？',
      subtitle: '在B2B贸易中，稳定性和专业度是关键。我们用数据说话。',
      items: [
        { title: '规模产能', desc: '15,000平米厂房，5条自动化生产线，应对旺季大单毫无压力。' },
        { title: '研发定制', desc: '自有模具车间，10年经验师傅打样。每月推出20+款专利新品。' },
        { title: '严苛品控', desc: '严格的退火工艺消除内应力，破损率远低于行业标准。' },
        { title: '外贸服务', desc: '熟悉亚马逊/沃尔玛包装标准，提供彩盒设计及DDP物流服务。' }
      ]
    },
    audit: {
      title: '网站改版分析报告',
      subtitle: '针对您的“付费推广转化率”担忧，我们做了以下核心升级：',
      problem: '原版不足',
      solution: '升级策略',
      items: [
        {
          id: '1',
          title: '建立信任感',
          issue: '过于简约/空白的页面会让买家怀疑工厂的真实规模，导致跳出率高。',
          solution: '增加了“工厂实力”数据、“顶部联系栏”及资质背书，展示大厂风范。',
          impact: '高'
        },
        {
          id: '2',
          title: '情绪价值',
          issue: '冷色调或深色模式显得压抑，不符合日用家居品的温馨属性。',
          solution: '采用暖琥珀色（茶色）配合清透蓝，激发客户的采购欲望。',
          impact: '高'
        },
         {
          id: '3',
          title: '信息丰富度',
          issue: '信息稀少会让客户觉得“没东西看”，无法支撑高客单价的B2B询盘。',
          solution: '增加了工艺流程图和详细的产品参数，用专业度征服客户。',
          impact: '中'
        },
        {
          id: '4',
          title: '询盘转化',
          issue: '联系方式不明显是B2B网站的大忌。',
          solution: '全站置顶电话/邮箱，悬浮“获取报价”按钮，降低联系门槛。',
          impact: '高'
        }
      ] as AuditItem[]
    },
    products: {
      title: '热销产品推荐',
      subtitle: '专为品牌商、礼品公司及电商卖家打造的爆款系列。',
      request: '咨询出厂价',
      items: [
        {
          id: '1',
          title: '手工双层玻璃杯',
          category: '销量冠军',
          description: '经典中空隔热设计，冷饮不挂珠，热饮不烫手。纯手工吹制，通透轻盈。',
          image: 'https://images.unsplash.com/photo-1595981266688-97e92f170ccf?q=80&w=2000&auto=format&fit=crop',
          specs: ['容量: 80ml - 450ml', '特性: 可微波炉/洗碗机', '工艺: 高温烤花Logo'],
        },
        {
          id: '2',
          title: '高硼硅耐热茶具',
          category: '高端礼品',
          description: '极简线条设计，搭配玻璃或304不锈钢内胆。适合花茶、普洱等多种场景。',
          image: 'https://images.unsplash.com/photo-1578859048632-5075297d7488?q=80&w=2000&auto=format&fit=crop',
          specs: ['耐温: -20°C 至 150°C', '设计: 鹰嘴防挂水', '配置: 壶+底座+杯'],
        },
        {
          id: '3',
          title: '北欧风冷水壶',
          category: '家居日用',
          description: '大口径易清洗，出水流畅。不锈钢/竹木盖可选，密封性好。',
          image: 'https://images.unsplash.com/photo-1585889675362-4e76d62f9d28?q=80&w=1974&auto=format&fit=crop',
          specs: ['盖子: 竹木 / 304钢', '工艺: 人工吹制', '认证: FDA / LFGB'],
        },
      ] as Product[]
    },
    ai: {
      title: 'AI 业务经理',
      desc: '24小时在线解答关于起订量、开模费用及货期的问题。',
      placeholder: '例如：定做1000个带Logo的双层杯多少钱？',
      suggestions: ['定制Logo的起订量是多少?', '含税含运费到美国多少钱?', '可以根据图纸开模吗?'],
      offline: '系统繁忙，请邮件联系。',
      ask_another: '继续咨询',
      try_asking: '您可以问：',
    },
    contact: {
      title: '开始您的定制项目',
      name: '您的称呼',
      email: '电子邮箱',
      details: '需求详情 (产品、数量、包装)...',
      submit: '发送询盘',
      addr: '中国河北省河间市京度玻璃工业园',
      email_addr: 'sales@jingduglassfactory.com',
      phone_num: '+86-317-555-8888'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      catalog: 'Produkte',
      strength: 'Fabrik',
      process: 'Prozess',
      ai: 'KI-Berater',
      audit: 'Analyse',
      quote: 'Angebot',
    },
    mobile: {
      call: 'Anruf',
      email: 'E-Mail',
      inquiry: 'Anfrage'
    },
    hero: {
      iso: 'ISO 9001 & BSCI Zertifiziert',
      title1: 'Glas in Perfektion,',
      title2: 'Wärme für Ihr Zuhause',
      subtitle: 'Ihr Premium-Partner für Borosilikatglas. Von Design bis Massenproduktion liefern wir hitzebeständige Gläser und Teekannen weltweit.',
      cta_catalog: 'Katalog 2025',
      cta_ai: 'OEM Projekt starten',
      stats: {
        quality: 'Lebensmittelecht',
        export: 'Export in 40+ Länder',
        production: 'Täglich 15.000+'
      }
    },
    strength: {
      title: 'Warum Jingdu Glass wählen?',
      subtitle: 'Wir bieten nicht nur Glas, sondern Sicherheit für Ihre Lieferkette.',
      items: [
        { title: 'Massenproduktion', desc: '15.000m² Anlage mit 5 Linien garantiert Stabilität.' },
        { title: 'F&E Innovation', desc: '10+ Jahre Erfahrung im Formenbau. 20+ neue Designs monatlich.' },
        { title: 'Qualitätskontrolle', desc: 'Strenger Temperprozess verhindert Glasbruch.' },
        { title: 'Globale Logistik', desc: 'Erfahrung mit Amazon-Verpackungsstandards und Falltests.' }
      ]
    },
    audit: {
      title: 'Webseiten-Konversionsanalyse',
      subtitle: 'Wie dieses Redesign Ihren ROI verbessert:',
      problem: 'Altes Problem',
      solution: 'Neue Lösung',
      items: [
        {
          id: '1',
          title: 'Vertrauen',
          issue: 'Zu einfache Seiten wirken unseriös auf Einkäufer.',
          solution: 'Top-Leiste mit Kontakten & Fabrikdaten hinzugefügt.',
          impact: 'Hoch'
        },
        {
          id: '2',
          title: 'Emotion',
          issue: 'Kalte Farben wirken industriell, nicht einladend.',
          solution: 'Warme Bernstein-Töne wecken Kaufinteresse.',
          impact: 'Hoch'
        },
         {
          id: '3',
          title: 'Information',
          issue: 'Wenig Details führen zu hohen Absprungraten.',
          solution: 'Prozessschritte und Metriken hinzugefügt.',
          impact: 'Mittel'
        },
        {
          id: '4',
          title: 'Handlungsaufforderung',
          issue: 'Schwer zu findende Kontakte.',
          solution: 'Fixierte Navigation mit "Angebot"-Button.',
          impact: 'Hoch'
        }
      ] as AuditItem[]
    },
    products: {
      title: 'Unsere Kollektionen',
      subtitle: 'Bestseller für Handel, Gastronomie und Online-Verkäufer.',
      request: 'Preis & MOQ anfragen',
      items: [
        {
          id: '1',
          title: 'Doppelwandiges Glas',
          category: 'Bestseller',
          description: 'Isoliert Getränke, schützt Hände. Mundgeblasenes Borosilikatglas.',
          image: 'https://images.unsplash.com/photo-1595981266688-97e92f170ccf?q=80&w=2000&auto=format&fit=crop',
          specs: ['Kapazität: 80-450ml', 'Mikrowellengeeignet', 'Logo: Hochtemperatur'],
        },
        {
          id: '2',
          title: 'Borosilikat Teekanne',
          category: 'Premium Tee',
          description: 'Elegante Transparenz. Perfekt für blühenden Tee.',
          image: 'https://images.unsplash.com/photo-1578859048632-5075297d7488?q=80&w=2000&auto=format&fit=crop',
          specs: ['Temp: -20°C bis 150°C', 'Tropffreier Ausgießer', 'Set: Kanne + Tassen'],
        },
        {
          id: '3',
          title: 'Minimalistische Karaffe',
          category: 'Wohnen',
          description: 'Große Wasserkaraffe mit dichtem Deckel. Passt in Kühlschrenktüren.',
          image: 'https://images.unsplash.com/photo-1585889675362-4e76d62f9d28?q=80&w=1974&auto=format&fit=crop',
          specs: ['Deckel: Bambus / SS304', 'Mundgeblasen', 'LFGB / FDA Konform'],
        },
      ] as Product[]
    },
    ai: {
      title: '24/7 Vertriebsberater',
      desc: 'Fragen Sie sofort nach Anpassungen oder Preisen.',
      placeholder: 'z.B. Ich brauche 1000 Gläser mit meinem Logo.',
      suggestions: ['Was ist Ihr MOQ?', 'Bieten Sie DDP-Versand?', 'Können Sie Formen anpassen?'],
      offline: 'System offline. Bitte E-Mail senden.',
      ask_another: 'Neue Anfrage',
      try_asking: 'Versuchen Sie:',
    },
    contact: {
      title: 'Projekt starten',
      name: 'Name',
      email: 'E-Mail',
      details: 'Details...',
      submit: 'Anfrage senden',
      addr: 'Jingdu Glass Zone, Hejian, China',
      email_addr: 'sales@jingduglassfactory.com',
      phone_num: '+86-317-555-8888'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      catalog: 'المنتجات',
      strength: 'المصنع',
      process: 'العملية',
      ai: 'مستشار AI',
      audit: 'تحليل',
      quote: 'اقتباس',
    },
    mobile: {
      call: 'اتصال',
      email: 'بريد',
      inquiry: 'استفسار'
    },
    hero: {
      iso: 'مصنع معتمد ISO 9001 & BSCI',
      title1: 'صناعة الصفاء،',
      title2: 'تقديم الدفء',
      subtitle: 'شريكك الأول للأواني الزجاجية عالية البورسليكات. من التصميم إلى الإنتاج الضخم، نورد للعلامات التجارية العالمية.',
      cta_catalog: 'كتالوج 2025',
      cta_ai: 'مشروع OEM',
      stats: {
        quality: 'خالي من الرصاص / BPA',
        export: 'تصدير لـ 40+ دولة',
        production: 'إنتاج يومي 15,000+'
      }
    },
    strength: {
      title: 'لماذا تختار زجاج Jingdu',
      subtitle: 'نحن لا نصنع الزجاج فحسب؛ نحن نوفر أمان سلسلة التوريد.',
      items: [
        { title: 'الإنتاج الضخم', desc: 'منشأة 15,000م² مع 5 خطوط تضمن الاستقرار للطلبات الكبيرة.' },
        { title: 'ابتكار البحث والتطوير', desc: 'خبرة 10+ سنوات في فتح القوالب. نطلق 20+ تصميم شهريًا.' },
        { title: 'مراقبة الجودة', desc: 'عملية تلدين صارمة تقضي على الإجهاد الداخلي لمنع الكسر.' },
        { title: 'اللوجستيات العالمية', desc: 'خبرة في تغليف الصناديق الملونة ومعايير أمازون.' }
      ]
    },
    audit: {
      title: 'تحليل تحويل الموقع',
      subtitle: 'كيف يحسن هذا التصميم عائد الاستثمار للإعلانات:',
      problem: 'مشكلة قديمة',
      solution: 'حل جديد',
      items: [
        {
          id: '1',
          title: 'الثقة والمصداقية',
          issue: 'التصاميم البسيطة تجعل المشترين يقلقون بشأن "المصانع الوهمية".',
          solution: 'إضافة "الشريط العلوي" وبيانات "قوة المصنع" لإثبات الأصالة.',
          impact: 'عالي'
        },
        {
          id: '2',
          title: 'الاتصال العاطفي',
          issue: 'الألوان الباردة تبدو صناعية، وليست منتجات نمط حياة.',
          solution: 'ألوان العنبر الدافئة تثير شعور وقت الشاي المريح.',
          impact: 'عالي'
        },
         {
          id: '3',
          title: 'كثافة المعلومات',
          issue: 'نقص التفاصيل يؤدي إلى معدلات ارتداد عالية.',
          solution: 'إضافة خطوات "الحرفية" ومقاييس بصرية.',
          impact: 'متوسط'
        },
        {
          id: '4',
          title: 'دعوة للعمل',
          issue: 'معلومات اتصال صعبة العثور عليها.',
          solution: 'تصفح مثبت مع زر "احصل على عرض" بارز.',
          impact: 'عالي'
        }
      ] as AuditItem[]
    },
    products: {
      title: 'المجموعات المميزة',
      subtitle: 'منتجات عالية الهامش مصممة للمقاهي والفنادق والتجزئة.',
      request: 'استفسار عن السعر',
      items: [
        {
          id: '1',
          title: 'زجاج مزدوج الجدار',
          category: 'الأكثر مبيعاً',
          description: 'تصميم عازل يحافظ على المشروبات ساخنة. زجاج بورسليكات منفوخ بالفم.',
          image: 'https://images.unsplash.com/photo-1595981266688-97e92f170ccf?q=80&w=2000&auto=format&fit=crop',
          specs: ['السعة: 80-450 مل', 'آمن في الميكروويف', 'شعار: ملصق حراري'],
        },
        {
          id: '2',
          title: 'إبريق شاي بورسليكات',
          category: 'أطقم شاي فاخرة',
          description: 'شفافية أنيقة مع مصافي. مثالي للشاي المزهر.',
          image: 'https://images.unsplash.com/photo-1578859048632-5075297d7488?q=80&w=2000&auto=format&fit=crop',
          specs: ['الحرارة: -20 إلى 150 درجة', 'صنبور غير مقطر', 'طقم: إبريق + أكواب'],
        },
        {
          id: '3',
          title: 'إبريق بسيط',
          category: 'الضيافة',
          description: 'أباريق ماء كبيرة السعة مع أغطية محكمة الغلق.',
          image: 'https://images.unsplash.com/photo-1585889675362-4e76d62f9d28?q=80&w=1974&auto=format&fit=crop',
          specs: ['الغطاء: خيزران / SS304', 'نوع: منفوخ بالفم', 'اختبار: FDA / LFGB'],
        },
      ] as Product[]
    },
    ai: {
      title: 'مستشار مبيعات 24/7',
      desc: 'اسأل عن التخصيص أو الأسعار فوراً.',
      placeholder: 'مثال: أحتاج 1000 كوب بشعاري.',
      suggestions: ['ما هو أقل كمية طلب؟', 'هل توفرون شحن DDP؟', 'هل يمكنكم صنع قوالب مخصصة؟'],
      offline: 'النظام غير متصل.',
      ask_another: 'استفسار جديد',
      try_asking: 'جرب السؤال:',
    },
    contact: {
      title: 'ابدأ طلبك',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      details: 'التفاصيل...',
      submit: 'إرسال الطلب',
      addr: 'منطقة Jingdu للزجاج، خبي، الصين',
      email_addr: 'sales@jingduglassfactory.com',
      phone_num: '+86-317-555-8888'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      catalog: 'Productos',
      strength: 'Fábrica',
      process: 'Proceso',
      ai: 'Consultor IA',
      audit: 'Análisis',
      quote: 'Cotizar',
    },
    mobile: {
      call: 'Llamar',
      email: 'Correo',
      inquiry: 'Consultar'
    },
    hero: {
      iso: 'Fabricante verificado ISO 9001 y BSCI',
      title1: 'Artesanía en Vidrio,',
      title2: 'Calidez para el Hogar',
      subtitle: 'Su socio principal para cristalería de alto borosilicato. Desde el diseño hasta la producción en masa, suministramos a marcas globales vasos resistentes al calor, teteras y soluciones de almacenamiento.',
      cta_catalog: 'Ver Catálogo 2025',
      cta_ai: 'Proyecto OEM',
      stats: {
        quality: 'Sin Plomo / Libre de BPA',
        export: 'Exporta a 40+ países',
        production: 'Producción diaria 15,000+'
      }
    },
    strength: {
      title: 'Por qué elegir Jingdu Glass',
      subtitle: 'No solo fabricamos vidrio; brindamos seguridad en la cadena de suministro.',
      items: [
        { title: 'Producción Masiva', desc: 'Instalaciones de 15,000㎡ con 5 líneas automáticas aseguran estabilidad para grandes pedidos.' },
        { title: 'Innovación I+D', desc: '10+ años de experiencia en apertura de moldes. Lanzamos 20+ diseños nuevos mensualmente.' },
        { title: 'Control de Calidad', desc: 'Estricto proceso de recocido elimina el estrés interno para prevenir roturas.' },
        { title: 'Logística Global', desc: 'Experiencia en embalaje de cajas a color y estándares de prueba de caída para Amazon.' }
      ]
    },
    audit: {
      title: 'Análisis de Conversión Web',
      subtitle: 'Cómo este rediseño mejora su ROI en publicidad:',
      problem: 'Debilidad Anterior',
      solution: 'Nueva Fortaleza',
      items: [
        {
          id: '1',
          title: 'Confianza y Credibilidad',
          issue: 'Diseños simples hacían que los compradores temieran "fábricas fantasma".',
          solution: 'Se agregó "Barra Superior" con contactos y datos de "Fuerza de Fábrica".',
          impact: 'Alto'
        },
        {
          id: '2',
          title: 'Conexión Emocional',
          issue: 'Colores fríos parecían maquinaria industrial, no productos de estilo de vida.',
          solution: 'Colores cálidos Ámbar y Verde Azulado evocan la sensación de una hora del té acogedora.',
          impact: 'Alto'
        },
         {
          id: '3',
          title: 'Densidad de Información',
          issue: 'La falta de detalles conduce a altas tasas de rebote.',
          solution: 'Se agregaron pasos de "Artesanía" y métricas visuales.',
          impact: 'Medio'
        },
        {
          id: '4',
          title: 'Llamada a la Acción',
          issue: 'Información de contacto difícil de encontrar.',
          solution: 'Navegación fija con un botón prominente de "Obtener Cotización".',
          impact: 'Alto'
        }
      ] as AuditItem[]
    },
    products: {
      title: 'Colecciones Exclusivas',
      subtitle: 'Productos de alto margen diseñados para cafeterías, hoteles y minoristas.',
      request: 'Consultar precio y MOQ',
      items: [
        {
          id: '1',
          title: 'Vaso de Doble Pared',
          category: 'Más Vendido',
          description: 'El favorito del mercado. Diseño aislado mantiene las bebidas calientes sin quemar las manos. Vidrio de borosilicato soplado a boca.',
          image: 'https://images.unsplash.com/photo-1595981266688-97e92f170ccf?q=80&w=2000&auto=format&fit=crop',
          specs: ['Capacidad: 80ml - 450ml', 'Seguridad: Apto para microondas', 'Logo: Calcomanía de alta temperatura'],
        },
        {
          id: '2',
          title: 'Tetera de Borosilicato',
          category: 'Sets de Té Premium',
          description: 'Elegancia transparente con infusores. Perfecto para tés en flor y hojas sueltas.',
          image: 'https://images.unsplash.com/photo-1578859048632-5075297d7488?q=80&w=2000&auto=format&fit=crop',
          specs: ['Resistencia: -20°C a 150°C', 'Característica: Pico sin goteo', 'Set: Tetera + Calentador + Tazas'],
        },
        {
          id: '3',
          title: 'Jarra Minimalista',
          category: 'Comedor y Hospitalidad',
          description: 'Jarras de agua de gran capacidad con tapas de cierre hermético. Cabe perfectamente en puertas de refrigeradores.',
          image: 'https://images.unsplash.com/photo-1585889675362-4e76d62f9d28?q=80&w=1974&auto=format&fit=crop',
          specs: ['Tapa: Bambú / SS304', 'Tipo: Soplado a boca', 'Prueba: LFGB / FDA'],
        },
      ] as Product[]
    },
    ai: {
      title: 'Consultor de Ventas 24/7',
      desc: 'Pregunte sobre personalización o precios inmediatamente.',
      placeholder: 'Ej: Necesito 1000 vasos de doble pared con mi logo.',
      suggestions: ['¿Cuál es su MOQ?', '¿Ofrecen envío DDP?', '¿Pueden hacer moldes personalizados?'],
      offline: 'Sistema fuera de línea. Por favor envíenos un correo.',
      ask_another: 'Nueva Consulta',
      try_asking: 'Intente preguntar:',
    },
    contact: {
      title: 'Inicie su Pedido',
      name: 'Nombre',
      email: 'Correo',
      details: 'Detalles del producto...',
      submit: 'Enviar Solicitud',
      addr: 'Zona Ind. Jingdu Glass, Hejian, China',
      email_addr: 'sales@jingduglassfactory.com',
      phone_num: '+86-317-555-8888'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      catalog: 'उत्पाद',
      strength: 'कारखाना',
      process: 'प्रक्रिया',
      ai: 'AI सलाहकार',
      audit: 'विश्लेषण',
      quote: 'कोटेशन लें',
    },
    mobile: {
      call: 'कॉल करें',
      email: 'ईमेल',
      inquiry: 'पूछताछ करें'
    },
    hero: {
      iso: 'ISO 9001 और BSCI सत्यापित निर्माता',
      title1: 'कांच की शिल्पकारी,',
      title2: 'घर के लिए गर्मी',
      subtitle: 'उच्च बोरोसिलिकेट कांच के बने पदार्थ के लिए आपका प्रमुख भागीदार। डिजाइन से लेकर उत्पादन तक, हम वैश्विक ब्रांडों को गर्मी प्रतिरोधी कप और चायदानी की आपूर्ति करते हैं।',
      cta_catalog: '2025 कैटलॉग देखें',
      cta_ai: 'OEM प्रोजेक्ट शुरू करें',
      stats: {
        quality: 'सीसा रहित / BPA मुक्त',
        export: '40+ देशों में निर्यात',
        production: 'दैनिक उत्पादन 15,000+'
      }
    },
    strength: {
      title: 'ब्रांड जिंगडू ग्लास क्यों चुनते हैं',
      subtitle: 'हम सिर्फ कांच का निर्माण नहीं करते; हम आपूर्ति श्रृंखला सुरक्षा प्रदान करते हैं।',
      items: [
        { title: 'थोक उत्पादन', desc: '5 स्वचालित लाइनों वाली 15,000㎡ सुविधा बड़े ऑर्डर के लिए स्थिरता सुनिश्चित करती है।' },
        { title: 'R&D नवाचार', desc: 'मोल्ड खोलने में 10+ वर्षों का अनुभव। हम मासिक 20+ नए डिजाइन लॉन्च करते हैं।' },
        { title: 'गुणवत्ता नियंत्रण', desc: 'कठोर एनीलिंग प्रक्रिया टूटने से रोकने के लिए आंतरिक तनाव को समाप्त करती है।' },
        { title: 'वैश्विक रसद', desc: 'अमेज़ॅन विक्रेताओं के लिए रंग-बॉक्स पैकेजिंग और ड्रॉप-टेस्ट मानकों में अनुभवी।' }
      ]
    },
    audit: {
      title: 'वेबसाइट रूपांतरण विश्लेषण',
      subtitle: 'यह नया डिज़ाइन आपके विज्ञापन प्रदर्शन को कैसे सुधारता है:',
      problem: 'पुरानी कमी',
      solution: 'नई ताकत',
      items: [
        {
          id: '1',
          title: 'विश्वास और विश्वसनीयता',
          issue: 'सरल डिजाइन खरीदारों को "घोस्ट फैक्ट्रियों" के बारे में चिंता कराते हैं।',
          solution: 'प्रामाणिकता साबित करने के लिए संपर्कों और "फैक्ट्री स्ट्रेंथ" डेटा के साथ "टॉप बार" जोड़ा गया।',
          impact: 'उच्च'
        },
        {
          id: '2',
          title: 'भावनात्मक जुड़ाव',
          issue: 'ठंडे रंग औद्योगिक मशीनरी की तरह लगते हैं, जीवन शैली उत्पादों की तरह नहीं।',
          solution: 'गर्म एम्बर रंग एक आरामदायक चाय के समय की भावना पैदा करते हैं।',
          impact: 'उच्च'
        },
         {
          id: '3',
          title: 'जानकारी घनत्व',
          issue: 'विवरण की कमी से बाउंस रेट अधिक होता है।',
          solution: '"शिल्प कौशल" कदम और दृश्य मेट्रिक्स जोड़े गए।',
          impact: 'मध्यम'
        },
        {
          id: '4',
          title: 'कार्रवाई के लिए कॉल',
          issue: 'संपर्क जानकारी ढूंढना मुश्किल।',
          solution: 'प्रमुख "कोटेशन प्राप्त करें" बटन के साथ चिपचिपा नेविगेशन।',
          impact: 'उच्च'
        }
      ] as AuditItem[]
    },
    products: {
      title: 'सिग्नेचर कलेक्शन',
      subtitle: 'कॉफी शॉप, होटल और खुदरा के लिए डिज़ाइन किए गए उच्च-मार्जिन उत्पाद।',
      request: 'MOQ और मूल्य पूछें',
      items: [
        {
          id: '1',
          title: 'डबल वॉल ग्लास',
          category: 'सबसे ज्यादा बिकने वाला',
          description: 'बाजार का पसंदीदा। इंसुलेटेड डिज़ाइन हाथों को जलाए बिना पेय को गर्म रखता है। माउथ-ब्लोन बोरोसिलिकेट ग्लास।',
          image: 'https://images.unsplash.com/photo-1595981266688-97e92f170ccf?q=80&w=2000&auto=format&fit=crop',
          specs: ['क्षमता: 80ml - 450ml', 'सुरक्षा: माइक्रोवेव सुरक्षित', 'लोगो: उच्च तापमान डिकल'],
        },
        {
          id: '2',
          title: 'बोरोसिलिकेट चायदानी',
          category: 'प्रीमियम टी सेट',
          description: 'इन्फ्यूज़र के साथ सुंदर पारदर्शिता। खिलने वाली चाय और loose leaf के लिए उत्तम।',
          image: 'https://images.unsplash.com/photo-1578859048632-5075297d7488?q=80&w=2000&auto=format&fit=crop',
          specs: ['प्रतिरोध: -20°C से 150°C', 'विशेषता: नॉन-ड्रिप टोंटी', 'सेट: पॉट + वार्मर + कप'],
        },
        {
          id: '3',
          title: 'मिनिमलिस्ट पिचर',
          category: 'डाइनिंग और हॉस्पिटैलिटी',
          description: 'टाइट-सील ढक्कन के साथ बड़ी क्षमता वाले पानी के कैफ़े। रेफ्रिजरेटर के दरवाजों में पूरी तरह से फिट बैठता है।',
          image: 'https://images.unsplash.com/photo-1585889675362-4e76d62f9d28?q=80&w=1974&auto=format&fit=crop',
          specs: ['ढक्कन: बांस / SS304', 'प्रकार: माउथ ब्लोन', 'टेस्ट: LFGB / FDA'],
        },
      ] as Product[]
    },
    ai: {
      title: '24/7 बिक्री सलाहकार',
      desc: 'अनुकूलन या कीमतों के बारे में तुरंत पूछें।',
      placeholder: 'उदाहरण: मुझे अपने लोगो के साथ 1000 कप चाहिए।',
      suggestions: ['आपका MOQ क्या है?', 'क्या आप DDP शिपिंग प्रदान करते हैं?', 'क्या आप कस्टम मोल्ड बना सकते हैं?'],
      offline: 'सिस्टम ऑफ़लाइन है। कृपया हमें ईमेल करें।',
      ask_another: 'नई पूछताछ',
      try_asking: 'पूछने की कोशिश करें:',
    },
    contact: {
      title: 'अपना ऑर्डर शुरू करें',
      name: 'नाम',
      email: 'ईमेल',
      details: 'उत्पाद विवरण...',
      submit: 'अनुरोध भेजें',
      addr: 'जिंगडू ग्लास जोन, हेबै, चीन',
      email_addr: 'sales@jingduglassfactory.com',
      phone_num: '+86-317-555-8888'
    }
  }
};