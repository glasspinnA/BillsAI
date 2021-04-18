import * as React from "react";
import CustomTextInput from "../../Inputs/CustomTextInput";
import UserItemRow from "./UserItemRow";
import { v4 as uuidv4 } from "uuid";
import { EmptyListComponent } from "../EmptyListComponent";
import { BaseFlatList } from "../BaseFlatList";
import { UserDTO } from "../../../DTO/UserDTO";

export interface UserFlatListProps {
  users: UserDTO[];
  onUserAdded: (user: UserDTO) => void;
  onUserDeleted: (userId: string) => void;
  onUserEdited: (userId: string, income: number) => void;
}

export function UserFlatList(props: UserFlatListProps) {
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
    return <EmptyListComponent title={"Noting here"} text={"Add a user"} />;
  };

  return (
    <>
      <CustomTextInput
        placeholder="Add two or more users"
        onSubmit={OnUserAdded}
      />
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
      />
    </>
  );
}
