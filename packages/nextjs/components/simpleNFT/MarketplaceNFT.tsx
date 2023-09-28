import { useState } from "react";
import { Address, AddressInput } from "../scaffold-eth";
import { Collectible } from "./MyHoldings";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useAccount } from "wagmi";

export const MarketplaceNFT = ({ nft }: { nft: Collectible }) => {

  const { address: connectedAddress } = useAccount();
  const { writeAsync: transferNFT } = useScaffoldContractWrite({
    contractName: "YourCollectible",
    functionName: "transferFrom",
    args: [nft.owner, connectedAddress, BigInt(nft.id.toString())],
  });

  return (
    <div className="card card-compact bg-base-100 shadow-lg sm:min-w-[300px] shadow-secondary">
      <figure className="relative">
        {/* eslint-disable-next-line  */}
        <img src={nft.image} alt="NFT Image" className="h-60 min-w-full" />
        <figcaption className="glass absolute bottom-4 left-4 p-4 w-25 rounded-xl">
          <span className="text-black "># {nft.id}</span>
        </figcaption>
      </figure>
      <div className="card-body space-y-3">
        <p className="text-xl p-0 m-0 font-semibold text-center">{nft.name}</p>
        <div className="flex items-center justify-center">
          <div className="flex flex-wrap space-x-2 mt-1">
            {nft.attributes?.map((attr, index) => (
              <span key={index} className="badge badge-primary py-3">
                {attr.value}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-1">
          <p className="my-0 text-lg">{nft.description}</p>
        </div>
        <div className="flex space-x-3 mt-1 items-center">
          <span className="text-lg font-semibold">Propietario :  </span>
          <Address address={nft.owner} /> ({nft.name})
         
        </div>
        <div className="flex flex-col my-2 space-y-1">
          <a href={nft.external_url}>
            <span className="text-lg font-semibold mb-1"> </span>
            enlace del proyecto
          </a>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-md px-8 tracking-wide" onClick={() => transferNFT()}>
            Compensar
          </button>
        </div>

        {/* <div className="flex flex-col my-2 space-y-1">
          <span className="text-lg font-semibold mb-1">Transferir a: </span>

          <AddressInput
            value={transferToAddress}
            placeholder="receiver address"
            onChange={newValue => setTransferToAddress(newValue)}
          />
        </div> */}
        {/* <div className="card-actions justify-end">
          <button className="btn btn-secondary btn-md px-8 tracking-wide" onClick={() => transferNFT()}>
            Enviar
          </button>
        </div> */}
      </div>
    </div>
  );
};
