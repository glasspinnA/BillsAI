import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export interface BarcodeScannerProps {
  onBarcodeScanned: (type: any, data: any) => void;
}

export function BarcodeScanner(props: BarcodeScannerProps) {
  const [hasPermission, setHasPermission] = useState<boolean | undefined>(
    undefined
  );
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    props.onBarcodeScanned(type, data);
  };

  return (
    <>
      {hasPermission === undefined && (
        <Text>Requesting for camera permission</Text>
      )}
      {!hasPermission && <Text>No access to camera</Text>}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )} */}
    </>
  );
}
