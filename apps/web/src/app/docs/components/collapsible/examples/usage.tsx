import { Card, Collapsible } from "@jamsrui/react";

export const CollapsibleUsage = () => {
  return (
    <Collapsible>
      <Card>
        <Collapsible.Trigger>
          <Card.Header>
            <Card.Title>Can I use this in my project?</Card.Title>
          </Card.Header>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Card.Content>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </Card.Content>
        </Collapsible.Content>
      </Card>
    </Collapsible>
  );
};
