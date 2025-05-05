import { Text, TextConfig } from "@jamsr-ui/text";

const Page = () => {
  return (
    <div className="">
      <TextConfig render={<h1 />} variant="h2">
        <Text>Hey text1</Text>
        <Text className="text-red-500 px-2 px-3" render={<h1 />}>
          Hey i'm a text
        </Text>
      </TextConfig>
      <h1 className="text-fuchsia-50">Hey there</h1>
    </div>
  );
};

export default Page;
