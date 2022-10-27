import { Button, Card, createStyles, Group, Image, Text } from "@mantine/core";

interface Props {
  image: string;
  name: string;
  info: string;
  favorite: boolean;
  isLoading: boolean;
  onAddToFavorite: () => void;
}

export const PokeCard: React.FC<Props> = ({
  favorite,
  image,
  info,
  name,
  onAddToFavorite,
  isLoading,
}) => {
  const { classes } = useStyles();
  return (
    <div className={classes.cardContainer}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} height={340} className={classes.image} />
        </Card.Section>

        <Group position="apart" className={classes.group}>
          <Text weight={500}>{name}</Text>
        </Group>

        <Text size="sm" className={classes.text}>
          {info}
        </Text>

        <Button
          variant="light"
          color={favorite ? "blue" : "red"}
          fullWidth
          disabled={isLoading}
          className={classes.button}
          onClick={() => onAddToFavorite()}
        >
          {favorite ? "Remove from favorite list" : "Add to favorite list"}
        </Button>
      </Card>
    </div>
  );
};

const useStyles = createStyles(() => ({
  button: {
    marginTop: 14,
  },
  text: { lineHeight: 1.5 },
  group: { marginBottom: 5 },
  cardContainer: {
    width: 340,
    marginBottom: 20,
  },
  image: { objectFit: "contain" },
}));
