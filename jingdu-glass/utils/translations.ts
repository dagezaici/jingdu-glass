import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not set in process.env");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const consultGlassExpert = async (userQuery: string, language: Language): Promise<string> => {
  const client = getClient();
  if (!client) {
    if (language === 'zh') return "演示模式：请配置 API Key。通常对于耐热玻璃，我们推荐高硼硅 3.3 材质，支持 -20℃ 到 150℃ 的瞬间温差。";
    if (language === 'de') return "Demo-Modus: Für hitzebeständiges Glas empfehlen wir Borosilikatglas 3.3.";
    if (language === 'ar') return "الوضع التجريبي: بالنسبة للزجاج المقاوم للحرارة، نوصي بزجاج البورسليكات 3.3.";
    if (language === 'es') return "Modo demostración: Para vidrio resistente al calor, recomendamos el material de alto borosilicato 3.3, que soporta choques térmicos de -20℃ a 150℃.";
    if (language === 'hi') return "डेमो मोड: गर्मी प्रतिरोधी कांच के लिए, हम उच्च बोरोसिलिकेट 3.3 सामग्री की सलाह देते हैं जो -20℃ से 150℃ तक के तापीय झटके को सहन करती है।";
    return "Demo Mode: For heat-resistant glassware, we recommend High Borosilicate 3.3 material which withstands -20℃ to 150℃ thermal shock.";
  }

  const langName = {
    'en': 'English',
    'zh': 'Chinese (Simplified)',
    'de': 'German',
    'ar': 'Arabic',
    'es': 'Spanish',
    'hi': 'Hindi'
  }[language];

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: `You are a Senior Product Manager for Jingdu Glassware Factory (Daily-use Glassware Manufacturer). 
        Your goal is to help B2B buyers (wholesalers, brand owners, gift companies) choose glassware products.
        
        CRITICAL INSTRUCTION: You must reply in ${langName}.

        Key Knowledge Domain:
        - Material: Focus on High Borosilicate Glass (Heat resistant, lead-free, BPA free) and Soda-lime glass.
        - Products: Double wall glass cups, Glass Teapots, Water Pitchers, Storage Jars, Coffee ware.
        - Customization (OEM/ODM): Explain we can do decal printing, laser etching, custom mold opening, and color box packaging.
        - Quality: LFGB/FDA food safety standards, thermal shock resistance.

        Traits:
        1. Professional yet warm (lifestyle-oriented).
        2. If asked for a quote, ask for: Quantity (MOQ), Capacity (ml/oz), and Packaging requirements.
        3. Keep answers under 150 words.
        
        Context:
        - We are a factory in Hebei/China.
        - We supply to global coffee chains and supermarkets.
        `,
      },
    });

    return response.text || "I'm checking our production lines for that specific glassware mold...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    if (language === 'zh') return "由于咨询量过大，我暂时离线。请直接联系我们的销售团队获取产品目录。";
    if (language === 'es') return "Actualmente estoy desconectado debido a la alta demanda. Por favor, contacte a nuestro equipo de ventas directamente.";
    if (language === 'hi') return "अधिक मांग के कारण मैं अभी ऑफ़लाइन हूं। कृपया नवीनतम कैटलॉग के लिए हमारी बिक्री टीम से सीधे संपर्क करें।";
    return "I am currently offline due to high demand. Please contact our sales team directly for the latest catalog.";
  }
};