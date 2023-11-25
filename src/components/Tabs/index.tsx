import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons";
import {
  TabsActiveItem,
  TabsContentContainer,
  TabsHeaderContainer,
  TabsHeaderItems,
  TabsWrapper,
} from "./styles";
import { TabsProps } from "./types";

function Tabs({ items }: TabsProps) {
  const tabsRef = useRef<HTMLButtonElement[]>([]);
  const [selected, setSelected] = useState("item1");
  const [activeSize, setActiveSize] = useState({
    height: 0,
    width: 0,
    position: 0,
  });

  const handleChangeTabs = useCallback(
    (value: string) => () => {
      setSelected(value);
    },
    [],
  );

  useEffect(() => {
    const selectedIndex = items.findIndex((item) => item.key === selected);
    if (tabsRef.current.length > 0) {
      const selectedToggle = tabsRef.current[selectedIndex];
      if (selectedToggle) {
        const width = selectedToggle.offsetWidth;
        const height = selectedToggle.offsetHeight;
        const position = selectedToggle.offsetLeft;
        setActiveSize({
          height,
          width,
          position,
        });
      }
    }
  }, [items, selected, tabsRef]);

  const selectedContent = useMemo(() => {
    const selectedIndex = items.findIndex((item) => item.key === selected);
    return items[selectedIndex].content ?? null;
  }, [items, selected]);

  return (
    <TabsWrapper>
      <TabsHeaderContainer>
        {items.map((item, index) => {
          return (
            <TabsHeaderItems
              ref={(element) => {
                tabsRef.current[index] = element as HTMLButtonElement;
              }}
              key={item.key}
              onClick={handleChangeTabs(item.key)}
            >
              <ChevronLeftIcon />
              {item.label}
              <ChevronRightIcon />
            </TabsHeaderItems>
          );
        })}
        <TabsActiveItem
          width={activeSize.width}
          height={activeSize.height}
          position={activeSize.position}
        />
      </TabsHeaderContainer>
      <TabsContentContainer>{selectedContent}</TabsContentContainer>
    </TabsWrapper>
  );
}

export default Tabs;
