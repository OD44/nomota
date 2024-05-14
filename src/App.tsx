import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

function App() {
  const account = useAccount();

  return (
    <>
      <ConnectButton />
    </>
  );
}

export default App;
