import {
    useMenuButton,
    HamburgerIcon,
    MenuList,
    AddIcon,
    MenuItem,
    ExternalLinkIcon,
    RepeatIcon,
    EditIcon,
    Menu
} from '@chakra-ui/react';

export default function menu() {
    return (
        <>
            <Menu>
                <useMenuButton as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                        New Tab
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                        Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command='⌘O'>
                        Open File...
                    </MenuItem>
                </MenuList>
            </Menu>
        </>
    );
}
