import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatformId?: number;
  onSelectedPlatforms: (platform: Platform | null) => void;
}

const PlatformsSelector = ({
  selectedPlatformId,
  onSelectedPlatforms,
}: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(
    (platform) => selectedPlatformId === platform.id
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatforms(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsSelector;
