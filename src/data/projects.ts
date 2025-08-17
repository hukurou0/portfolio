import type { Project } from '../types'
import { aiWaveLinks } from './links'

export const projects: Project[] = [
  {
    id: 1,
    title: "Connect",
    description: "【思い出枠】初めて公開したWebアプリ\n\n大学の課題を学生達で共有するWebアプリ。対象ユーザの約10%が登録していた。",
    techStack: ["Web App"],
    link: "https://www.universitytask.link/",
  },
  {
    id: 2,
    title: "【イベント】AIの波に乗り遅れるな!!",
    description: "AIアプリ開発を難しいと感じている人に向けて、基盤の考え方を共有しエンジニアを増やすためのオフラインイベント",
    techStack: ["オフラインイベント"],
    link: "https://connpass.com/event/343718/",
    links: aiWaveLinks,
  },
  {
    id: 3,
    title: "【OSS】Alexa × Dify",
    description: "【近日公開】DifyのインターフェースにAlexaを用いることで、より日常に溶け込んだAI体験を作るためのプロジェクト。これを使ったいろいろなユースケース開発を促進するため、OSSとして公開。",
    techStack: ["OSS", "Alexa", "Dify"],
    link: "https://github.com/hukurou0/alexa-dify",
    highlight: true
  },
  {
    id: 4,
    title: "【入賞作品】Vibe Planning",
    description: "ZennとGoogle Cloud開催のAI Agent Hackathonにて161チーム中3位に入賞",
    techStack: ["AI Agent Hackathon with Google Cloud"],
    link: "https://github.com/example",
  },

]