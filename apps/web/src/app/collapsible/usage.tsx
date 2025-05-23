import { Card, CardContent, CardHeader, CardTitle } from "@jamsr-ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@jamsr-ui/collapsible";

export const CollapsibleUsage = () => {
  return (
    <Collapsible>
      <Card>
        <CardHeader render={<CollapsibleTrigger />}>
          <CardTitle>Can I use this in my project?</CardTitle>
        </CardHeader>
        <CollapsibleContent>
          <CardContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};
