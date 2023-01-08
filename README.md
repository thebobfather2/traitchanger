# Automated Trait Changer

## Identified Issues

<ul>
    <li>Phase 1: could we use JSON lists (think werefox) and token gate which evolutions users can choose?</li>
    <li>Phase 1: Could build first iteration to simply switch using existing arweave links</li>
    <li>Connect Wallet</li>
        <ul>
            <li>-> identify mint addresses via user onClick (to be passed in to metaboss)</li>
            <li>-> identify individual attributes to populate layer library</li>
        </ul>
    <li>Build hashlips into site</li>
        <ul>
            <li>-> I have looked into how to do this, might need server to use node commands</li>
            <li>-> token gate layers in layer folders - use wallet connect to read metadata and call files?</li>
            <li>-> output .png and .json directly into NFT Minter?</li>
        </ul>  
    <li>How can we hide private key for update authority?</li>
</ul>

## Trait Combiner

<ul>
    <li>I've got a prototype html file working that functions as an online version of hashlips</li>
        <ul>
            <li>-> it creates 1 of 1 images with given traits</li>
            <li>-> we need to add functions that allow users to select one trait per category, and this needs to be token gated so we will likely need to move this code to react-based .jsx</li>
            <li>-> additional code must be added to generate the new .json metadata file for the new image</li>
            <li>-> the image and .json file output will need to then be fed to arweave via mintertool.js, then finally to metaboss update command</li>
        </ul>
    <li>First MVP will be a basic program with drop down menu to select traits and spit out combos - image only</li>
    <li>Phase 2 will generate the json metadata and allow edits to blockchain</li>
</ul>