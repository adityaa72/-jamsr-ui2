import { Card, CardContent } from "@jamsr-ui/card";
import { Tab, Tabs } from "@jamsr-ui/tabs";

export const TabsUsage = () => {
  return (
    <Tabs defaultValue="photos">
      <Tab value="photos" heading="Photos">
        <Card>
          <CardContent>
            📸 <strong>12 new photos</strong> from your weekend trip to Yosemite
            have been uploaded. Don’t forget to tag your friends and add them to
            the shared album!
          </CardContent>
        </Card>
      </Tab>
      <Tab value="music" heading="Music">
        <Card>
          <CardContent>
            🎵 You’ve got a new playlist: <em>“Lo-Fi Evenings”</em>. Featuring
            artists like Jinsang, Eevee, and Idealism. Perfect for focusing or
            unwinding.
          </CardContent>
        </Card>
      </Tab>
      <Tab value="videos" heading="Videos">
        <Card>
          <CardContent>
            🎬 Your recent video, <em>“How I Built a Web App in 7 Days”</em>,
            just hit <strong>10k views</strong> on YouTube! Check your channel
            insights for more stats.
          </CardContent>
        </Card>
      </Tab>
    </Tabs>
  );
};
