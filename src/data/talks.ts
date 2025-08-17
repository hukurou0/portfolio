import type { Talk } from '../types'
import { aiWaveLinks } from './links'

export const talks: Talk[] = [
  {
    id: 1,
    title: "【思い出枠】初めて公開したアプリケーションの紹介資料",
    event: "英語の教授に授業内で紹介時間をいただいて",
    description: "Connect-課題の共同管理アプリ",
    slideUrl: "https://speakerdeck.com/huku/ke-ti-nogong-tong-guan-li-apuri-connect",
    date: "2023-04-15"
  },
  {
    id: 2,
    title: "LLMアプリケーションの作り方",
    event: "大学の自由発表",
    description: "LLMの基礎とアプリケーションの作り方について",
    slideUrl: "https://speakerdeck.com/huku/llmapurikesiyonnozuo-rifang",
    date: "2024-06-19"
  },
  {
    id: 3,
    title: "新卒就活で使った資料",
    event: "就活",
    description: "学部1-3年でやったことのまとめ",
    slideUrl: "https://speakerdeck.com/huku/xin-zu-jiu-huo-deshi-tutazi-liao",
    date: "2024-09-01"
  },
  {
    id: 4,
    title: "ライフコンパス 本選",
    event: "PKSHA 生成AIハッカソン 本選",
    description: "あなたの人生に見通しの良さを-ライフコンパス",
    slideUrl: "https://speakerdeck.com/huku/pkshasheng-cheng-aihatukason",
    date: "2024-11-15"
  },
  {
    id: 5,
    title: "《AIの波に乗り遅れるな!!》",
    event: "フク主催の若手エンジニア向けイベント",
    description: "AIアプリ開発を理解し、自分の手段にする",
    slideUrl: "https://speakerdeck.com/huku/ainobo-nicheng-richi-reruna-ai-as-a-tool",
    date: "2025-02-12",
    links: aiWaveLinks,
    highlight: true
  },
  {
    id: 7,
    title: "次世代AIアプリのアーキテクチャと体験設計",
    event: "Tech.Uni AI勉強会",
    description: "ワークフローとエージェントのバランスについて、HITLの設計について",
    slideUrl: "https://speakerdeck.com/huku/ci-shi-dai-aiapurinoakitekutiyatoti-yan-she-ji",
    date: "2025-06-16"
  },
]