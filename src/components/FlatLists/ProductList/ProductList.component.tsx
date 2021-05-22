import * as React from "react";
import { BaseFlatList } from "../BaseFlatList";
import { ProductItem } from "./ProductItem.component";
import { Screen } from "./../../../constants/Screens";
export interface ProductListProps {
  screen: Screen;
}

export function ProductList(props: ProductListProps) {
  return (
    <>
      <BaseFlatList
        data={[1, 2]}
        shouldRefresh={false}
        rowComponent={(item) => <ProductItem item={item} />}
        shouldScrollToEnd={true}
      />
    </>
  );
}
