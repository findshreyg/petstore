/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
  useNavigateAction,
} from "./utils";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const buttonThreeEightFiveEightSixFiveSixOnClick = useDataStoreDeleteAction({
    id: pet?.id,
    model: Pet,
    schema: schema,
  });
  const buttonTwoNineSevenSixSixNineZeroSevenOnClick = useNavigateAction({
    type: "url",
    url: `${"pet/"}${pet?.id}`,
  });
  const buttonThreeEightFiveEightFiveSixFourOnClick = useNavigateAction({
    type: "url",
    url: `${"update/"}${pet?.id}`,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="348px"
      height="589px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        borderRadius="10px"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonThreeEightFiveEightSixFiveSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button3858656")}
      ></Button>
      <Image
        width="174px"
        height="178px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Name : "}${pet?.name}`}
          {...getOverrideProps(overrides, "Pet Name")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed : "}${pet?.breed}`}
          {...getOverrideProps(overrides, "Pet Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About : "}${pet?.about}`}
          {...getOverrideProps(overrides, "Pet About")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age : "}${pet?.age}`}
          {...getOverrideProps(overrides, "Pet Age")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        borderRadius="10px"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Profile"
        onClick={() => {
          buttonTwoNineSevenSixSixNineZeroSevenOnClick();
        }}
        {...getOverrideProps(overrides, "Button29766907")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        borderRadius="10px"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Update"
        onClick={() => {
          buttonThreeEightFiveEightFiveSixFourOnClick();
        }}
        {...getOverrideProps(overrides, "Button3858564")}
      ></Button>
    </Flex>
  );
}
