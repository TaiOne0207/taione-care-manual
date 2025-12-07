import { DashboardLayout } from "@/components/DashboardLayout";
import { ScreenshotViewer } from "@/components/ScreenshotViewer";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Chapter5() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-sm font-bold text-primary mb-2">第五章</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">進行全人照護評估</h1>
          <p className="text-xl text-muted-foreground mt-4">
            除了基本的生命徵象，提供完整的照護還需要對個案進行全面的評估。APP內建了「全人照護評估大廳」，將所有重要的評估量表都整合在一起。
          </p>
        </div>

        <section className="space-y-12">
          {/* Section 5.1 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">5.1</span>
              進入全人照護評估大廳
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <StepCard stepNumber={1} title="點選AI按鈕">
                  在APP畫面的最下方，找到寫著「AI」的圖示按鈕，並點選它。
                </StepCard>
                
                <StepCard stepNumber={2} title="瀏覽評估項目">
                  您會看到「全人照護評估大廳」的頁面，上面列出了所有可用的評估量表（如基本資料、健康習慣、疾病史、ADL等）。
                </StepCard>
                
                <p className="text-sm text-muted-foreground bg-secondary/10 p-4 rounded-lg">
                  每個項目的下方會標示最後一次評估的日期，提醒您何時需要再次評估。
                </p>
              </div>
              
              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.48.36.png" 
                  alt="全人照護評估大廳"
                  caption="這裡整合了所有專業的評估量表"
                />
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 5.2 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">5.2</span>
              填寫評估表單
            </h2>
            
            <p className="text-lg mb-6">
              您可以根據個案的狀況，選擇需要填寫的評估表單。
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.48.45.png" 
                  alt="基本資料評估表單"
                  caption="範例一：基本資料表單"
                />
              </div>

              <div className="space-y-4">
                <StepCard stepNumber={1} title="選擇項目">
                  在評估大廳中，點選您想要填寫的項目，例如「基本資料」。
                </StepCard>
                
                <StepCard stepNumber={2} title="填寫內容">
                  系統會顯示該項目的詳細評估表單。請根據表單上的問題，一一為個案勾選或填寫最符合的選項。
                </StepCard>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <StepCard stepNumber={3} title="完成評估">
                  針對每一個項目，評估其嚴重程度或狀況。例如在疾病史表單中，您可以選擇從「無」到「極重」的等級。
                </StepCard>
                
                <StepCard stepNumber={4} title="生成計畫">
                  所有評估項目都完成後，點選最下方的「確認生成護理計劃」按鈕，系統會根據您的評估結果，智能地產生一份專屬的護理計劃建議。
                </StepCard>
              </div>

              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.49.00.png" 
                  alt="疾病史評估表單"
                  caption="範例二：疾病史評估表單"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-end">
          <Link href="/chapter-6">
            <Button size="lg" className="gap-2">
              下一章：一鍵生成報告 <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
