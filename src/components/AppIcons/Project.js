import React from "react";
import Svg, { Path } from "react-native-svg";
import styles from "../../config/styles";

const SvgProject = props => <Svg width={28} height={24} viewBox="0 0 28 24" {...props}><Path fill={props.fill || styles.inactiveGreyColor} fillRule="nonzero" d="M19.44 4.908h6.46c.937 0 1.7.764 1.7 1.703v15.665c0 .939-.763 1.703-1.7 1.703H2.1c-.937 0-1.7-.764-1.7-1.703V6.611c0-.94.763-1.703 1.7-1.703h6.12V3.205A2.385 2.385 0 0 1 10.6.821h6.46c1.312 0 2.38 1.07 2.38 2.384v1.703zm-2.04 0V3.205a.345.345 0 0 0-.34-.34H10.6a.345.345 0 0 0-.34.34v1.703h7.14zm2.04 17.027h6.12V6.951h-6.12v14.984zm-2.04 0V6.951h-7.14v14.984h7.14zm-9.18 0V6.951H2.44v14.984h5.78z" /></Svg>;

export default SvgProject;