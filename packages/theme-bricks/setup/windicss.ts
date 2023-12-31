import { resolve } from 'node:path'
import { defineWindiSetup } from '@kolibry/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.vue'),
    ],
    exclude: [
      resolve(__dirname, 'node_modules'),
    ],
  },
  shortcuts: {
    'bg-main': 'bg-[#FBF6E5] text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
}))
