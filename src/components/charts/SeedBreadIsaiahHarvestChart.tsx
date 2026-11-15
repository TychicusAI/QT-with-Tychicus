import React from 'react';

export const SeedBreadIsaiahHarvestChart: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-emerald-50/70 via-stone-50 to-amber-50/60 dark:from-stone-900 dark:via-stone-900/95 dark:to-emerald-950/20 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40 shadow-sm">
      <div className="mb-4 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/50 rounded-full mb-2">
          舊約雙重互文與恩典循環圖解（哥林多後書 9:10-11）
        </span>
        <h5 className="text-lg font-bold text-stone-800 dark:text-stone-100">
          「種子與糧食」的雙重供應（賽 55:10）與「仁義莊稼」的感恩收割（何 10:12）
        </h5>
        <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
          至高贊助者（Epichorēgōn）以三個未來式應許使信徒凡事富足，不為私慾囤積，乃為活出單純慷慨並生發對神的感謝
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 800 370"
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label="種子與糧食的雙重供應與仁義莊稼的感恩收割圖解"
        >
          <defs>
            <marker
              id="arrowGreen"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
            </marker>
          </defs>

          {/* Left Box: God the Great Choregos (Isaiah 55:10) */}
          <rect
            x="30"
            y="25"
            width="230"
            height="220"
            rx="14"
            fill="#fefce8"
            stroke="#eab308"
            strokeWidth="2"
          />
          <rect x="30" y="25" width="230" height="38" rx="14" fill="#ca8a04" />
          <text x="145" y="49" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            1. 恩典源頭：至高供應者（賽 55:10）
          </text>
          <text x="145" y="84" textAnchor="middle" className="text-sm font-bold" fill="#713f12">
            那持續慷慨供應的（epichorēgōn）
          </text>
          <text x="145" y="103" textAnchor="middle" className="text-xs" fill="#854d0e">
            源自古希臘全額出資的合唱團贊助人
          </text>
          <rect x="48" y="118" width="194" height="50" rx="8" fill="#fef9c3" />
          <text x="145" y="138" textAnchor="middle" className="text-xs font-bold" fill="#854d0e">
            • 賜種給撒種的（sporon tō speironti）
          </text>
          <text x="145" y="156" textAnchor="middle" className="text-xs" fill="#a16207">
            供向外播撒、倍增祝福的資本
          </text>
          <rect x="48" y="178" width="194" height="50" rx="8" fill="#fef9c3" />
          <text x="145" y="198" textAnchor="middle" className="text-xs font-bold" fill="#854d0e">
            • 賜糧給人吃的（arton eis brōsin）
          </text>
          <text x="145" y="216" textAnchor="middle" className="text-xs" fill="#a16207">
            供日常維生、餵養生命的日用飲食
          </text>

          <path
            d="M 260 135 L 288 135"
            stroke="#059669"
            strokeWidth="2.5"
            markerEnd="url(#arrowGreen)"
          />

          {/* Center Box: Three Future Indicative Promises (Hosea 10:12) */}
          <rect
            x="292"
            y="25"
            width="220"
            height="220"
            rx="14"
            fill="#ecfdf5"
            stroke="#10b981"
            strokeWidth="2"
          />
          <rect x="292" y="25" width="220" height="38" rx="14" fill="#059669" />
          <text x="402" y="49" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            2. 三重未來直說語氣應許（何 10:12）
          </text>
          <text x="402" y="86" textAnchor="middle" className="text-xs font-bold" fill="#065f46">
            ① 必充足供應（chorēgēsei）
          </text>
          <text x="402" y="106" textAnchor="middle" className="text-xs" fill="#047857">
            持續不斷補足播撒所需的資源
          </text>
          <text x="402" y="136" textAnchor="middle" className="text-xs font-bold" fill="#065f46">
            ② 必多多倍增（plēthynei）
          </text>
          <text x="402" y="156" textAnchor="middle" className="text-xs" fill="#047857">
            倍增你們種地的種子（ton sporon hymōn）
          </text>
          <text x="402" y="186" textAnchor="middle" className="text-xs font-bold" fill="#065f46">
            ③ 必使之增長（auxēsei）
          </text>
          <text x="402" y="206" textAnchor="middle" className="text-xs" fill="#047857">
            增添「你們仁義的果子（ta genēmata）」
          </text>
          <text x="402" y="230" textAnchor="middle" className="text-xs font-semibold" fill="#065f46">
            （𝔓46, א, B, C 最古老抄本之確定應許）
          </text>

          <path
            d="M 512 135 L 540 135"
            stroke="#059669"
            strokeWidth="2.5"
            markerEnd="url(#arrowGreen)"
          />

          {/* Right Box: Enriched in Everything for All Generosity (9:11) */}
          <rect
            x="544"
            y="25"
            width="226"
            height="220"
            rx="14"
            fill="#f0f9ff"
            stroke="#0284c7"
            strokeWidth="2"
          />
          <rect x="544" y="25" width="226" height="38" rx="14" fill="#0284c7" />
          <text x="657" y="49" textAnchor="middle" className="text-xs font-bold" fill="#ffffff">
            3. 富足的終極目的（第 11 節）
          </text>
          <text x="657" y="84" textAnchor="middle" className="text-sm font-bold" fill="#075985">
            凡事被使之富足（en panti ploutizomenoi）
          </text>
          <text x="657" y="104" textAnchor="middle" className="text-xs" fill="#0369a1">
            神聖被動分詞：神親自使信徒富足
          </text>
          <rect x="562" y="120" width="190" height="48" rx="8" fill="#e0f2fe" />
          <text x="657" y="140" textAnchor="middle" className="text-xs font-bold" fill="#075985">
            為了活出一切單純的慷慨
          </text>
          <text x="657" y="158" textAnchor="middle" className="text-xs" fill="#0369a1">
            eis pasan haplotēta（非為奢華囤積）
          </text>
          <rect x="562" y="178" width="190" height="50" rx="8" fill="#dcfce7" />
          <text x="657" y="198" textAnchor="middle" className="text-xs font-bold" fill="#166534">
            終極果效：生發對神的感謝
          </text>
          <text x="657" y="216" textAnchor="middle" className="text-xs" fill="#15803d">
            katergazetai ... eucharistian tō theō
          </text>

          {/* Bottom Warning & Theology Bar */}
          <rect
            x="30"
            y="268"
            width="740"
            height="82"
            rx="12"
            fill="#fafaf9"
            stroke="#d6d3d1"
            strokeWidth="1.5"
          />
          <text x="400" y="294" textAnchor="middle" className="text-xs font-bold" fill="#292524">
            顛覆成功神學的管道神學：分辨手裡的「麵包（arton）」與「種子（sporon）」
          </text>
          <text x="400" y="316" textAnchor="middle" className="text-xs" fill="#57534e">
            若把神賜下作播撒用的「種子」當作私慾享樂的「麵包」一口吞下，恩典的循環就在此中斷；
          </text>
          <text x="400" y="336" textAnchor="middle" className="text-xs font-semibold" fill="#047857">
            唯有將種子慷慨撒入他人的缺乏中，才能結出仁義的莊稼（genēmata），化為歸與父神的萬口感恩！
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SeedBreadIsaiahHarvestChart;
