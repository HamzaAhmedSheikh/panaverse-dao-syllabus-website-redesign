import { Box, Heading, Text } from "@chakra-ui/react";
import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";
import {
  Inline_Text_Link,
  Reuseable_Text_Link,
} from "@/components/Reuseable_Links/Reuseable_Text_Link";
import {
  description_part1,
  description_part2,
} from "@/database/specialization_content/TokenomicsData";

const Tokennomics = () => {
  return (
    <>
      <Heading
        id="tokennomics"
        as="h3"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Tokennomics
      </Heading>

      <Text as="p" mt="0.8em" color="#606C71">
        Blockchain Project: Create a Token and Launch ICO/IEO/IDO
      </Text>

      <Reuseable_Text_Link
        title="As you probably know, the ICO (&quot;Initial Coin Offering&quot;)
        industry has been booming, and it's completely <br /> reinventing
        the way new startups kickstart themselves. In fact, have a look at
        Wikipedia's list of highest crowdfunding projects"
        href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
        hrefHeading="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
        subHeading="and you'll notice that blockchain projects absolutely dominate the list."
      />

      <Reuseable_Link
        href="https://phemex.com/blogs/what-is-a-dex-ido"
        hrefHeading="Understand the difference between IDO vs. IEO vs. ICO"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Also check these links for latest listings:
      </Text>

      <Inline_Text_Link
        title="ICO list at ICO Drops: "
        href="https://icodrops.com"
        hrefHeading="https://icodrops.com"
      />

      <Inline_Text_Link
        title="ICO list at ICO Drops: "
        href="https://icodrops.com"
        hrefHeading="https://icodrops.com"
      />

      <Inline_Text_Link
        title="ICO List of Best New Initial Coin Offerings"
        href="https://topicolist.com/"
        hrefHeading="https://topicolist.com/"
      />

      <Inline_Text_Link
        title="Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
        IDOsTop-Rated Crypto Token Sales: <br /> List of New ICOs, STOs, IEOs
        and IDOs"
        href="https://cryptototem.com/ico-list/"
        hrefHeading="https://cryptototem.com/ico-list/"
      />

      <Inline_Text_Link
        title="ICO List Online"
        href="https://www.icolistingonline.com"
        hrefHeading="https://www.icolistingonline.com"
      />

      <Inline_Text_Link
        title="Binance IEO List"
        href="https://coincodex.com/ieo-list/binance/"
        hrefHeading="https://coincodex.com/ieo-list/binance/"
      />

      <Inline_Text_Link
        title="Binance Launchpad"
        href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
        hrefHeading="https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
      />

      <Inline_Text_Link
        title="IEO List"
        href="https://icomarks.com/ieo"
        hrefHeading="https://icomarks.com/ieo"
      />

      <Inline_Text_Link
        title="Polkastarter"
        href="https://polkastarter.com"
        hrefHeading="https://polkastarter.com"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Project Part 1: How to Launch a IEO on Binance Launchpad
      </Text>

      <Inline_Text_Link
        title="Read How to Launch an IEO"
        href="https://appinventiv.com/blog/how-to-launch-an-ieo/"
        hrefHeading="https://appinventiv.com/blog/how-to-launch-an-ieo/"
      />

      <Inline_Text_Link
        title="Your first task of the project is to make a google slides presentation
        on how to start a IEO on the Binance Launch Pad"
        href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04"
        hrefHeading="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        <b> Note: </b> Also document the alternatives to Binance Launchpad.
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        Project Part 2: How to Launch a IDO on Polkastarter
      </Text>

      <Inline_Text_Link
        title="Review the [list of top fundraising platforms"
        href="https://cryptorank.io/fundraising-platforms"
        hrefHeading="https://cryptorank.io/fundraising-platforms"
      />

      <Inline_Text_Link
        title="Your second task of the project is to make a google slides presentation
        on how to start a IDO on the Polkastarter"
        href="https://polkastarter.com/"
        hrefHeading="https://polkastarter.com/"
      />

      {description_part1.map(({ id, description }) => (
        <Box as="div" key={id}>
          <Text as="p" mt="0.8em" color="#606C71">
            {description}
          </Text>
        </Box>
      ))}

      <Inline_Text_Link
        title="You can use the openzeppelin crowd sale"
        href="https://docs.openzeppelin.com/contracts/4.x/crowdsales"
        hrefHeading="https://docs.openzeppelin.com/contracts/4.x/crowdsales"
        subHeading="however you will have to update the code to the latest solidity
        version."
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Also write extensive tests, for example we will simply send a
        transaction of 1 ETH from a random <br /> account to the contract. After
        the transaction, we should expect the account to have received Pako,
        <br /> while the contract&apos;s balance should have been reduced.
      </Text>

      <Inline_Text_Link
        title="Note: Before you get started writing the token contract we
        suggest you review access control"
        href="https://docs.openzeppelin.com/contracts/4.x/access-control"
        hrefHeading="https://docs.openzeppelin.com/contracts/4.x/access-control"
      />

      {description_part2.map(({ id, description }) => (
        <Box as="div" key={id}>
          <Text as="p" mt="0.8em" color="#606C71">
            {description}
          </Text>
        </Box>
      ))}

      <Inline_Text_Link
        title="Read"
        href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
        hrefHeading="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
      />

      <Inline_Text_Link
        title="Now use Gnosis Safe]"
        href="https://gnosis-safe.io/"
        hrefHeading="https://gnosis-safe.io/"
        subHeading="with multi-sigs to do what you did in the last part."
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Project Part 7: Sending Tokens using Ethers.js
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        Write a Typescript program to send Pako Token to some friend&apos;s
        address using Ethers.js.
      </Text>

      <Inline_Text_Link
        title="You may follow this tutorial"
        href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
        hrefHeading="https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Project Part 8 Advance: Create, Deploy, Mint, and Sell a NFT
      </Text>

      <Inline_Text_Link
        title="Read this NFT tutorial series"
        href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
        hrefHeading="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
      />

      <Inline_Text_Link
        title="Create a NFT contract using the [OpenZepplen ERC721 NFT Standard"
        href="https://docs.openzeppelin.com/contracts/4.x/erc721"
        hrefHeading="https://docs.openzeppelin.com/contracts/4.x/erc721"
      />

      <Inline_Text_Link
        title="You may use the Preset ERC721 contract"
        href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
        hrefHeading="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
      />

      <Inline_Text_Link
        title="Deploy your NFT contract on a testnet, mint it, and view it on the
        MetaMask wallet and list it on OpenSea Marketplace"
        href="https://opensea.io/"
        hrefHeading="https://opensea.io/"
        subHeading="for sale."
      />

      <Inline_Text_Link
        title="Implement a ERC721 Market"
        href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
        hrefHeading="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
      />
    </>
  );
};

export default Tokennomics;
