import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Heart, ShieldCheck, Smile } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-primary/5 border border-primary/10">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.png" 
              alt="溫暖的護理情境" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Heart className="w-4 h-4 fill-current" />
              專為護理師設計
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              TaiOne Care GPT <br/>
              <span className="text-foreground text-3xl md:text-4xl">居家護理好幫手</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              親愛的護理師夥伴，您好！<br/>
              這是一份專為您準備的操作手冊。我們將繁雜的科技化繁為簡，讓您能輕鬆上手，將更多寶貴的時間專注於照護本身。
            </p>
            <Link href="/chapter-1">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                開始閱讀手冊 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary-foreground mb-4">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">簡單易懂</h3>
            <p className="text-muted-foreground">
              不用擔心科技很複雜，我們用最白話的語言和詳細的圖解，帶您一步步操作。
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">智能輔助</h3>
            <p className="text-muted-foreground">
              AI 自動排程、備品提醒、報告生成，成為您最強大的工作後盾。
            </p>
          </div>
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">完整教學</h3>
            <p className="text-muted-foreground">
              從登入到完成訪視報告，六大章節完整覆蓋您日常工作的所有需求。
            </p>
          </div>
        </section>

        {/* Chapter Preview */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            章節導覽
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: 1, title: "開始使用您的好幫手", desc: "如何找到APP、登入系統" },
              { id: 2, title: "認識您的工作主畫面", desc: "了解主畫面各區塊功能" },
              { id: 3, title: "管理您的個案資料", desc: "查看個案、新增個案、查看詳細資訊" },
              { id: 4, title: "記錄與更新訪視資料", desc: "更新管路藥物、記錄生命徵象" },
              { id: 5, title: "進行全人照護評估", desc: "使用評估大廳、填寫評估表單" },
              { id: 6, title: "一鍵生成您的護理報告", desc: "快速產出專業報告" },
            ].map((chapter) => (
              <Link key={chapter.id} href={`/chapter-${chapter.id}`}>
                <a className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all">
                  <div className="text-sm font-bold text-primary mb-2">Chapter {chapter.id}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{chapter.title}</h3>
                  <p className="text-sm text-muted-foreground">{chapter.desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
