import { Button, Grid, Paper } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useWalletNfts } from "@nfteyez/sol-rayz-react";
import * as spltoken from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import { useCallback, useEffect, useState } from "react";
import fieldcoin from "../images/fieldcoin.png";
import filter from "../upgradefilter.json";
import "./selecttoken.css";

const selecttoken = () => {

  let walletAddress = "";
  const wallet = useAnchorWallet();
  walletAddress = wallet?.publicKey.toString();
  const filterList = JSON.parse(JSON.stringify(filter));
  const connection = new Connection(
    "https://solana-mainnet.g.alchemy.com/v2/beFqPJgt0Clx_U2R-ObpU_df-UTGGOD4",
    "confirmed"
  );

  const { nfts } = useWalletNfts({
    publicAddress: walletAddress,
    connection: connection,
  });

  const [metadata, setMetadata] = useState({});

  //set wallet for upgrade fee
  const feeAddress = new PublicKey('CK3Dam3dsMUdupHXDYJwBkzPjLe6NHZ9GHC2LMCLxTYV')

  //Set Solana Fee (Solana has 9 decimals, 100_000_000 = 0.1 Solana)
  let upgradeFee = 100_000_000

  const fetchMetadata = useCallback(async () => {
    for (const nft of nfts) {
      try {
        fetch(nft.data.uri)
          .then((response) => response.json())
          .then((meta) =>
            setMetadata((state) => ({ ...state, [nft.mint]: meta }))
          );
      } catch (error) {
        console.log(error);
      }
    }
  }, [nfts]);

  useEffect(() => {
    if (nfts?.length) fetchMetadata();
  }, [nfts, fetchMetadata]);

  const filterArray = Object.keys(metadata)
    .filter((key) => filterList.includes(key))
    .reduce((obj, key) => {
      obj[key] = metadata[key];
      return obj;
    }, {});

  var result = Object.keys(filterArray).map((key) => [key, filterArray[key]]);
  const [tx, setTx] = useState("");
  const [selected, setSelected] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = (e, index) => {
    setSelected((selected) =>
      selected.includes(result[index][0])
        ? selected.filter(
            (n) => n !== selected[selected.indexOf(result[index][0])]
          )
        : [...selected, result[index][0]]
    );
    e.target.classList.toggle("imagesClicked");
  };

  const { publicKey, sendTransaction } = useWallet();
  const fromWallet = wallet;
  const mint = new PublicKey("61X22Z6QnRzeuaPjvdWN4npRBBFNpVdkdMgWvRNt5dfm");
  const toWallet = new PublicKey(
    "CK3Dam3dsMUdupHXDYJwBkzPjLe6NHZ9GHC2LMCLxTYV"
  );

  const onSPLClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();
    setIsLoading(true);
    let nft1 = new PublicKey(selected[0]);

    let fromTokenAccount = await connection.getParsedTokenAccountsByOwner(
      fromWallet.publicKey,
      { mint: mint }
    );

    let nftAccount1 = await connection.getParsedTokenAccountsByOwner(
      fromWallet.publicKey,
      { mint: nft1 }
    );

    let toTokenAccount = new PublicKey(
      "GRTUAG6biTRTEQNCH7KrHQEdUq33cLpASQR8WhQzvM5K"
    );
    let allowOwnerOffCurve = true;

    const ataNft1 = await spltoken.getAssociatedTokenAddress(
      nft1,
      toWallet,
      allowOwnerOffCurve,
      spltoken.TOKEN_PROGRAM_ID,
      spltoken.ASSOCIATED_TOKEN_PROGRAM_ID
    );

    /*
    Swap with fee payer to add solana instead of field dee
    */
    try {
      const transaction = new Transaction().add(
        spltoken.createTransferInstruction(
          fromTokenAccount.value[0].pubkey,
          toTokenAccount,
          fromWallet.publicKey,
          0,
          [],
          spltoken.TOKEN_PROGRAM_ID
        ),
        spltoken.createAssociatedTokenAccountInstruction(
          fromWallet.publicKey, // payer
          ataNft1, // ata
          toWallet, // owner
          nft1, // mint
          spltoken.TOKEN_PROGRAM_ID,
          spltoken.ASSOCIATED_TOKEN_PROGRAM_ID
        ),
        spltoken.createTransferInstruction(
          nftAccount1.value[0].pubkey,
          ataNft1,
          fromWallet.publicKey,
          1,
          [],
          spltoken.TOKEN_PROGRAM_ID
        ),
        //Solana Fee Code Below
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: feeAddress,
          lamports: upgradeFee,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      const latestBlockHash = await connection.getLatestBlockhash();

      await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: signature,
      });
      setTx(signature);
      console.log(signature);
      setIsLoading(false);
    } catch (error) {
      setTx("false");
      console.error(error);
      setIsLoading(false);
    }
  })

  return (
  
    <div className="CustomMain">
      <div className="CustomHeader">
        <h1
          className="title"
          style={{marginBottom: "40px" }}>
          Upgrade Your Fox
        </h1>
      </div>

      <div className='MainContainer'>
        <div className="traitSelect">
          <h2 className="Heading">
            Choose a trait to upgrade:
          </h2>
            
            {selected.length > 1 && (
              <h2 className="Warning">
                Please only select 1!
              </h2>
            )}
            
            <Grid container spacing={10}>
              {result.map((nft, index) => {
                return (
                  <Grid item key={index} md={6} lg={4}>
                    <Paper className="images" elevation={8}>
                      <img
                        src={nft[1].image}
                        className="traitIMG"
                        alt="Fox Traits"
                        onClick={(e) => onClick(e, index)}
                      />
                      {selected.includes(result[index][0]) && (
                        <div className="clicked">
                          <h1 className="selectedText">Selected</h1>
                        </div>
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
            <br></br>
            <br></br>
            <h1></h1>
        </div>       

        <div className="completePurchase">
          <img className="transactionCarot" src={fieldcoin} alt="field coin" />
          {selected.length === 1 ? (
            <>
              <h1 className="carots" style={{ marginBottom: "10px" }}>
                Upgrade your Fox!
              </h1>
              <h2 style={{color: "#ff0000", marginTop: "20px"}}>
                IMPORTANT:
              </h2>
              <h3 style={{color: "#ff0000", marginTop: "10px", padding: "10px"}}>
                Once submitted, create a ticket in the Discord and send a screenshot of the fox you would like updated!!!
              </h3>
              {!isLoading ? (
                <Button
                  size="large"
                  className="transactionBtn"
                  style={{ marginBottom: "30px" }}
                  onClick={onSPLClick}
                  disabled={!publicKey}
                >
                  Upgrade Your Fox!
                </Button>
              ) : (
                <Button
                  size="large"
                  variant="outlined"
                  className="transactionBtn"
                >
                  <CircularProgress />
                </Button>
              )}
            </>
          ) : (
            <h1 className="carots" style={{ marginBottom: "20px" }}>
              Make Your Selection
            </h1>
          )}
          {tx.length > 6 ? (
            <>
              <Alert severity="success">
                Success - Transaction success{" "}
                <strong>

                  <a href= {'https://discord.gg/DU9ZPCTjW3'}>
                    <h3 style={{color: "red", textShadow: "1px 1px #000000", fontSize: "5vh", textAlign: "center"}}>
                      click here to open ticket
                    </h3>
                  </a>

                </strong>
              </Alert>
              <h5 style={{ width: "90%" }}>
                Transaction:{" "}
                <a
                  href={"https://solscan.io/tx/" + tx}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Transaction Link
                </a>
              </h5>
            </>
          ) : tx === "false" ? (
            <Alert severity="error">
              Error - Transaction was not confirmed-
              <strong>Please check wallet and try again</strong>
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
};

export default selecttoken;