/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterBrandOverridesProps = {
    MarketingFooterBrand?: PrimitiveOverrideProps<FlexProps>;
    "Frame 405"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 403"?: PrimitiveOverrideProps<ViewProps>;
    "Built Using"?: PrimitiveOverrideProps<TextProps>;
    "React.JS"?: PrimitiveOverrideProps<TextProps>;
    Figma?: PrimitiveOverrideProps<TextProps>;
    "AWS DynamoDB"?: PrimitiveOverrideProps<TextProps>;
    "AWS Amplify"?: PrimitiveOverrideProps<TextProps>;
    "Frame 433"?: PrimitiveOverrideProps<ViewProps>;
    "\u00A9 2025 PetStore Web App . All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterBrandProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterBrandOverridesProps | undefined | null;
}>;
export default function MarketingFooterBrand(props: MarketingFooterBrandProps): React.ReactElement;
