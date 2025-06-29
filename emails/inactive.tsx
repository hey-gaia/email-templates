import {
  Button,
  Container,
  Link,
  Section,
  Text,
} from "@react-email/components";
import MainLayout from "../layouts/MainLayout";

interface InactiveEmailProps {
  userName: string;
  supportEmail: string;
}

const InactiveEmail = ({ userName, supportEmail }: InactiveEmailProps) => {
  return (
    <MainLayout showFooter={false} showHeader={false}>
      <Container>
        <Section className="mb-8">
          <Text className="font-light text-medium">
            Hey {userName}, <br /> Aryan here – one of the founders of GAIA
            <br />
            <br />
            Noticed you haven't used GAIA in a bit — no worries at all, just
            wanted to check in.
            <br />
            <br />
            If it didn't do what you were expecting, or something felt off, we'd
            really appreciate hearing about it. We're building this to be
            genuinely helpful, and your feedback means a lot.
            <br />
            <br />
            You can just reply here or hit me up at
            <Link href={`mailto:${supportEmail}`} className="px-1">
              {supportEmail}
            </Link>
            . I make sure to check all my emails.
            <br />
            <br />
            Best,
            <br /> Aryan
          </Text>
          <Section className="mt-6 mb-6">
            <Button
              href="https://heygaia.io/login"
              style={{
                backgroundColor: "#00bbff",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "normal",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              Log In
            </Button>
          </Section>
        </Section>
      </Container>
    </MainLayout>
  );
};

InactiveEmail.PreviewProps = {
  userName: "Dhruv",
  supportEmail: "aryan@heygaia.io",
};

export default InactiveEmail;
