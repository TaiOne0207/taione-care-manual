import { DashboardLayout } from "@/components/DashboardLayout";
import { ScreenshotViewer } from "@/components/ScreenshotViewer";
import { StepCard } from "@/components/StepCard";
import { TipBox } from "@/components/TipBox";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Chapter1() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-sm font-bold text-primary mb-2">第一章</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">開始使用您的好幫手</h1>
          <p className="text-xl text-muted-foreground mt-4">
            在開始之前，請先確認您的手機已經安裝好「TaiOne Care GPT」APP。如果還沒安裝，請聯繫您的單位主管協助您完成。
          </p>
        </div>

        <section className="space-y-12">
          {/* Section 1.1 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">1.1</span>
              在手機上找到並打開 APP
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg">
                  首先，請在您手機的桌面上找到我們的APP圖示。它是一個藍色的圖案，中間有著一顆愛心，下方寫著「TaiOne」。
                </p>
                
                <StepCard stepNumber={1} title="找到圖示">
                  在手機螢幕上，用手指滑動，找到如右圖所示的圖示。
                </StepCard>
                
                <StepCard stepNumber={2} title="點擊打開">
                  找到後，用手指輕輕點一下這個圖示，就可以打開APP了。
                </StepCard>
              </div>
              
              <div>
                <ScreenshotViewer 
                  src="/screenshots/app-icon.png" 
                  alt="手機桌面上的APP圖示"
                  caption="認明這個藍色愛心圖示喔！"
                />
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* Section 1.2 */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">1.2</span>
              登入您的專屬帳號
            </h2>
            
            <p className="text-lg mb-6">
              打開APP後，您會看到登入畫面。您需要輸入由單位提供的專屬帳號（人員Mail）和密碼，才能開始使用。
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <ScreenshotViewer 
                  src="/screenshots/login-screen.png" 
                  alt="登入畫面"
                  caption="這是登入畫面，請輸入您的帳號密碼"
                />
              </div>

              <div className="space-y-4">
                <StepCard stepNumber={1} title="輸入帳號">
                  請點一下「人員Mail」後方的長方格，手機會跳出鍵盤，讓您輸入您的電子郵件帳號。
                </StepCard>
                
                <StepCard stepNumber={2} title="輸入密碼">
                  接著，點一下密碼的長方格（會顯示 **********），然後輸入您的密碼。輸入時密碼會以星星符號顯示，這是為了保護您的帳號安全。
                </StepCard>
                
                <StepCard stepNumber={3} title="記住帳號（建議勾選）">
                  如果您希望下次打開APP時不用再重新輸入帳號密碼，可以點一下「記住帳號」旁邊的圓圈，讓它打勾。這樣未來會更方便！
                </StepCard>
                
                <StepCard stepNumber={4} title="登入系統">
                  輸入完成後，請點一下藍色的「SIGN IN」按鈕，即可登入系統。
                </StepCard>
              </div>
            </div>

            <TipBox title="忘記密碼怎麼辦？">
              <p>別擔心，只要點一下最下方的「忘記密碼」，系統會引導您重新設定。</p>
              <p className="mt-2">另外也要注意，輸入帳號密碼時，請注意英文大小寫是否正確喔！</p>
            </TipBox>
          </div>
        </section>

        <div className="mt-12 flex justify-end">
          <Link href="/chapter-2" asChild>
            <Button size="lg" className="gap-2">
              下一章：認識主畫面 <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
