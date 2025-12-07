import { DashboardLayout } from "@/components/DashboardLayout";
import { ScreenshotViewer } from "@/components/ScreenshotViewer";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Chapter4() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-sm font-bold text-primary mb-2">第四章</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">記錄與更新訪視資料</h1>
          <p className="text-xl text-muted-foreground mt-4">
            在每次訪視過程中或結束後，即時且準確地記錄個案的狀況，是非常重要的工作。這個APP讓記錄工作變得簡單又快速。
          </p>
        </div>

        <section className="space-y-12">
          {/* Section 4.1 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">4.1</span>
              更新管路與藥物資訊
            </h2>
            
            <p className="text-lg mb-6">
              在個案詳細資訊頁面中，您可以輕鬆更新管路和藥物的資訊。
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary-foreground">更新管路</h3>
                <StepCard stepNumber={1} title="點選管路區塊">
                  在個案詳細頁面，找到「管路-種類/到期日」區塊並點選它。
                </StepCard>
                
                <StepCard stepNumber={2} title="編輯資訊">
                  系統會跳出編輯視窗。您可以輸入管路的名稱和到期日。如果需要新增一筆，可以點選「新增」按鈕。
                </StepCard>
                
                <StepCard stepNumber={3} title="存檔">
                  完成後點選「存檔」。
                </StepCard>
              </div>
              
              <div>
                <ScreenshotViewer 
                  src="/screenshots/edit-tube.png" 
                  alt="編輯管路資訊"
                  caption="在這裡新增或修改管路資料"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <ScreenshotViewer 
                  src="/screenshots/edit-meds.png" 
                  alt="編輯藥物資訊"
                  caption="在這裡管理個案的用藥紀錄"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-secondary-foreground">更新藥物</h3>
                <StepCard stepNumber={1} title="點選藥物區塊">
                  在個案詳細頁面，找到「藥物-種類/到期日」區塊並點選它。
                </StepCard>
                
                <StepCard stepNumber={2} title="編輯資訊">
                  您可以一次輸入多筆藥物和各自的到期日。點選到期日旁邊的日曆圖示，可以快速選擇日期。
                </StepCard>
                
                <StepCard stepNumber={3} title="存檔">
                  完成後點選「存檔」。
                </StepCard>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 4.2 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">4.2</span>
              記錄生命徵象
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-lg">
                  記錄生命徵象是每次訪視的例行工作。您可以直接在「AI紅綠燈」區塊點選任一項指標來進行記錄。
                </p>
                
                <StepCard stepNumber={1} title="點選指標">
                  在個案詳細頁面，點選「AI紅綠燈」區塊中的任一項，例如「體溫」。
                </StepCard>
                
                <StepCard stepNumber={2} title="輸入數值">
                  系統會進入「生命徵象」的記錄表單。請依照表單上的項目，一一輸入您測量到的數值（體溫、心跳、呼吸、血壓、意識、血氧、血糖等）。
                </StepCard>
                
                <StepCard stepNumber={3} title="確認存檔">
                  輸入完成並核對無誤後，點選右下角的「存檔」按鈕即可。
                </StepCard>
              </div>
              
              <div>
                <ScreenshotViewer 
                  src="/screenshots/vital-signs.png" 
                  alt="記錄生命徵象"
                  caption="一次輸入所有生命徵象數值"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-end">
          <Link href="/chapter-5" asChild>
            <Button size="lg" className="gap-2">
              下一章：進行全人照護評估 <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
