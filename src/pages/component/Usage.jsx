import { RespHeading, mergeStyles, styles, useActive } from "fhf-react";
import Code from "./component/Code";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DropDown from "./usageComponents/DropDown";
import InnerDropDown from "./usageComponents/InnerDropDown";
export default function Usage() {
  document.title = "FHF - Usage";
  const dropDownHeaderInsideOFBodyStyles = mergeStyles(
    styles.fontColor("rgb(88, 62, 85)")
  );
  const dropDownBodyInsideOFBodyStyles = mergeStyles(
    styles.respMarginLeft(20, 30)
  );
  return (
    <motion.div
      className="usage DocsContPart padding-35"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="title">
        <RespHeading level={1}>Usage</RespHeading>
      </div>
      <div>
        <RespHeading level={2} id="getting-started">
          Getting Started
        </RespHeading>
        <p className="respP">
          To get started, you first need to include the CSS Framework stylesheet
          in your HTML file:
        </p>

        <Code long="xml">
          {'<link rel="stylesheet" href="fhf/dist/main.min.css">'}
        </Code>
        <p>or</p>
        <Code long="xml">
          {'<link rel="stylesheet" href="path/fhf/dist/main.min.css">'}
        </Code>
        <p>or</p>
        <Code>{"import 'fhf'"}</Code>
        <p>or</p>
        <Code>{"import 'fhf/dist/main.min.css'"}</Code>
        <p className="respP">
          Once you have included the stylesheet, you can start using the
          pre-designed CSS classes in your HTML elements.
        </p>
        <DropDown dropDownHeadContent={"Text styles"} dropDownHeight={"2100px"}>
          <div>
            <InnerDropDown
              headerText={"Responsive Font Sizes"}
              arrayOfClasses={[
                ".resp-h1: Sets the font size of an h1 element to be responsive to the screen size.",
                ".resp-h2: Sets the font size of an h2 element to be responsive to the screen size.",
                ".resp-h3: Sets the font size of an h3 element to be responsive to the screen size.",
                ".resp-h4: Sets the font size of an h4 element to be responsive to the screen size.",
                ".resp-h5: Sets the font size of an h5 element to be responsive to the screen size.",
                ".resp-h6: Sets the font size of an h6 element to be responsive to the screen size.",
                ".resp-para: Sets the font size of a paragraph element to be responsive to the screen size.",
              ]}
            />
            <InnerDropDown
              headerText={"Text horizontal Alignments"}
              arrayOfClasses={[
                ".textA-center: Sets the text alignment to center.",

                ".textA-left: Sets the text alignment to left.",

                ".textA-right: Sets the text alignment to right.",
              ]}
            />
            <InnerDropDown
              headerText={"Text vertical Alignments"}
              arrayOfClasses={[
                ".VA-center: Sets the text vertical alignment to center.",
                ".VA-auto: Sets the text vertical alignment to auto.",
                ".VA-baseline: Sets the text vertical alignment to baseline.",
                ".VA-bottom: Sets the text vertical alignment to bottom.",
                ".VA-middle: Sets the text vertical alignment to middle.",
                ".VA-sub: Sets the text vertical alignment to sub.",
                ".VA-super: Sets the text vertical alignment to super.",
                ".VA-text-bottom: Sets the text vertical alignment to text-bottom.",
                ".VA-text-top: Sets the text vertical alignment to text-top.",
                ".VA-top: Sets the text vertical alignment to top.",
              ]}
            />
            <InnerDropDown
              headerText={"Font Weights"}
              arrayOfClasses={[
                ".fontW-100: Sets the font weight to 100.",
                ".fontW-200: Sets the font weight to 200.",
                ".fontW-300: Sets the font weight to 300.",
                ".fontW-400: Sets the font weight to 400.",
                ".fontW-500: Sets the font weight to 500.",
                ".fontW-600: Sets the font weight to 600.",
                ".fontW-700: Sets the font weight to 700.",
                ".fontW-800: Sets the font weight to 800.",
                ".fontW-900: Sets the font weight to 900.",
              ]}
            />

            <InnerDropDown
              headerText={"Text Transformations"}
              arrayOfClasses={[
                ".textT-none: Sets the text transformation to none.",
                ".textT-capitalize: Sets the text transformation to capitalize.",
                ".textT-uppercase: Sets the text transformation to uppercase.",
                ".textT-lowercase: Sets the text transformation to lowercase.",
              ]}
            />

            <InnerDropDown
              headerText={"Text Decoration"}
              arrayOfClasses={[
                ".textD-none: Sets the text decoration to none.",
                ".textD-underline: Sets the text decoration to underline.",
                ".textD-line-through: Sets the text decoration to line-through.",
                ".textD-overline: Sets the text decoration to overline.",
              ]}
            />
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Text Color Styles"}
          dropDownHeight={"15000px"}
        >
          <div>
            {/* Red */}
            <InnerDropDown
              headerText={"Red text Color"}
              arrayOfClasses={[
                [
                  `.text-red-100: text color with a light shade, like`,
                  "#FFEBEE",
                ],
                [
                  `.text-red-200: text color with a slightly darker shade, like`,
                  "#FFCDD2",
                ],
                [`.text-red-300: Deeper red text color, like`, "#EF9A9A"],
                [`.text-red-400: Richer red text color, like`, "#E57373"],
                [`.text-red-500: Vibrant red text color, like`, "#EF5350"],
                [`.text-red-600: Intense red text color, like`, "#E53935"],
                [`.text-red-700: Bold red text color, like`, "#D32F2F"],
                [`.text-red-800: Deep red text color, like`, "#C62828"],
                [`.text-red-900: Dark red text color, like`, "#B71C1C"],
                // Add any additional information here
              ]}
            />

            {/* Blue */}
            <InnerDropDown
              headerText={"Blue text Color"}
              arrayOfClasses={[
                [`.text-blue-100: Light blue text color, like`, "#E3F2FD"],
                [`.text-blue-200: Soft blue text color, like`, "#BBDEFB"],
                [`.text-blue-300: Gentle blue text color, like`, "#90CAF9"],
                [`.text-blue-400: Moderate blue text color, like`, "#64B5F6"],
                [`.text-blue-500: Strong blue text color, like`, "#42A5F5"],
                [`.text-blue-600: Vibrant blue text color, like`, "#2196F3"],
                [`.text-blue-700: Bold blue text color, like`, "#1E88E5"],
                [`.text-blue-800: Deep blue text color, like`, "#1976D2"],
                [`.text-blue-900: Dark blue text color, like`, "#1565C0"],
                // Add any additional information here
              ]}
            />

            {/* Green */}
            <InnerDropDown
              headerText={"Green text Color"}
              arrayOfClasses={[
                [`.text-green-100: Light green text color, like`, "#E8F5E9"],
                [`.text-green-200: Soft green text color, like`, "#C8E6C9"],
                [`.text-green-300: Gentle green text color, like`, "#A5D6A7"],
                [`.text-green-400: Moderate green text color, like`, "#81C784"],
                [`.text-green-500: Strong green text color, like`, "#66BB6A"],
                [`.text-green-600: Vibrant green text color, like`, "#4CAF50"],
                [`.text-green-700: Bold green text color, like`, "#43A047"],
                [`.text-green-800: Deep green text color, like`, "#388E3C"],
                [`.text-green-900: Dark green text color, like`, "#2E7D32"],
                // Add any additional information here
              ]}
            />

            {/* Yellow */}
            <InnerDropDown
              headerText={"Yellow text Color"}
              arrayOfClasses={[
                [`.text-yellow-100: Pale yellow text color, like`, "#FFF9C4"],
                [`.text-yellow-200: Light yellow text color, like`, "#FFF59D"],
                [`.text-yellow-300: Soft yellow text color, like`, "#FFF176"],
                [
                  `.text-yellow-400: Moderate yellow text color, like`,
                  "#FFEE58",
                ],
                [
                  `.text-yellow-500: Vibrant yellow text color, like`,
                  "#FFEB3B",
                ],
                [
                  `.text-yellow-600: Intense yellow text color, like`,
                  "#FDD835",
                ],
                [`.text-yellow-700: Bold yellow text color, like`, "#FBC02D"],
                [`.text-yellow-800: Deep yellow text color, like`, "#F9A825"],
                [`.text-yellow-900: Dark yellow text color, like`, "#F57F17"],
                // Add any additional information here
              ]}
            />

            {/* Orange */}
            <InnerDropDown
              headerText={"Orange text Color"}
              arrayOfClasses={[
                [`.text-orange-100: Light orange text color, like`, "#FFE0B2"],
                [`.text-orange-200: Soft orange text color, like`, "#FFCC80"],
                [`.text-orange-300: Gentle orange text color, like`, "#FFB74D"],
                [
                  `.text-orange-400: Moderate orange text color, like`,
                  "#FFA726",
                ],
                [
                  `.text-orange-500: Vibrant orange text color, like`,
                  "#FF9800",
                ],
                [
                  `.text-orange-600: Intense orange text color, like`,
                  "#FB8C00",
                ],
                [`.text-orange-700: Bold orange text color, like`, "#F57C00"],
                [`.text-orange-800: Deep orange text color, like`, "#EF6C00"],
                [`.text-orange-900: Dark orange text color, like`, "#E65100"],
                // Add any additional information here
              ]}
            />

            {/* Purple */}
            <InnerDropDown
              headerText={"Purple text Color"}
              arrayOfClasses={[
                [`.text-purple-100: Light purple text color, like`, "#E1BEE7"],
                [`.text-purple-200: Soft purple text color, like`, "#CE93D8"],
                [`.text-purple-300: Gentle purple text color, like`, "#BA68C8"],
                [
                  `.text-purple-400: Moderate purple text color, like`,
                  "#AB47BC",
                ],
                [
                  `.text-purple-500: Vibrant purple text color, like`,
                  "#9C27B0",
                ],
                [
                  `.text-purple-600: Intense purple text color, like`,
                  "#8E24AA",
                ],
                [`.text-purple-700: Bold purple text color, like`, "#7B1FA2"],
                [`.text-purple-800: Deep purple text color, like`, "#6A1B9A"],
                [`.text-purple-900: Dark purple text color, like`, "#4A148C"],
                // Add any additional information here
              ]}
            />

            {/* Teal */}
            <InnerDropDown
              headerText={"Teal text Color"}
              arrayOfClasses={[
                [`.text-teal-100: Light teal text color, like`, "#B2DFDB"],
                [`.text-teal-200: Soft teal text color, like`, "#80CBC4"],
                [`.text-teal-300: Gentle teal text color, like`, "#4DB6AC"],
                [`.text-teal-400: Moderate teal text color, like`, "#26A69A"],
                [`.text-teal-500: Vibrant teal text color, like`, "#009688"],
                [`.text-teal-600: Intense teal text color, like`, "#00897B"],
                [`.text-teal-700: Bold teal text color, like`, "#00796B"],
                [`.text-teal-800: Deep teal text color, like`, "#00695C"],
                [`.text-teal-900: Dark teal text color, like`, "#004D40"],
                // Add any additional information here
              ]}
            />
            {/* Indigo */}
            <InnerDropDown
              headerText={"Indigo text Color"}
              arrayOfClasses={[
                [`.text-indigo-100: Light indigo text color, like`, "#C5CAE9"],
                [`.text-indigo-200: Soft indigo text color, like`, "#9FA8DA"],
                [`.text-indigo-300: Gentle indigo text color, like`, "#7986CB"],
                [
                  `.text-indigo-400: Moderate indigo text color, like`,
                  "#5C6BC0",
                ],
                [
                  `.text-indigo-500: Vibrant indigo text color, like`,
                  "#3F51B5",
                ],
                [
                  `.text-indigo-600: Intense indigo text color, like`,
                  "#3949AB",
                ],
                [`.text-indigo-700: Bold indigo text color, like`, "#303F9F"],
                [`.text-indigo-800: Deep indigo text color, like`, "#283593"],
                [`.text-indigo-900: Dark indigo text color, like`, "#1A237E"],
                // Add any additional information here
              ]}
            />
            {/* Cyan */}
            <InnerDropDown
              headerText={"Cyan text Color"}
              arrayOfClasses={[
                [`.text-cyan-100: Light cyan text color, like`, "#B3E0F2"],
                [`.text-cyan-200: Soft cyan text color, like`, "#81D4FA"],
                [`.text-cyan-300: Gentle cyan text color, like`, "#4FC3F7"],
                [`.text-cyan-400: Moderate cyan text color, like`, "#29B6F6"],
                [`.text-cyan-500: Vibrant cyan text color, like`, "#03A9F4"],
                [`.text-cyan-600: Intense cyan text color, like`, "#039BE5"],
                [`.text-cyan-700: Bold cyan text color, like`, "#0288D1"],
                [`.text-cyan-800: Deep cyan text color, like`, "#0277BD"],
                [`.text-cyan-900: Dark cyan text color, like`, "#01579B"],
                // Add any additional information here
              ]}
            />
            {/* Brown */}
            <InnerDropDown
              headerText={"Brown text Color"}
              arrayOfClasses={[
                [`.text-brown-100: Light brown text color, like`, "#D7CCC8"],
                [`.text-brown-200: Soft brown text color, like`, "#BCAAA4"],
                [`.text-brown-300: Gentle brown text color, like`, "#A1887F"],
                [`.text-brown-400: Moderate brown text color, like`, "#8D6E63"],
                [
                  `.text-brown-500: Substantial brown text color, like`,
                  "#795548",
                ],
                [`.text-brown-600: Deep brown text color, like`, "#6D4C41"],
                [`.text-brown-700: Dark brown text color, like`, "#5D4037"],
                [`.text-brown-800: Rich brown text color, like`, "#4E342E"],
                [`.text-brown-900: Intense brown text color, like`, "#3E2723"],
                // Add any additional information here
              ]}
            />

            {/* Gray */}
            <InnerDropDown
              headerText={"Gray text Color"}
              arrayOfClasses={[
                [`.text-gray-100: Light gray text color, like`, "#F5F5F5"],
                [`.text-gray-200: Soft gray text color, like`, "#EEEEEE"],
                [`.text-gray-300: Subtle gray text color, like`, "#E0E0E0"],
                [`.text-gray-400: Neutral gray text color, like`, "#BDBDBD"],
                [`.text-gray-500: Mid-tone gray text color, like`, "#9E9E9E"],
                [`.text-gray-600: Slate gray text color, like`, "#757575"],
                [`.text-gray-700: Charcoal gray text color, like`, "#616161"],
                [`.text-gray-800: Dark gray text color, like`, "#424242"],
                [`.text-gray-900: Deep gray text color, like`, "#212121"],
                // Add any additional information here
              ]}
            />

            {/* Deep Orange */}
            <InnerDropDown
              headerText={"Deep Orange text Color"}
              arrayOfClasses={[
                [
                  `.text-deep-orange-100: Light deep orange text color, like`,
                  "#FFCCBC",
                ],
                [
                  `.text-deep-orange-200: Soft deep orange text color, like`,
                  "#FFAB91",
                ],
                [
                  `.text-deep-orange-300: Gentle deep orange text color, like`,
                  "#FF8A65",
                ],
                [
                  `.text-deep-orange-400: Moderate deep orange text color, like`,
                  "#FF7043",
                ],
                [
                  `.text-deep-orange-500: Vibrant deep orange text color, like`,
                  "#FF5722",
                ],
                [
                  `.text-deep-orange-600: Intense deep orange text color, like`,
                  "#F4511E",
                ],
                [
                  `.text-deep-orange-700: Bold deep orange text color, like`,
                  "#E64A19",
                ],
                [
                  `.text-deep-orange-800: Deep deep orange text color, like`,
                  "#D84315",
                ],
                [
                  `.text-deep-orange-900: Dark deep orange text color, like`,
                  "#BF360C",
                ],
                // Add any additional information here
              ]}
            />

            {/* Amber */}
            <InnerDropDown
              headerText={"Amber text Color"}
              arrayOfClasses={[
                [`.text-amber-100: Light amber text color, like`, "#FFECB3"],
                [`.text-amber-200: Soft amber text color, like`, "#FFE082"],
                [`.text-amber-300: Gentle amber text color, like`, "#FFD54F"],
                [`.text-amber-400: Moderate amber text color, like`, "#FFCA28"],
                [`.text-amber-500: Vibrant amber text color, like`, "#FFC107"],
                [`.text-amber-600: Intense amber text color, like`, "#FFB300"],
                [`.text-amber-700: Bold amber text color, like`, "#FFA000"],
                [`.text-amber-800: Deep amber text color, like`, "#FF8F00"],
                [`.text-amber-900: Dark amber text color, like`, "#FF6F00"],
                // Add any additional information here
              ]}
            />

            {/* Blue Grey */}
            <InnerDropDown
              headerText={"Blue Grey text Color"}
              arrayOfClasses={[
                [
                  `.text-blue-grey-100: Light blue-grey text color, like`,
                  "#CFD8DC",
                ],
                [
                  `.text-blue-grey-200: Soft blue-grey text color, like`,
                  "#B0BEC5",
                ],
                [
                  `.text-blue-grey-300: Gentle blue-grey text color, like`,
                  "#90A4AE",
                ],
                [
                  `.text-blue-grey-400: Moderate blue-grey text color, like`,
                  "#78909C",
                ],
                [
                  `.text-blue-grey-500: Vibrant blue-grey text color, like`,
                  "#607D8B",
                ],
                [
                  `.text-blue-grey-600: Intense blue-grey text color, like`,
                  "#546E7A",
                ],
                [
                  `.text-blue-grey-700: Bold blue-grey text color, like`,
                  "#455A64",
                ],
                [
                  `.text-blue-grey-800: Deep blue-grey text color, like`,
                  "#37474F",
                ],
                [
                  `.text-blue-grey-900: Dark blue-grey text color, like`,
                  "#263238",
                ],
                // Add any additional information here
              ]}
            />

            {/* Pink */}
            <InnerDropDown
              headerText={"Pink text Color"}
              arrayOfClasses={[
                [`.text-pink-100: Light pink text color, like`, "#F8BBD0"],
                [`.text-pink-200: Soft pink text color, like`, "#F48FB1"],
                [`.text-pink-300: Gentle pink text color, like`, "#F06292"],
                [`.text-pink-400: Moderate pink text color, like`, "#EC407A"],
                [`.text-pink-500: Vibrant pink text color, like`, "#E91E63"],
                [`.text-pink-600: Intense pink text color, like`, "#D81B60"],
                [`.text-pink-700: Bold pink text color, like`, "#C2185B"],
                [`.text-pink-800: Deep pink text color, like`, "#AD1457"],
                [`.text-pink-900: Dark pink text color, like`, "#880E4F"],
                // Add any additional information here
              ]}
            />

            {/* Lime */}
            <InnerDropDown
              headerText={"Lime text Color"}
              arrayOfClasses={[
                [`.text-lime-100: Light lime text color, like`, "#F0F4C3"],
                [`.text-lime-200: Soft lime text color, like`, "#E6EE9C"],
                [`.text-lime-300: Gentle lime text color, like`, "#DCE775"],
                [`.text-lime-400: Moderate lime text color, like`, "#D4E157"],
                [`.text-lime-500: Vibrant lime text color, like`, "#CDDC39"],
                [`.text-lime-600: Intense lime text color, like`, "#C0CA33"],
                [`.text-lime-700: Bold lime text color, like`, "#AFB42B"],
                [`.text-lime-800: Deep lime text color, like`, "#9E9D24"],
                [`.text-lime-900: Dark lime text color, like`, "#827717"],
                // Add any additional information here
              ]}
            />

            {/* Gold */}
            <InnerDropDown
              headerText={"Gold text Color"}
              arrayOfClasses={[
                [`.text-gold-100: Light gold text color, like`, "#FFF8E1"],
                [`.text-gold-200: Soft gold text color, like`, "#FFECB3"],
                [`.text-gold-300: Gentle gold text color, like`, "#FFE082"],
                [`.text-gold-400: Moderate gold text color, like`, "#FFD54F"],
                [`.text-gold-500: Vibrant gold text color, like`, "#FFCA28"],
                [`.text-gold-600: Intense gold text color, like`, "#FFC107"],
                [`.text-gold-700: Bold gold text color, like`, "#FFB300"],
                [`.text-gold-800: Deep gold text color, like`, "#FFA000"],
                [`.text-gold-900: Dark gold text color, like`, "#FF8F00"],
                // Add any additional information here
              ]}
            />

            {/* Silver */}
            <InnerDropDown
              headerText={"Silver text Color"}
              arrayOfClasses={[
                [`.text-silver-100: Light silver text color, like`, "#F5F5F5"],
                [`.text-silver-200: Soft silver text color, like`, "#EEEEEE"],
                [`.text-silver-300: Subtle silver text color, like`, "#E0E0E0"],
                [
                  `.text-silver-400: Neutral silver text color, like`,
                  "#BDBDBD",
                ],
                [
                  `.text-silver-500: Mid-tone silver text color, like`,
                  "#9E9E9E",
                ],
                [`.text-silver-600: Slate silver text color, like`, "#757575"],
                [
                  `.text-silver-700: Charcoal silver text color, like`,
                  "#616161",
                ],
                [`.text-silver-800: Dark silver text color, like`, "#424242"],
                [`.text-silver-900: Deep silver text color, like`, "#212121"],
                // Add any additional information here
              ]}
            />

            {/* Emerald */}
            <InnerDropDown
              headerText={"Emerald text Color"}
              arrayOfClasses={[
                [
                  `.text-emerald-100: Light emerald text color, like`,
                  "#D0F8CE",
                ],
                [`.text-emerald-200: Soft emerald text color, like`, "#A3E9A4"],
                [
                  `.text-emerald-300: Gentle emerald text color, like`,
                  "#72D572",
                ],
                [
                  `.text-emerald-400: Moderate emerald text color, like`,
                  "#42BD41",
                ],
                [
                  `.text-emerald-500: Vibrant emerald text color, like`,
                  "#2E7D32",
                ],
                [
                  `.text-emerald-600: Intense emerald text color, like`,
                  "#259B24",
                ],
                [`.text-emerald-700: Bold emerald text color, like`, "#0A8F08"],
                [`.text-emerald-800: Deep emerald text color, like`, "#0A7E07"],
                [`.text-emerald-900: Dark emerald text color, like`, "#056F00"],
                // Add any additional information here
              ]}
            />

            {/* Coral */}
            <InnerDropDown
              headerText={"Coral text Color"}
              arrayOfClasses={[
                [`.text-coral-100: Light coral text color, like`, "#FFD180"],
                [`.text-coral-200: Soft coral text color, like`, "#FFAB40"],
                [`.text-coral-300: Gentle coral text color, like`, "#FF9100"],
                [`.text-coral-400: Moderate coral text color, like`, "#FF6D00"],
                [`.text-coral-500: Vibrant coral text color, like`, "#FF5722"],
                [`.text-coral-600: Intense coral text color, like`, "#F4511E"],
                [`.text-coral-700: Bold coral text color, like`, "#E64A19"],
                [`.text-coral-800: Deep coral text color, like`, "#D84315"],
                [`.text-coral-900: Dark coral text color, like`, "#BF360C"],
                // Add any additional information here
              ]}
            />

            {/* Ruby */}
            <InnerDropDown
              headerText={"Ruby text Color"}
              arrayOfClasses={[
                [`.text-ruby-100: Light ruby text color, like`, "#FFCDD2"],
                [`.text-ruby-200: Soft ruby text color, like`, "#EF9A9A"],
                [`.text-ruby-300: Gentle ruby text color, like`, "#E57373"],
                [`.text-ruby-400: Moderate ruby text color, like`, "#EF5350"],
                [`.text-ruby-500: Vibrant ruby text color, like`, "#E53935"],
                [`.text-ruby-600: Intense ruby text color, like`, "#D32F2F"],
                [`.text-ruby-700: Bold ruby text color, like`, "#C62828"],
                [`.text-ruby-800: Deep ruby text color, like`, "#B71C1C"],
                [`.text-ruby-900: Dark ruby text color, like`, "#FF8A80"],
                // Add any additional information here
              ]}
            />

            {/* Sky */}
            <InnerDropDown
              headerText={"Sky text Color"}
              arrayOfClasses={[
                [`.text-sky-100: Light sky text color, like`, "#90CAF9"],
                [`.text-sky-200: Soft sky text color, like`, "#64B5F6"],
                [`.text-sky-300: Gentle sky text color, like`, "#42A5F5"],
                [`.text-sky-400: Moderate sky text color, like`, "#2196F3"],
                [`.text-sky-500: Vibrant sky text color, like`, "#1E88E5"],
                [`.text-sky-600: Intense sky text color, like`, "#1976D2"],
                [`.text-sky-700: Bold sky text color, like`, "#1565C0"],
                [`.text-sky-800: Deep sky text color, like`, "#0D47A1"],
                [`.text-sky-900: Dark sky text color, like`, "#82B1FF"],
                // Add any additional information here
              ]}
            />

            {/* Mint */}
            <InnerDropDown
              headerText={"Mint text Color"}
              arrayOfClasses={[
                [`.text-mint-100: Light mint text color, like`, "#C8E6C9"],
                [`.text-mint-200: Soft mint text color, like`, "#A5D6A7"],
                [`.text-mint-300: Gentle mint text color, like`, "#81C784"],
                [`.text-mint-400: Moderate mint text color, like`, "#66BB6A"],
                [`.text-mint-500: Vibrant mint text color, like`, "#4CAF50"],
                [`.text-mint-600: Intense mint text color, like`, "#43A047"],
                [`.text-mint-700: Bold mint text color, like`, "#388E3C"],
                [`.text-mint-800: Deep mint text color, like`, "#2E7D32"],
                [`.text-mint-900: Dark mint text color, like`, "#69F0AE"],
                // Add any additional information here
              ]}
            />

            {/* Sunflower */}
            <InnerDropDown
              headerText={"Sunflower text Color"}
              arrayOfClasses={[
                [
                  `.text-sunflower-100: Light sunflower text color, like`,
                  "#FFF59D",
                ],
                [
                  `.text-sunflower-200: Soft sunflower text color, like`,
                  "#FFF176",
                ],
                [
                  `.text-sunflower-300: Gentle sunflower text color, like`,
                  "#FFEE58",
                ],
                [
                  `.text-sunflower-400: Moderate sunflower text color, like`,
                  "#FFEB3B",
                ],
                [
                  `.text-sunflower-500: Vibrant sunflower text color, like`,
                  "#FDD835",
                ],
                [
                  `.text-sunflower-600: Intense sunflower text color, like`,
                  "#FBC02D",
                ],
                [
                  `.text-sunflower-700: Bold sunflower text color, like`,
                  "#F9A825",
                ],
                [
                  `.text-sunflower-800: Deep sunflower text color, like`,
                  "#F57F17",
                ],
                [
                  `.text-sunflower-900: Dark sunflower text color, like`,
                  "#FFD600",
                ],
                // Add any additional information here
              ]}
            />

            {/* Peach */}
            <InnerDropDown
              headerText={"Peach text Color"}
              arrayOfClasses={[
                [`.text-peach-100: Light peach text color, like`, "#FFCC80"],
                [`.text-peach-200: Soft peach text color, like`, "#FFB74D"],
                [`.text-peach-300: Gentle peach text color, like`, "#FFA726"],
                [`.text-peach-400: Moderate peach text color, like`, "#FF9800"],
                [`.text-peach-500: Vibrant peach text color, like`, "#FB8C00"],
                [`.text-peach-600: Intense peach text color, like`, "#F57C00"],
                [`.text-peach-700: Bold peach text color, like`, "#EF6C00"],
                [`.text-peach-800: Deep peach text color, like`, "#E65100"],
                [`.text-peach-900: Dark peach text color, like`, "#FFAB91"],
                // Add any additional information here
              ]}
            />
            {/* Orchid */}
            <InnerDropDown
              headerText={"Orchid text Color"}
              arrayOfClasses={[
                [`.text-orchid-100: Light orchid text color, like`, "#CE93D8"],
                [`.text-orchid-200: Soft orchid text color, like`, "#BA68C8"],
                [`.text-orchid-300: Gentle orchid text color, like`, "#AB47BC"],
                [
                  `.text-orchid-400: Moderate orchid text color, like`,
                  "#9C27B0",
                ],
                [
                  `.text-orchid-500: Vibrant orchid text color, like`,
                  "#8E24AA",
                ],
                [
                  `.text-orchid-600: Intense orchid text color, like`,
                  "#7B1FA2",
                ],
                [`.text-orchid-700: Bold orchid text color, like`, "#6A1B9A"],
                [`.text-orchid-800: Deep orchid text color, like`, "#4A148C"],
                [`.text-orchid-900: Dark orchid text color, like`, "#9C27B0"],
                // Add any additional information here
              ]}
            />

            {/* Ocean */}
            <InnerDropDown
              headerText={"Ocean text Color"}
              arrayOfClasses={[
                [`.text-ocean-100: Light ocean text color, like`, "#80DEEA"],
                [`.text-ocean-200: Soft ocean text color, like`, "#4DD0E1"],
                [`.text-ocean-300: Gentle ocean text color, like`, "#26C6DA"],
                [`.text-ocean-400: Moderate ocean text color, like`, "#00BCD4"],
                [`.text-ocean-500: Vibrant ocean text color, like`, "#00ACC1"],
                [`.text-ocean-600: Intense ocean text color, like`, "#0097A7"],
                [`.text-ocean-700: Bold ocean text color, like`, "#00838F"],
                [`.text-ocean-800: Deep ocean text color, like`, "#006064"],
                [`.text-ocean-900: Dark ocean text color, like`, "#00BCD4"],
                // Add any additional information here
              ]}
            />

            {/* Coffee */}
            <InnerDropDown
              headerText={"Coffee text Color"}
              arrayOfClasses={[
                [`.text-coffee-100: Light coffee text color, like`, "#BCAAA4"],
                [`.text-coffee-200: Soft coffee text color, like`, "#A1887F"],
                [`.text-coffee-300: Gentle coffee text color, like`, "#8D6E63"],
                [
                  `.text-coffee-400: Moderate coffee text color, like`,
                  "#795548",
                ],
                [
                  `.text-coffee-500: Vibrant coffee text color, like`,
                  "#6D4C41",
                ],
                [
                  `.text-coffee-600: Intense coffee text color, like`,
                  "#5D4037",
                ],
                [`.text-coffee-700: Bold coffee text color, like`, "#4E342E"],
                [`.text-coffee-800: Deep coffee text color, like`, "#3E2723"],
                [`.text-coffee-900: Dark coffee text color, like`, "#795548"],
                // Add any additional information here
              ]}
            />

            {/* Transparent */}
            <InnerDropDown
              headerText={"Transparent text Color"}
              arrayOfClasses={[
                [`.text-trans: Transparent text color, like`, "transparent"],
                // Add any additional information here
              ]}
            />
          </div>
        </DropDown>
        <DropDown dropDownHeadContent={"Text effects"} dropDownHeight={"200px"}>
          <div>
            <p className="respP">.text-rainbow: Rainbow text effect.</p>
            <p className="respP">.sparkle-effect: Sparkle effect.</p>
            <p className="respP">.text-neon-glow: Neon glow text effect.</p>
            <p className="respP">.text-glitchy: Glitchy text effect.</p>
            <p className="respP">.text-neon: Neon text effect.</p>
            <p className="respP">.text-wavy: Wavy text effect.</p>
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"bg-color styles"}
          dropDownHeight={"13500px"}
        >
          <div>
            {/* Red */}
            <InnerDropDown
              headerText={"Red Background Color"}
              arrayOfClasses={[
                [
                  `.bg-red-100: Background color with a light shade, like`,
                  "#FFEBEE",
                ],
                [
                  `.bg-red-200: Background color with a slightly darker shade, like`,
                  "#FFCDD2",
                ],
                [`.bg-red-300: Deeper red Background color, like`, "#EF9A9A"],
                [`.bg-red-400: Richer red Background color, like`, "#E57373"],
                [`.bg-red-500: Vibrant red Background color, like`, "#EF5350"],
                [`.bg-red-600: Intense red background color, like`, "#E53935"],
                [`.bg-red-700: Bold red background color, like`, "#D32F2F"],
                [`.bg-red-800: Deep red background color, like`, "#C62828"],
                [`.bg-red-900: Dark red background color, like`, "#B71C1C"],
                // Add any additional information here
              ]}
            />

            {/* Blue */}
            <InnerDropDown
              headerText={"Blue Background Color"}
              arrayOfClasses={[
                [`.bg-blue-100: Light blue background color, like`, "#E3F2FD"],
                [`.bg-blue-200: Soft blue background color, like`, "#BBDEFB"],
                [`.bg-blue-300: Gentle blue background color, like`, "#90CAF9"],
                [
                  `.bg-blue-400: Moderate blue background color, like`,
                  "#64B5F6",
                ],
                [`.bg-blue-500: Strong blue background color, like`, "#42A5F5"],
                [
                  `.bg-blue-600: Vibrant blue background color, like`,
                  "#2196F3",
                ],
                [`.bg-blue-700: Bold blue background color, like`, "#1E88E5"],
                [`.bg-blue-800: Deep blue background color, like`, "#1976D2"],
                [`.bg-blue-900: Dark blue background color, like`, "#1565C0"],
                // Add any additional information here
              ]}
            />

            {/* Green */}
            <InnerDropDown
              headerText={"Green Background Color"}
              arrayOfClasses={[
                [
                  `.bg-green-100: Light green background color, like`,
                  "#E8F5E9",
                ],
                [`.bg-green-200: Soft green background color, like`, "#C8E6C9"],
                [
                  `.bg-green-300: Gentle green background color, like`,
                  "#A5D6A7",
                ],
                [
                  `.bg-green-400: Moderate green background color, like`,
                  "#81C784",
                ],
                [
                  `.bg-green-500: Strong green background color, like`,
                  "#66BB6A",
                ],
                [
                  `.bg-green-600: Vibrant green background color, like`,
                  "#4CAF50",
                ],
                [`.bg-green-700: Bold green background color, like`, "#43A047"],
                [`.bg-green-800: Deep green background color, like`, "#388E3C"],
                [`.bg-green-900: Dark green background color, like`, "#2E7D32"],
                // Add any additional information here
              ]}
            />

            {/* Yellow */}
            <InnerDropDown
              headerText={"Yellow Background Color"}
              arrayOfClasses={[
                [
                  `.bg-yellow-100: Pale yellow background color, like`,
                  "#FFF9C4",
                ],
                [
                  `.bg-yellow-200: Light yellow background color, like`,
                  "#FFF59D",
                ],
                [
                  `.bg-yellow-300: Soft yellow background color, like`,
                  "#FFF176",
                ],
                [
                  `.bg-yellow-400: Moderate yellow background color, like`,
                  "#FFEE58",
                ],
                [
                  `.bg-yellow-500: Vibrant yellow background color, like`,
                  "#FFEB3B",
                ],
                [
                  `.bg-yellow-600: Intense yellow background color, like`,
                  "#FDD835",
                ],
                [
                  `.bg-yellow-700: Bold yellow background color, like`,
                  "#FBC02D",
                ],
                [
                  `.bg-yellow-800: Deep yellow background color, like`,
                  "#F9A825",
                ],
                [
                  `.bg-yellow-900: Dark yellow background color, like`,
                  "#F57F17",
                ],
                // Add any additional information here
              ]}
            />

            {/* Orange */}
            <InnerDropDown
              headerText={"Orange Background Color"}
              arrayOfClasses={[
                [
                  `.bg-orange-100: Light orange background color, like`,
                  "#FFE0B2",
                ],
                [
                  `.bg-orange-200: Soft orange background color, like`,
                  "#FFCC80",
                ],
                [
                  `.bg-orange-300: Gentle orange background color, like`,
                  "#FFB74D",
                ],
                [
                  `.bg-orange-400: Moderate orange background color, like`,
                  "#FFA726",
                ],
                [
                  `.bg-orange-500: Vibrant orange background color, like`,
                  "#FF9800",
                ],
                [
                  `.bg-orange-600: Intense orange background color, like`,
                  "#FB8C00",
                ],
                [
                  `.bg-orange-700: Bold orange background color, like`,
                  "#F57C00",
                ],
                [
                  `.bg-orange-800: Deep orange background color, like`,
                  "#EF6C00",
                ],
                [
                  `.bg-orange-900: Dark orange background color, like`,
                  "#E65100",
                ],
                // Add any additional information here
              ]}
            />

            {/* Purple */}
            <InnerDropDown
              headerText={"Purple Background Color"}
              arrayOfClasses={[
                [
                  `.bg-purple-100: Light purple background color, like`,
                  "#E1BEE7",
                ],
                [
                  `.bg-purple-200: Soft purple background color, like`,
                  "#CE93D8",
                ],
                [
                  `.bg-purple-300: Gentle purple background color, like`,
                  "#BA68C8",
                ],
                [
                  `.bg-purple-400: Moderate purple background color, like`,
                  "#AB47BC",
                ],
                [
                  `.bg-purple-500: Vibrant purple background color, like`,
                  "#9C27B0",
                ],
                [
                  `.bg-purple-600: Intense purple background color, like`,
                  "#8E24AA",
                ],
                [
                  `.bg-purple-700: Bold purple background color, like`,
                  "#7B1FA2",
                ],
                [
                  `.bg-purple-800: Deep purple background color, like`,
                  "#6A1B9A",
                ],
                [
                  `.bg-purple-900: Dark purple background color, like`,
                  "#4A148C",
                ],
                // Add any additional information here
              ]}
            />

            {/* Teal */}
            <InnerDropDown
              headerText={"Teal Background Color"}
              arrayOfClasses={[
                [`.bg-teal-100: Light teal background color, like`, "#B2DFDB"],
                [`.bg-teal-200: Soft teal background color, like`, "#80CBC4"],
                [`.bg-teal-300: Gentle teal background color, like`, "#4DB6AC"],
                [
                  `.bg-teal-400: Moderate teal background color, like`,
                  "#26A69A",
                ],
                [
                  `.bg-teal-500: Vibrant teal background color, like`,
                  "#009688",
                ],
                [
                  `.bg-teal-600: Intense teal background color, like`,
                  "#00897B",
                ],
                [`.bg-teal-700: Bold teal background color, like`, "#00796B"],
                [`.bg-teal-800: Deep teal background color, like`, "#00695C"],
                [`.bg-teal-900: Dark teal background color, like`, "#004D40"],
                // Add any additional information here
              ]}
            />
            {/* Indigo */}
            <InnerDropDown
              headerText={"Indigo Background Color"}
              arrayOfClasses={[
                [
                  `.bg-indigo-100: Light indigo background color, like`,
                  "#C5CAE9",
                ],
                [
                  `.bg-indigo-200: Soft indigo background color, like`,
                  "#9FA8DA",
                ],
                [
                  `.bg-indigo-300: Gentle indigo background color, like`,
                  "#7986CB",
                ],
                [
                  `.bg-indigo-400: Moderate indigo background color, like`,
                  "#5C6BC0",
                ],
                [
                  `.bg-indigo-500: Vibrant indigo background color, like`,
                  "#3F51B5",
                ],
                [
                  `.bg-indigo-600: Intense indigo background color, like`,
                  "#3949AB",
                ],
                [
                  `.bg-indigo-700: Bold indigo background color, like`,
                  "#303F9F",
                ],
                [
                  `.bg-indigo-800: Deep indigo background color, like`,
                  "#283593",
                ],
                [
                  `.bg-indigo-900: Dark indigo background color, like`,
                  "#1A237E",
                ],
                // Add any additional information here
              ]}
            />
            {/* Cyan */}
            <InnerDropDown
              headerText={"Cyan Background Color"}
              arrayOfClasses={[
                [`.bg-cyan-100: Light cyan background color, like`, "#B3E0F2"],
                [`.bg-cyan-200: Soft cyan background color, like`, "#81D4FA"],
                [`.bg-cyan-300: Gentle cyan background color, like`, "#4FC3F7"],
                [
                  `.bg-cyan-400: Moderate cyan background color, like`,
                  "#29B6F6",
                ],
                [
                  `.bg-cyan-500: Vibrant cyan background color, like`,
                  "#03A9F4",
                ],
                [
                  `.bg-cyan-600: Intense cyan background color, like`,
                  "#039BE5",
                ],
                [`.bg-cyan-700: Bold cyan background color, like`, "#0288D1"],
                [`.bg-cyan-800: Deep cyan background color, like`, "#0277BD"],
                [`.bg-cyan-900: Dark cyan background color, like`, "#01579B"],
                // Add any additional information here
              ]}
            />
            {/* Brown */}
            <InnerDropDown
              headerText={"Brown Background Color"}
              arrayOfClasses={[
                [
                  `.bg-brown-100: Light brown background color, like`,
                  "#D7CCC8",
                ],
                [`.bg-brown-200: Soft brown background color, like`, "#BCAAA4"],
                [
                  `.bg-brown-300: Gentle brown background color, like`,
                  "#A1887F",
                ],
                [
                  `.bg-brown-400: Moderate brown background color, like`,
                  "#8D6E63",
                ],
                [
                  `.bg-brown-500: Substantial brown background color, like`,
                  "#795548",
                ],
                [`.bg-brown-600: Deep brown background color, like`, "#6D4C41"],
                [`.bg-brown-700: Dark brown background color, like`, "#5D4037"],
                [`.bg-brown-800: Rich brown background color, like`, "#4E342E"],
                [
                  `.bg-brown-900: Intense brown background color, like`,
                  "#3E2723",
                ],
                // Add any additional information here
              ]}
            />

            {/* Gray */}
            <InnerDropDown
              headerText={"Gray Background Color"}
              arrayOfClasses={[
                [`.bg-gray-100: Light gray background color, like`, "#F5F5F5"],
                [`.bg-gray-200: Soft gray background color, like`, "#EEEEEE"],
                [`.bg-gray-300: Subtle gray background color, like`, "#E0E0E0"],
                [
                  `.bg-gray-400: Neutral gray background color, like`,
                  "#BDBDBD",
                ],
                [
                  `.bg-gray-500: Mid-tone gray background color, like`,
                  "#9E9E9E",
                ],
                [`.bg-gray-600: Slate gray background color, like`, "#757575"],
                [
                  `.bg-gray-700: Charcoal gray background color, like`,
                  "#616161",
                ],
                [`.bg-gray-800: Dark gray background color, like`, "#424242"],
                [`.bg-gray-900: Deep gray background color, like`, "#212121"],
                // Add any additional information here
              ]}
            />

            {/* Deep Orange */}
            <InnerDropDown
              headerText={"Deep Orange Background Color"}
              arrayOfClasses={[
                [
                  `.bg-deep-orange-100: Light deep orange background color, like`,
                  "#FFCCBC",
                ],
                [
                  `.bg-deep-orange-200: Soft deep orange background color, like`,
                  "#FFAB91",
                ],
                [
                  `.bg-deep-orange-300: Gentle deep orange background color, like`,
                  "#FF8A65",
                ],
                [
                  `.bg-deep-orange-400: Moderate deep orange background color, like`,
                  "#FF7043",
                ],
                [
                  `.bg-deep-orange-500: Vibrant deep orange background color, like`,
                  "#FF5722",
                ],
                [
                  `.bg-deep-orange-600: Intense deep orange background color, like`,
                  "#F4511E",
                ],
                [
                  `.bg-deep-orange-700: Bold deep orange background color, like`,
                  "#E64A19",
                ],
                [
                  `.bg-deep-orange-800: Deep deep orange background color, like`,
                  "#D84315",
                ],
                [
                  `.bg-deep-orange-900: Dark deep orange background color, like`,
                  "#BF360C",
                ],
                // Add any additional information here
              ]}
            />

            {/* Amber */}
            <InnerDropDown
              headerText={"Amber Background Color"}
              arrayOfClasses={[
                [
                  `.bg-amber-100: Light amber background color, like`,
                  "#FFECB3",
                ],
                [`.bg-amber-200: Soft amber background color, like`, "#FFE082"],
                [
                  `.bg-amber-300: Gentle amber background color, like`,
                  "#FFD54F",
                ],
                [
                  `.bg-amber-400: Moderate amber background color, like`,
                  "#FFCA28",
                ],
                [
                  `.bg-amber-500: Vibrant amber background color, like`,
                  "#FFC107",
                ],
                [
                  `.bg-amber-600: Intense amber background color, like`,
                  "#FFB300",
                ],
                [`.bg-amber-700: Bold amber background color, like`, "#FFA000"],
                [`.bg-amber-800: Deep amber background color, like`, "#FF8F00"],
                [`.bg-amber-900: Dark amber background color, like`, "#FF6F00"],
                // Add any additional information here
              ]}
            />

            {/* Blue Grey */}
            <InnerDropDown
              headerText={"Blue Grey Background Color"}
              arrayOfClasses={[
                [
                  `.bg-blue-grey-100: Light blue-grey background color, like`,
                  "#CFD8DC",
                ],
                [
                  `.bg-blue-grey-200: Soft blue-grey background color, like`,
                  "#B0BEC5",
                ],
                [
                  `.bg-blue-grey-300: Gentle blue-grey background color, like`,
                  "#90A4AE",
                ],
                [
                  `.bg-blue-grey-400: Moderate blue-grey background color, like`,
                  "#78909C",
                ],
                [
                  `.bg-blue-grey-500: Vibrant blue-grey background color, like`,
                  "#607D8B",
                ],
                [
                  `.bg-blue-grey-600: Intense blue-grey background color, like`,
                  "#546E7A",
                ],
                [
                  `.bg-blue-grey-700: Bold blue-grey background color, like`,
                  "#455A64",
                ],
                [
                  `.bg-blue-grey-800: Deep blue-grey background color, like`,
                  "#37474F",
                ],
                [
                  `.bg-blue-grey-900: Dark blue-grey background color, like`,
                  "#263238",
                ],
                // Add any additional information here
              ]}
            />

            {/* Pink */}
            <InnerDropDown
              headerText={"Pink Background Color"}
              arrayOfClasses={[
                [`.bg-pink-100: Light pink background color, like`, "#F8BBD0"],
                [`.bg-pink-200: Soft pink background color, like`, "#F48FB1"],
                [`.bg-pink-300: Gentle pink background color, like`, "#F06292"],
                [
                  `.bg-pink-400: Moderate pink background color, like`,
                  "#EC407A",
                ],
                [
                  `.bg-pink-500: Vibrant pink background color, like`,
                  "#E91E63",
                ],
                [
                  `.bg-pink-600: Intense pink background color, like`,
                  "#D81B60",
                ],
                [`.bg-pink-700: Bold pink background color, like`, "#C2185B"],
                [`.bg-pink-800: Deep pink background color, like`, "#AD1457"],
                [`.bg-pink-900: Dark pink background color, like`, "#880E4F"],
                // Add any additional information here
              ]}
            />
            {/* Ray */}
            <InnerDropDown
              headerText={"Ray Background Color"}
              arrayOfClasses={[
                [`.bg-ray-100: Light ray background color, like`, "#C5CAE9"],
                [`.bg-ray-200: Soft ray background color, like`, "#9FA8DA"],
                [`.bg-ray-300: Gentle ray background color, like`, "#7986CB"],
                [`.bg-ray-400: Moderate ray background color, like`, "#5C6BC0"],
                [`.bg-ray-500: Vibrant ray background color, like`, "#3F51B5"],
                [`.bg-ray-600: Intense ray background color, like`, "#3949AB"],
                [`.bg-ray-700: Bold ray background color, like`, "#303F9F"],
                [`.bg-ray-800: Deep ray background color, like`, "#283593"],
                [`.bg-ray-900: Dark ray background color, like`, "#1A237E"],
                // Add any additional information here
              ]}
            />

            {/* Lime */}
            <InnerDropDown
              headerText={"Lime Background Color"}
              arrayOfClasses={[
                [`.bg-lime-100: Light lime background color, like`, "#F0F4C3"],
                [`.bg-lime-200: Soft lime background color, like`, "#E6EE9C"],
                [`.bg-lime-300: Gentle lime background color, like`, "#DCE775"],
                [
                  `.bg-lime-400: Moderate lime background color, like`,
                  "#D4E157",
                ],
                [
                  `.bg-lime-500: Vibrant lime background color, like`,
                  "#CDDC39",
                ],
                [
                  `.bg-lime-600: Intense lime background color, like`,
                  "#C0CA33",
                ],
                [`.bg-lime-700: Bold lime background color, like`, "#AFB42B"],
                [`.bg-lime-800: Deep lime background color, like`, "#9E9D24"],
                [`.bg-lime-900: Dark lime background color, like`, "#827717"],
                // Add any additional information here
              ]}
            />

            {/* Gold */}
            <InnerDropDown
              headerText={"Gold Background Color"}
              arrayOfClasses={[
                [`.bg-gold-100: Light gold background color, like`, "#FFF8E1"],
                [`.bg-gold-200: Soft gold background color, like`, "#FFECB3"],
                [`.bg-gold-300: Gentle gold background color, like`, "#FFE082"],
                [
                  `.bg-gold-400: Moderate gold background color, like`,
                  "#FFD54F",
                ],
                [
                  `.bg-gold-500: Vibrant gold background color, like`,
                  "#FFCA28",
                ],
                [
                  `.bg-gold-600: Intense gold background color, like`,
                  "#FFC107",
                ],
                [`.bg-gold-700: Bold gold background color, like`, "#FFB300"],
                [`.bg-gold-800: Deep gold background color, like`, "#FFA000"],
                [`.bg-gold-900: Dark gold background color, like`, "#FF8F00"],
                // Add any additional information here
              ]}
            />

            {/* Silver */}
            <InnerDropDown
              headerText={"Silver Background Color"}
              arrayOfClasses={[
                [
                  `.bg-silver-100: Light silver background color, like`,
                  "#F5F5F5",
                ],
                [
                  `.bg-silver-200: Soft silver background color, like`,
                  "#EEEEEE",
                ],
                [
                  `.bg-silver-300: Subtle silver background color, like`,
                  "#E0E0E0",
                ],
                [
                  `.bg-silver-400: Neutral silver background color, like`,
                  "#BDBDBD",
                ],
                [
                  `.bg-silver-500: Mid-tone silver background color, like`,
                  "#9E9E9E",
                ],
                [
                  `.bg-silver-600: Slate silver background color, like`,
                  "#757575",
                ],
                [
                  `.bg-silver-700: Charcoal silver background color, like`,
                  "#616161",
                ],
                [
                  `.bg-silver-800: Dark silver background color, like`,
                  "#424242",
                ],
                [
                  `.bg-silver-900: Deep silver background color, like`,
                  "#212121",
                ],
                // Add any additional information here
              ]}
            />

            {/* Emerald */}
            <InnerDropDown
              headerText={"Emerald Background Color"}
              arrayOfClasses={[
                [
                  `.bg-emerald-100: Light emerald background color, like`,
                  "#D0F8CE",
                ],
                [
                  `.bg-emerald-200: Soft emerald background color, like`,
                  "#A3E9A4",
                ],
                [
                  `.bg-emerald-300: Gentle emerald background color, like`,
                  "#72D572",
                ],
                [
                  `.bg-emerald-400: Moderate emerald background color, like`,
                  "#42BD41",
                ],
                [
                  `.bg-emerald-500: Vibrant emerald background color, like`,
                  "#2E7D32",
                ],
                [
                  `.bg-emerald-600: Intense emerald background color, like`,
                  "#259B24",
                ],
                [
                  `.bg-emerald-700: Bold emerald background color, like`,
                  "#0A8F08",
                ],
                [
                  `.bg-emerald-800: Deep emerald background color, like`,
                  "#0A7E07",
                ],
                [
                  `.bg-emerald-900: Dark emerald background color, like`,
                  "#056F00",
                ],
                // Add any additional information here
              ]}
            />

            {/* Coral */}
            <InnerDropDown
              headerText={"Coral Background Color"}
              arrayOfClasses={[
                [
                  `.bg-coral-100: Light coral background color, like`,
                  "#FFD180",
                ],
                [`.bg-coral-200: Soft coral background color, like`, "#FFAB40"],
                [
                  `.bg-coral-300: Gentle coral background color, like`,
                  "#FF9100",
                ],
                [
                  `.bg-coral-400: Moderate coral background color, like`,
                  "#FF6D00",
                ],
                [
                  `.bg-coral-500: Vibrant coral background color, like`,
                  "#FF5722",
                ],
                [
                  `.bg-coral-600: Intense coral background color, like`,
                  "#F4511E",
                ],
                [`.bg-coral-700: Bold coral background color, like`, "#E64A19"],
                [`.bg-coral-800: Deep coral background color, like`, "#D84315"],
                [`.bg-coral-900: Dark coral background color, like`, "#BF360C"],
                // Add any additional information here
              ]}
            />

            {/* Ruby */}
            <InnerDropDown
              headerText={"Ruby Background Color"}
              arrayOfClasses={[
                [`.bg-ruby-100: Light ruby background color, like`, "#FFCDD2"],
                [`.bg-ruby-200: Soft ruby background color, like`, "#EF9A9A"],
                [`.bg-ruby-300: Gentle ruby background color, like`, "#E57373"],
                [
                  `.bg-ruby-400: Moderate ruby background color, like`,
                  "#EF5350",
                ],
                [
                  `.bg-ruby-500: Vibrant ruby background color, like`,
                  "#E53935",
                ],
                [
                  `.bg-ruby-600: Intense ruby background color, like`,
                  "#D32F2F",
                ],
                [`.bg-ruby-700: Bold ruby background color, like`, "#C62828"],
                [`.bg-ruby-800: Deep ruby background color, like`, "#B71C1C"],
                [`.bg-ruby-900: Dark ruby background color, like`, "#FF8A80"],
                // Add any additional information here
              ]}
            />

            {/* Sky */}
            <InnerDropDown
              headerText={"Sky Background Color"}
              arrayOfClasses={[
                [`.bg-sky-100: Light sky background color, like`, "#90CAF9"],
                [`.bg-sky-200: Soft sky background color, like`, "#64B5F6"],
                [`.bg-sky-300: Gentle sky background color, like`, "#42A5F5"],
                [`.bg-sky-400: Moderate sky background color, like`, "#2196F3"],
                [`.bg-sky-500: Vibrant sky background color, like`, "#1E88E5"],
                [`.bg-sky-600: Intense sky background color, like`, "#1976D2"],
                [`.bg-sky-700: Bold sky background color, like`, "#1565C0"],
                [`.bg-sky-800: Deep sky background color, like`, "#0D47A1"],
                [`.bg-sky-900: Dark sky background color, like`, "#82B1FF"],
                // Add any additional information here
              ]}
            />

            {/* Mint */}
            <InnerDropDown
              headerText={"Mint Background Color"}
              arrayOfClasses={[
                [`.bg-mint-100: Light mint background color, like`, "#C8E6C9"],
                [`.bg-mint-200: Soft mint background color, like`, "#A5D6A7"],
                [`.bg-mint-300: Gentle mint background color, like`, "#81C784"],
                [
                  `.bg-mint-400: Moderate mint background color, like`,
                  "#66BB6A",
                ],
                [
                  `.bg-mint-500: Vibrant mint background color, like`,
                  "#4CAF50",
                ],
                [
                  `.bg-mint-600: Intense mint background color, like`,
                  "#43A047",
                ],
                [`.bg-mint-700: Bold mint background color, like`, "#388E3C"],
                [`.bg-mint-800: Deep mint background color, like`, "#2E7D32"],
                [`.bg-mint-900: Dark mint background color, like`, "#69F0AE"],
                // Add any additional information here
              ]}
            />

            {/* Sunflower */}
            <InnerDropDown
              headerText={"Sunflower Background Color"}
              arrayOfClasses={[
                [
                  `.bg-sunflower-100: Light sunflower background color, like`,
                  "#FFF59D",
                ],
                [
                  `.bg-sunflower-200: Soft sunflower background color, like`,
                  "#FFF176",
                ],
                [
                  `.bg-sunflower-300: Gentle sunflower background color, like`,
                  "#FFEE58",
                ],
                [
                  `.bg-sunflower-400: Moderate sunflower background color, like`,
                  "#FFEB3B",
                ],
                [
                  `.bg-sunflower-500: Vibrant sunflower background color, like`,
                  "#FDD835",
                ],
                [
                  `.bg-sunflower-600: Intense sunflower background color, like`,
                  "#FBC02D",
                ],
                [
                  `.bg-sunflower-700: Bold sunflower background color, like`,
                  "#F9A825",
                ],
                [
                  `.bg-sunflower-800: Deep sunflower background color, like`,
                  "#F57F17",
                ],
                [
                  `.bg-sunflower-900: Dark sunflower background color, like`,
                  "#FFD600",
                ],
                // Add any additional information here
              ]}
            />

            {/* Peach */}
            <InnerDropDown
              headerText={"Peach Background Color"}
              arrayOfClasses={[
                [
                  `.bg-peach-100: Light peach background color, like`,
                  "#FFCC80",
                ],
                [`.bg-peach-200: Soft peach background color, like`, "#FFB74D"],
                [
                  `.bg-peach-300: Gentle peach background color, like`,
                  "#FFA726",
                ],
                [
                  `.bg-peach-400: Moderate peach background color, like`,
                  "#FF9800",
                ],
                [
                  `.bg-peach-500: Vibrant peach background color, like`,
                  "#FB8C00",
                ],
                [
                  `.bg-peach-600: Intense peach background color, like`,
                  "#F57C00",
                ],
                [`.bg-peach-700: Bold peach background color, like`, "#EF6C00"],
                [`.bg-peach-800: Deep peach background color, like`, "#E65100"],
                [`.bg-peach-900: Dark peach background color, like`, "#FFAB91"],
                // Add any additional information here
              ]}
            />
            {/* Orchid */}
            <InnerDropDown
              headerText={"Orchid Background Color"}
              arrayOfClasses={[
                [
                  `.bg-orchid-100: Light orchid background color, like`,
                  "#CE93D8",
                ],
                [
                  `.bg-orchid-200: Soft orchid background color, like`,
                  "#BA68C8",
                ],
                [
                  `.bg-orchid-300: Gentle orchid background color, like`,
                  "#AB47BC",
                ],
                [
                  `.bg-orchid-400: Moderate orchid background color, like`,
                  "#9C27B0",
                ],
                [
                  `.bg-orchid-500: Vibrant orchid background color, like`,
                  "#8E24AA",
                ],
                [
                  `.bg-orchid-600: Intense orchid background color, like`,
                  "#7B1FA2",
                ],
                [
                  `.bg-orchid-700: Bold orchid background color, like`,
                  "#6A1B9A",
                ],
                [
                  `.bg-orchid-800: Deep orchid background color, like`,
                  "#4A148C",
                ],
                [
                  `.bg-orchid-900: Dark orchid background color, like`,
                  "#9C27B0",
                ],
                // Add any additional information here
              ]}
            />

            {/* Ocean */}
            <InnerDropDown
              headerText={"Ocean Background Color"}
              arrayOfClasses={[
                [
                  `.bg-ocean-100: Light ocean background color, like`,
                  "#80DEEA",
                ],
                [`.bg-ocean-200: Soft ocean background color, like`, "#4DD0E1"],
                [
                  `.bg-ocean-300: Gentle ocean background color, like`,
                  "#26C6DA",
                ],
                [
                  `.bg-ocean-400: Moderate ocean background color, like`,
                  "#00BCD4",
                ],
                [
                  `.bg-ocean-500: Vibrant ocean background color, like`,
                  "#00ACC1",
                ],
                [
                  `.bg-ocean-600: Intense ocean background color, like`,
                  "#0097A7",
                ],
                [`.bg-ocean-700: Bold ocean background color, like`, "#00838F"],
                [`.bg-ocean-800: Deep ocean background color, like`, "#006064"],
                [`.bg-ocean-900: Dark ocean background color, like`, "#00BCD4"],
                // Add any additional information here
              ]}
            />

            {/* Coffee */}
            <InnerDropDown
              headerText={"Coffee Background Color"}
              arrayOfClasses={[
                [
                  `.bg-coffee-100: Light coffee background color, like`,
                  "#BCAAA4",
                ],
                [
                  `.bg-coffee-200: Soft coffee background color, like`,
                  "#A1887F",
                ],
                [
                  `.bg-coffee-300: Gentle coffee background color, like`,
                  "#8D6E63",
                ],
                [
                  `.bg-coffee-400: Moderate coffee background color, like`,
                  "#795548",
                ],
                [
                  `.bg-coffee-500: Vibrant coffee background color, like`,
                  "#6D4C41",
                ],
                [
                  `.bg-coffee-600: Intense coffee background color, like`,
                  "#5D4037",
                ],
                [
                  `.bg-coffee-700: Bold coffee background color, like`,
                  "#4E342E",
                ],
                [
                  `.bg-coffee-800: Deep coffee background color, like`,
                  "#3E2723",
                ],
                [
                  `.bg-coffee-900: Dark coffee background color, like`,
                  "#795548",
                ],
                // Add any additional information here
              ]}
            />

            {/* Transparent */}
            <InnerDropDown
              headerText={"Transparent Background Color"}
              arrayOfClasses={[
                [
                  `.bg-trans: Transparent background color, like`,
                  "transparent",
                ],
                // Add any additional information here
              ]}
            />
            <InnerDropDown
              headerText={"Gradient Backgrounds"}
              arrayOfClasses={[
                ".gradient-primary: Primary gradient background.",
                ".gradient-secondary: Secondary gradient background.",
                ".gradient-accent: Accent gradient background.",
                ".gradient-success: Success gradient background.",
                ".gradient-error: Error gradient background.",
                ".gradient-warning: Warning gradient background.",
                ".gradient-info: Info gradient background.",
                ".gradient-alert: Alert gradient background.",
              ]}
            />
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Border styles"}
          dropDownHeight={"500px"}
        >
          <div>
            <p className="respP">
              _ mean that you should set number between 0 and 10 (border color
              set to black by default , you can change it by using the classes
              below)
            </p>
            <InnerDropDown
              headerText={"Border style"}
              arrayOfClasses={[
                ".b-solid-_: Solid border with width _",
                ".b-dashed-_: Dashed border with width _",
                ".b-dotted-_: Dotted border with width _",
                ".b-double-_: Double border with width _",
                ".b-groove-_: Groove border with width _",
                ".b-ridge-_: Ridge border with width _",
                ".b-inset-_: Inset border with width _",
                ".b-outset-_: Outset border with width _",
                ".b-none: No border",
                // Add any additional information here
              ]}
            />
            <InnerDropDown
              headerText={"Border Effects"}
              arrayOfClasses={[
                ".border-fancy: Fancy border style.",
                ".b-animated-gradient: Animated gradient border.",
              ]}
            />
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Border color styles"}
          dropDownHeight={"13500px"}
        >
          <div>
            {/* Red */}
            <InnerDropDown
              headerText={"Red Border Color"}
              arrayOfClasses={[
                [
                  `.b-red-100: Border color with a light shade, like`,
                  "#FFEBEE",
                ],
                [
                  `.b-red-200: Border color with a slightly darker shade, like`,
                  "#FFCDD2",
                ],
                [`.b-red-300: Deeper red Border color, like`, "#EF9A9A"],
                [`.b-red-400: Richer red Border color, like`, "#E57373"],
                [`.b-red-500: Vibrant red Border color, like`, "#EF5350"],
                [`.b-red-600: Intense red Border color, like`, "#E53935"],
                [`.b-red-700: Bold red Border color, like`, "#D32F2F"],
                [`.b-red-800: Deep red Border color, like`, "#C62828"],
                [`.b-red-900: Dark red Border color, like`, "#B71C1C"],
                // Add any additional information here
              ]}
            />

            {/* Blue */}
            <InnerDropDown
              headerText={"Blue Border Color"}
              arrayOfClasses={[
                [`.b-blue-100: Light blue Border color, like`, "#E3F2FD"],
                [`.b-blue-200: Soft blue Border color, like`, "#BBDEFB"],
                [`.b-blue-300: Gentle blue Border color, like`, "#90CAF9"],
                [`.b-blue-400: Moderate blue Border color, like`, "#64B5F6"],
                [`.b-blue-500: Strong blue Border color, like`, "#42A5F5"],
                [`.b-blue-600: Vibrant blue Border color, like`, "#2196F3"],
                [`.b-blue-700: Bold blue Border color, like`, "#1E88E5"],
                [`.b-blue-800: Deep blue Border color, like`, "#1976D2"],
                [`.b-blue-900: Dark blue Border color, like`, "#1565C0"],
                // Add any additional information here
              ]}
            />

            {/* Green */}
            <InnerDropDown
              headerText={"Green Border Color"}
              arrayOfClasses={[
                [`.b-green-100: Light green Border color, like`, "#E8F5E9"],
                [`.b-green-200: Soft green Border color, like`, "#C8E6C9"],
                [`.b-green-300: Gentle green Border color, like`, "#A5D6A7"],
                [`.b-green-400: Moderate green Border color, like`, "#81C784"],
                [`.b-green-500: Strong green Border color, like`, "#66BB6A"],
                [`.b-green-600: Vibrant green Border color, like`, "#4CAF50"],
                [`.b-green-700: Bold green Border color, like`, "#43A047"],
                [`.b-green-800: Deep green Border color, like`, "#388E3C"],
                [`.b-green-900: Dark green Border color, like`, "#2E7D32"],
                // Add any additional information here
              ]}
            />

            {/* Yellow */}
            <InnerDropDown
              headerText={"Yellow Border Color"}
              arrayOfClasses={[
                [`.b-yellow-100: Pale yellow Border color, like`, "#FFF9C4"],
                [`.b-yellow-200: Light yellow Border color, like`, "#FFF59D"],
                [`.b-yellow-300: Soft yellow Border color, like`, "#FFF176"],
                [
                  `.b-yellow-400: Moderate yellow Border color, like`,
                  "#FFEE58",
                ],
                [`.b-yellow-500: Vibrant yellow Border color, like`, "#FFEB3B"],
                [`.b-yellow-600: Intense yellow Border color, like`, "#FDD835"],
                [`.b-yellow-700: Bold yellow Border color, like`, "#FBC02D"],
                [`.b-yellow-800: Deep yellow Border color, like`, "#F9A825"],
                [`.b-yellow-900: Dark yellow Border color, like`, "#F57F17"],
                // Add any additional information here
              ]}
            />

            {/* Orange */}
            <InnerDropDown
              headerText={"Orange Border Color"}
              arrayOfClasses={[
                [`.b-orange-100: Light orange Border color, like`, "#FFE0B2"],
                [`.b-orange-200: Soft orange Border color, like`, "#FFCC80"],
                [`.b-orange-300: Gentle orange Border color, like`, "#FFB74D"],
                [
                  `.b-orange-400: Moderate orange Border color, like`,
                  "#FFA726",
                ],
                [`.b-orange-500: Vibrant orange Border color, like`, "#FF9800"],
                [`.b-orange-600: Intense orange Border color, like`, "#FB8C00"],
                [`.b-orange-700: Bold orange Border color, like`, "#F57C00"],
                [`.b-orange-800: Deep orange Border color, like`, "#EF6C00"],
                [`.b-orange-900: Dark orange Border color, like`, "#E65100"],
                // Add any additional information here
              ]}
            />

            {/* Purple */}
            <InnerDropDown
              headerText={"Purple Border Color"}
              arrayOfClasses={[
                [`.b-purple-100: Light purple Border color, like`, "#E1BEE7"],
                [`.b-purple-200: Soft purple Border color, like`, "#CE93D8"],
                [`.b-purple-300: Gentle purple Border color, like`, "#BA68C8"],
                [
                  `.b-purple-400: Moderate purple Border color, like`,
                  "#AB47BC",
                ],
                [`.b-purple-500: Vibrant purple Border color, like`, "#9C27B0"],
                [`.b-purple-600: Intense purple Border color, like`, "#8E24AA"],
                [`.b-purple-700: Bold purple Border color, like`, "#7B1FA2"],
                [`.b-purple-800: Deep purple Border color, like`, "#6A1B9A"],
                [`.b-purple-900: Dark purple Border color, like`, "#4A148C"],
                // Add any additional information here
              ]}
            />

            {/* Teal */}
            <InnerDropDown
              headerText={"Teal Border Color"}
              arrayOfClasses={[
                [`.b-teal-100: Light teal Border color, like`, "#B2DFDB"],
                [`.b-teal-200: Soft teal Border color, like`, "#80CBC4"],
                [`.b-teal-300: Gentle teal Border color, like`, "#4DB6AC"],
                [`.b-teal-400: Moderate teal Border color, like`, "#26A69A"],
                [`.b-teal-500: Vibrant teal Border color, like`, "#009688"],
                [`.b-teal-600: Intense teal Border color, like`, "#00897B"],
                [`.b-teal-700: Bold teal Border color, like`, "#00796B"],
                [`.b-teal-800: Deep teal Border color, like`, "#00695C"],
                [`.b-teal-900: Dark teal Border color, like`, "#004D40"],
                // Add any additional information here
              ]}
            />
            {/* Indigo */}
            <InnerDropDown
              headerText={"Indigo Border Color"}
              arrayOfClasses={[
                [`.b-indigo-100: Light indigo Border color, like`, "#C5CAE9"],
                [`.b-indigo-200: Soft indigo Border color, like`, "#9FA8DA"],
                [`.b-indigo-300: Gentle indigo Border color, like`, "#7986CB"],
                [
                  `.b-indigo-400: Moderate indigo Border color, like`,
                  "#5C6BC0",
                ],
                [`.b-indigo-500: Vibrant indigo Border color, like`, "#3F51B5"],
                [`.b-indigo-600: Intense indigo Border color, like`, "#3949AB"],
                [`.b-indigo-700: Bold indigo Border color, like`, "#303F9F"],
                [`.b-indigo-800: Deep indigo Border color, like`, "#283593"],
                [`.b-indigo-900: Dark indigo Border color, like`, "#1A237E"],
                // Add any additional information here
              ]}
            />
            {/* Cyan */}
            <InnerDropDown
              headerText={"Cyan Border Color"}
              arrayOfClasses={[
                [`.b-cyan-100: Light cyan Border color, like`, "#B3E0F2"],
                [`.b-cyan-200: Soft cyan Border color, like`, "#81D4FA"],
                [`.b-cyan-300: Gentle cyan Border color, like`, "#4FC3F7"],
                [`.b-cyan-400: Moderate cyan Border color, like`, "#29B6F6"],
                [`.b-cyan-500: Vibrant cyan Border color, like`, "#03A9F4"],
                [`.b-cyan-600: Intense cyan Border color, like`, "#039BE5"],
                [`.b-cyan-700: Bold cyan Border color, like`, "#0288D1"],
                [`.b-cyan-800: Deep cyan Border color, like`, "#0277BD"],
                [`.b-cyan-900: Dark cyan Border color, like`, "#01579B"],
                // Add any additional information here
              ]}
            />
            {/* Brown */}
            <InnerDropDown
              headerText={"Brown Border Color"}
              arrayOfClasses={[
                [`.b-brown-100: Light brown Border color, like`, "#D7CCC8"],
                [`.b-brown-200: Soft brown Border color, like`, "#BCAAA4"],
                [`.b-brown-300: Gentle brown Border color, like`, "#A1887F"],
                [`.b-brown-400: Moderate brown Border color, like`, "#8D6E63"],
                [
                  `.b-brown-500: Substantial brown Border color, like`,
                  "#795548",
                ],
                [`.b-brown-600: Deep brown Border color, like`, "#6D4C41"],
                [`.b-brown-700: Dark brown Border color, like`, "#5D4037"],
                [`.b-brown-800: Rich brown Border color, like`, "#4E342E"],
                [`.b-brown-900: Intense brown Border color, like`, "#3E2723"],
                // Add any additional information here
              ]}
            />

            {/* Gray */}
            <InnerDropDown
              headerText={"Gray Border Color"}
              arrayOfClasses={[
                [`.b-gray-100: Light gray Border color, like`, "#F5F5F5"],
                [`.b-gray-200: Soft gray Border color, like`, "#EEEEEE"],
                [`.b-gray-300: Subtle gray Border color, like`, "#E0E0E0"],
                [`.b-gray-400: Neutral gray Border color, like`, "#BDBDBD"],
                [`.b-gray-500: Mid-tone gray Border color, like`, "#9E9E9E"],
                [`.b-gray-600: Slate gray Border color, like`, "#757575"],
                [`.b-gray-700: Charcoal gray Border color, like`, "#616161"],
                [`.b-gray-800: Dark gray Border color, like`, "#424242"],
                [`.b-gray-900: Deep gray Border color, like`, "#212121"],
                // Add any additional information here
              ]}
            />

            {/* Deep Orange */}
            <InnerDropDown
              headerText={"Deep Orange Border Color"}
              arrayOfClasses={[
                [
                  `.b-deep-orange-100: Light deep orange Border color, like`,
                  "#FFCCBC",
                ],
                [
                  `.b-deep-orange-200: Soft deep orange Border color, like`,
                  "#FFAB91",
                ],
                [
                  `.b-deep-orange-300: Gentle deep orange Border color, like`,
                  "#FF8A65",
                ],
                [
                  `.b-deep-orange-400: Moderate deep orange Border color, like`,
                  "#FF7043",
                ],
                [
                  `.b-deep-orange-500: Vibrant deep orange Border color, like`,
                  "#FF5722",
                ],
                [
                  `.b-deep-orange-600: Intense deep orange Border color, like`,
                  "#F4511E",
                ],
                [
                  `.b-deep-orange-700: Bold deep orange Border color, like`,
                  "#E64A19",
                ],
                [
                  `.b-deep-orange-800: Deep deep orange Border color, like`,
                  "#D84315",
                ],
                [
                  `.b-deep-orange-900: Dark deep orange Border color, like`,
                  "#BF360C",
                ],
                // Add any additional information here
              ]}
            />

            {/* Amber */}
            <InnerDropDown
              headerText={"Amber Border Color"}
              arrayOfClasses={[
                [`.b-amber-100: Light amber Border color, like`, "#FFECB3"],
                [`.b-amber-200: Soft amber Border color, like`, "#FFE082"],
                [`.b-amber-300: Gentle amber Border color, like`, "#FFD54F"],
                [`.b-amber-400: Moderate amber Border color, like`, "#FFCA28"],
                [`.b-amber-500: Vibrant amber Border color, like`, "#FFC107"],
                [`.b-amber-600: Intense amber Border color, like`, "#FFB300"],
                [`.b-amber-700: Bold amber Border color, like`, "#FFA000"],
                [`.b-amber-800: Deep amber Border color, like`, "#FF8F00"],
                [`.b-amber-900: Dark amber Border color, like`, "#FF6F00"],
                // Add any additional information here
              ]}
            />

            {/* Blue Grey */}
            <InnerDropDown
              headerText={"Blue Grey Border Color"}
              arrayOfClasses={[
                [
                  `.b-blue-grey-100: Light blue-grey Border color, like`,
                  "#CFD8DC",
                ],
                [
                  `.b-blue-grey-200: Soft blue-grey Border color, like`,
                  "#B0BEC5",
                ],
                [
                  `.b-blue-grey-300: Gentle blue-grey Border color, like`,
                  "#90A4AE",
                ],
                [
                  `.b-blue-grey-400: Moderate blue-grey Border color, like`,
                  "#78909C",
                ],
                [
                  `.b-blue-grey-500: Vibrant blue-grey Border color, like`,
                  "#607D8B",
                ],
                [
                  `.b-blue-grey-600: Intense blue-grey Border color, like`,
                  "#546E7A",
                ],
                [
                  `.b-blue-grey-700: Bold blue-grey Border color, like`,
                  "#455A64",
                ],
                [
                  `.b-blue-grey-800: Deep blue-grey Border color, like`,
                  "#37474F",
                ],
                [
                  `.b-blue-grey-900: Dark blue-grey Border color, like`,
                  "#263238",
                ],
                // Add any additional information here
              ]}
            />

            {/* Pink */}
            <InnerDropDown
              headerText={"Pink Border Color"}
              arrayOfClasses={[
                [`.b-pink-100: Light pink Border color, like`, "#F8BBD0"],
                [`.b-pink-200: Soft pink Border color, like`, "#F48FB1"],
                [`.b-pink-300: Gentle pink Border color, like`, "#F06292"],
                [`.b-pink-400: Moderate pink Border color, like`, "#EC407A"],
                [`.b-pink-500: Vibrant pink Border color, like`, "#E91E63"],
                [`.b-pink-600: Intense pink Border color, like`, "#D81B60"],
                [`.b-pink-700: Bold pink Border color, like`, "#C2185B"],
                [`.b-pink-800: Deep pink Border color, like`, "#AD1457"],
                [`.b-pink-900: Dark pink Border color, like`, "#880E4F"],
                // Add any additional information here
              ]}
            />
            {/* Ray */}
            <InnerDropDown
              headerText={"Ray Border Color"}
              arrayOfClasses={[
                [`.b-ray-100: Light ray Border color, like`, "#C5CAE9"],
                [`.b-ray-200: Soft ray Border color, like`, "#9FA8DA"],
                [`.b-ray-300: Gentle ray Border color, like`, "#7986CB"],
                [`.b-ray-400: Moderate ray Border color, like`, "#5C6BC0"],
                [`.b-ray-500: Vibrant ray Border color, like`, "#3F51B5"],
                [`.b-ray-600: Intense ray Border color, like`, "#3949AB"],
                [`.b-ray-700: Bold ray Border color, like`, "#303F9F"],
                [`.b-ray-800: Deep ray Border color, like`, "#283593"],
                [`.b-ray-900: Dark ray Border color, like`, "#1A237E"],
                // Add any additional information here
              ]}
            />

            {/* Lime */}
            <InnerDropDown
              headerText={"Lime Border Color"}
              arrayOfClasses={[
                [`.b-lime-100: Light lime Border color, like`, "#F0F4C3"],
                [`.b-lime-200: Soft lime Border color, like`, "#E6EE9C"],
                [`.b-lime-300: Gentle lime Border color, like`, "#DCE775"],
                [`.b-lime-400: Moderate lime Border color, like`, "#D4E157"],
                [`.b-lime-500: Vibrant lime Border color, like`, "#CDDC39"],
                [`.b-lime-600: Intense lime Border color, like`, "#C0CA33"],
                [`.b-lime-700: Bold lime Border color, like`, "#AFB42B"],
                [`.b-lime-800: Deep lime Border color, like`, "#9E9D24"],
                [`.b-lime-900: Dark lime Border color, like`, "#827717"],
                // Add any additional information here
              ]}
            />

            {/* Gold */}
            <InnerDropDown
              headerText={"Gold Border Color"}
              arrayOfClasses={[
                [`.b-gold-100: Light gold Border color, like`, "#FFF8E1"],
                [`.b-gold-200: Soft gold Border color, like`, "#FFECB3"],
                [`.b-gold-300: Gentle gold Border color, like`, "#FFE082"],
                [`.b-gold-400: Moderate gold Border color, like`, "#FFD54F"],
                [`.b-gold-500: Vibrant gold Border color, like`, "#FFCA28"],
                [`.b-gold-600: Intense gold Border color, like`, "#FFC107"],
                [`.b-gold-700: Bold gold Border color, like`, "#FFB300"],
                [`.b-gold-800: Deep gold Border color, like`, "#FFA000"],
                [`.b-gold-900: Dark gold Border color, like`, "#FF8F00"],
                // Add any additional information here
              ]}
            />

            {/* Silver */}
            <InnerDropDown
              headerText={"Silver Border Color"}
              arrayOfClasses={[
                [`.b-silver-100: Light silver Border color, like`, "#F5F5F5"],
                [`.b-silver-200: Soft silver Border color, like`, "#EEEEEE"],
                [`.b-silver-300: Subtle silver Border color, like`, "#E0E0E0"],
                [`.b-silver-400: Neutral silver Border color, like`, "#BDBDBD"],
                [
                  `.b-silver-500: Mid-tone silver Border color, like`,
                  "#9E9E9E",
                ],
                [`.b-silver-600: Slate silver Border color, like`, "#757575"],
                [
                  `.b-silver-700: Charcoal silver Border color, like`,
                  "#616161",
                ],
                [`.b-silver-800: Dark silver Border color, like`, "#424242"],
                [`.b-silver-900: Deep silver Border color, like`, "#212121"],
                // Add any additional information here
              ]}
            />

            {/* Emerald */}
            <InnerDropDown
              headerText={"Emerald Border Color"}
              arrayOfClasses={[
                [`.b-emerald-100: Light emerald Border color, like`, "#D0F8CE"],
                [`.b-emerald-200: Soft emerald Border color, like`, "#A3E9A4"],
                [
                  `.b-emerald-300: Gentle emerald Border color, like`,
                  "#72D572",
                ],
                [
                  `.b-emerald-400: Moderate emerald Border color, like`,
                  "#42BD41",
                ],
                [
                  `.b-emerald-500: Vibrant emerald Border color, like`,
                  "#2E7D32",
                ],
                [
                  `.b-emerald-600: Intense emerald Border color, like`,
                  "#259B24",
                ],
                [`.b-emerald-700: Bold emerald Border color, like`, "#0A8F08"],
                [`.b-emerald-800: Deep emerald Border color, like`, "#0A7E07"],
                [`.b-emerald-900: Dark emerald Border color, like`, "#056F00"],
                // Add any additional information here
              ]}
            />

            {/* Coral */}
            <InnerDropDown
              headerText={"Coral Border Color"}
              arrayOfClasses={[
                [`.b-coral-100: Light coral Border color, like`, "#FFD180"],
                [`.b-coral-200: Soft coral Border color, like`, "#FFAB40"],
                [`.b-coral-300: Gentle coral Border color, like`, "#FF9100"],
                [`.b-coral-400: Moderate coral Border color, like`, "#FF6D00"],
                [`.b-coral-500: Vibrant coral Border color, like`, "#FF5722"],
                [`.b-coral-600: Intense coral Border color, like`, "#F4511E"],
                [`.b-coral-700: Bold coral Border color, like`, "#E64A19"],
                [`.b-coral-800: Deep coral Border color, like`, "#D84315"],
                [`.b-coral-900: Dark coral Border color, like`, "#BF360C"],
                // Add any additional information here
              ]}
            />

            {/* Ruby */}
            <InnerDropDown
              headerText={"Ruby Border Color"}
              arrayOfClasses={[
                [`.b-ruby-100: Light ruby Border color, like`, "#FFCDD2"],
                [`.b-ruby-200: Soft ruby Border color, like`, "#EF9A9A"],
                [`.b-ruby-300: Gentle ruby Border color, like`, "#E57373"],
                [`.b-ruby-400: Moderate ruby Border color, like`, "#EF5350"],
                [`.b-ruby-500: Vibrant ruby Border color, like`, "#E53935"],
                [`.b-ruby-600: Intense ruby Border color, like`, "#D32F2F"],
                [`.b-ruby-700: Bold ruby Border color, like`, "#C62828"],
                [`.b-ruby-800: Deep ruby Border color, like`, "#B71C1C"],
                [`.b-ruby-900: Dark ruby Border color, like`, "#FF8A80"],
                // Add any additional information here
              ]}
            />

            {/* Sky */}
            <InnerDropDown
              headerText={"Sky Border Color"}
              arrayOfClasses={[
                [`.b-sky-100: Light sky Border color, like`, "#90CAF9"],
                [`.b-sky-200: Soft sky Border color, like`, "#64B5F6"],
                [`.b-sky-300: Gentle sky Border color, like`, "#42A5F5"],
                [`.b-sky-400: Moderate sky Border color, like`, "#2196F3"],
                [`.b-sky-500: Vibrant sky Border color, like`, "#1E88E5"],
                [`.b-sky-600: Intense sky Border color, like`, "#1976D2"],
                [`.b-sky-700: Bold sky Border color, like`, "#1565C0"],
                [`.b-sky-800: Deep sky Border color, like`, "#0D47A1"],
                [`.b-sky-900: Dark sky Border color, like`, "#82B1FF"],
                // Add any additional information here
              ]}
            />

            {/* Mint */}
            <InnerDropDown
              headerText={"Mint Border Color"}
              arrayOfClasses={[
                [`.b-mint-100: Light mint Border color, like`, "#C8E6C9"],
                [`.b-mint-200: Soft mint Border color, like`, "#A5D6A7"],
                [`.b-mint-300: Gentle mint Border color, like`, "#81C784"],
                [`.b-mint-400: Moderate mint Border color, like`, "#66BB6A"],
                [`.b-mint-500: Vibrant mint Border color, like`, "#4CAF50"],
                [`.b-mint-600: Intense mint Border color, like`, "#43A047"],
                [`.b-mint-700: Bold mint Border color, like`, "#388E3C"],
                [`.b-mint-800: Deep mint Border color, like`, "#2E7D32"],
                [`.b-mint-900: Dark mint Border color, like`, "#69F0AE"],
                // Add any additional information here
              ]}
            />

            {/* Sunflower */}
            <InnerDropDown
              headerText={"Sunflower Border Color"}
              arrayOfClasses={[
                [
                  `.b-sunflower-100: Light sunflower Border color, like`,
                  "#FFF59D",
                ],
                [
                  `.b-sunflower-200: Soft sunflower Border color, like`,
                  "#FFF176",
                ],
                [
                  `.b-sunflower-300: Gentle sunflower Border color, like`,
                  "#FFEE58",
                ],
                [
                  `.b-sunflower-400: Moderate sunflower Border color, like`,
                  "#FFEB3B",
                ],
                [
                  `.b-sunflower-500: Vibrant sunflower Border color, like`,
                  "#FDD835",
                ],
                [
                  `.b-sunflower-600: Intense sunflower Border color, like`,
                  "#FBC02D",
                ],
                [
                  `.b-sunflower-700: Bold sunflower Border color, like`,
                  "#F9A825",
                ],
                [
                  `.b-sunflower-800: Deep sunflower Border color, like`,
                  "#F57F17",
                ],
                [
                  `.b-sunflower-900: Dark sunflower Border color, like`,
                  "#FFD600",
                ],
                // Add any additional information here
              ]}
            />

            {/* Peach */}
            <InnerDropDown
              headerText={"Peach Border Color"}
              arrayOfClasses={[
                [`.b-peach-100: Light peach Border color, like`, "#FFCC80"],
                [`.b-peach-200: Soft peach Border color, like`, "#FFB74D"],
                [`.b-peach-300: Gentle peach Border color, like`, "#FFA726"],
                [`.b-peach-400: Moderate peach Border color, like`, "#FF9800"],
                [`.b-peach-500: Vibrant peach Border color, like`, "#FB8C00"],
                [`.b-peach-600: Intense peach Border color, like`, "#F57C00"],
                [`.b-peach-700: Bold peach Border color, like`, "#EF6C00"],
                [`.b-peach-800: Deep peach Border color, like`, "#E65100"],
                [`.b-peach-900: Dark peach Border color, like`, "#FFAB91"],
                // Add any additional information here
              ]}
            />
            {/* Orchid */}
            <InnerDropDown
              headerText={"Orchid Border Color"}
              arrayOfClasses={[
                [`.b-orchid-100: Light orchid Border color, like`, "#CE93D8"],
                [`.b-orchid-200: Soft orchid Border color, like`, "#BA68C8"],
                [`.b-orchid-300: Gentle orchid Border color, like`, "#AB47BC"],
                [
                  `.b-orchid-400: Moderate orchid Border color, like`,
                  "#9C27B0",
                ],
                [`.b-orchid-500: Vibrant orchid Border color, like`, "#8E24AA"],
                [`.b-orchid-600: Intense orchid Border color, like`, "#7B1FA2"],
                [`.b-orchid-700: Bold orchid Border color, like`, "#6A1B9A"],
                [`.b-orchid-800: Deep orchid Border color, like`, "#4A148C"],
                [`.b-orchid-900: Dark orchid Border color, like`, "#9C27B0"],
                // Add any additional information here
              ]}
            />

            {/* Ocean */}
            <InnerDropDown
              headerText={"Ocean Border Color"}
              arrayOfClasses={[
                [`.b-ocean-100: Light ocean Border color, like`, "#80DEEA"],
                [`.b-ocean-200: Soft ocean Border color, like`, "#4DD0E1"],
                [`.b-ocean-300: Gentle ocean Border color, like`, "#26C6DA"],
                [`.b-ocean-400: Moderate ocean Border color, like`, "#00BCD4"],
                [`.b-ocean-500: Vibrant ocean Border color, like`, "#00ACC1"],
                [`.b-ocean-600: Intense ocean Border color, like`, "#0097A7"],
                [`.b-ocean-700: Bold ocean Border color, like`, "#00838F"],
                [`.b-ocean-800: Deep ocean Border color, like`, "#006064"],
                [`.b-ocean-900: Dark ocean Border color, like`, "#00BCD4"],
                // Add any additional information here
              ]}
            />

            {/* Coffee */}
            <InnerDropDown
              headerText={"Coffee Border Color"}
              arrayOfClasses={[
                [`.b-coffee-100: Light coffee Border color, like`, "#BCAAA4"],
                [`.b-coffee-200: Soft coffee Border color, like`, "#A1887F"],
                [`.b-coffee-300: Gentle coffee Border color, like`, "#8D6E63"],
                [
                  `.b-coffee-400: Moderate coffee Border color, like`,
                  "#795548",
                ],
                [`.b-coffee-500: Vibrant coffee Border color, like`, "#6D4C41"],
                [`.b-coffee-600: Intense coffee Border color, like`, "#5D4037"],
                [`.b-coffee-700: Bold coffee Border color, like`, "#4E342E"],
                [`.b-coffee-800: Deep coffee Border color, like`, "#3E2723"],
                [`.b-coffee-900: Dark coffee Border color, like`, "#795548"],
                // Add any additional information here
              ]}
            />

            {/* Transparent */}
            <InnerDropDown
              headerText={"Transparent Border Color"}
              arrayOfClasses={[
                [`.b-trans: Transparent background color, like`, "transparent"],
                // Add any additional information here
              ]}
            />
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Container Styles"}
          dropDownHeight={"200px"}
        >
          <div>
            <p className="respP">
              .container: Centers the element horizontally and add
              responsiveness to it and adds padding
            </p>
            <p className="respP">
              .flex-container: Displays elements in a flex layout with wrapping,
            </p>
            <p className="respPaddingLeft-20-30 respP">
              .flex-item: Sets flex properties for child items
            </p>
          </div>
        </DropDown>
        <DropDown dropDownHeadContent={"Grid Styles"} dropDownHeight={"300px"}>
          <div>
            <p className="respP">
              _ in class names means that you should set a number between 100
              and 500 to define the grid width.
            </p>
            <p
              style={mergeStyles(styles.respMarginLeft(20, 30))}
              className="respP"
            >
              .respGridFill-_: Creates a grid with auto-fill columns.
            </p>
            <p
              style={mergeStyles(styles.respMarginLeft(20, 30))}
              className="respP"
            >
              .respGridFit-_: Creates a grid with auto-fit columns.
            </p>
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Float and Clear Styles"}
          dropDownHeight={"200px"}
        >
          <div>
            <p className="respP">.float-left: Floats an element to the left</p>
            <p className="respP">
              .float-right: Floats an element to the right
            </p>
            <p className="respP">
              .clear-fix: Ensures proper clearing of floats within a container.
            </p>
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Visibility Styles"}
          dropDownHeight={"300px"}
        >
          <div>
            <InnerDropDown
              headerText={"Visible Classes"}
              arrayOfClasses={[
                ".visible-xs: Makes the element visible on extra small screens (Below 768px).",
                ".visible-sm: Makes the element visible on small screens (768px - 991px).",
                ".visible-md: Makes the element visible on medium screens (992px - 1199px).",
                ".visible-lg: Makes the element visible on large screens (1200px and above).",
              ]}
            />
            <InnerDropDown
              headerText={"Hidden Classes"}
              arrayOfClasses={[
                ".hidden-xs: Hides the element on extra small screens (Below 768px).",
                ".hidden-sm: Hides the element on small screens (768px - 991px).",
                ".hidden-md: Hides the element on medium screens (992px - 1199px).",
                ".hidden-lg: Hides the element on large screens (1200px and above).",
              ]}
            />
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Width and Height Styles"}
          dropDownHeight={"400px"}
        >
          <div>
            <p className="respP">
              _ in class names means that you should set a number between 1 and
              100 (inclusive) for percentage units and between 1 and 1000 for
              pixel units.
            </p>
            <p
              className="respP"
              style={mergeStyles(styles.respMarginLeft(20, 30))}
            >
              .w-_: Sets the width to the specified percentage value.
            </p>
            <p
              className="respP"
              style={mergeStyles(styles.respMarginLeft(20, 30))}
            >
              .h-_: Sets the height to the specified percentage value.
            </p>
            <p
              className="respP"
              style={mergeStyles(styles.respMarginLeft(20, 30))}
            >
              .w-_px: Sets the width to the specified pixel value.
            </p>
            <p
              className="respP"
              style={mergeStyles(styles.respMarginLeft(20, 30))}
            >
              .h-_px: Sets the height to the specified pixel value.
            </p>
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Button Styles"}
          dropDownHeight={"500px"}
        >
          <div>
            <p className="respP">.btn-success: Success button style.</p>
            <p className="respP">.btn-error: Error button style.</p>
            <p className="respP">.btn-warning: Warning button style.</p>
            <p className="respP">.btn-info: Info button style."</p>
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Border Radius Styles"}
          dropDownHeight={"500px"}
        >
          <div>
            <p>.rounded: Regular rounded border radius.</p>
            <p>.extraRounded: Extra rounded border radius.</p>
            <p>.megaRounded: Mega rounded border radius.</p>
            <p>.superRounded: Super rounded border radius.</p>
            <p>.ultraRounded: Ultra rounded border radius.</p>
            <p>.extremeRounded: Extreme rounded border radius.</p>
            <p>.redicalRounded: Radical rounded border radius.</p>
            <p>.hyperRounded: Hyper rounded border radius.</p>
            <p>.ultimateRounded: Ultimate rounded border radius.</p>
            <p>.maxRounded: Maximum rounded border radius.</p>
            <p>.beyondRounded: Beyond rounded border radius.</p>
          </div>
        </DropDown>

        <DropDown
          dropDownHeadContent={"Image Effects"}
          dropDownHeight={"500px"}
        >
          <div>
            <p>.gs-image: Grayscale image effect.</p>
            <p>.blur-image: Blur image effect.</p>
          </div>
        </DropDown>
      </div>
    </motion.div>
  );
}
