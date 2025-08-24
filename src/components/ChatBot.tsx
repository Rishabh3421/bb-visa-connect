import { useState, useRef, useEffect, ReactNode } from "react";
import { MessageCircle, Send, X, Bot, User, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type MessageKind = "text" | "contact";

interface Message {
  id: string;
  isBot: boolean;
  timestamp: Date;
  kind: MessageKind;
  text?: string;         // used when kind = "text"
}

type QA = {
  id: string;
  triggers: RegExp[];
  answer: string;
  kind?: MessageKind;    // "contact" for rich contact reply
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  // ========= Static content =========
  const CONTACT_TEXT =
`📞 8396000445, 9991740121
📧 bridgeforbordersimmigration56@gmail.com
📍 SF03, 2nd Floor, HAPPY HOMES EMPORIUM SOCIETY, PANIPAT (HARYANA)
📷 Instagram: @bridgeforbordersimmigration56
🔗 https://www.instagram.com/bridgeforbordersimmigration56`;

  const ABOUT =
`Bridge for Borders Immigration — 5+ years of experience, 1000+ visa approvals.
We provide Student, Work, Tourist/Visitor, PR, Business/Investor, and Family/Dependent visas.
We serve: Canada, Australia, New Zealand, USA, UK, Europe, Japan, Singapore.`;

  const SERVICES =
`Our Services:
• Student Visas
• Work Visas
• Tourist/Visitor Visas
• PR & Immigration
• Business/Investor Visas
• Family/Dependent Visas`;

  const DOCS_REQUIRED =
`Documents Required (general):
• Aadhaar Card
• PAN Card
• Qualification Certificates
• Income Tax Return (if applicable)
• Digital Photo
• Banking Details
• Business Proofs (if applicable)`;

  const PROCESS =
`Application Process:
1) Free Consultation
2) Document Review
3) Application Submission
4) Biometrics/Interview (if required)
5) Visa Decision
✅ Transparent, end-to-end support.`;

  const COUNTRIES =
`Countries We Serve:
Canada • Australia • New Zealand • USA • UK • Europe • Japan • Singapore
(Type a country name to get a short overview.)`;

  const COUNTRY_BLURBS: Record<string, string> = {
    canada: "Canada — Popular student and PR pathways; strong post-study work options.",
    australia: "Australia — Points-based PR and world-class universities.",
    "new zealand": "New Zealand — Quality education and student-to-work pathways.",
    newzealand: "New Zealand — Quality education and student-to-work pathways.",
    usa: "USA — F-1 Student, H-1B work routes, top universities.",
    uk: "UK — Student (Graduate Route/PSW) and Skilled Worker options.",
    europe: "Europe — Multiple country-specific study/work options.",
    germany: "Germany — Affordable education; EU Blue Card pathways.",
    japan: "Japan — Study and specialized skill visas.",
    singapore: "Singapore — Study + internship tracks; strong job market."
  };

  // ========= Visa timings =========
  const GENERIC_TIMING =
`Visa Processing Timelines (typical):
• Study Visa: 0–45 working days
• Tourist Visa: ~20–30 days
• Business Visa: 45–60 days
Note: Actual timelines vary by embassy workload and applicant profile.`;

  const STUDY_TIMING = `Study Visa Processing Time: 0–45 working days (case dependent).`;
  const TOURIST_TIMING = `Tourist Visa Processing Time: approximately 20–30 days.`;
  const BUSINESS_TIMING = `Business Visa Processing Time: 45–60 days.`;

  // ========= Options (appended to every bot answer) =========
  const OPTIONS_TEXT =
`You can ask about:
• Visa timing / Processing time
• Study visa timing • Tourist visa timing • Business visa timing
• Documents required • Process steps • Services we offer
• Countries we serve • Contact details • Book a free consultation`;

  const FALLBACK =
`I can help with visas, documents, process, countries, and timelines.
${OPTIONS_TEXT}`;

  // ========= Promos (optional) =========
  const PROMOS: QA[] = [
    { id: "malta", triggers: [/malta/i], answer:
`Study in Malta:
• 1-year tuition included • No IELTS/PTE • Gaps accepted
• High visa success • Offer in ~48 hours • Pay after visa
${CONTACT_TEXT}` },
    { id: "moldova", triggers: [/moldova/i], answer:
`Study in Moldova + Work:
• No IELTS • Visa ~20 days • 1-year fees included
• Earn up to $1000/month • Job assistance • Airport pickup
${CONTACT_TEXT}` },
    { id: "singapore", triggers: [/singapore/i], answer:
`Study in Singapore:
• No IELTS • No funds • No upfront • Offer in ~24 hours • Pay after visa
• Tracks: 8m Study + 6m Internship OR 6m + 6m
${CONTACT_TEXT}` },
    { id: "russia", triggers: [/russia/i], answer:
`Russia (All-inclusive):
• 1-year tuition, visa extension, documentation, 3-month insurance,
  embassy charges, translations • No IELTS • No interview • Pay after visa
• High success • Education gap accepted up to ~17 years
${CONTACT_TEXT}` },
    { id: "mauritius", triggers: [/mauritius/i], answer:
`Study in Mauritius:
• Pay after visa • Guaranteed job with studies • Processing: 30–40 days
• College 1 day/week • Includes tuition, visa+extension, pickup & courier
${CONTACT_TEXT}` },
  ];

  // ========= FAQs (includes timing + contact as rich) =========
  const FAQS: QA[] = [
    { id: "about",     triggers: [/^about\b|who (are|is)|\Bridge for Bordersb immigration\b/i], answer: ABOUT },
    { id: "services",  triggers: [/services?|what (do you|u) do|visa types?|universit(y|ies)/i], answer: SERVICES },
    { id: "docs",      triggers: [/document|docs|requirements?|papers?/i], answer: DOCS_REQUIRED },
    { id: "process",   triggers: [/process|timeline|steps|how it works?/i], answer: PROCESS },
    { id: "countries", triggers: [/countries|where.*serve|which country/i], answer: COUNTRIES },

    // rich contact reply
    { id: "contact",   triggers: [/contact|phone|email|address|location|office/i], answer: CONTACT_TEXT, kind: "contact" },

    // timings
    { id: "timing-generic",  triggers: [/visa timing|processing time|process time/i], answer: GENERIC_TIMING },
    { id: "timing-study",    triggers: [/study visa( timing)?|student visa( timing)?/i], answer: STUDY_TIMING },
    { id: "timing-tourist",  triggers: [/tourist visa( timing)?|visitor visa( timing)?/i], answer: TOURIST_TIMING },
    { id: "timing-business", triggers: [/business visa( timing)?/i], answer: BUSINESS_TIMING },

    ...PROMOS
  ];

  // ========= Quick Questions (always visible) =========
  const quickQuestions = [
    "Visa timing",
    "Study visa timing",
    "Tourist visa timing",
    "Business visa timing",
    "Documents required",
    "Process steps",
    "Countries we serve",
    "Contact details",
  ];

  const welcome = () => {
    setMessages([{
      id: "welcome",
      kind: "text",
      isBot: true,
      text: "👋 Hello! I am the Bridge for Borders Immigration Assistant.\n\n" + OPTIONS_TEXT,
      timestamp: new Date(),
    }]);
  };

  // return the matching QA (with its kind)
  const resolveQA = (raw: string): {answer: string; kind: MessageKind} => {
    const text = raw.trim().toLowerCase();

    // countries direct
    for (const key of Object.keys(COUNTRY_BLURBS)) {
      if (text.includes(key)) return { answer: COUNTRY_BLURBS[key], kind: "text" };
    }
    // general FAQs
    for (const qa of FAQS) {
      if (qa.triggers.some((r) => r.test(text))) {
        return { answer: qa.answer, kind: qa.kind ?? "text" };
      }
    }
    return { answer: FALLBACK, kind: "text" };
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      kind: "text",
      isBot: false,
      text: inputMessage,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    setTimeout(() => {
      const { answer, kind } = resolveQA(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        kind,
        isBot: true,
        text: answer,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 300);
  };

  const handleQuickQuestion = (q: string) => setInputMessage(q);
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ======== Renderer: contact message as rich JSX with wrapping ========
  const renderMessageContent = (m: Message) => {
    if (m.kind !== "contact") {
      return <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">{m.text}</p>;
    }
    // CONTACT rich block with emojis + safe wrapping
    return (
      <div className="space-y-1 text-sm leading-relaxed">
        <div>📞 <span className="break-words">8396000445, 9991740121</span></div>
        <div>📧 <span className="break-words">bridgeforbordersimmigration56@gmail.com</span></div>
        <div>📍 <span className="break-words">SF03, 2nd Floor, HAPPY HOMES EMPORIUM SOCIETY, PANIPAT (HARYANA)</span></div>
        <div>📷 Instagram: <span className="break-words">@bridgeforbordersimmigration56</span></div>
        <div>🔗 <a
          href="https://www.instagram.com/bridgeforbordersimmigration56"
          target="_blank"
          rel="noreferrer"
          className="underline break-all"
        >
          https://www.instagram.com/bridgeforbordersimmigration56
        </a></div>
      </div>
    );
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full gradient-primary text-white shadow-floating hover:shadow-gold transition-smooth animate-float"
          onClick={() => {
            setIsOpen(true);
            if (messages.length === 0) welcome();
          }}
          aria-label="Open Bridge for Borders Immigration chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] lg:h-[calc(100vh-180px)] lg:max-h-[500px] z-50 animate-scale-in">
          <Card className="h-full shadow-floating border-0 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="gradient-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Bridge for Borders Immigration Assistant</h3>
      
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl shadow-sm ${
                    m.isBot ? "bg-muted text-foreground" : "gradient-primary text-white"
                  } break-words`}>
                    <div className="flex items-start gap-2">
                      {m.isBot ? <Bot className="h-4 w-4 mt-0.5 shrink-0" /> : <User className="h-4 w-4 mt-0.5 shrink-0" />}
                      <div className="flex-1 min-w-0">
                        {renderMessageContent(m)}
                        <p className={`text-xs mt-1 ${m.isBot ? "text-muted-foreground" : "text-white/70"}`}>
                          {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Typing…</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </CardContent>

            {/* Quick Questions — ALWAYS visible */}
            <div className="p-4 border-t bg-muted/30">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Visa timing",
                  "Study visa timing",
                  "Tourist visa timing",
                  "Business visa timing",
                  "Documents required",
                  "Process steps",
                  "Countries we serve",
                  "Contact details",
                ].map((q) => (
                  <Badge
                    key={q}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-white transition-smooth text-xs px-2 py-1"
                    onClick={() => setInputMessage(q)}
                  >
                    {q}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about visa timing, documents, process, countries…"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button size="sm" onClick={sendMessage} disabled={!inputMessage.trim() || isLoading} className="px-3">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;
