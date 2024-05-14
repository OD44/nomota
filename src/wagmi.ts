import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia } from 'wagmi/chains'

// export const config = createConfig({
//   chains: [mainnet, sepolia],
//   connectors: [
//     injected(),
//     coinbaseWallet({ appName: 'Create Wagmi' }),
//     walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
//   ],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// })

export const config = getDefaultConfig({
  appName: 'Nomota Nodes Dapp',
  projectId: import.meta.env.VITE_WC_PROJECT_ID,
  chains: [mainnet, sepolia],
  ssr: false
});

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
