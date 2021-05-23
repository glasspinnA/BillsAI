import * as React from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface AppProps {
  bottomSheetRef: any;
  onAnimate?: (fromIndex: number, toIndex: number) => void;
  hideHandler?: boolean;
}

export const BottomSheetContainer: React.FC<AppProps> = (props) => {
  const snapPoints = React.useMemo(
    () => (props.hideHandler ? [0, "25%"] : [-1, 70]),
    []
  );
  return (
    <BottomSheet
      ref={props.bottomSheetRef}
      index={props.hideHandler ? 0 : 1}
      snapPoints={snapPoints}
      onAnimate={props.onAnimate}
    >
      {props.children}
    </BottomSheet>
  );
};
