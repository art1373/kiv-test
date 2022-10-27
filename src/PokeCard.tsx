import { Button, Card, Group, Image, Text } from "@mantine/core";

interface Props {
  image: string;
  name: string;
  info: string;
  favorite: boolean;
  onAddToFavorite: () => void;
}

export function PokeCard(props: Props) {
  return (
    <div style={{ width: 340, marginBottom: 20 }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            src={props.image}
            height={340}
            style={{ objectFit: "contain" }}
          />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5 }}>
          <Text weight={500}>{props.name}</Text>
        </Group>

        <Text size="sm" style={{ lineHeight: 1.5 }}>
          {props.info}
        </Text>

        <Button
          variant="light"
          color={props.favorite ? "blue" : "red"}
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => props.onAddToFavorite()}
        >
          {props.favorite
            ? "Remove from favorite list"
            : "Add to favorite list"}
        </Button>
      </Card>
    </div>
  );
}
