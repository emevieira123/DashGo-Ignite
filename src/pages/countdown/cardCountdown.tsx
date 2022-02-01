import { Box, Text } from "@chakra-ui/react";

interface CardCountdownProps {
    number: number;
    titleCards: string;
}

export function CardCountdown({ number, titleCards }: CardCountdownProps) {
    return (
        <Box
            w="12rem"
            h="13rem"
            bg="gray.700"
            borderRadius={8}
            margin="1rem"
            align="center"
        >
            <Text fontSize="9rem" color="pink.500">
                {number}
            </Text>
            <Text fontSize="lg" color="gray.400">
                {titleCards}
            </Text>
        </Box>
    );
}