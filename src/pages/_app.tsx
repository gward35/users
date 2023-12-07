import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { SWRConfig } from 'swr'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SWRConfig
        value={{
          revalidateIfStale: true,
          revalidateOnMount: true,
          revalidateOnFocus: true,
          revalidateOnReconnect: true,
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}
