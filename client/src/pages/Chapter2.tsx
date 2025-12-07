import { DashboardLayout } from "@/components/DashboardLayout";
import { ScreenshotViewer } from "@/components/ScreenshotViewer";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Chapter2() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-sm font-bold text-primary mb-2">第二章</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">認識您的工作主畫面</h1>
          <p className="text-xl text-muted-foreground mt-4">
            成功登入後，您會看到APP的主畫面。這裡是您每天工作的起點，所有重要的資訊和功能都可以在這裡找到。
          </p>
        </div>

        <section className="space-y-12">
          {/* Section 2.1 - 2.3 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">2.1</span>
              主畫面總覽
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <ScreenshotViewer 
                  src="/screenshots/home-overview.png" 
                  alt="主畫面總覽"
                  caption="這是您每天都會看到的主畫面"
                />
              </div>
              
              <div className="space-y-6">
                <StepCard stepNumber={1} title="個人資訊區">
                  畫面的最上方，您可以看到自己的名字和頭像。這表示您目前正在使用自己的專屬帳號。
                </StepCard>
                
                <StepCard stepNumber={2} title="未完成訪視記錄">
                  這個區塊會提醒您，有哪些之前安排的訪視還沒有完成記錄。這是一個很貼心的小功能，幫助您不會遺漏任何重要的工作。
                  <ul className="list-disc list-inside mt-2 text-sm pl-4">
                    <li>顯示個案的編號、姓名、年齡和性別</li>
                    <li>點選個案可直接進入詳細頁面補寫記錄</li>
                  </ul>
                </StepCard>
                
                <StepCard stepNumber={3} title="今日的排班個案">
                  下方這個區塊，是您今天所有需要訪視的個案列表。您可以一目了然地看到今天的行程安排。
                </StepCard>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 2.4 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">2.4</span>
              智能排程與常用功能
            </h2>
            
            <p className="text-lg mb-6">
              當您將主畫面往下滑動時，會看到更多實用的功能，幫助您為訪視做足準備。
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <StepCard stepNumber={1} title="TaiOne AI 排程">
                  這是一個非常聰明的功能！系統會根據您今天的個案地點，自動規劃出最順暢的訪視路線地圖，並預估交通時間，讓您不用再費心安排行程。
                </StepCard>
                
                <StepCard stepNumber={2} title="訪視備品準備">
                  系統會根據您今天要訪視的個案需求，自動列出需要攜帶的醫療備品清單（如導尿管、氣切管等），幫助您出門前再次確認，避免遺漏。
                </StepCard>
                
                <StepCard stepNumber={3} title="其他備註">
                  這裡會顯示一些特別需要注意的事項，例如某個案需要協助申請長照補助文件，或是需要幫忙預約醫師訪視等。
                </StepCard>

                <StepCard stepNumber={4} title="新收個案建檔">
                  當您有新的個案需要服務時，請點選這個按鈕來建立他的基本資料。
                </StepCard>

                <StepCard stepNumber={5} title="個案總覽">
                  如果您想尋找特定的個案，可以點選這裡，進入個案總覽頁面進行搜尋。
                </StepCard>
              </div>

              <div>
                <ScreenshotViewer 
                  src="/screenshots/home-features.png" 
                  alt="主畫面下方功能"
                  caption="往下滑動可以看到更多強大的功能"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-end">
          <Link href="/chapter-3" asChild>
            <Button size="lg" className="gap-2">
              下一章：管理個案資料 <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
