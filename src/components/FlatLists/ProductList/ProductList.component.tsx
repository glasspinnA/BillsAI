import * as React from "react";
import { BaseFlatList } from "../BaseFlatList";
import { ProductItem } from "./ProductItem.component";
export interface ProductListProps {}

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
