import { siAnthropic, siCursor, siDocker, siPostman } from 'simple-icons'
import type { ComponentType, SVGProps } from 'react'
import { ChatGptLogo } from '../components/tool-logos/ToolLogoSvgs'

export interface ToolBrand {
  id: string
  name: string
  hex?: string
  path?: string
  Logo?: ComponentType<SVGProps<SVGSVGElement>>
}

/** Brands from simple-icons + custom marks for ChatGPT & Stitch */
export const tools: ToolBrand[] = [
  { id: 'postman', name: 'Postman', hex: siPostman.hex, path: siPostman.path },
  { id: 'docker', name: 'Docker', hex: siDocker.hex, path: siDocker.path },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    hex: '412991',
    Logo: ChatGptLogo,
  },
  { id: 'claude', name: 'Claude', hex: 'D97757', path: siAnthropic.path },
  { id: 'cursor', name: 'Cursor', hex: 'E8E8E8', path: siCursor.path }
]
