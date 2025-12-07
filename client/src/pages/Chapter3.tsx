import { DashboardLayout } from "@/components/DashboardLayout";
import { ScreenshotViewer } from "@/components/ScreenshotViewer";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Chapter3() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-sm font-bold text-primary mb-2">第三章</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">管理您的個案資料</h1>
          <p className="text-xl text-muted-foreground mt-4">
            管理好每一位個案的資料，是提供優質護理服務的基礎。這個APP提供了非常方便的功能，讓您輕鬆管理所有個案的檔案。
          </p>
        </div>

        <section className="space-y-12">
          {/* Section 3.1 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">3.1</span>
              查看所有個案：個案總覽
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-lg">
                  如果您想尋找某位特定的個案，或是想看看目前所有服務中的個案列表，可以使用「個案總覽」功能。
                </p>
                
                <StepCard stepNumber={1} title="進入個案總覽">
                  在主畫面下方，點選「個案總覽」按鈕。
                </StepCard>
                
                <StepCard stepNumber={2} title="瀏覽列表">
                  進入頁面後，您可以看到所有個案的列表。
                </StepCard>
                
                <StepCard stepNumber={3} title="搜尋個案">
                  如果個案很多，您也可以利用上方的「病例搜尋」功能，輸入個案的編號、身份證號、姓名等資訊，快速找到您要的個案。
                </StepCard>

                <StepCard stepNumber={4} title="查看詳細">
                  找到後，直接點選該個案的方塊，即可進入他的詳細資料頁面。
                </StepCard>
              </div>
              
              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.44.40.png" 
                  alt="個案總覽頁面"
                  caption="這裡列出了您所有的個案，也可以進行搜尋"
                />
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 3.2 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">3.2</span>
              建立新個案檔案：新收個案建檔
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.44.24.png" 
                  alt="新收案基本資料表單"
                  caption="填寫新個案的基本資料"
                />
              </div>

              <div className="space-y-4">
                <StepCard stepNumber={1} title="點選建檔">
                  在主畫面下方，點選「新收個案建檔」按鈕。
                </StepCard>
                
                <StepCard stepNumber={2} title="填寫資料">
                  您會看到「新收案基本資料」的表單，請依照欄位提示，一一填寫個案的資料（如姓名、生日、地址、聯絡電話等）。
                </StepCard>
                
                <StepCard stepNumber={3} title="確認存檔">
                  填寫完成並核對無誤後，點選右下角的「存檔」按鈕，就完成新個案的建立了！
                </StepCard>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 3.3 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">3.3</span>
              查看個案詳細資訊
            </h2>
            
            <p className="text-lg mb-6">
              當您從主畫面或個案總覽頁面點選任一個案後，就會進入他的詳細資訊頁面。這裡整合了所有關於這位個案的重要資訊。
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div className="space-y-4">
                <StepCard stepNumber={1} title="基本資料">
                  顯示個案的姓名、編號和身份證號。
                </StepCard>
                
                <StepCard stepNumber={2} title="TaiOne 前次病摘">
                  由AI輔助整理的上次訪視重點摘要，幫助您快速回顧個案狀況。
                </StepCard>
                
                <StepCard stepNumber={3} title="TaiOne 本次注意事項">
                  由AI提醒您這次訪視需要特別留意的照護重點，例如呼吸道照護、飲食指導等。
                </StepCard>

                <StepCard stepNumber={4} title="TaiOne AI 紅綠燈">
                  這是一個非常特別的警示系統！系統會根據個案的生理數據，用不同顏色來提醒您需要注意的項目。
                  <span className="block mt-1 text-sm text-destructive font-bold">紅色：警示，需優先處理</span>
                  <span className="block text-sm text-yellow-600 font-bold">黃色：提醒，需多加留意</span>
                </StepCard>
              </div>
              
              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.44.59.png" 
                  alt="個案詳細資訊頁面"
                  caption="個案詳細頁面整合了所有重要資訊"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.45.08.png" 
                  alt="個案詳細資訊頁面（續）"
                  caption="往下滑動可以看到更多詳細數據"
                />
              </div>

              <div className="space-y-4">
                <p className="text-lg font-bold text-primary">往下滑動可以看到更多：</p>
                
                <StepCard stepNumber={5} title="完整的AI紅綠燈項目">
                  包含體溫、心跳、呼吸、血壓、意識、血氧、血糖等重要的生命徵象指標。
                </StepCard>
                
                <StepCard stepNumber={6} title="管路與藥物">
                  記錄個案身上所有管路的種類、藥物種類以及各自的到期日。您可以點選這些區塊來新增或修改資訊。
                </StepCard>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex justify-end">
          <Link href="/chapter-4">
            <Button size="lg" className="gap-2">
              下一章：記錄訪視資料 <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
