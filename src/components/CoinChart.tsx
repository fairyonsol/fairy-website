import React from 'react';

const CoinChart: React.FC = () => {
  const contractAddress = "EXgaZEkfdJMGhaK6uMcC7qnsFodEsdaLii8p442ppump";
  
  return (
    <div className="w-full h-96 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
      <iframe
        src={`https://dexscreener.com/solana/${contractAddress}?embed=1&theme=dark`}
        className="w-full h-full border-0"
        title="Fairy Token Chart"
        allow="clipboard-write"
      />
    </div>
  );
};

export default CoinChart;