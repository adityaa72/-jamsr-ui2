import { Card as CardRoot } from "./card";
import { CardConfig, useCardConfig } from "./card-config";
import { CardContent } from "./card-content";
import { CardDescription } from "./card-description";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardTitle } from "./card-title";

export {
  CardConfig,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  useCardConfig
};

export const Card = Object.assign(CardRoot, {
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
});
