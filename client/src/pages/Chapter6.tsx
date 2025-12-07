import { DashboardLayout } from "@/components/DashboardLayout";
import { ScreenshotViewer } from "@/components/ScreenshotViewer";
import { StepCard } from "@/components/StepCard";
import { TipBox } from "@/components/TipBox";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Chapter6() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-sm font-bold text-primary mb-2">第六章</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">一鍵生成您的護理報告</h1>
          <p className="text-xl text-muted-foreground mt-4">
            完成所有訪視記錄和評估後，撰寫護理報告是相當重要的一環。APP提供了一個強大的「一鍵報告生成」功能，能為您省下大量的文書作業時間。
          </p>
        </div>

        <section className="space-y-12">
          {/* Section 6.1 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">6.1</span>
              使用一鍵報告生成
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <StepCard stepNumber={1} title="確認資料">
                  首先，請確保您已經將該次訪視的所有資料（如生命徵象、各項評估等）都記錄完成。
                </StepCard>
                
                <StepCard stepNumber={2} title="點選生成">
                  回到該個案的詳細資訊頁面，在畫面的上方，找到「一鍵報告生成」的按鈕，並點選它。
                </StepCard>
                
                <StepCard stepNumber={3} title="自動產出">
                  系統會自動整合您輸入的所有資料，包含生命徵象、評估結果、AI的病摘與注意事項等，在幾秒鐘內就為您產出一份結構完整、內容專業的護理報告。
                </StepCard>

                <StepCard stepNumber={4} title="確認與匯出">
                  產出報告後，您可以進行預覽、確認，並根據需要進行微調，然後即可匯出或提交給您的單位。
                </StepCard>
              </div>
              
              <div>
                <ScreenshotViewer 
                  src="/screenshots/截圖2025-12-07上午9.44.59.png" 
                  alt="一鍵報告生成按鈕"
                  caption="點選上方的一鍵報告生成按鈕"
                />
                
                <div className="mt-6 bg-primary/5 p-6 rounded-xl border border-primary/10">
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    為什麼要用這個功能？
                  </h4>
                  <p className="text-muted-foreground">
                    這個功能就像是您身邊有一位24小時待命的行政助理，能將您從繁瑣的文書工作中解放出來，讓您有更多的精力專注於真正重要的照護工作。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Conclusion */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-primary">恭喜您！</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              您已經完成了「TaiOne Care GPT」APP的學習旅程。希望這份手冊能幫助您輕鬆上手，並在日常工作中感受到科技帶來的便利與溫暖。
            </p>
            <TipBox title="還有問題嗎？">
              如果在操作上有任何疑問，隨時可以再次翻閱這份手冊，或者向您的單位主管尋求協助。
            </TipBox>
            <div className="pt-4">
              <Link href="/">
                <Button variant="outline" size="lg">
                  回到首頁
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
