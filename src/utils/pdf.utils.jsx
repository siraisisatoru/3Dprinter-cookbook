import { Document, Page, View, StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Html from "react-pdf-html";

export function PDFsnippet(props) {
    const styles = StyleSheet.create({
        page: {
            backgroundColor: "white",
            color: "black",
        },
        section: {
            margin: 20,
            padding: 10,
        },
    });

    return (
        <>
            <PDFDownloadLink
                document={
                    <Document>
                        {/*render a single page*/}
                        <Page size="A4" style={styles.page}>
                            <View style={styles.section}>
                                <Html style={{ fontSize: 10 }}>{props.htmlIP[0]}</Html>
                                <Html style={{ fontSize: 10 }}>{"<br>"}</Html>
                                <Html style={{ fontSize: 10 }}>{props.htmlIP[1]}</Html>
                                <Html style={{ fontSize: 10 }}>{"<br>"}</Html>
                                <Html style={{ fontSize: 10 }}>{props.htmlIP[2]}</Html>
                            </View>
                        </Page>
                    </Document>
                }
                fileName="Instructions.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : `Download now!`
                }
            </PDFDownloadLink>
            <PDFViewer style={styles.viewer} className="w-full h-96" showToolbar={false}>
                {/* Start of the document*/}
                <Document>
                    {/*render a single page*/}
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Html style={{ fontSize: 10 }}>{props.htmlIP[0]}</Html>
                            <Html style={{ fontSize: 10 }}>{"<br>"}</Html>
                            <Html style={{ fontSize: 10 }}>{props.htmlIP[1]}</Html>
                            <Html style={{ fontSize: 10 }}>{"<br>"}</Html>
                            <Html style={{ fontSize: 10 }}>{props.htmlIP[2]}</Html>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </>
    );
}
