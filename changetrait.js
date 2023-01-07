//command to update a specific NFT

// metaboss update uri 
//     -a BQjLhS7FzKaJBgEf6ms28L3EZsGFasS5ziGP1fbsUYmv 
//     -k edR77x2bsyLQvbynYQFxnKR5TL1eCrEMfyjuJBoqb76.json 
//     -u https://arweave.net/zlA8UGTK9US0_iwQ6VqM-8oe1AO8JYS6W-dYsAFyYvg

//replace token ID and URI with variables

// metaboss update uri 
//     -a tokenId
//     -k edR77x2bsyLQvbynYQFxnKR5TL1eCrEMfyjuJBoqb76.json 
//     -u metadataUri

//How can we pass arguments into tokenId and metadataUri?
//We can obtain tokenId from connecting a user's wallet and onClick will pass in tokenId
//We can pass in metadataUri from the return of a function that uses NFT Minter OR
//phase 1 we could maybe use the JSON files with existing metadataUris

//How do we run the metaboss command through the tool online, and hide private key of update authority?

// NFT Minter function
const newArt = (image, metadata) => {

}