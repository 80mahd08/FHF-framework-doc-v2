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

        <Code>{'<link rel="stylesheet" href="fhf/dist/main.min.css">'}</Code>
        <p>or</p>
        <Code>
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
        <DropDown dropDownHeadContent={"Text Color"} dropDownHeight={"15000px"}>
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
          </div>
        </DropDown>
        <DropDown
          dropDownHeadContent={"Border classes"}
          dropDownHeight={"500px"}
        >
          <div>
            <p className="respP">
              _ mean that you should set number between 0 and 10 (border color
              set to black by default , you can change it by using the classes
              below)
            </p>
            {[
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
            ].map((item, index) => (
              <p
                style={styles.respMarginLeft(20, 30)}
                key={index}
                className="respP"
              >
                {item}
              </p>
            ))}
          </div>
        </DropDown>
      </div>
    </motion.div>
  );
}
