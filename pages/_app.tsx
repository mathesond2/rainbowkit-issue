import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { wagmiClient, chains } from "../utils/rainbow";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
