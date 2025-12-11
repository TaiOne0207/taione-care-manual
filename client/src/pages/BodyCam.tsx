import { DashboardLayout } from "@/components/DashboardLayout";
import { ScreenshotViewer } from "@/components/ScreenshotViewer";
import { StepCard } from "@/components/StepCard";
import { TipBox } from "@/components/TipBox";

import { Camera, Wifi, Battery, Power, Settings, Video, Image as ImageIcon } from "lucide-react";

export default function BodyCam() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-12 pb-20">
        {/* Header Section */}
        <section className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
            <Camera className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-primary tracking-tight">Body Cam 操作手冊</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            專為現場工作人員設計的隨身攝影機，提供高品質影像記錄與操作透明度。
          </p>
        </section>

        {/* 1.1 設備概述 */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              1
            </div>
            <h2 className="text-2xl font-bold text-foreground">產品簡介與功能說明</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Body Cam 設備概述</h3>
              <p className="text-muted-foreground leading-relaxed">
                Body Cam（隨身攝影機）是一款專為現場工作人員設計的便攜式錄影設備。本設備採用小型化設計，能夠輕鬆配戴於身上，提供高品質的影像記錄功能，適用於各種工作場景的即時記錄需求。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                設備的核心價值在於提供客觀、真實的現場記錄，協助工作人員在執行任務時能夠完整保存重要的影像資料，同時確保操作的透明度與可追溯性。
              </p>
            </div>
            <ScreenshotViewer
              src="/images/bodycam-group.jpg"
              alt="Body Cam 產品合照"
              caption="輕巧便攜的 Body Cam，提供多種顏色選擇"
            />
          </div>
        </section>

        {/* 1.2 主要功能特色 */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h3 className="text-xl font-semibold text-primary pl-14">主要功能特色</h3>
          
          <div className="grid sm:grid-cols-2 gap-4 pl-14">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Video className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-lg">高品質錄影功能</h4>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>支援高解析度影像錄製</li>
                <li>自動對焦與曝光調整</li>
                <li>穩定的影像品質表現</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-lg">便攜式設計</h4>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>輕量化機身，長時間配戴無負擔</li>
                <li>小型方形外觀，易於固定</li>
                <li>人體工學設計</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Power className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-lg">智慧化操作</h4>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>簡化操作介面，降低學習門檻</li>
                <li>LED指示燈即時回饋</li>
                <li>一鍵式錄影啟動</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Wifi className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-lg">無線連接功能</h4>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                <li>內建Wi-Fi，支援無線傳輸</li>
                <li>可進行RTSP影像串流</li>
                <li>遠端監控與檔案下載</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 1.3 設備外觀與組件識別 */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              2
            </div>
            <h2 className="text-2xl font-bold text-foreground">設備外觀與操作</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <ScreenshotViewer
                src="/images/bodycam-front.jpg"
                alt="Body Cam 正面外觀"
                caption="正面包含攝影鏡頭與狀態指示燈"
              />
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-primary">正面與左側組件</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="font-bold text-foreground min-w-20">攝影鏡頭:</span>
                    <span>位於設備正面中央，負責影像擷取</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-foreground min-w-20">狀態指示燈:</span>
                    <span>位於設備上側，顯示拍照與錄影狀態</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-foreground min-w-20">電源按鍵:</span>
                    <span>位於左側，控制開關機（開機即開始錄音）</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-foreground min-w-20">Wi-Fi按鍵:</span>
                    <span>位於左側，控制Wi-Fi連線（需開啟才能連線）</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <ScreenshotViewer
                src="/images/bodycam-back.jpg"
                alt="Body Cam 背面外觀"
                caption="背面與側邊按鍵配置"
              />
              <div className="space-y-4">
                <h4 className="font-bold text-lg text-primary">後方與底部組件</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="font-bold text-foreground min-w-20">操控按鍵:</span>
                    <span>位於後方，控制拍照與錄影功能</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-foreground min-w-20">充電接口:</span>
                    <span>底部USB充電埠，支援標準充電線</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-foreground min-w-20">固定孔位:</span>
                    <span>底部孔位，用於配戴夾具或掛繩安裝</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 操作流程圖 */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <h3 className="text-xl font-semibold text-primary pl-14">開機與連線流程</h3>
          <div className="pl-14">
            <div className="mt-6 space-y-4">
              <StepCard
                stepNumber={1}
                title="標準開機程序"
              >
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>按壓左側的電源按鍵</li>
                  <li>設備開機後即<strong>自動開始錄音功能</strong></li>
                  <li>觀察上側狀態指示燈確認開機狀態</li>
                  <li>設備正常開機後進入待機狀態（錄音中）</li>
                </ul>
              </StepCard>
              <StepCard
                stepNumber={2}
                title="Wi-Fi 功能設定（選用）"
              >
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>如需Wi-Fi功能，按壓左側Wi-Fi按鍵</li>
                  <li>Wi-Fi開啟後才能進行無線連線</li>
                  <li>注意：Wi-Fi功能會增加電力消耗</li>
                </ul>
              </StepCard>
            </div>
          </div>
        </section>

        {/* 2.4 狀態指示燈說明 */}
        <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              3
            </div>
            <h2 className="text-2xl font-bold text-foreground">燈號與電力說明</h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-muted-foreground font-medium">
                <tr>
                  <th className="p-4">操作</th>
                  <th className="p-4">燈號狀態</th>
                  <th className="p-4">顏色</th>
                  <th className="p-4">閃爍模式</th>
                  <th className="p-4">狀態說明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                <tr>
                  <td className="p-4 font-medium">長按三秒錄影</td>
                  <td className="p-4">閃爍</td>
                  <td className="p-4 text-foreground font-bold">白光</td>
                  <td className="p-4">連續閃爍</td>
                  <td className="p-4">正在錄影中</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">短按拍照</td>
                  <td className="p-4">閃爍</td>
                  <td className="p-4 text-foreground font-bold">白光</td>
                  <td className="p-4">閃爍一次</td>
                  <td className="p-4">拍照完成</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">故障提示</td>
                  <td className="p-4">常亮</td>
                  <td className="p-4 text-destructive font-bold">紅光</td>
                  <td className="p-4">不閃爍</td>
                  <td className="p-4">系統故障</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">低電力</td>
                  <td className="p-4">閃爍</td>
                  <td className="p-4 text-destructive font-bold">紅光</td>
                  <td className="p-4">連續閃爍</td>
                  <td className="p-4">電量不足</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">待機狀態</td>
                  <td className="p-4">熄滅</td>
                  <td className="p-4">-</td>
                  <td className="p-4">-</td>
                  <td className="p-4">開機待機（錄音中）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-secondary/20 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4 text-secondary-foreground font-bold">
                <Battery className="w-5 h-5" />
                <h4>電池續航力參考</h4>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>純錄音模式</span>
                  <span className="font-medium text-foreground">約 5.4 小時</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>錄影模式</span>
                  <span className="font-medium text-foreground">約 2.2 小時</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Wi-Fi 開啟</span>
                  <span className="font-medium text-foreground">約 3.4 小時</span>
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span>Wi-Fi 串流</span>
                  <span className="font-medium text-foreground">約 1.6 小時</span>
                </li>
                <li className="flex justify-between">
                  <span>待機狀態</span>
                  <span className="font-medium text-foreground">約 28 天</span>
                </li>
              </ul>
            </div>

            <TipBox title="重要提醒">
              <ul className="list-disc list-inside space-y-2">
                <li>設備<strong>開機後即自動開始錄音功能</strong>，請注意隱私規範。</li>
                <li>當電量低於 3.4V 時會出現低電量警示（紅燈閃爍），請盡快充電。</li>
                <li>充電時間約需 1.5 小時即可充滿。</li>
                <li>Wi-Fi 功能較耗電，建議僅在需要傳輸或串流時開啟。</li>
              </ul>
            </TipBox>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
