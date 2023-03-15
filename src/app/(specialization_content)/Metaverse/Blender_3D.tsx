import Reuseable_Link from "@/components/Reuseable_Links/Reuseable_Link";
import { Reuseable_Text_Link } from "@/components/Reuseable_Links/Reuseable_Text_Link";
import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Blender_3D = () => {
  return (
    <>
      <Heading
        as="h3"
        fontSize="1.2em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
      </Heading>

      <Text as="p" mt="0.8em" color="#606C71">
        Blender development is being funded by heavyweights in the real-time 3D
        (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic
        Games, Adobe, Microsoft, and Decentraland. It is expected to become the
        standard asset creation tool for metaverse.
      </Text>

      <Reuseable_Link
        href="https://www.blender.org/download/"
        hrefHeading="Blender 3+ Download"
      />

      <Reuseable_Link
        href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
        hrefHeading="Blender 3.0 Beginner Tutorial"
      />

      <Reuseable_Link
        href="https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit"
        hrefHeading="Blender 3.0 Hotkey"
      />

      <Reuseable_Link
        href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
        hrefHeading="Blender Projects Textbook: Blender by Example 2nd Edition"
      />

      <Reuseable_Link
        href="https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5"
        hrefHeading="Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation
         7th Edition by John M. Blain"
      />

      <Reuseable_Link
        href="https://www.youtube.com/watch?v=H7T0SzdFHwg"
        hrefHeading="Best Hardware Performance for Blender Rendering"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Assignment 1:
      </Text>
      <Reuseable_Text_Link
        title="Build a 3D Donut using Blender 3 as shown in these video tutorials"
        href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
        hrefHeading="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Assignment 2:
      </Text>
      <Reuseable_Text_Link
        title="Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book
        [Blender by Example 2nd Edition"
        href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
        hrefHeading="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Assignment 3:
      </Text>
      <Reuseable_Text_Link
        title="Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of
        the Book Blender by Example 2nd Edition"
        href="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
        hrefHeading="https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Assignment 4:
      </Text>
      <Reuseable_Text_Link
        title="Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7
        of the Book Blender by Example 2nd Edition"
        href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
        hrefHeading="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Assignment 5:
      </Text>
      <Reuseable_Text_Link
        title="Build a 3D Donut using Blender 3 as shown in these video tutorials"
        href="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
        hrefHeading="https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561"
      />

      <Text as="p" mt="0.8em" color="#606C71">
        Assignment 6:
      </Text>
      <Reuseable_Text_Link
        title="Build a 3D Sword in the Stone using Blender 3 as shown in these video
        tutorials"
        href="https://www.youtube.com/watch?v=bpvh-9H8S1g"
        hrefHeading="https://www.youtube.com/watch?v=bpvh-9H8S1g"
      />
    </>
  );
};

export default Blender_3D;
