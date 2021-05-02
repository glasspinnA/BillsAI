import * as React from "react";
import CustomTextInput from "../../Inputs/CustomTextInput";
import UserItemRow from "./UserItemRow";
import { v4 as uuidv4 } from "uuid";
import { EmptyListComponent } from "../../EmptyList/EmptyList.compnent";
import { BaseFlatList } from "../BaseFlatList";
import { UserDTO } from "../../../DTO/UserDTO";

export interface UserFlatListProps {
  users: UserDTO[];
  onUserAdded: (user: UserDTO) => void;
  onUserDeleted: (userId: string) => void;
  onUserEdited: (userId: string, income: number) => void;
}

export function UserFlatList(props: UserFlatListProps) {
  const [textInputFocus, setTextInputFocus] = React.useState(false);
  const OnUserDeleted = (userId: string) => {
    props.onUserDeleted(userId);
  };

  const OnUserAdded = (name: string) => {
    props.onUserAdded({
      id: uuidv4(),
      name: name,
      title:
        name.length > 2
          ? name.substring(0, 2).toUpperCase()
          : name.toUpperCase(),
      isSelected: true,
    } as UserDTO);
  };

  const OnUserEdited = (userId: string, income: number) => {
    props.onUserEdited(userId, income);
  };

  const RenderEmptyListComponent = () => {
    return (
      <EmptyListComponent
        title={"Nothing here"}
        text={"Add a user"}
        onPress={() => setTextInputFocus(!textInputFocus)}
      />
    );
  };

  return (
    <>
      {textInputFocus && (
        <CustomTextInput
          placeholder="Add a user"
          onSubmit={OnUserAdded}
          shoudFocus={textInputFocus}
          keyboardType="default"
        />
      )}

      <BaseFlatList
        data={props.users}
        shouldRefresh={false}
        rowComponent={(item) => (
          <UserItemRow
            item={item}
            OnDeleteItem={OnUserDeleted}
            onIncomeAdded={OnUserEdited}
          />
        )}
        emptyListComponent={RenderEmptyListComponent}
        shouldScrollToEnd={true}
        scrollEnabled={props.users.length > 0}
      />
    </>
  );
}
