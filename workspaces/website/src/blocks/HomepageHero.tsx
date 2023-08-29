import { Box, Flex, Stack } from "@chakra-ui/react";
import { Button } from "@ui/Button";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { keyframes } from "@emotion/react";

type Props = {
  readonly seo: {
    heroText: string;
  };
};
import { Intro } from "./Intro";
import { navigate } from "vite-plugin-ssr/client/router";
import { useRive } from "@rive-app/react-canvas";

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

export const HomepageHero = ({ seo }: Props) => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/starknet-hub.riv",
    autoplay: true,
  });

  return (
    <>
      <Box
        as="section"
        pt="46px"
        pb="93px"
        minHeight="600px"
        _dark={{
          bgGradient:
            "linear-gradient(5deg, #15151E 0%, #0F0E1B 16.58%, #000 100%)",
        }}
        bgGradient="linear-gradient(5deg, #0C0C4F 0%, #0C0C4F 16.58%, #060625 100%)"
        position="relative"
        mt="-24px"
        sx={{
          overflow: "visible",
          marginTop: "-150px",
          paddingTop: "256px",
          position: "relative",
          clipPath: "polygon(0 0,100% 0,100% calc(100% - 14vw),0 100%)",
          "& .rive-animation": {
            animation: `${fadeIn} 3s ease-in-out`,
            position: "absolute",
            top: "-215px",
            right: "-300px",
            minWidth: "calc(100% + 400px)",
            height: "140% !important",
            border: "none",
            zIndex: -1,
          },
        }}
      >
        {/* <iframe width="2000" height="1025" src="https://rive.app/s/l5ivPhccukGcLoezhwqWyQ/embed"></iframe> */}
        <RiveComponent className="rive-animation" />
        <Box
          zIndex={2}
          minHeight="600px"
          maxW={{ base: "contentMaxW.lg", md: "contentMaxW.xl" }}
          px={{ base: "page.left-right.base", md: "page.left-right.md" }}
          mx="auto"
        >
          <Flex
            align="flex-start"
            direction={{ base: "column", lg: "row" }}
            justify="space-between"
            // paddingBottom="33px"
            // mb="56px"
          >
            <Box
              position="relative"
              flex="1"
              pt="0"
              order={{ base: 1, lg: 0 }}
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Heading
                variant="h1hero"
                color="#E8E8F7"
                lineHeight="120%"
                mt={{ base: "0", lg: "-20px" }}
                fontWeight="500"
              >
                Ethereum’s next
                <br /> leap in <Intro />
              </Heading>
              <Text
                color="#FCCFD4"
                mt="28px"
                fontSize="20px"
                lineHeight="36px"
                fontWeight="500"
                dangerouslySetInnerHTML={{ __html: seo.heroText }}
              />

              <Stack
                direction={{ base: "column", md: "row" }}
                spacing="4"
                mt="32px"
                position={{ base: "relative", md: "relative" }}
                zIndex={4}
              >
                <Box
                  sx={{
                    background:
                      "linear-gradient(284deg, #FFFDD8 0%, #EC796B 15.63%, #D672EF 43.09%, #8BF3F9 74.52%)",
                    padding: "2px",
                    borderRadius: "8px",
                  }}
                >
                  <Button
                    onClick={() => navigate("/en/developers")}
                    variant="solid"
                  >
                    Build on Starknet
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box
              zIndex={0}
              order={{ base: 0, lg: 1 }}
              // boxSize={{ base: "20", lg: "8" }}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};
