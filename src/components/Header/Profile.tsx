import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex>
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Emerson Vieira</Text>
                <Text color="gray.300" fontSize="smal">
                    emevieira@gmail.com
                </Text>
            </Box>
            )}

            <Avatar size="md" name="Emerson Vieira" src="https://github.com/emevieira123.png" />
        </Flex>
    );
}