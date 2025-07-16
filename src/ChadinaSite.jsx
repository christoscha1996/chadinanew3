import './globals.css';

export default function ChadinaSite() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="text-center py-16 px-4">
        <img
          src="/chadina-hero.png"
          alt="Chadina Hero"
          className="mx-auto w-72 mt-4 rounded-xl shadow-lg"
        />
        <h1 className="text-4xl font-bold text-pink-500 mt-6">CHADINA</h1>
        <p className="text-lg text-gray-300 mt-2">
          She doesn’t chase pumps. Pumps chase her.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://raydium.io/swap/?input=sol&output=CHADINA_CONTRACT_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-semibold"
          >
            Buy on Raydium
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-pink-400">About Chadina</h2>
        <p className="mt-4 text-gray-300">
          Chadina is the alpha baddie and unhinged queen of the Solana memecoin scene.
          Born from Gigachad's rib and raised by the pump, she dominates with style and confidence.
        </p>
      </section>

      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-pink-400">Tokenomics</h2>
        <ul className="mt-4 text-gray-300 list-disc list-inside">
          <li>Supply: 1,000,000,000 $CHADINA</li>
          <li>Tax: 0%</li>
          <li>Community-owned, no presale</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-pink-400">How to Buy</h2>
        <ol className="mt-4 text-gray-300 list-decimal list-inside">
          <li>Get SOL in your wallet (Phantom, Solflare, etc.)</li>
          <li>Click "Connect Wallet" above</li>
          <li>Buy $CHADINA on Raydium</li>
        </ol>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        Follow us on{' '}
        <a
          href="https://x.com/pumpfunbotdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500"
        >
          @pumpfunbotdev
        </a>
      </footer>
    </main>
  );
}
