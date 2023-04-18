import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import Logo from "./image/CaptureLogoBo.JPG";
import BorderImagePDF from "./image/borderPDF.JPG";
import BorderImageFull from "./image/image-border-full.JPG";
import EightRound from "./image/eight-round.JPG"

import "./App.css";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    flexWrap: "wrap",
    // backgroundColor: "#E4E4E4",
    // alignItems:"flex-end"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    // alignItems:"flex-end"
  },
  sectionBottom: {
    flexDirection: "column",
    position: "absolute",
    bottom: "0px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
  image: {
    width: "50%",
    height: 100,
    paddingTop: 60,
  },
  imageLogoBottom: {
    width: "150px",
    height: "150px",
  },
  imageBorder: {
    width: 70,
    height: 100,
  },
  imageTick: {
    width: 40,
    height: 40,
    marginTop: "40px",
    top: "400px",
    position: "absolute"
  },
  sectionTitle: {
    padding: 30,
    paddingBottom: 0,
    flexDirection: "row",
    width: "100%",
    position: "relative",
  },
  sectionTitleCustom: {
    padding: 30,
    paddingBottom: 0,
    paddingTop: 5,
    flexDirection: "column",
    width: "100%",
    position: "relative",
  },
  mainTitle: {
    color: "#34A7D2",
    fontSize: "16px",
    marginTop: "20px",
    marginRight: "30px",
  },
  leftMain: {
    width: "220px",
    height: "200px",
    border: "1.5px solid #BCBCBC",
  },
  square: {
    width: "250px",
    marginRight: "30px",
    marginTop: "20px",
    height: "30px",
    border: "1.5px solid #BCBCBC",
    position: "absolute",
    bottom: "0px",
  },
  textNo: {
    marginLeft: "5px",
    marginTop: "5px",
    fontSize: "14px",
    fontWeight: "300",
    color: "#2B2B2B",
  },
  textHeading: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    lineHeight: "2px",
  },
  indentParaph: {
    paddingLeft: "3px",
  },
  indentParaphSecond: {
    paddingLeft: "3px",
    fontSize: "13px",
    fontWeight: "normal",
  },
  indentParaphSecondCustom: {
    paddingLeft: "3px",
    fontSize: "13px",
    fontWeight: "normal",
    marginTop: "60px"
  },
  indentCustomParaphSecond: {
    paddingLeft: "3px",
    fontSize: "13px",
    fontWeight: "normal",
    marginTop: "10px",
  },
  indentInformation: {
    paddingLeft: "10px",
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    width: "15%",
  },
  indentSecondInformation: {
    paddingLeft: "10px",
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    width: "15%",
  },
  indentThirdInformation: {
    paddingLeft: "10px",
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    width: "15%",
  },
  indentWithoutTopThirdInformation: {
    paddingLeft: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    width: "15%",
  },

  indentCustomLeftThirdInformation: {
    marginTop: "10px",
    paddingLeft: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentCustomIndentInformation: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentCustomIndentInformationText: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    marginLeft: "5px"
  },
  textFirstBottom: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  textFirstBottomCustomFirst: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    textAlign: "center"
  },
  textFirstBottomCustom: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    marginRight: "10px"
  },
  textFirstBottomCustomTwo: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    marginRight: "15px"
  },
  textSecondBottom: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  textPlaceForm: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    width: "70%"
  },
  indentCustomIndentInformationDate: {
    marginTop: "30px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentCustomIndentInformationTick: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    position: "relative"
  },
  indentCustomIndentInformationMarginTop: {
    marginTop: "40px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentCustomIndentInformationPaddingLeft: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    paddingLeft: "25px"
  },
  indentCustomIndentInformationPaddingLeftCustom: {
    marginTop: "10px",
    paddingLeft: "25px",
    flexDirection: "row",
    display: "flex",
    width: "100%"
  },
  indentCustomIndentInformationFirst: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    marginLeft: "25px"
  },
  indentCustomIndentInformationNote: {
    marginTop: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    marginLeft: "10px"
  },
  indentCustomIndentTableInformation: {
    marginTop: "5px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentWiththoutTopCustomIndentInformation: {
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentCustomIndentLeftInformation: {
    marginTop: "10px",
    marginLeft: "30px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentCustomIndentLeftFinalInformation: {
    marginTop: "10px",
    marginLeft: "140px",
    fontSize: "11px",
    color: "#2B2B2B",
  },

  indentCustomLeftThirdInformationText: {
    marginTop: "10px",
    paddingLeft: "10px",
    fontSize: "11px",
    color: "#2B2B2B",
    marginLeft: "20px",
  },
  indentCustomLeftThirdFinalResultInformation: {
    marginTop: "10px",
    marginLeft: "290px",
    fontSize: "11px",
    color: "#2B2B2B",
  },
  indentCustomThirdInformation: {
    fontSize: "11px",
    marginLeft: "1px",
    color: "#2B2B2B",
    width: "15%",
  },
  indentCustomDemical: {
    fontSize: "11px",
    marginLeft: "15px",
    color: "#2B2B2B",
    width: "15%",
  },
  indentCustomDemicalSecond: {
    fontSize: "11px",
    marginLeft: "15px",
    color: "#2B2B2B",
    width: "15%",
    marginTop: "10px"
  },
  indentCustomDemicalThree: {
    fontSize: "11px",
    color: "#2B2B2B",
    width: "15%",
    marginTop: "10px"
  },
  indentDemical: {
    fontSize: "11px",
    marginLeft: "1px",
    color: "#2B2B2B",
    width: "15%",
    marginTop: "10px"
  },
  mininRectangle: {
    width: "15px",
    height: "15px",
    border: "1px solid #BCBCBC",
    background: "transparent",
  },
  mininRectangleCustom: {
    width: "15px",
    height: "15px",
    border: "1px solid #BCBCBC",
    background: "transparent",
    marginLeft: "5px"
  },

  mainInformation: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: "5px",
  },

  mainFillByOffice: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: "5px",
    paddingLeft: "2px"
  },
  flexTable: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    right: "0px",
    top: "20%",
  },
  flexTableCustom: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    right: "0px",
    bottom: "0px",
  },

  mainInformationCustom: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: "5px",
  },

  mainInformationCustomMarginTop: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: "10px",
  },

  mainInformationCustomMarginLeft: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: "5px",
    marginLeft: "22px"
  },


  mainCustomInformationSecond: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: "7px",
  },

  mainInformationCustomTable: {
    flexDirection: "row",
    marginTop: "120px",
  },

  mainInformationCustomTableNoMargin: {
    flexDirection: "row",
  },
  mainInformationCustomTableNoMarginPaddingLeft: {
    flexDirection: "row",
    marginLeft: "25px"
  },

  mainInformationCustomTableMarginTop: {
    flexDirection: "row",
    marginTop: "10px",
  },
  mainInformationCustomTableMarginTopInline: {
    flexDirection: "row",
    marginTop: "5px",
  },
  mainInformationCustomTableMarginTopPaddingLeft: {
    flexDirection: "row",
    marginTop: "10px",
    marginLeft: "25px"
  },
  mainInformationCustomTableMarginTopPaddingLeftWithoutMarginTop: {
    flexDirection: "row",
    marginLeft: "25px"
  },
  mainInformationCustomTableMarginTopWithoutFlex: {
    marginTop: "10px",
  },

  mainInformationCustomTableMarginTopWithoutFlexMarginLeft: {
    marginTop: "10px",
    marginLeft: "10px"
  },

  mainInformationCustomTableMarginTopPaddingLeftNoMarginTop: {
    flexDirection: "row",
    marginLeft: "25px"
  },

  mainTableBreakNewLine: {
    flexDirection: "row",
    marginLeft: "25px",
    marginTop: "135px"
  },

  mainCustomInformation: {
    flexDirection: "row",
    marginTop: "5px",
  },
  customMainInformation: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: "42px",
  },
  leftFinalInformation: {
    width: "15%",
  },
  textFinalInformation: {
    fontSize: "8px",
    color: "#2B2B2B",
    marginTop: "10px",
  },
  textFinalInformationCustom: {
    fontSize: "10px",
    color: "#2B2B2B",
    marginLeft: "5px",
  },
  textFinalInformationCustomLineSecond: {
    fontSize: "10px",
    color: "#2B2B2B",
    marginLeft: "22px",
  },
  textSubInformationCustom: {
    fontSize: "8px",
    color: "#2B2B2B",
  },
  subInFormation: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10px",
  },
  customSubInFormation: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "0px",
  },
  rowSelectCategory: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5px",
  },
  rowSelectCategoryCustom: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowSelectCategoryCustomMarginLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5px"
  },
  rowSelectCategoryCustomWithoutFlex: {
    flexDirection: "column",
    alignItems: "center",
  },
  rowCustomSelectCategory: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "10px",
  },
  imageBorderFull: {
    width: "100%",
    height: "30px",
    marginTop: "10px",
  },
  imageEightRound: {
    width: "50%",
    height: "30px",

  },
  colEightRound: {
    marginTop: "60px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  firstItem: {
    width: "28%",
  },
  colSpan: {
    width: "200px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    height: "70px",
    flexDirection: "column",
    textAlign: "center",
  },

  colSpanThree: {
    width: "150px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    height: "40px",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  colSpanThreeWithBorder: {
    width: "150px",
    border: "1px solid #BCBCBC",
    height: "40px",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  colSpanThreeNoboder: {
    width: "150px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    borderTop: "none",
    height: "40px",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  colSpanThreeCustom: {
    width: "150px",
    border: "1px solid #BCBCBC",
    height: "40px",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  colSpanThreeCustomNoborder: {
    width: "150px",
    border: "1px solid #BCBCBC",
    borderTop: "none",
    height: "40px",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  colSpanOneTable: {
    width: "50px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    height: "40px",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  colSpanOneTableNoborder: {
    width: "50px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    borderTop: "none",
    height: "40px",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  rowSpan: {
    width: "200px",
    border: "1px solid #BCBCBC",
    borderTop: "none",
    borderRight: "none",
    height: "70px",
    flexDirection: "column",
    textAlign: "center",
  },
  rowSpanNoBorder: {
    width: "200px",
    borderTop: "none",
    borderRight: "none",
    height: "70px",
    flexDirection: "row",
    textAlign: "center",
  },
  childrowSpanNoBorder: {
    width: "100px",
    height: "70px",
    flexDirection: "row",
    textAlign: "center",
    border: "1px solid #BCBCBC",
    borderTop: "none",
    borderRight: "none",
  },
  childrowSpanNoBorderFinal: {
    width: "100px",
    height: "70px",
    flexDirection: "row",
    textAlign: "center",
    border: "1px solid #BCBCBC",
    borderTop: "none",
  },
  rowSpanCustom: {
    width: "200px",
    border: "1px solid #BCBCBC",
    borderTop: "none",
    borderLeft: "none",
    height: "70px",
    flexDirection: "column",
    textAlign: "center",
  },
  colSpanCustom: {
    width: "200px",
    border: "1px solid #BCBCBC",
    height: "70px",
    flexDirection: "column",
    borderLeft: "none",
    textAlign: "center",
  },
  colSpanTwo: {
    width: "200px",
    height: "70px",
    border: "1px solid #BCBCBC",
    textAlign: "center",
    // padding: "10px",
    position: "relative",
  },
  colTableNormal: {
    width: "200px",
    height: "36px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    textAlign: "center",
    // padding: "10px",
    position: "relative",
    justifyContent: "center"
  },
  colTableNormalNoborder: {
    width: "200px",
    height: "36px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    textAlign: "center",
    // padding: "10px",
    position: "relative",
    justifyContent: "center",
    borderTop: "none"
  },
  colTableNormalCustom: {
    width: "200px",
    height: "36px",
    border: "1px solid #BCBCBC",
    textAlign: "center",
    // padding: "10px",
    position: "relative",
    justifyContent: "center"
  },
  colTableNormalCustomNoborder: {
    width: "200px",
    height: "36px",
    border: "1px solid #BCBCBC",
    textAlign: "center",
    borderTop: "none",
    // padding: "10px",
    position: "relative",
    justifyContent: "center"
  },
  colSpanTwoCustom: {
    width: "100px",
    height: "40px",
    border: "1px solid #BCBCBC",
    borderRight: "none",
    textAlign: "center",
    // padding: "10px",
    position: "relative",
    justifyContent: "center"
  },
  colSpanTwoCustomNoboder: {
    width: "100px",
    height: "40px",
    border: "1px solid #BCBCBC",
    borderTop: "none",
    borderRight: "none",
    textAlign: "center",
    // padding: "10px",
    position: "relative",
    justifyContent: "center"
  },
  colSpanOne: {
    width: "50%",
    height: "30px",
    justifyContent: "center",
    textAlign: "center",
    border: "1px solid #BCBCBC",
  },
  colSpanOneFirst: {
    width: "50%",
    height: "20px",
    justifyContent: "center",
    textAlign: "center",
    border: "1px solid #BCBCBC",
    borderLeft: "0px",
    borderRight: "0px",
  },
  colSpanOneFirstCustom: {
    width: "50%",
    height: "40px",
    border: "1px solid #BCBCBC",
    borderLeft: "0px",
    borderRight: "0px",
    flexDirection: "row",
    paddingTop: "10px",
    paddingLeft: "5px",
    borderTop: "none",
  },
  colSpanOneSecond: {
    width: "50%",
    height: "20px",
    justifyContent: "center",
    textAlign: "center",
    border: "1px solid #BCBCBC",
    borderRight: "0px",
  },
  colSpanOneSecondCustom: {
    width: "50%",
    height: "40px",
    border: "1px solid #BCBCBC",
    borderRight: "0px",
    flexDirection: "row",
    paddingTop: "10px",
    paddingLeft: "5px",
    borderTop: "none",
  },
  lineThrought: {
    width: "69px",
    height: "47px",
    borderBottom: "1px solid #BCBCBC",
    transform: "translateY(20px) translateX(5px) rotate(-20deg)",
    position: "absolute",
    top: "-45px",
    marginTop: "3px",
    marginLeft: "-10px",
    left: "-2px",
  },
  rowGrade: {
    alignItems: "flex-start",
  },
  rowYear: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    textAlign: "right",
    width: "100%",
    marginRight: "10px",
  },
  paddingLeftTen: {
    paddingLeft: "50px",
  },
  mainBoxSignature: {
    flexDirection: "row",
    marginTop: "10px",
    justifyContent: "space-between"
  },
  mainBoxSignatureCustom: {
    flexDirection: "row",
    marginTop: "10px",
    justifyContent: "center"
  },
  mainBoxSignatureDocuments: {
    flexDirection: "row",
    marginTop: "60px",
    justifyContent: "center"
  },
  boxSignature: {
    width: "150px",
    height: "150px",
    border: "1px solid #000000",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },
  boxSignatureSecond: {
    width: "150px",
    height: "150px",
    border: "1px solid #000000",
    marginLeft: "20px",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  },
  borderBoxSignature: {
    borderTop: "1px solid #BCBCBC",
    width: "240px",
    marginRight: "20px",
    textAlign: "center"
  },
  borderBoxSignatureCustom: {
    borderTop: "1px solid #BCBCBC",
    width: "240px",
    marginRight: "20px",
    textAlign: "center"
  },
  borderBoxSignatureSecond: {
    borderTop: "1px solid #BCBCBC",
    width: "240px",
    textAlign: "center"
  },
  borderSelectParticular: {
    borderTop: "1px solid #BCBCBC",
    width: "75%",
    marginLeft: '35px'
  },
  borderSelectParticularCustom: {
    borderTop: "1px solid #BCBCBC",
    width: "75%",
  },
  borderSelectParticularCustomFull: {
    borderTop: "1px solid #BCBCBC",
    width: "86%",
  },
  borderSelectParticularCustomSecond: {
    borderTop: "1px solid #BCBCBC",
    width: "25%",
  },
  borderSelectParticularCustomDeclarationForm: {
    borderTop: "1px solid #BCBCBC",
    width: "66%",
  },
  borderUnderSelectParticular: {
    borderTop: "1px solid #BCBCBC",
    marginTop: "20px",
    width: "100%",
  },
  firtItemHidden: {
    width: "40%"
  },
  secondItemGuadian: {
    width: "30%",
    justifyContent: "center"
  },
  leftSeftAssignment: {
    width: "60%"
  },
  leftSeftAssignmentCustom: {
    width: "80%"
  },
  tableSeftAssignment: {
    flexDirection: 'row'
  },
  rowSeftAssignment: {
    border: "1px solid #BCBCBC",
    justifyContent: "center",
    borderRight: "none",
    textAlign: "center",
    alignItems: "center"
  },
  rowSeftAssignmentFinal: {
    border: "1px solid #BCBCBC",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  checkBoxTableSelfAssignment: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
    paddingLeft: "15px",
    paddingRight: "15px",
    // justifyContent: "center",
  },
  endingSeftAssignment: {
    border: "0.5px solid #BCBCBC",
    width: "100%",
    marginTop: "20px"
  },
  mainHOSSignature: {
    flexDirection: "row",
    marginTop: "40px"
  },
  leftHOSSignature: {
    width: "60%"
  },
  rightHOSSignature: {
    position: "relative",
    width: "40%",
    paddingRight: "20px",
    textAlign: "center"
  },
  borderHOSSSignature: {
    borderTop: "1px solid #BCBCBC",
    width: "100%",
    position: "absolute"
  },
  checkBoxFillByOffice: {
    marginLeft: "5px",
    flexDirection: "row"
  },
  colImageBottom: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "400px"
    // marginBottom: "70px",
    // top:"70%"
    // bottom: "70px",
  },
  colRowBottom: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  loopText: {
    position: "absolute",
    fontSize: "11px",
    textAlign:"center",
    top:"5%",
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent: "center:"
  }
});

function App() {
  const firtName = 'Nguyen Trung Dung';
  let minusMiniTangele = [];
  if(firtName.replace(/ /g, '').split('').length < 24) {
    for(let i =0; i< 22 - firtName.replace(/ /g, '').split('').length; i ++) {
      const lenthArray = 22 - firtName.replace(/ /g, '').split('').length;
      minusMiniTangele.push(lenthArray[i]);
    }
  }
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page} wrap="nowrap">
        <View>
          <View style={styles.section}>
            <Image style={styles.image} src={Logo} />
            <Image style={styles.imageBorder} src={BorderImagePDF} />
          </View>

          <View style={styles.sectionTitle}>
            <View>
              <Text style={styles.mainTitle}>APPLICATION FOR ADMISSION</Text>
              <View style={styles.square}>
                <Text style={styles.textNo}>NO.</Text>
              </View>
            </View>
            <View style={styles.leftMain}></View>
          </View>
        </View>
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>INSTRUCTIONS</Text>
          <View style={styles.indentParaph}>
            <Text style={styles.textHeading}>
              1. Each box, whenever provided, should contain only one
              character(alphabet/ number/ punctuation sign) leaving a box blank
              after each word.
            </Text>
            <Text style={styles.textHeading}>
              2.Canidate should fill his / her basic details like Date of
              Birth(DOB), Address, State, City, Country, Contact / Mobile
              Numbers and Email very carefully.
            </Text>
            <Text style={styles.textHeading}>
              3.Enter your First name/ Middle name/Family name in the space
              provided. The name should be as mention in the birth certificate.
            </Text>
            <Text style={styles.textHeading}>
              4.Kindly look at page 10 for documents to be submitted.
            </Text>
          </View>
        </View>
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>STUDENT DETAILS</Text>
          <Text style={styles.textHeading}>
            (Please use block letters to fill all the details. The Application
            Form remains invalid, if it is incomplete)
          </Text>
          <View>
            <Text style={styles.indentParaphSecond}>*Name of the Child:</Text>
            <View style={styles.mainInformation}>
              <Text style={styles.indentInformation}>SurName:</Text>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.indentSecondInformation}>FirstName:</Text>
              {firtName.replace(/ /g, '').split('').map((item, index) =>
                <View key={index} style={styles.mininRectangle}><Text style={styles.loopText}>{item}</Text></View>
              )}
              {minusMiniTangele.map((_,indexMinus) => 
                <View key={indexMinus} style={styles.mininRectangle}></View>
              )}
              {firtName.replace(/ /g, '').split('').length}
              <View style={styles.mininRectangle}></View>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.indentThirdInformation}>MiddleName:</Text>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <View style={styles.leftFinalInformation}></View>
            <Text style={styles.textFinalInformation}>
              (As per the birth Certificate)
            </Text>
          </View>
          <Image style={styles.imageBorderFull} src={BorderImageFull} />
        </View>
        <View style={styles.sectionTitleCustom}>
        <View style={styles.customMainInformation}>
            <Text style={styles.indentWithoutTopThirdInformation}>
              *Date of Birth:
            </Text>
            <View style={styles.customSubInFormation}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>(Day)</Text>
            </View>
            <View style={styles.subInFormation}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>(Month)</Text>
            </View>
            <View style={styles.subInFormation}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>(Year)</Text>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentThirdInformation}>
              *Age
              <Text style={styles.textSubInformationCustom}>
                (as on 1 th June,2019)
              </Text>
              :
            </Text>
            <View style={styles.customSubInFormation}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>(Years)</Text>
            </View>
            <View style={styles.subInFormation}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>(Months)</Text>
            </View>
            <View style={styles.subInFormation}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>(Days)</Text>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomLeftThirdInformation}>
              *Place of Birth:
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              .....................................................
            </Text>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentThirdInformation}>*Gender:</Text>
            <View style={styles.customSubInFormation}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Male</Text>
            </View>
            <View style={styles.subInFormation}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Female</Text>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomLeftThirdInformation}>
              *Grade to which admission is sought:
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              .....................................
            </Text>
            <Text style={styles.indentCustomLeftThirdInformationText}>
              Curriculum
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              .....................................................
            </Text>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomLeftThirdInformation}>
              Nationality:
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              .....................................
            </Text>
            <Text style={styles.indentCustomLeftThirdInformationText}>
              Passport No
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              .....................................
            </Text>
            <Text style={styles.indentCustomLeftThirdInformationText}>
              Expiry Date:{" "}
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              ...................................
            </Text>
          </View>
        </View>
        <View style={styles.sectionTitleCustom}>
          <View>
            <Text style={styles.indentCustomParaphSecond}>
              Residence information:
            </Text>
            <View style={styles.mainCustomInformation}>
              <Text style={styles.indentParaphSecond}>
                a)Address for Communication:
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                ............................................................................................................................................
              </Text>
            </View>
            <View style={styles.mainCustomInformation}>
              <View style={styles.indentParaphSecond}></View>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................................................
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.mainCustomInformation}>
              <View style={styles.mainInformation}>
                <Text style={styles.indentCustomIndentInformation}>
                  Pincode
                </Text>
                <Text style={styles.indentCustomThirdInformation}>
                  ..................................
                </Text>
              </View>
              <View style={styles.mainInformation}>
                <Text style={styles.indentCustomIndentLeftInformation}>
                  Telephone:
                </Text>
                <Text style={styles.indentCustomThirdInformation}>
                  ..........................................................................................................................
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.mainCustomInformation}>
              <View style={styles.mainInformation}>
                <Text style={styles.indentCustomIndentInformation}>
                  *SMS Priority No.:
                </Text>
                <Text style={styles.indentCustomThirdInformation}>
                  ..................................
                </Text>
              </View>
              <View style={styles.mainInformation}>
                <Text style={styles.indentCustomIndentLeftInformation}>
                  *E-mail id:
                </Text>
                <Text style={styles.indentCustomThirdInformation}>
                  ..........................................................................................................................
                </Text>
              </View>
            </View>
            <View style={styles.mainCustomInformation}>
              <Text style={styles.indentParaphSecond}>
                b) Permanent address:
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                .......................................................................................................................................................
              </Text>
            </View>
            <View style={styles.mainCustomInformation}>
              <View style={styles.indentParaphSecond}></View>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................................................
              </Text>
            </View>
            <View>
              <View style={styles.mainCustomInformation}>
                <View style={styles.mainInformation}>
                  <Text style={styles.indentCustomIndentInformation}>
                    Pincode
                  </Text>
                  <Text style={styles.indentCustomThirdInformation}>
                    ..................................
                  </Text>
                </View>
                <View style={styles.mainInformation}>
                  <Text style={styles.indentCustomIndentLeftInformation}>
                    Telephone:
                  </Text>
                  <Text style={styles.indentCustomThirdInformation}>
                    ..........................................................................................................................
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.mainCustomInformation}>
                <View style={styles.mainInformation}>
                  <Text style={styles.indentCustomIndentInformation}>
                    *Nationality:
                  </Text>
                  <Text style={styles.indentCustomThirdInformation}>
                    ......................................
                  </Text>
                </View>
                <View style={styles.mainInformation}>
                  <Text style={styles.indentCustomIndentLeftInformation}>
                    *Religion:
                  </Text>
                  <Text style={styles.indentCustomThirdInformation}>
                    ..........................................................................................................................
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.mainCustomInformation}>
                <View style={styles.mainInformation}>
                  <Text style={styles.indentCustomIndentInformation}>
                    Passport No.:
                  </Text>
                  <Text style={styles.indentCustomThirdInformation}>
                    .............................
                  </Text>
                </View>
                <View style={styles.mainInformation}>
                  <Text style={styles.indentCustomIndentLeftInformation}>
                    Visa Expiry Date:
                  </Text>
                  <Text style={styles.indentCustomThirdInformation}>
                    ....................................................................
                  </Text>
                  <Text style={styles.indentCustomIndentLeftFinalInformation}>
                    (in case of Foreign Nationals).
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.mainCustomInformation}>
                <View style={styles.mainInformation}>
                  <Text style={styles.indentCustomIndentInformation}>
                    Aadhard Card No.:
                  </Text>
                  <Text style={styles.indentCustomThirdInformation}>
                    ......................................................................................................................
                  </Text>
                  <Text
                    style={styles.indentCustomLeftThirdFinalResultInformation}
                  >
                    (in case of Foreign Nationals).
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.mainInformationCustom}>
                <Text style={styles.indentCustomIndentInformation}>
                  *Category:
                </Text>
                <View style={styles.rowSelectCategory}>
                  <View style={styles.mininRectangle}></View>
                  <Text style={styles.textFinalInformationCustom}>OC</Text>
                </View>
                <View style={styles.rowSelectCategory}>
                  <View style={styles.mininRectangle}></View>
                  <Text style={styles.textFinalInformationCustom}>BC</Text>
                </View>
                <View style={styles.rowSelectCategory}>
                  <View style={styles.mininRectangle}></View>
                  <Text style={styles.textFinalInformationCustom}>SC</Text>
                </View>
                <View style={styles.rowSelectCategory}>
                  <View style={styles.mininRectangle}></View>
                  <Text style={styles.textFinalInformationCustom}>ST</Text>
                </View>
              </View>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.indentCustomIndentInformation}>
                *Mother Tongue:
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................
              </Text>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.indentCustomIndentInformation}>
                *Identification marks or moles (1){" "}
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................
              </Text>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.firstItem}></Text>
              <Text style={styles.indentCustomIndentInformation}>(2)</Text>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................................................
              </Text>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.indentCustomIndentInformation}>
                Languages spoken at home:
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................
              </Text>
            </View>
          </View>
          <View style={styles.mainInformationCustom}>
            <Text style={styles.indentCustomIndentInformation}>
              *Current level of English:
            </Text>
            <View style={styles.rowCustomSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Beginner</Text>
            </View>
            <View style={styles.rowCustomSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>
                Intermediate
              </Text>
            </View>
            <View style={styles.rowCustomSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Advanced</Text>
            </View>
          </View>
          <View style={styles.mainInformationCustom}>
            <Text style={styles.indentCustomIndentInformation}>
              *Details of previous schooling:
            </Text>
          </View>
          <Image style={styles.imageBorderFull} src={BorderImageFull} />
          <View>
            <View style={styles.mainInformationCustomTable}>
              <View style={styles.colSpan}>
                <Text style={styles.indentCustomIndentTableInformation}>
                  Names & locations of schools attended previously
                </Text>
                <Text style={styles.indentWiththoutTopCustomIndentInformation}>
                  (beginning with the most recent){" "}
                </Text>
              </View>
              <View style={styles.colSpanTwo}>
                <Text style={styles.indentWiththoutTopCustomIndentInformation}>
                  Period of study
                </Text>
                <View style={styles.flexTable}>
                  <View style={styles.colSpanOneFirst}>
                    <Text
                      style={styles.indentWiththoutTopCustomIndentInformation}
                    >
                      From
                    </Text>
                  </View>
                  <View style={styles.colSpanOneSecond}>
                    <Text
                      style={styles.indentWiththoutTopCustomIndentInformation}
                    >
                      To
                    </Text>
                  </View>
                </View>
                <View style={styles.flexTableCustom}>
                  <View style={styles.colSpanOneFirstCustom}>
                    <View style={styles.rowGrade}>
                      <Text
                        style={styles.indentWiththoutTopCustomIndentInformation}
                      >
                        Grade
                      </Text>
                    </View>

                    <View style={styles.lineThrought}></View>
                    <View style={styles.rowYear}>
                      <Text
                        style={styles.indentWiththoutTopCustomIndentInformation}
                      >
                        Year
                      </Text>
                    </View>
                  </View>
                  <View style={styles.colSpanOneSecondCustom}>
                    <View style={styles.rowGrade}>
                      <Text
                        style={styles.indentWiththoutTopCustomIndentInformation}
                      >
                        Grade
                      </Text>
                    </View>

                    <View style={styles.lineThrought}></View>
                    <View style={styles.rowYear}>
                      <Text
                        style={styles.indentWiththoutTopCustomIndentInformation}
                      >
                        Year
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.colSpanCustom}>
                <Text style={styles.indentCustomIndentTableInformation}>
                  Reasons for changing school
                </Text>
                <Text style={styles.indentWiththoutTopCustomIndentInformation}>
                  (You may write more than one reason)
                </Text>
              </View>
            </View>
            <View style={styles.mainInformationCustomTableNoMargin}>
              <View style={styles.rowSpan}></View>
              <View style={styles.rowSpanNoBorder}>
                <View style={styles.childrowSpanNoBorder}></View>
                <View style={styles.childrowSpanNoBorderFinal}></View>
              </View>
              <View style={styles.rowSpanCustom}></View>
            </View>
            <View style={styles.mainInformationCustomTableNoMargin}>
              <View style={styles.rowSpan}></View>
              <View style={styles.rowSpanNoBorder}>
                <View style={styles.childrowSpanNoBorder}></View>
                <View style={styles.childrowSpanNoBorderFinal}></View>
              </View>
              <View style={styles.rowSpanCustom}></View>
            </View>
            <View style={styles.mainInformationCustomTableNoMargin}>
              <View style={styles.rowSpan}></View>
              <View style={styles.rowSpanNoBorder}>
                <View style={styles.childrowSpanNoBorder}></View>
                <View style={styles.childrowSpanNoBorderFinal}></View>
              </View>
              <View style={styles.rowSpanCustom}></View>
            </View>
            <View style={styles.mainInformationCustomTableNoMargin}>
              <View style={styles.rowSpan}></View>
              <View style={styles.rowSpanNoBorder}>
                <View style={styles.childrowSpanNoBorder}></View>
                <View style={styles.childrowSpanNoBorderFinal}></View>
              </View>
              <View style={styles.rowSpanCustom}></View>
            </View>
          </View>
        </View>
        <View style={styles.sectionTitleCustom}>
          <View style={styles.paddingLeftTen}>
            <Text style={styles.indentCustomIndentInformation}>
              Prizes / Distinctions awarded:
            </Text>
            <View style={styles.mainInformation}>
              <Text style={styles.indentCustomIndentInformation}>
                a) Academics:
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................
              </Text>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.indentCustomIndentInformation}>
                b) Other Activities:
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................
              </Text>
            </View>
            <Text style={styles.indentCustomIndentInformation}>
              Does your child have any physical challenges, learning
              difficulties or special needs?
            </Text>
            <Text style={styles.indentCustomIndentInformation}>
              If yes, give details.
            </Text>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
            <Text style={styles.indentCustomIndentInformation}>
              Has your child ever participated in a special education programme (i.e. gifted and
            </Text>
            <Text style={styles.indentCustomIndentInformation}>
              talented, learning difficulty and speech or language therapy, IEP) in the last five
            </Text>
            <Text style={styles.indentCustomIndentInformation}>
              years, and has the child received any learning support?
            </Text>
            <View style={styles.mainInformationCustom}>
              <View style={styles.rowSelectCategoryCustom}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>Yes</Text>
              </View>
              <View style={styles.rowSelectCategory}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>No</Text>
              </View>
              <Text style={styles.indentCustomIndentInformationNote}>
                If yes, please describe and also enclose any test results
              </Text>

            </View>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
            <Text style={styles.indentCustomIndentInformation}>
              Has your child ever been subjected to any serious disciplinary procedure?
            </Text>
            <Image style={styles.imageBorderFull} src={BorderImageFull} />
            <Text style={styles.indentCustomIndentInformation}>
              If yes, please describe.
            </Text>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
            <View style={styles.mainInformationCustom}>
              <View style={styles.rowSelectCategoryCustom}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>Yes</Text>
              </View>
              <View style={styles.rowSelectCategory}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>No</Text>
              </View>
            </View>
            <View style={styles.mainInformation}>
              <Text style={styles.indentCustomIndentInformation}>
                If yes, please describe:
              </Text>
              <Text style={styles.indentCustomThirdInformation}>
                ...............................................................................................................................................................
              </Text>
            </View>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
            <Text style={styles.indentDemical}>
              .............................................................................................................................................................................
            </Text>
          </View>
        </View>
        
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.indentCustomIndentInformation}>
            Health information:
          </Text>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              a). Blood Group:
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              ........................................................................................................................................................................
            </Text>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            b). Any Food Allergy (if known, the treatment given normally):
          </Text>
          <Text style={styles.indentCustomDemical}>
            .........................................................................................................................................................................................
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            c). Any Drug Allergy:
          </Text>
          <Text style={styles.indentCustomDemical}>
            .........................................................................................................................................................................................
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            d). Any other history that needs to be informed to the School Doctor:
          </Text>
          <View style={styles.mainCustomInformationSecond}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Asthma</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Migraine</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Sinusitis</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Bleeding</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Disorders</Text>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              e).  Past Medical History:
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              ...............................................................................................................................................................
            </Text>
          </View>
          <Text style={styles.indentCustomDemicalSecond}>
            ................................................................................................................................................................................................
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            Choice of Additional Languages:
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            a). 2nd Language (from Grade I to X)
          </Text>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformationFirst}>
              Options:
            </Text>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Hindi</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Telugu</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Spanish</Text>
            </View>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            b). 3rd Language (from Grade IV to VIII)
          </Text>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformationFirst}>
              Options:
            </Text>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Hindi</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Telugu</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Spanish</Text>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Subject for relevant Grade:
            </Text>
            <Text style={styles.indentCustomThirdInformation}>
              ...............................................................................................................................................................
            </Text>
          </View>
          <View style={styles.mainCustomInformation}>
            <Text style={styles.indentCustomThirdInformation}>
              ...............................................................................................................................................................................................
            </Text>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Does your child require School Transport?
            </Text>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Yes</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>No</Text>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Does your child require School Lunch?
            </Text>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Yes</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>No</Text>
            </View>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            Details of sibling:
          </Text>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.colSpanThree}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Names
              </Text>
            </View>
            <View style={styles.colSpanTwoCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Gender
              </Text>
            </View>
            <View style={styles.colSpanOneTable}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Age
              </Text>
            </View>
            <View style={styles.colSpanThreeCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Names
              </Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableNoMargin}>
            <View style={styles.colSpanThreeNoboder}>
            </View>
            <View style={styles.colSpanTwoCustomNoboder}>
            </View>
            <View style={styles.colSpanOneTableNoborder}>
            </View>
            <View style={styles.colSpanThreeCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableNoMargin}>
            <View style={styles.colSpanThreeNoboder}>
            </View>
            <View style={styles.colSpanTwoCustomNoboder}>
            </View>
            <View style={styles.colSpanOneTableNoborder}>
            </View>
            <View style={styles.colSpanThreeCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableNoMargin}>
            <View style={styles.colSpanThreeNoboder}>
            </View>
            <View style={styles.colSpanTwoCustomNoboder}>
            </View>
            <View style={styles.colSpanOneTableNoborder}>
            </View>
            <View style={styles.colSpanThreeCustomNoborder}>
            </View>
          </View>
        </View>
        <Image style={styles.imageBorderFull} src={BorderImageFull} />
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>PARENT'S DETAILS</Text>
          <Text style={styles.indentCustomIndentInformationPaddingLeft}>
            Particulars of the Parents:
          </Text>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeft}>
            <View style={styles.colTableNormal}>
            </View>
            <View style={styles.colTableNormal}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Father
              </Text>
            </View>
            <View style={styles.colTableNormalCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Mother
              </Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Name
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                DOB
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Qualification
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Occupation
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Organization & Designation
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Office Address
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Office Telephones
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                *Mobile No.
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                *E-mail Id
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Nationality
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Passport no.
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainBoxSignature}>
            <View></View>
            <View style={styles.boxSignature}>
              <Text style={styles.indentCustomIndentInformation}>
                Father's recent
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                colour passport
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                size photograph
              </Text>
            </View>
            <View style={styles.boxSignatureSecond}>
              <Text style={styles.indentCustomIndentInformation}>
                Mother's recent
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                colour passport
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                size photograph
              </Text>
            </View>
            <View></View>
          </View>
          <View style={styles.mainBoxSignatureCustom}>
            <View></View>
            <View style={styles.borderBoxSignature}>
              <Text style={styles.indentCustomIndentInformation}>
                Signature
              </Text>
            </View>
            <View style={styles.borderBoxSignatureSecond}>
              <Text style={styles.indentCustomIndentInformation}>
                Signature
              </Text>
            </View>
            <View></View>
          </View>
        </View>
      
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.indentCustomIndentInformation}>
            Questions to the Parents:
          </Text>

          <Text style={styles.indentCustomIndentInformationMarginTop}>
            a). Are you applying for any other children at Bloomingdale International School?
          </Text>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Yes</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>No</Text>
            </View>
          </View>
          <Image style={styles.imageBorderFull} src={BorderImageFull} />
          <Text style={styles.indentCustomIndentInformation}>
            b). What are the areas in which you as a parent could contribute to enrich school life in terms
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            of time, skills, etc?
          </Text>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Academics</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Sports</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Culture</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Medical Profession</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>IT</Text>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Please specify particular field of interest:
            </Text>
            <View style={styles.borderSelectParticular}>
            </View>
          </View>
          <View style={styles.borderUnderSelectParticular}>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            c). Why did you choose Bloomingdale International School for your child's schooling?
          </Text>
          <Text style={styles.indentCustomIndentInformationTick}>
            Please tick one or more options that are relevant.
          </Text>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>People say it is the best school. </Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>It is recommended by my friends/relatives/col leagues. </Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopWithoutFlex}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>The Bloomingdale curriculum focuses on developing skills, aptitudes and attitudes</Text>
            </View>
            <View style={styles.rowSelectCategoryCustom}>
              <Text style={styles.textFinalInformationCustomLineSecond}>required for success and happiness in today's world.</Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopWithoutFlex}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>The educational programme of Bloomingdale embody the shift in the paradigm</Text>
            </View>
            <View style={styles.rowSelectCategoryCustom}>
              <Text style={styles.textFinalInformationCustomLineSecond}>of schooling that 21st century India needs. </Text>
            </View>
          </View>
          <View style={styles.mainInformationCustom}>
            <View style={styles.mainInformationCustomTableMarginTopWithoutFlex}>
              <View style={styles.rowSelectCategoryCustom}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>Bloomingdale ensures that children take</Text>
              </View>
              <View style={styles.rowSelectCategoryCustom}>
                <Text style={styles.textFinalInformationCustomLineSecond}>part in a wide range of activities.</Text>
              </View>
            </View>
            <View style={styles.mainInformationCustomTableMarginTopWithoutFlex}>
              <View style={styles.rowSelectCategoryCustomMarginLeft}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>My child has friends who come to the school.</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainInformationCustomMarginLeft}>
            <Text style={styles.indentCustomIndentInformation}>
              Others:
            </Text>
            <View style={styles.borderSelectParticularCustom}>
            </View>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            d). Why did you choose to educate your child in an “international" school?
          </Text>
          <Text style={styles.indentCustomIndentInformationTick}>
            Please tick one or more options that are relevant (if more than one reason).
          </Text>
          <View style={styles.mainInformationCustomTableMarginTopWithoutFlex}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>We believe in holistic education which will focus on the full development of our child's </Text>
            </View>
            <View style={styles.rowSelectCategoryCustom}>
              <Text style={styles.textFinalInformationCustomLineSecond}>abilities.</Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopWithoutFlex}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Our child needs to learn to be at home in a global situation, amongst people of </Text>
            </View>
            <View style={styles.rowSelectCategoryCustom}>
              <Text style={styles.textFinalInformationCustomLineSecond}>different back grounds and nationalities.</Text>
            </View>
          </View>
          <View style={styles.mainInformationCustom}>
            <View style={styles.mainInformationCustomTableMarginTopWithoutFlex}>
              <View style={styles.rowSelectCategoryCustom}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>We want our child to pursue higher</Text>
              </View>
              <View style={styles.rowSelectCategoryCustom}>
                <Text style={styles.textFinalInformationCustomLineSecond}>studies abroad.</Text>
              </View>
            </View>
            <View style={styles.mainInformationCustomTableMarginTopWithoutFlexMarginLeft}>
              <View style={styles.rowSelectCategoryCustom}>
                <View style={styles.mininRectangle}></View>
                <Text style={styles.textFinalInformationCustom}>We want our child to experience</Text>
              </View>
              <View style={styles.rowSelectCategoryCustom}>
                <Text style={styles.textFinalInformationCustomLineSecond}>inquiry-based learning.</Text>
              </View>
            </View>
          </View>
          <View style={styles.mainInformationCustomMarginLeft}>
            <Text style={styles.indentCustomIndentInformation}>
              Others:
            </Text>
            <View style={styles.borderSelectParticularCustom}>
            </View>
          </View>
        </View>
     
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>GUARDIAN'S DETAILS </Text>
          <Text style={styles.indentCustomIndentInformationPaddingLeft}>
            Persons to be contacted in case of emergency (other than parents):
          </Text>
          <View style={styles.mainTableBreakNewLine}>
            <View style={styles.colSpanThree}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Names
              </Text>
            </View>
            <View style={styles.colSpanThree}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Relation
              </Text>
            </View>
            <View style={styles.colSpanThree}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Occupation
              </Text>
            </View>
            <View style={styles.colSpanThree}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Address
              </Text>
            </View>
            <View style={styles.colSpanThreeWithBorder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Mobile No.
              </Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftWithoutMarginTop}>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThree}>

            </View>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThreeWithBorder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftWithoutMarginTop}>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThree}>

            </View>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThreeWithBorder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftWithoutMarginTop}>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThree}>

            </View>
            <View style={styles.colSpanThree}>
            </View>
            <View style={styles.colSpanThreeWithBorder}>
            </View>
          </View>
          <Text style={styles.indentCustomIndentInformationPaddingLeft}>
            Particulars of local guardian (if parents do not reside locally):
          </Text>
          <View style={styles.mainInformation}>
            <View style={styles.firtItemHidden}>
            </View>
            <View style={styles.secondItemGuadian}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Guardian-1
              </Text>
            </View>
            <View style={styles.secondItemGuadian}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Guardian-2
              </Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeft}>
            <View style={styles.colTableNormal}>
            </View>
            <View style={styles.colTableNormal}>
            </View>
            <View style={styles.colTableNormalCustom}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Name
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Relation with the Child
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Occupation
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Organization
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Address
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Mobile No.
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopPaddingLeftNoMarginTop}>
            <View style={styles.colTableNormalNoborder}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Email id
              </Text>
            </View>
            <View style={styles.colTableNormalNoborder}>
            </View>
            <View style={styles.colTableNormalCustomNoborder}>
            </View>
          </View>
          <View style={styles.mainBoxSignature}>
            <View></View>
            <View style={styles.boxSignature}>
              <Text style={styles.indentCustomIndentInformation}>
                Guardian - 1
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                recent colour
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                passport size
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                photograph
              </Text>
            </View>
            <View style={styles.boxSignatureSecond}>
              <Text style={styles.indentCustomIndentInformation}>
                Guardian - 2
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                recent colour
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                passport size
              </Text>
              <Text style={styles.indentCustomIndentInformation}>
                photograph
              </Text>
            </View>
            <View></View>
          </View>
          <View style={styles.mainBoxSignatureCustom}>
            <View></View>
            <View style={styles.borderBoxSignature}>
              <Text style={styles.indentCustomIndentInformation}>
                Signature
              </Text>
            </View>
            <View style={styles.borderBoxSignatureSecond}>
              <Text style={styles.indentCustomIndentInformation}>
                Signature
              </Text>
            </View>
            <View></View>
          </View>
        </View>
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>KNOWING YOUR CHILD BETTER </Text>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Does your child generally enjoy coming to School?
            </Text>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Yes</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>No</Text>
            </View>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            How does your child usually adjust to a new situation?
          </Text>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>With ease</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>With fear</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>With enthusiasm</Text>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>With fear</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>With stress</Text>
            </View>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            How does your child usually adjust to a new situation?
          </Text>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.rowSelectCategoryCustom}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Excited</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Anxious</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Fearful</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Nervous</Text>
            </View>
            <View style={styles.rowSelectCategory}>
              <View style={styles.mininRectangle}></View>
              <Text style={styles.textFinalInformationCustom}>Angry</Text>
            </View>
          </View>
          <Image style={styles.imageBorderFull} src={BorderImageFull} />
          <Text style={styles.mainTitle}>CHILD'S SELF ASSESSMENT </Text>
          <Text style={styles.indentCustomIndentInformation}>
            This is a self-assessment to be done by all children above Grade III.The child must respond to the
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            statements on his/her own. Parents may help the child understand the statements. This is not part
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            of the admission test and the results are not used to determine the admission of the child.
          </Text>
          <View style={styles.mainInformationCustomTableMarginTop}>
            <View style={styles.leftSeftAssignment}></View>
            <View style={styles.tableSeftAssignment}>
              <View style={styles.rowSeftAssignment}>
                <Text style={styles.indentCustomIndentTableInformation}>
                  Strongly
                </Text>
                <Text style={styles.indentCustomIndentTableInformation}>
                  disagree
                </Text>
              </View>
              <View style={styles.rowSeftAssignment}>
                <Text style={styles.indentCustomIndentTableInformation}>
                  Disagree
                </Text>
              </View>
              <View style={styles.rowSeftAssignment}>
                <Text style={styles.indentCustomIndentTableInformation}>
                  Neither
                </Text>
                <Text style={styles.indentCustomIndentTableInformation}>
                  agree nor
                </Text>
                <Text style={styles.indentCustomIndentTableInformation}>
                  disagree
                </Text>
              </View>
              <View style={styles.rowSeftAssignment}>
                <Text style={styles.indentCustomIndentTableInformation}>
                  Agree
                </Text>
              </View>
              <View style={styles.rowSeftAssignmentFinal}>
                <Text style={styles.indentCustomIndentTableInformation}>
                  Strongly
                </Text>
                <Text style={styles.indentCustomIndentTableInformation}>
                  agree
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I am a curious person, I love asking questions
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I can express my feelings and thoughts in words,
              </Text>
              <Text style={styles.indentCustomIndentTableInformation}>
                in different languages
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I am creative and can solve critical problems
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I am willing to try new things in unfamiliar ways
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I know myself, others and the world around me
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I am honest, responsible and principled
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I love helping others and am sympathetic
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I respect the views, values and traditions of other
              </Text>
              <Text style={styles.indentCustomIndentTableInformation}>
                individuals and cultures
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I am organised and like to participate in all areas
              </Text>
              <Text style={styles.indentCustomIndentTableInformation}>
                of school life
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                I reflect on what I do and say and accept
              </Text>
              <Text style={styles.indentCustomIndentTableInformation}>
                criticism when wrong
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignment}>
              <Text style={styles.indentCustomIndentTableInformation}>
                My goals/aspirations for the future:
              </Text>
            </View>
          </View>
          <View style={styles.endingSeftAssignment}></View>
        </View>
        
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>DECLARATION FORM</Text>
          <Text style={styles.indentCustomIndentInformation}>
            (Please read carefully before signing)
          </Text>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              |
            </Text>
            <View style={styles.borderSelectParticularCustomDeclarationForm}>
            </View>
            <Text style={styles.indentCustomIndentInformation}>
              (Father/Mother/Guardian) declare and agree to
            </Text>
          </View>
          <Text style={styles.indentCustomIndentInformation}>
            abide by the following terms and conditions:
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            That the School management reserves the right to change, at anytime, any of the rules and
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            regulations of the School, including those pertaining to the admission and withdrawal of students.
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            That once my ward is selected for admission, I shall be responsible for the regular and timely
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            payment of School fees and other dues, as fixed and changed from time to time by the School. The
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            School reserves the right to strike the name of my ward off the rolls and/or stop him/her from
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            appearing for even the external examination on account of non-payment of fees and other dues on
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            time. In case I fail to do so within the mutually agreed time, the admission of my ward is liable to be
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            cancelled.
          </Text>
          <Image style={styles.imageBorderFull} src={BorderImageFull} />
          <Text style={styles.indentCustomIndentInformation}>
            That I will withdraw my ward from School if the Principal feels that his/her presence in the School is
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            detrimental to the interests of the institution in any way.
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            That the final external examination certificates of my ward will be collected from the School
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            personally by the father/mother/guardian, as the case may be, and not by any other person.
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            That I give consent to use photographs of my ward in the magazines, flyers, prospectus, advertise-
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            ments, social networking sites and other publications of the organisation. I agree to present my
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            ward at the required venues and times for the purposes. Also, I agree that these photographs will
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            be the property of the organisation and may be used by the School for the aforesaid purposes
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            even after I withdraw my ward from the school.
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            I am aware that if my ward does not attend the school for more than one month without any notice
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            and the fee is due, student's name would be deleted from the school rolls automatically.
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            That I agree to submit the Previous School Leaving Certificate or Transfer Certificate before the
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            academic session starts.
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            I agree to the school rules that no fee would be refunded once paid.
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            I hereby certify that all the information provided by us in this form is correct. I fully understand that
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            the School, on accepting the Application Form of our ward, is not in any way bound to grant admis-
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            sion. I also accept that the decision of the Principal/School regarding admission will be final and
          </Text>
          <Text style={styles.indentCustomIndentInformation}>
            binding on us. I undertake to abide by all the School Rules.
          </Text>
          <Text style={styles.indentCustomIndentInformationDate}>
            Date:
          </Text>
          <View style={styles.mainInformation}>
            <Text style={styles.textPlaceForm}>
              Place
            </Text>
            <Text style={styles.indentCustomIndentInformation}>
              Signature
            </Text>
          </View>
         
        </View>
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>DOCUMENTS TO BE SUBMITTED </Text>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                An attested photocopy of the child's birth certificate issued by the relevant
              </Text>
              <Text style={styles.indentCustomIndentTableInformation}>
                Municipal Corporation and passport copy for date of birth proof.
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Aadhar Card photocopy (in case Indian National). Passport (for NRI)
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Caste Certificate photocopy if belongs to BC/SC/ST.
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Photocopy of the present school report card or the year before report card.
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Two passport size colour photographs of the child.
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <Text style={styles.indentParaphSecondCustom}>Documents to be submitted at the time of admission: </Text>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Authentic Blood Group Report
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Original Transfer Certificate from previous school.
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <View style={styles.mainInformationCustomTableMarginTopInline}>
            <View style={styles.leftSeftAssignmentCustom}>
              <Text style={styles.indentCustomIndentTableInformation}>
                Immunization Record photocopy.
              </Text>
            </View>
            <View style={styles.checkBoxTableSelfAssignment}>
              <View style={styles.mininRectangle}></View>
            </View>
          </View>
          <Image style={styles.imageBorderFull} src={BorderImageFull} />
          <View style={styles.mainBoxSignatureDocuments}>
            <View></View>
            <View style={styles.borderBoxSignatureCustom}>
              <Text style={styles.indentCustomIndentInformation}>
                Counsellor's Signature
              </Text>
            </View>
            <View style={styles.borderBoxSignatureSecond}>
              <Text style={styles.indentCustomIndentInformation}>
                HRT Signature
              </Text>
            </View>
            <View></View>
          </View>
          <Text style={styles.mainTitle}>IMPORTANT DATES AND ADMISSION CONFIRMATION </Text>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Registration and Observation Date:
            </Text>
            <View style={styles.borderSelectParticularCustom}>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Result Date:
            </Text>
            <View style={styles.borderSelectParticularCustom}>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Due date for admission:
            </Text>
            <View style={styles.borderSelectParticularCustom}>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              (subject to admission being granted by the HOS)
            </Text>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Remarks of HOS:
            </Text>
            <View style={styles.borderSelectParticularCustom}>
            </View>
          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              Admission Granted/Not Granted:
            </Text>
            <View style={styles.borderSelectParticular}>
            </View>
          </View>
          <View style={styles.borderUnderSelectParticular}>
          </View>
          <View style={styles.mainHOSSignature}>
            <View style={styles.leftHOSSignature}>
            </View>
            <View style={styles.rightHOSSignature}>
              <View style={styles.borderHOSSSignature}>
              </View>
              <Text style={styles.indentCustomIndentInformation}>
                HOS Signature
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionTitleCustom}>
          <Text style={styles.mainTitle}>TO BE FILLED BY THE OFFICE </Text>
          <View style={styles.mainFillByOffice}>
            <Text style={styles.indentCustomIndentInformation}>
              FOR ACADEMIC SESSION:
            </Text>
            <View style={styles.borderSelectParticularCustomSecond}>
            </View>
            <Text style={styles.indentCustomIndentInformation}>
              DATE OF ADMISSION:
            </Text>
            <View style={styles.checkBoxFillByOffice}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>

          </View>
          <View style={styles.mainInformation}>
            <Text style={styles.indentCustomIndentInformation}>
              CAMPUS:
            </Text>
            <View style={styles.borderSelectParticularCustomFull}>
            </View>
          </View>
          <View style={styles.mainFillByOffice}>
            <Text style={styles.indentCustomIndentInformation}>
              SCHOOL ID NO:
            </Text>
            <View style={styles.checkBoxFillByOffice}>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
              <View style={styles.mininRectangle}></View>
            </View>
            <Text style={styles.indentCustomIndentInformationText}>
              HOUSE:
            </Text>
            <View style={styles.borderSelectParticularCustomSecond}>
            </View>
          </View>
          <View style={styles.mainFillByOffice}>
            <Text style={styles.indentCustomIndentInformation}>
              BIS SIBLINGS INFO:
            </Text>
            <View style={styles.borderSelectParticularCustomSecond}>
            </View>
            <Text style={styles.indentCustomIndentInformationText}>
              ID NO
            </Text>
            <View style={styles.borderSelectParticularCustomSecond}>
            </View>
          </View>
          <View style={styles.mainFillByOffice}>
            <Text style={styles.indentCustomIndentInformation}>
              BIS STAFF NAME:
            </Text>
            <View style={styles.borderSelectParticularCustomSecond}>
            </View>
            <Text style={styles.indentCustomIndentInformationText}>
              (in case of staff child)
            </Text>
            <Text style={styles.indentCustomIndentInformationText}>
              ID NO
            </Text>
            <View style={styles.borderSelectParticularCustomSecond}>
            </View>
          </View>
          <View style={styles.colEightRound}>
            <Image style={styles.imageEightRound} src={EightRound} />
          </View>
          <Image style={styles.imageBorderFull} src={BorderImageFull} />
        </View>
        <View style={styles.sectionTitleCustom}>
          <View style={styles.colImageBottom}>
            <Image style={styles.imageLogoBottom} src={Logo} />

          </View>
          <Text style={styles.textFirstBottomCustomFirst}>
            Address
          </Text>
          <Text style={styles.textFirstBottomCustomFirst}>
            Bloomingdale International School
          </Text>
          <View style={styles.colRowBottom}>
            <Text style={styles.textFirstBottomCustom}>
              Village Campus
            </Text>
            <Text style={styles.textSecondBottom}>
              Galileo Campus
            </Text>
          </View>
        </View>
        {/* <Image style={styles.imageBorderFull} src={BorderImageFull} />
        <Text style={styles.textFirstBottomCustomFirst}>
          Address
        </Text> */}
        {/* <View style={styles.colImageBottom}>
          <Image style={styles.imageLogoBottom} src={Logo} />
          <Text style={styles.textFirstBottomCustomFirst}>
            Address
          </Text>
        </View> */}
        {/* <Image style={styles.imageLogoBottom} src={Logo} /> */}
        {/* <View style={styles.colImageBottom}>
         <Image style={styles.imageLogoBottom} src={Logo} />
        </View>

        <View style={styles.sectionBottom}>
          <Text style={styles.textFirstBottomCustomFirst}>
            Address
          </Text>
          <Text style={styles.textFirstBottom}>
            Bloomingdale International School
          </Text>
          <View style={styles.colRowBottom}>
            <Text style={styles.textFirstBottomCustom}>
              Village Campus
            </Text>
            <Text style={styles.textSecondBottom}>
              Galileo Campus
            </Text>
          </View>
          <View style={styles.colRowBottom}>
            <Text style={styles.textFirstBottomCustom}>
              Near Benz Circle,
            </Text>
            <Text style={styles.textSecondBottom}>
              Behind Fish Ponds
            </Text>
          </View>
          <View style={styles.colRowBottom}>
            <Text style={styles.textFirstBottomCustom}>
              Municipal Employees Colony
            </Text>
            <Text style={styles.textSecondBottom}>
              Poranki
            </Text>
          </View>
        </View> */}
      </Page>
    </Document >
  );

  return (
    <div className="App">
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="movielist.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a",
        }}
      />
    </div>
  );
}

export default App;
