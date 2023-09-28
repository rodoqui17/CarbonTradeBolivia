import { useEffect, useState } from "react";
import { Spinner } from "../Spinner";
import { NFTCard } from "./NFTCard";
import { useScaffoldContract, useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { NFTMetaData, getNFTMetadataFromIPFS } from "~~/utils/simpleNFT";

export interface Collectible extends Partial<NFTMetaData> {
  id: number;
  uri: string;
  owner: string;
}

export const AllNFTs = () => {
  const [allCollectibles, setAllCollectibles] = useState<Collectible[]>([]);
  const [allCollectiblesLoading, setAllCollectiblesLoading] = useState(false);

  const { data: yourCollectibleContract } = useScaffoldContract({
    contractName: "YourCollectible",
  });

  useEffect(() => {
    const fetchAllCollectibles = async (): Promise<void> => {
      if (yourCollectibleContract === undefined)
        return;

      setAllCollectiblesLoading(true);
      const collectibles: Collectible[] = [];

      // Puedes modificar este rango según tus necesidades o utilizar una función de lectura para obtener el número total de tokens disponibles.
      const totalTokensToFetch = 100;

      for (let tokenIndex = 0; tokenIndex < totalTokensToFetch; tokenIndex++) {
        try {
          const tokenId = await yourCollectibleContract.read.tokenByIndex([BigInt(tokenIndex.toString())]);

          const tokenURI = await yourCollectibleContract.read.tokenURI([tokenId]);

          const ipfsHash = tokenURI.replace("https://ipfs.io/ipfs/", "");

          const nftMetadata: NFTMetaData = await getNFTMetadataFromIPFS(ipfsHash);

          // También puedes obtener la dirección del propietario del NFT si lo necesitas.
          const owner = await yourCollectibleContract.read.ownerOf([tokenId]);

          collectibles.push({
            id: parseInt(tokenId.toString()),
            uri: tokenURI,
            owner: owner,
            ...nftMetadata,
          });
        } catch (e) {
          notification.error("Error fetching collectibles");
          console.log(e);
        }
      }
      setAllCollectibles(collectibles);
      setAllCollectiblesLoading(false);
    };

    fetchAllCollectibles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (allCollectiblesLoading)
    return (
      <div className="flex justify-center items-center mt-10">
        <Spinner width="75" height="75" />
      </div>
    );

  return (
    <>
      {allCollectibles.length === 0 ? (
        <div className="flex justify-center items-center mt-10">
          <div className="text-2xl text-primary-content">No hay NFTs disponibles</div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
          {allCollectibles.map(item => (
            <NFTCard nft={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};
