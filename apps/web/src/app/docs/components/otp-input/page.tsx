import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { OtpInputUsage } from "./examples/usage";

const title = "Otp Input";
const description =
  "The One-Time Password (OTP) component is designed to facilitate secure, user-friendly and enhancing the user experience during multi-factor authentication.";

export const metadata: Metadata = {
  title,
  description,
};

const OtpInput = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExample isCentered title="Usage" url={resolvePath("usage.tsx")}>
        <OtpInputUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default OtpInput;
