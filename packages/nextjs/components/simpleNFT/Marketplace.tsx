import { useEffect, useState } from "react";
import { Spinner } from "../Spinner";
import { MarketplaceNFT } from "./MarketplaceNFT";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";
import { NFTMetaData, getNFTMetadataFromIPFS } from "~~/utils/simpleNFT";
<<<<<<< HEAD
import { getAccount } from "wagmi/dist/actions";
import nftsMetadata from "~~/utils/simpleNFT/nftsMetadata";
=======

>>>>>>> 63fd855c5c39c7f3775f52d65a985b0460edc792
export interface Collectible extends Partial<NFTMetaData> {
  id: number;
  uri: string;
  owner: string;
}

export const Marketplace = () => {
  const [allCollectibles, setAllCollectibles] = useState<Collectible[]>([]);
  const [allCollectiblesLoading, setAllCollectiblesLoading] = useState(true);

  const { data: yourCollectibleContract } = useScaffoldContract({ contractName: "YourCollectible" });

  useEffect(() => {
    const fetchAllCollectibles = async () => {
      if (!yourCollectibleContract || !yourCollectibleContract.read) return;

      try {
        const totalTokens = await yourCollectibleContract.read.totalSupply();

        const collectibleUpdate = [];
        for (let i = 0; i < totalTokens; i++) {
          const tokenId = await yourCollectibleContract.read.tokenByIndex([BigInt(i)]);
          const tokenURI = await yourCollectibleContract.read.tokenURI([tokenId]);
          const owner = await yourCollectibleContract.read.ownerOf([tokenId]);

          const ipfsHash = tokenURI.replace("https://ipfs.io/ipfs/", "");
          const nftMetadata = await getNFTMetadataFromIPFS(ipfsHash);

          collectibleUpdate.push({
            id: Number(tokenId.toString()),
            uri: tokenURI,
            owner,
            ...nftMetadata,
          });
        }

        setAllCollectibles(collectibleUpdate);
      } catch (error) {
        notification.error("Error fetching all collectibles");
        console.error(error);
      } finally {
        setAllCollectiblesLoading(false);
      }
    };

    fetchAllCollectibles();
  }, [yourCollectibleContract]);

  if (allCollectiblesLoading)
    return (
      <div className="flex justify-center items-center mt-10">
        <Spinner width="75" height="75" />
      </div>
    );
console.log(nftsMetadata);
  return (
    <div className="flex flex-wrap gap-4 my-8 px-5 justify-center">
      {allCollectibles.map(item => (
        <MarketplaceNFT nft={item} key={item.id} />
      ))}
    </div>
  );
};
