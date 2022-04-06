import Card from "../Card/index";
import List from "../List/index";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { useState } from "react";

const Incorporate = () => {
  const itemsNormal = {
    available: [
      {
        id: 1,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "",
        url: "https://cdn-icons-png.flaticon.com/128/7223/7223111.png",
        subtitle: "",
        updatedAt: "",
      },
      {
        id: 2,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
        title: "",
        url: "https://cdn-icons.flaticon.com/png/128/1322/premium/1322149.png?token=exp=1649257121~hmac=b677ad5d9e1504c862f57116569ddb4a",
        subtitle: "",
        updatedAt: "",
      },
      // {
      //   id: 3,
      //   uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a449",
      //   title: "",
      //   url: "https://cdn-icons.flaticon.com/png/128/2108/premium/2108625.png?token=exp=1649257225~hmac=0fc693214ce88cb18e9b19bb1c772777",
      //   subtitle: "",
      //   updatedAt: "",
      // },
      // {
      //   id: 4,
      //   uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a44",
      //   title: "",
      //   url: "https://cdn-icons.flaticon.com/png/128/2108/premium/2108625.png?token=exp=1649257225~hmac=0fc693214ce88cb18e9b19bb1c772777",
      //   subtitle: "",
      //   updatedAt: "",
      // },
      
   
      
    ],

    assigned: [
      {
        id: 8,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a454",
        title: "",
        url: "https://cdn-icons-png.flaticon.com/128/147/147258.png",
        subtitle: "",
        updatedAt: "",
      },

      {
        id: 5,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
        title: "",
        url: "https://cdn-icons.flaticon.com/png/128/1144/premium/1144709.png?token=exp=1649257278~hmac=59b710c759777c20e3afe053e2ad7bb0",
        subtitle: "",
        updatedAt: "",
      },
    ],

    assignedIcon: [
      {
        id: 4,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a456",
        title: "",
        url: "https://cdn-icons-png.flaticon.com/128/147/147258.png",
        subtitle: "",
        updatedAt: "",
      },
         
      {
        id: 6,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
        title: "",
        url: "https://cdn-icons-png.flaticon.com/128/1642/1642364.png",
        subtitle: "",
        updatedAt: "",
      },
    ],

    assignedMovableIcon: [
      {
        id: 9,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a456",
        title: "",
        url: "https://cdn-icons-png.flaticon.com/128/1086/1086741.png",
        subtitle: "",
        updatedAt: "",
      },
      {
        id: 7,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a453",
        title: "",
        url: "https://cdn-icons-png.flaticon.com/128/147/147258.png",
        subtitle: "",
        updatedAt: "",
      },
    ],
  };

  const [items, setItems] = useState(itemsNormal);

  const removeFromList = (list: any, index: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list: any, index: any, element: any) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      console.log(result);
      return;
    }
    const listCopy: any = { ...items };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setItems(listCopy);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex p-12">
          <List title="" onDragEnd={onDragEnd} name="available">
            {items.available.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id + ""} index={index}>
                {(
                  provided: DraggableProvided | any,
                  snapshot: DraggableStateSnapshot
                ) => (
                  <div>
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </List>
          <List title="" onDragEnd={onDragEnd} name="assigned">
            {items.assigned.map((item, index) => (
              <Draggable draggableId={item.uuid} index={index} key={item.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={item} />
                  </div>
                )}
              </Draggable>
            ))}
          </List>
          <List title="" onDragEnd={onDragEnd} name="assignedIcon">
            {items.assignedIcon.map((item, index) => (
              <Draggable draggableId={item.uuid} index={index} key={item.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={item} />
                  </div>
                )}
              </Draggable>
            ))}
          </List>
          <List title="" onDragEnd={onDragEnd} name="assignedMovableIcon">
            {items.assignedMovableIcon.map((item, index) => (
              <Draggable draggableId={item.uuid} index={index} key={item.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card data={item} />
                  </div>
                )}
              </Draggable>
            ))}
          </List>
        </div>
      </DragDropContext>
    </>
  );
};

export default Incorporate;
