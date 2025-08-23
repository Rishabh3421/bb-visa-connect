import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeChat = () => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "👋 Hello! I'm your Bridge for Borders Immigration assistant. I can help you with:\n\n• Visa requirements and processes\n• Country-specific immigration information\n• Document checklists\n• Processing times and fees\n• General immigration guidance\n\nWhat would you like to know about your immigration journey?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setShowApiKeyInput(false);
      initializeChat();
    }
  };

  const quickQuestions = [
    "What documents do I need for a Canada student visa?",
    "How long does US work visa processing take?",
    "What are the requirements for Australian PR?",
    "Which country is best for software engineers?",
    "What is the cost of UK student visa?",
  ];

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: `You are an expert immigration consultant for Bridge for Borders Immigration. Provide accurate, helpful information about:
              - Visa requirements and processes for different countries
              - Document checklists and requirements
              - Processing times and fees
              - Country-specific immigration information
              - General immigration guidance
              
              Always be professional, precise, and helpful. If you don't have specific information, recommend contacting Bridge for Borders Immigration directly at +91 8396000445 or bbimmigration56@gmail.com.
              
              Keep responses concise but informative. Use bullet points for clarity when listing requirements or steps.`
            },
            {
              role: 'user',
              content: inputMessage
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 800,
          return_images: false,
          return_related_questions: false,
          frequency_penalty: 1,
          presence_penalty: 0
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const botResponse = data.choices[0]?.message?.content || "I apologize, but I couldn't process your request. Please contact our team directly for personalized assistance.";

      const botMessage: Message = {
        id: Date.now().toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "I'm having trouble connecting right now. Please contact Bridge for Borders Immigration directly:\n📞 +91 8396000445\n📧 bbimmigration56@gmail.com\n💬 WhatsApp for immediate assistance",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (showApiKeyInput) {
        handleApiKeySubmit();
      } else {
        sendMessage();
      }
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="w-16 h-16 rounded-full gradient-primary text-white shadow-floating hover:shadow-gold transition-smooth animate-float"
          onClick={() => {
            setIsOpen(true);
            if (!showApiKeyInput) initializeChat();
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] z-50 animate-scale-in">
          <Card className="h-full shadow-floating border-0 overflow-hidden">
            {/* Header */}
            <div className="gradient-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Immigration Assistant</h3>
                  <p className="text-xs text-white/80">Bridge for Borders Immigration</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* API Key Input */}
            {showApiKeyInput && (
              <div className="p-4 bg-muted/50 border-b">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    To use the AI assistant, please enter your Perplexity API key:
                  </p>
                  <Input
                    type="password"
                    placeholder="Enter your Perplexity API key..."
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={handleApiKeySubmit}
                    disabled={!apiKey.trim()}
                    className="w-full"
                  >
                    Start Chat
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Don't have an API key? Get one from{" "}
                    <a
                      href="https://www.perplexity.ai/settings/api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Perplexity AI
                    </a>
                  </p>
                </div>
              </div>
            )}

            {!showApiKeyInput && (
              <>
                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px]">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot
                            ? 'bg-muted text-foreground'
                            : 'gradient-primary text-white'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.isBot && (
                            <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          )}
                          {!message.isBot && (
                            <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.isBot ? 'text-muted-foreground' : 'text-white/70'
                            }`}>
                              {message.timestamp.toLocaleTimeString([], { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </CardContent>

                {/* Quick Questions */}
                {messages.length <= 1 && (
                  <div className="p-4 border-t bg-muted/30">
                    <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                    <div className="space-y-1">
                      {quickQuestions.slice(0, 3).map((question, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-white transition-smooth text-xs p-1 mr-1 mb-1 block w-full text-left"
                          onClick={() => handleQuickQuestion(question)}
                        >
                          {question}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about visas, requirements, countries..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button
                      size="sm"
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isLoading}
                      className="px-3"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;