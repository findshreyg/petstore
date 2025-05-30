/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function MarketingFooterBrand(props) {
  const { overrides, ...rest } = props;
  const reactPeriodJSOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "",
  });
  const figmaOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "http://figma.com/",
  });
  const aWSDynamoDBOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://aws.amazon.com/dynamodb/",
  });
  const aWSAmplifyOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "https://aws.amazon.com/amplify/",
  });
  return (
    <Flex
      gap="32px"
      direction="column"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "MarketingFooterBrand")}
      {...rest}
    >
      <View
        width="227px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 405")}
      >
        <View
          width="1360px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="calc(50% - 10px - 0px)"
          left="calc(50% - 680px - 0px)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 403")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="1360px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Built Using"
            {...getOverrideProps(overrides, "Built Using")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="calc(50% - 51px - 258px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="React.JS"
            onClick={() => {
              reactPeriodJSOnClick();
            }}
            {...getOverrideProps(overrides, "React.JS")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="653px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Figma"
            onClick={() => {
              figmaOnClick();
            }}
            {...getOverrideProps(overrides, "Figma")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="897px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="AWS DynamoDB"
            onClick={() => {
              aWSDynamoDBOnClick();
            }}
            {...getOverrideProps(overrides, "AWS DynamoDB")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="1187px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="AWS Amplify"
            onClick={() => {
              aWSAmplifyOnClick();
            }}
            {...getOverrideProps(overrides, "AWS Amplify")}
          ></Text>
        </View>
      </View>
      <View
        width="unset"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="357px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="© 2025 PetStore Web App . All rights reserved."
          {...getOverrideProps(
            overrides,
            "\u00A9 2025 PetStore Web App . All rights reserved."
          )}
        ></Text>
      </View>
    </Flex>
  );
}
