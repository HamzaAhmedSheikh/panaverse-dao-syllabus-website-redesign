import React from "react";

interface IDescription {
    id: number;
    description: string;
}

export let description_part1: IDescription[] = [
    {
        id: 1,
        description: "Project Part 3: Create a Pako Token"
    },
    {
        id: 2,
        description: `By creating a token and related contracts, you'll also learn how to
                      handle money sent to your contracts, which should come in handy
                      if you want to create some kind of paid decentralized service in
                      the future.`
    },
    {
        id: 3,
        description: `Therefore, for the sake of this chapter, let's imagine that our
                      Pako DApp uses its own coin - the Pako Token. We will create two
                      contracts - one for the token itself and one for the token crowd sale (the ICO).`
    },
    {
        id: 4,
        description: `Now Create your own Pako ERC20 Token and deploy it on a testnet.
                      The Token should be to use OpenZeppelin contracts. You will use the
                      Hardhat development environment. Also, write at least twenty automated tests.
                      We will be using Solidity and Typescript for development.`
    },
    {
        id: 5,
        description: "Project Part 4: Develop Crowd Sale Contract"
    },
    {
        id: 6,
        description: `This contract will be responsible for allowing users to exchange ETH for our Pako Token.
                      In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)`
    },
    {
        id: 7,
        description: "Implement a payable buyToken() function."
    },
    {
        id: 8,
        description: "Emit a BuyTokens event that will log who's the buyer, the amount of ETH sent and the amount of Token bought"
    },
    {
        id: 9,
        description: `Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e.
                      Right after the contract is deployed, we want the token contract to send 75% of our token supply to it.
                      While 25% remain in our personal "owner" account.`
    },
    {
        id: 10,
        description: `Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that  we are able to withdraw the ETH.`
    },
]


export let description_part2: IDescription[] = [
    {
        id: 11,
        description: "Project Part 5: Trying it with MetaMask"
    },
    {
        id: 12,
        description: `While it's  always good to test your code, it's often more satisfying to see 
                      the results of your work wrapped in a nice UI. Let's see how we can deploy our 
                      contracts and get some Pako tokens into our MetaMask wallet!`
    },
    {
        id: 13,
        description: `We start by running our deployment scripts for the test network so that
                      the new token contracts are  uploaded and deployed.`
    },
    {
        id: 14,
        description: `When it's done, take note of what addresses the contracts were uploaded to and copy it!`
    },
    {
        id: 15,
        description: `Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address.
                      If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.`
    },
    {
        id: 16,
        description: `After the transaction has been confirmed, you might be confused about why you can't 
                      see any tokens in your wallet. It turns out that you need to manually add the token address
                      in MetaMask in order to "register" it - after all, there are so many tokens out there,
                      there's no way MetaMask could list them all by default!`
    },
    {
        id: 17,
        description: `To do this, open the side menu and click on the "Add token" button to get started:`
    },
    {
        id: 18,
        description: `Once you're on the token page, click on "Add custom token" and paste in the token contract's address
                      in the address field.`
    },
    {
        id: 19,
        description: `After confirming that you want to add the token, you should be able to
                      see your Pako balance right next to your ETH balance in the wallet. How cool!`
    },
    {
        id: 20,
        description: `Project Part 6: Trying it with Multisignature Wallets`,
    }

]

