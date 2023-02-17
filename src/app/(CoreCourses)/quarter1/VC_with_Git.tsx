import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const VC_with_Git = () => {
  return (
    <>
      <Heading
        id="fundamentals-of-version-control-with-git-recorded-videos"
        as="h3"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Fundamentals of Version Control with Git (Recorded Videos)
      </Heading>

      <Text
        as="p"
        mt="0.8em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF"
          target="_blank"
        >
          Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch
          Recorded Videos)
        </Link>
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step
        course for the complete beginner by Tobias Günther
      </Text>
      <Text as="p" mt="0.8em" color="#606C71">
        We will also cover these readings:
      </Text>

      <Text
        as="p"
        mt="0.8em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://help.github.com/articles/markdown-basics/"
          target="_blank"
        >
          https://help.github.com/articles/markdown-basics/
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.8em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github"
          target="_blank"
        >
          http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.8em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences"
          target="_blank"
        >
          http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.8em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing"
          target="_blank"
        >
          https://git-scm.com/book/en/v2/Git-Branching-Rebasing
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.8em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches"
          target="_blank"
        >
          http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.8em"
        bgColor="transparent"
        fontWeight="normal"
        color="#606C71"
      >
        <strong> For practice: </strong>
        <Text
          as="span"
          color="#1e6bb8"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://try.github.io/levels/1/challenges/1"
            target="_blank"
          >
            https://try.github.io/levels/1/challenges/1
          </Link>
        </Text>
      </Text>

      <Text as="p" mt="0.8em" color="#606C71">
        Homework:
      </Text>
      <Text
        as="p"
        mt="0.5em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.datacamp.com/courses/introduction-to-git-for-data-science"
          target="_blank"
        >
          https://www.datacamp.com/courses/introduction-to-git-for-data-science
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.5em"
        bgColor="transparent"
        fontWeight="normal"
        color="#606C71"
      >
        <strong> Git Cheatsheet: </strong>
        <Text
          as="span"
          color="#1e6bb8"
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          <Link
            href="https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html"
            target="_blank"
          >
            https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html
          </Link>
        </Text>
      </Text>

      <Text as="p" mt="0.5em" color="#606C71">
        Git Quiz before the start of Quarter 2
      </Text>
      <Text as="p" mt="0.5em" color="#606C71">
        Total Questions: 60, Total Time: 75 minutes
      </Text>
    </>
  );
};

export default VC_with_Git;
