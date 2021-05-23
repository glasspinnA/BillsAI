import * as React from "react";
import { UserProductDTO } from "../../../DTO/UserProductDTO";
import { IconChooser } from "../../../enum/IconChooser";
import { IconButton } from "../../Buttons/IconButton";
import { Counter } from "../../Counter/Counter.component";
import { CustomIcon } from "../../Icons/CustomIcon";
import { ItemRowTextContainer } from "../../Texts/ItemRowTextContainer";
import { Paragraph } from "../../Texts/Paragraph/Paragraph.component";
import { ItemContainer } from "../ItemContainer.component";

export interface ProductItemProps {
  item: UserProductDTO;
  onCounterChanged?: (productId: number, amount: number) => void;
  onDeletePressed: (productId: number) => void;
}

export function ProductItem(props: ProductItemProps) {
  const [count, setCount] = React.useState(1);
  const OnCountChange = (isIncrease: boolean) => {
    if (props.onCounterChanged == undefined) return;
    const amount = isIncrease ? count + 1 : count - 1;
    setCount(amount);
    props.onCounterChanged(props.item.productId, amount);
  };

  return (
    <ItemContainer>
      <ItemRowTextContainer
        headerText={props.item.name}
        subText={props.item.createdDate?.toLocaleDateString()}
        subIcon={IconChooser.CALENDAR}
      />
      <Paragraph style={{ flex: 0.3, alignSelf: "center" }}>
        {CustomIcon(IconChooser.FOOD_CHICKEN)} x {props.item.amount}
      </Paragraph>
      {props.onCounterChanged && props.item && (
        <Counter count={count} onCountChange={OnCountChange} />
      )}
      <IconButton
        onPress={() => props.onDeletePressed(props.item.productId)}
        icon={IconChooser.REMOVE}
      />
    </ItemContainer>
  );
}
